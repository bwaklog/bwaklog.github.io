cd ../ssg/
cp static/prism.css ../bwaklog.github.io/static
rm -rf content/ static layout/{config.yml,partials/footer.html,posts.html}
cp -r ../bwaklog.github.io/{static,content,layout} ./
go run .
cp -r rendered ../bwaklog.github.io/
rm -rf content/ static/ layout/
git reset --hard HEAD
cd ../bwaklog.github.io/
