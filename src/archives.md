---
title: 'Guild archives'
heroText: "Guild archives"
layout: 'layouts/archive'
pagination:
  data: posts
  size: 100
  alias: posts
  permalink: '/archives/'
---

{%- for post in posts -%}
    ## {{ post.title }}
{%- endfor -%}