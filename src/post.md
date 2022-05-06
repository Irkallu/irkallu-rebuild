---
layout: 'layouts/post.html'
pagination:
  data: posts.data
  size: 1
  alias: post
permalink: "/archives/{{ post.slug }}/"
  
eleventyComputed:
  title: "{{ post.title }}"
  summary: "{{ post.meta_description }}"
  featuredImage: "{{ post.featured_image }}"
---
