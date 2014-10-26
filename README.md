# myMarriage - Static Site with Ruby on Heroku/Cedar using a [Rack](http://rack.rubyforge.org/) app.

The project is organised like this:

```
- myMarriage
  |- assets
  	|- scss
  	|- views
      |- partials
  |- public
    |- css
    |- images
    |- js
    |- pages
  |- config.ru
  |- Gemfile
```

1. `$ bundle install`
1. `$ npm install`
1. build: `$ gulp`  watch: `$ gulp watch`
1. `$ rackup` localhost:9292