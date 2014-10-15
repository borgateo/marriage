# My Marriage - Static Sites with Ruby on Heroku/Cedar using a [Rack](http://rack.rubyforge.org/) app.

Project organised like this:

```
- MySite
  |- config.ru
  |- Gemfile
  |- public
    |- index.html
    |- images
    |- js
    |- css
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
