# Explainers

Each markdown file in this folder becomes a footnote-style popover.

Use this front matter:

```yaml
---
slug: short-id
title: Optional internal title
---
```

Then reference it from `index.md` with:

```html
<span class="fn-ref" data-explainer="short-id">inline text</span>
```

The body supports markdown links, bullets, bold text, and paragraphs.
