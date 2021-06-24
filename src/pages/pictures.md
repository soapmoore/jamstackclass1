---
pageTitle: Apples
navTitle: Pictures
singleImage: /img/apples.png
images:
  - apples.png
  - apples-red.png
  - apples-group.png
pageClass: pictures
---

## Markdown, single image:

![alt info goes here]( {{ singleImage }})

## HTML, single image:

<img src="{{ singleImage }}" alt="info goes here" style="transform: scale(50%) rotate(20deg);" />

## Markdown for loop:

{% for filename in images %}
![alt info goes here](/img/{{ filename }})
{% endfor %}

## Liquid for loop:

{% for filename in images %}
<img src="/img/{{ filename }}" alt="A nice picture of apples." />
{% endfor %}

[Home](/)
