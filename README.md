# My Marriage - Static Sites with Ruby on Heroku/Cedar using a [Rack](http://rack.rubyforge.org/) app.

Project organised like this:

```
- Marriage
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

- first of all:
`$ bundle install`

- get packages for gulp
`$ npm install`

- build the stylesheets:
`$ gulp`
- or watch it:
`$ gulp watch`

- run the server:
`$ rackup`
