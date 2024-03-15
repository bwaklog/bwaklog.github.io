# How to use this build of anna

1. Use this template to create a new repo. I recomend you to head over to [anna docs](https://ssg-test-org.github.io) and follow the folder structure there. For more flexibility with the layout you are free include the templates within the `site/layouts` dir of your site. You must ensure that your Makefile script also takes this into account. If you see my current setup, thats exactly what its doing.

How it should look if you have your own layout templates:

```bash
	@rm -rf anna/site/content/ anna/site/static/ anna/site/layout/{config.yml, tag-subpage.html, tags.html, page.html, partials/}
	@cp -r site/{content,static,layout} anna/site/
```

If you are ready to use the default layout templates, make sure to remove `anna/site/layout/{...any of the templates}` from your Makefile. But ensure that you dont end up removing the `config.yml` file as that is different for each site. So your Makefile lines would be modified in such a manner.
```bash
	@rm -rf anna/site/content/ anna/site/static/ 
	@cp -r site/{content,static,layout} anna/site/
```

You finally need to end up with a directory structure looking somewhat like this

```text
site
├── content - outside posts dir lies your pages
│   ├── about.md
│   ├── index.md
│   └── posts
│       └── post markdown files 
├── layout 
│   ├── config.yml
│   └── any of your custom layout templates
└── static
    ├── ...
    ├── fonts
    │   └── your fonts can go here...
    ├── scripts
    │   └──    light.js
    └── style.css
```

2. Now that you have your repository all setup. Now its time to actually build the site. The makefile has the 3 possible processes it can execute
    - `make fresh` : deltes the pre-existing `anna` dir and clones the lates repo 
    - `make serve` : builds the site and serves it to `localhost:8000` by default 
    - `make clean` : deletes the `anna` dir
