---
date: 2024-03-08
title: Dotfiles
draft: false
type: post
description: Here are some things I cant live without
previewimage: https://i.imgur.com/TR4Dkq4.jpg 
tags:
    - blog
---

8th Mar 2024 | Aditya Hegde

*Updated*: 9th Mar 2024

<br/>

I've never had my self working on solely the terminal before. It would be only a few ocassions when the GUI alternative was simply frustrating to use. I've since foced myself to try and venture more, and now I simply can't work without them. I have even lost count for the number of times i've used vim motions accidently.

At first, yes these things were a bit intriguing, but once u leave the learning curve, everything just falls in place. 

![xkcd 1168 tar](https://imgs.xkcd.com/comics/tar_2x.png)

## My Most Used terminal tools

- *Text Editor*: [nvim](https://neovim.io/) as my primary config with [packer](https://github.com/wbthomason/packer.nvim)
    - honorable mention to [zed](https://zed.dev/), which has been amazing
- *Shell*: [zsh](https://en.wikipedia.org/wiki/Z_shell) Z-Shell as my default shell with [oh-my-zsh](https://ohmyz.sh/) and [powerlevel10k](https://github.com/romkatv/powerlevel10k)
- *WM*: [Amethyst](https://github.com/ianyh/Amethyst) as my Window Manager
- [tmux](https://github.com/tmux/tmux/wiki) as my Terminal Multiplexer


```bash
❯ history | awk '{print $2}' | sort | uniq -c | sort -nr | head

 821 git
 436 nvim
 406 cd
 361 go
 350 ls
 349 la
 271 ./ssg
 256 clear
 199 make
  81 tmux
```
(ps) I recently cleared my `zsh_history` and as you can see, i struggle with git a lot 😅

![Imgur](https://i.imgur.com/TR4Dkq4.jpg)

## Extras

This is something i just pulled out of reddit recently and would love to share it. Thanks to [u/77ilham77](https://reddit.com/u/77ilham77), there is a way to move windows without the title bar and I absolutely love it. It's just a simple command and viola you are read

```bash
defaults write -g NSWindowShouldDragOnGesture -bool true 
```
