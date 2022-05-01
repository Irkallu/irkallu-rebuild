---
layout: 'layouts/post.html'
pagination:
  data: posts.data
  size: 1
  alias: post
permalink: "/archives/{{ post.slug }}/"
  
eleventyComputed:
  title: "{{ post.title }}"
---
