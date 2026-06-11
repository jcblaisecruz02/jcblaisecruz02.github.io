(function () {
  function openLinksInNewTabs(root) {
    Array.prototype.slice.call(root.querySelectorAll("a[href]")).forEach(function (link) {
      if (link.protocol === "mailto:" || link.protocol === "tel:") return;
      link.setAttribute("target", "_blank");

      var rel = link.getAttribute("rel") || "";
      var parts = rel.split(/\s+/).filter(Boolean);
      if (parts.indexOf("noreferrer") === -1) parts.push("noreferrer");
      link.setAttribute("rel", parts.join(" "));
    });
  }

  window.openLinksInNewTabs = openLinksInNewTabs;
  openLinksInNewTabs(document);
})();

(function () {
  var refs = Array.prototype.slice.call(document.querySelectorAll(".fn-ref[data-note], .fn-ref[data-note-id], .fn-ref[data-explainer]"));
  var activeRef = null;
  var activePopover = null;

  function getTemplateContent(ref) {
    var explainerId = ref.getAttribute("data-explainer");
    var templateId = explainerId ? "fn-" + explainerId : ref.getAttribute("data-note-id");
    var template = templateId ? document.getElementById(templateId) : null;

    if (template) return template.innerHTML;
    return ref.getAttribute("data-note") || "";
  }

  function hidePopover() {
    if (!activeRef || !activePopover) return;

    activeRef.classList.remove("is-active");
    activeRef.setAttribute("aria-expanded", "false");
    activePopover.classList.remove("is-visible", "is-above");
    activePopover.setAttribute("aria-hidden", "true");
    activePopover.hidden = true;
    activeRef = null;
    activePopover = null;
  }

  function getAnchorRect(ref) {
    var anchorX = ref.getAttribute("data-anchor-x");
    var anchorY = ref.getAttribute("data-anchor-y");
    if (anchorX !== null || anchorY !== null) {
      var refRect = ref.getBoundingClientRect();
      var xPercent = anchorX === null ? 50 : parseFloat(anchorX);
      var yPercent = anchorY === null ? 50 : parseFloat(anchorY);
      var pointX = refRect.left + refRect.width * xPercent / 100;
      var pointY = refRect.top + refRect.height * yPercent / 100;

      return {
        left: pointX,
        right: pointX,
        top: pointY,
        bottom: pointY,
        width: 0,
        height: 0
      };
    }

    var num = ref.querySelector(".fn-num");
    var anchor = num || ref;
    var rect = anchor.getBoundingClientRect();

    if (!rect.width && !rect.height && anchor !== ref) {
      return ref.getBoundingClientRect();
    }

    return rect;
  }

  function positionPopover() {
    if (!activePopover || !activeRef || activePopover.hidden) return;

    var rect = getAnchorRect(activeRef);
    var width = Math.min(320, window.innerWidth - 32);
    var edge = 16;
    var gap = 10;

    activePopover.style.width = width + "px";
    activePopover.classList.remove("is-above");

    var left = rect.left + rect.width / 2 - width / 2;
    var minLeft = edge;
    var maxLeft = window.innerWidth - width - edge;
    left = Math.max(minLeft, Math.min(left, maxLeft));

    var height = activePopover.offsetHeight;
    var belowTop = rect.bottom + gap;
    var aboveTop = rect.top - height - gap;
    var spaceBelow = window.innerHeight - rect.bottom - edge;
    var spaceAbove = rect.top - edge;
    var placeAbove = spaceBelow < height + gap && spaceAbove > spaceBelow;
    var newsBox = document.querySelector(".news-box");

    if (!placeAbove && newsBox) {
      var newsRect = newsBox.getBoundingClientRect();
      var wouldCoverNews = rect.bottom <= newsRect.top && belowTop + height > newsRect.top - 12;
      if (wouldCoverNews && aboveTop >= edge) placeAbove = true;
    }

    var top = placeAbove ? aboveTop : belowTop;
    top = Math.max(edge, Math.min(top, window.innerHeight - height - edge));

    activePopover.classList.toggle("is-above", placeAbove);
    activePopover.style.left = left + "px";
    activePopover.style.top = top + "px";
  }

  function showPopover(ref) {
    var box = ref._fnPopover;
    if (!box) return;

    if (activeRef && activeRef !== ref) hidePopover();

    activeRef = ref;
    activePopover = box;
    ref.classList.add("is-active");
    ref.setAttribute("aria-expanded", "true");
    box.hidden = false;
    box.setAttribute("aria-hidden", "false");
    positionPopover();
    box.classList.add("is-visible");
  }

  refs.forEach(function (ref, index) {
    var isNativeButton = ref.tagName.toLowerCase() === "button";
    var refId = ref.id || "fn-ref-" + (index + 1);
    var popoverId = "fn-popover-" + (index + 1);
    var box = document.createElement("div");

    ref.id = refId;
    if (!isNativeButton) {
      ref.setAttribute("role", "button");
      ref.setAttribute("tabindex", "0");
    }
    ref.setAttribute("aria-expanded", "false");
    ref.setAttribute("aria-controls", popoverId);

    if (!ref.hasAttribute("data-no-number")) {
      var num = document.createElement("sup");
      num.className = "fn-num";
      num.textContent = String(index + 1);
      ref.appendChild(num);
    }

    box.id = popoverId;
    box.className = "fn-popover footnote-popover";
    box.setAttribute("role", "note");
    box.setAttribute("aria-labelledby", refId);
    box.setAttribute("aria-hidden", "true");
    box.hidden = true;
    box.innerHTML = getTemplateContent(ref);
    ref.insertAdjacentElement("afterend", box);
    ref._fnPopover = box;

    if (window.openLinksInNewTabs) window.openLinksInNewTabs(box);

    ref.addEventListener("click", function (event) {
      event.stopPropagation();
      if (activeRef === ref) {
        hidePopover();
      } else {
        showPopover(ref);
      }
    });

    ref.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        if (activeRef === ref) {
          hidePopover();
        } else {
          showPopover(ref);
        }
      }
    });
  });

  document.addEventListener("click", function (event) {
    if (!activePopover || !activeRef) return;
    if (activePopover.contains(event.target) || activeRef.contains(event.target)) return;
    hidePopover();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") hidePopover();
  });

  window.addEventListener("resize", positionPopover);
  window.addEventListener("scroll", positionPopover, { passive: true });
})();

(function () {
  var toggles = Array.prototype.slice.call(document.querySelectorAll(".news-toggle"));

  toggles.forEach(function (button) {
    var item = button.closest(".news-item");
    var content = item && item.querySelector(".news-content");
    if (!item || !content) return;

    button.addEventListener("click", function () {
      var isOpen = item.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
      content.setAttribute("aria-hidden", String(!isOpen));
    });
  });
})();
