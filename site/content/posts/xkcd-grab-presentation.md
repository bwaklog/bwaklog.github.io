---
date: 2023-12-09
title: My first HSP talk
draft: false
type: post
description: My presentation in the 2023 HSP Project Expo. xkcd-grab demonstration, fuzzy searchinig, web scraping and more.
tags:
    - hsp
    - python
    - talks
    - cli
    - blog
    - tech
---

# My first HSP talk

Aditya Hegde

12th Dec 2023

<br/>

I recently got the oppourtunity to take part in the project expo hosted by the club HSP part of PESU ECity campus. As part of this expo, I presented one of my on going projects [xkcd-grab](http://github.com/bwaklog/xkcd-grab) infront of an amazing crowd.

So lets get to the actual part of the blog, what this presentation was all about

![why did i make this slide](https://i.imgur.com/j4xVBvR.jpg)

This relatively small project is somewhat of a playground for me to explore different searching algorithms and querying techniques. While this might have a niche target, I want to build this tool into a more robust API client. The roadmap of this current is to make a smart cli tool to find the most relevant comic based on a search query.

The CLI itself is a minimal working tool I wrote with python. Besides using the api, i've created several extra features that completely changed original idea of the app. This project begun in 2021, during my college entrance preparations. It started off as a basic API tool that worked with the xkcd api to fetch a comic based on a derised number. Looked cool at the time but was still pretty clunky. Why would you want to search something based on a number. Thats horrible

![whatsapp chats](https://i.imgur.com/Gzhcsps.jpg)

Well, the cli tool couldn't do that initially. This is when decided to implement some cool way you can interact with the cli, and find the comic right from your terminal.

<br/>

## Fuzzy finding with levenshtine distance

Once i've got my hands on all the data needed, now was the time that I find a way to give the user the queried comic. My goal was to retrieve a comic based on a string, probably a mini description and use vector searching to find the most relevant comic. Seems good on paper, problem was the data. The api didn't provide any sort of description for over 1000+ comics. And with the limited time of 3 days, along with hours of college work, this approach wasnt feasible. The only way I could scrape out data would be using and OCR. The images of these comics have far better insignt about whats happening thatn the description...mostly because there was nothing available. I will bring this up in a bit while talking about the little easter egg feature.

<br/>

Now the only other option would be to use the titles of the comic. What the task was now is to achieve the best string approximation and provide the user with the 10 best matches. Levenshtein distance out of all the options was the simplest to implement given the time. Thing is I couldn't get this to work with an implementation that I craeted from defnition of the method to determine the levenshtine ratio. While getting the distance was a simple formula. Finding the ratio of kept me stuck for a while. It worked just fine, but the results didn't seem to align with premade modules that are supposed to do the same thing. While my results for the ratio were somewhat right, they were off by around 0.2 to 0.3. Turns out, the way fuzzywuzzy calculates the ratio is by using a slightly modified version of this formula. 

<br/>

By definition, if `l` is the Levenshtein distance, and `m` is the length of the longest of the two words, the ratio is given by `1-(l/m)`. However in the modified version, the sum of the lengths of the words were used for getting the value.  

```python
def Levi_ratio(a: str, b: str) -> int:
    d = levi_distance(a, b)
    l = len(a) + len(b)
    return 1 - (d/l)
```

...to be continued

*Aditya Hegde*
