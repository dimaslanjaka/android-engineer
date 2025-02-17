source "https://rubygems.org"
# ruby RUBY_VERSION

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem "jekyll" #, "~> 3.8.5"
gem "bundler"

# timezone
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo"
  gem "tzinfo-data"
  # Performance-booster for watching directories on Windows
  gem "wdm", "~> 0.1.0"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data
# gem and associated library.
# platforms :mingw, :x64_mingw, :mswin, :jruby do
#   gem "tzinfo", "~> 1.2"
#   gem "tzinfo-data"
# end
# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
# gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# This is the default theme for new Jekyll sites. You may change this to anything you like.
# gem "minima"

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins

# If you have any plugins, put them here!
group :jekyll_plugins do
  # gem "html-pipeline", "2.14.3"
  gem "jekyll-minifier"
  gem "jekyll-coffeescript"
  gem "jekyll-commonmark-ghpages"
  gem "jekyll-feed"
  gem "jekyll-gist"
  gem "jekyll-paginate"
  gem "jekyll-redirect-from"
  gem "jekyll-seo-tag", git: "https://github.com/dimaslanjaka/jekyll-seo-tag.git"
  gem "jekyll-sitemap"
  gem "jekyll-avatar"
  gem "jemoji"
  gem "jekyll-mentions"
  gem "jekyll-relative-links"
  gem "jekyll-optional-front-matter"
  gem "jekyll-readme-index"
  gem "jekyll-default-layout"
  gem "jekyll-titles-from-headings"
  gem "jekyll-include-cache"
  gem "jekyll-octicons"
  gem "jekyll-remote-theme"
end

if ENV['GITHUB_ACTIONS']
  platforms :ruby do
    gem "jekyll-github-metadata", :group => :jekyll_plugins
  end
end

# bundler
gem 'nokogiri'
gem 'rack', '~> 2.2.4'
gem 'rspec'
gem "webrick", "~> 1.8"

gem 'solargraph', group: :development