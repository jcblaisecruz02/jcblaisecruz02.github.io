---
layout: default
title: Home
---

{% assign portrait_src = "/assets/img/profile_transparent.png" %}
{% assign news_items = site.news | sort: "date" | reverse %}

{% for explainer in site.explainers %}
  <template id="fn-{{ explainer.slug }}">{{ explainer.content | markdownify }}</template>
{% endfor %}

<section class="home" aria-label="Blaise Cruz homepage">
  <article class="bio">
    <p class="kicker">Mabuhay!</p>

    <p class="lead">
      I'm a PhD student at <a href="https://mbzuai.ac.ae" target="_blank" rel="noreferrer">MBZUAI</a> supervised by <a href="https://afaji.github.io" target="_blank" rel="noreferrer">Dr. Alham Fikri Aji</a>, working at the intersection of lexical semantics and multilinguality. My thesis centers on multilingual models that 
      <span class="fn-ref" data-explainer="anchor-senses">
        anchor on word senses
      </span> 
      as 
      <span class="fn-ref" data-explainer="cross-lingual">
        canonical cross-lingual representations
      </span>.
    </p>

    <p class="lead">
      My broader interests span <span class="fn-ref" data-explainer="translation">translation</span>, <span class="fn-ref" data-explainer="low-resource">low-resource languages</span>, <span class="fn-ref" data-explainer="benchmarking">benchmarking</span>, and <span class="fn-ref" data-explainer="code-switching">code-switching</span>. These interests led me to co-found <a href="https://seacrowd.org/" target="_blank" rel="noreferrer">SEACrowd</a> and <a href="https://www.sigsea.org/" target="_blank" rel="noreferrer">ACL SIGSEA</a> with close collaborators in Southeast Asian NLP.
    </p>

    <p class="lead">
      Prior to my PhD, I was Lead Research Engineer at <a href="https://research.samsung.com" target="_blank" rel="noreferrer">Samsung Research</a> where I headed teams working on dialogue systems used by 5M+ customers worldwide. Further previous affiliations include <a href="https://mila.quebec" target="_blank" rel="noreferrer">Mila</a>, <a href="https://mcgill-nlp.github.io/" target="_blank" rel="noreferrer">McGill University</a>, and <span class="fn-ref" data-explainer="more">more</span>.
    </p>

    <section class="news-box" aria-labelledby="news-title">
      <div class="news-heading">
        <p id="news-title">News</p>
      </div>

      <ol class="news-list">
        {% for item in news_items limit: 3 %}
          <li class="news-item">
            <time datetime="{{ item.date | date_to_xmlschema }}">{{ item.date | date: "%b %-d, %Y" }}</time>
            <button class="news-toggle" type="button" aria-expanded="false" aria-controls="news-content-{{ forloop.index }}">
              <span class="news-title">{{ item.title }}</span>
            </button>
            <div class="news-content" id="news-content-{{ forloop.index }}" aria-hidden="true">
              <div class="news-content-inner">
                {{ item.content | markdownify }}
              </div>
            </div>
          </li>
        {% endfor %}
      </ol>
    </section>

    <p class="copyright">© 2026 Blaise Cruz</p>
  </article>

  <aside class="profile-stack" aria-label="Blaise Cruz profile">
    <div class="profile-header">
      <h1 class="profile-name">Blaise Cruz</h1>

      <nav class="social-links" aria-label="Social links">
        <a href="mailto:me@blaisecruz.com" aria-label="Email" title="Email">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4.75 6.5h14.5v11H4.75z"></path>
            <path d="m5.25 7 6.75 5.25L18.75 7"></path>
          </svg>
        </a>
        <a href="https://github.com/jcblaisecruz02" aria-label="GitHub" title="GitHub" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2.9a9.15 9.15 0 0 0-2.9 17.83c.46.08.63-.2.63-.44v-1.6c-2.56.56-3.1-1.1-3.1-1.1-.42-1.07-1.02-1.35-1.02-1.35-.84-.57.06-.56.06-.56.92.07 1.4.95 1.4.95.82 1.4 2.16 1 2.68.76.08-.6.32-1 .58-1.23-2.05-.23-4.2-1.02-4.2-4.55 0-1 .36-1.83.95-2.48-.1-.23-.41-1.17.09-2.44 0 0 .77-.25 2.53.95A8.8 8.8 0 0 1 12 7.34c.78 0 1.56.1 2.3.3 1.75-1.2 2.52-.95 2.52-.95.5 1.27.18 2.21.09 2.44.6.65.95 1.48.95 2.48 0 3.54-2.16 4.31-4.21 4.54.33.29.62.84.62 1.7v2.44c0 .24.17.52.64.44A9.15 9.15 0 0 0 12 2.9Z"></path>
          </svg>
        </a>
        <a href="https://scholar.google.com/citations?hl=en&user=AP-w5x8AAAAJ&view_op=list_works&sortby=pubdate" aria-label="Google Scholar" title="Google Scholar" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3.2 3.2 8.1 12 13l8.8-4.9z"></path>
            <path d="M6.75 11.1v4.25c1.42 1.55 3.1 2.32 5.25 2.32s3.83-.77 5.25-2.32V11.1"></path>
            <path d="M20.8 8.1v6.2"></path>
          </svg>
        </a>
        <a href="https://www.instagram.com/jcblaisecruz02/" aria-label="Instagram" title="Instagram" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="5" y="5" width="14" height="14" rx="4"></rect>
            <circle cx="12" cy="12" r="3.15"></circle>
            <path d="M16.4 7.7h.01"></path>
          </svg>
        </a>
        <a href="https://x.com/jcblaisecruz" aria-label="X" title="X" target="_blank" rel="noreferrer">
          <svg class="icon-fill" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.964 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117Z"></path>
          </svg>
        </a>
      </nav>
    </div>

    <figure class="seated-photo">
      <img src="{{ portrait_src | relative_url }}" alt="Blaise Cruz seated with a camera">
      <button class="photo-trigger fn-ref" type="button" data-explainer="photography" data-no-number="true" data-anchor-x="52" data-anchor-y="35" aria-label="Photography portfolio"></button>
    </figure>
  </aside>
</section>
