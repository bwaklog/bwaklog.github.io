@echo "\nDeleting old build and replace with fresh clone\n"
rm -rf anna
git clone --progress https://github.com/acmpesuecc/anna.git
@rm -rf anna/site/content/ anna/site/static/ anna/site/layout/{config.yml, tag-subpage.html, tags.html, page.html, posts.html, partials/}
@echo "\nBuilding anna\n"
@cp -r site/* anna/site/
@cd anna
go build
./anna
