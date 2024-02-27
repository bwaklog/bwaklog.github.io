---
date: 09-12-2023
title: Xkcd Grab Presentation
draft: false
---

# XKCD Cli, Fuzzy Matching and Web Scraping

I recently got the oppourtunity to take part in the project expo hosted by the club HSP part of PESU ECity campus. As part of this expo, I presented one of my on going projects [xkcd-grab](http://github.com/bwaklog/xkcd-grab) infront of an amazing crowd.

So lets get to the actual part of the blog, what this presentation was all about

![why did i make this slide](https://i.imgur.com/j4xVBvR.jpg)

This relatively small project is somewhat of a playground for me to explore different searching algorithms and querying techniques. While this might have a niche target, I want to build this tool into a more robust API client. The roadmap of this current is to make a smart cli tool to find the most relevant comic based on a search query.

The CLI itself is a minimal working tool I wrote with python. Besides using the api, i've created several extra features that completely changed original idea of the app. This project begun in 2021, during my college entrance preparations. It started off as a basic API tool that worked with the xkcd api to fetch a comic based on a derised number. Looked cool at the time but was still pretty clunky. Why would you want to search something _based on a number_. Thats horrible

![whatsapp chats](https://i.imgur.com/Gzhcsps.jpg) 

Well, the cli tool couldn't do that _initially_. This is when decided to implement some cool way you can interact with the cli, and find the comic right from your terminal.