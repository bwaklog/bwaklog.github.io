fresh:
	@echo "\nCleaning up the project...\n"
	@rm -rf anna
	@echo "Cloning latest from acmpesuecc/anna...\n"
	git clone --progress --verbose https://github.com/acmpesuecc/anna.git
	@echo "Removing template files...\n"
	@rm -rf anna/site/content/ anna/site/static/ anna/site/layout/{config.yml, tag-subpage.html, tags.html, page.html, posts.html, partials/}
	@echo "Copying personal styles, content and layout into anna...\n"
	@cp -r site/{content,static,layout} anna/site/
	@echo "\nUse 'make serve' to build and serve site\n(Change flags in your make file if needed)"
	@echo "\nNow use anna wisely you must.\nAnna is ready to go 🍚\n"
	@echo "\nNow serve files from anna/site/rendered)"
	@

host:
	@echo "\nCloning latest from git and getting stuff ready..\n"
	@make fresh
	@echo "\nBuilding site and getting rendered directory to an accessable point...\n"
	@cd anna; go build; ./anna
	@echo "\nMoving rendered site to /rendered\n"
	@cp -r anna/site/rendered ./rendered

host_build:
	@echo "\nBuilding site and getting rendered directory to an accessable point...\n"
	@cd anna; go build; ./anna
	@echo "\nMoving rendered site to /rendered\n"
	@cp -r anna/site/rendered ./rendered

host_clean:
	@echo "\nCleaning up the rendered directory...\n"
	@rm -rf rendered

update:
	# check if branch is uptodate with origin
	@echo "\nChecking if branch is up-to-date with origin..."
	@cd anna; git pull origin
	@make personal

personal:
	@echo "\nRemoving template files...\n"
	@rm -rf anna/site/content/ anna/site/static/ anna/site/layout/{config.yml, tag-subpage.html, tags.html, page.html, posts.html, partials/}
	@echo "Copying personal styles, content and layout into anna...\n"
	@cp -r site/{content,static,layout} anna/site/


serve:
	@aport=$2
	@echo "\nBuilding and serving site at default port 8000\n"
	@cd anna; go build; ./anna -s

clean:
	@echo "\nCleaning up the project...\n"
	@rm -rf anna
