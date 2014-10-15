# My Marriage - Static Sites with Ruby on Heroku/Cedar
# using a [Rack](http://rack.rubyforge.org/) app.

Folder should be organized like this:

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
In `config.ru` file add the following:

```ruby
use Rack::Static,
  :urls => ["/images", "/js", "css"],
  :root => "public"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/index.html', File::RDONLY)
  ]
}
```

first of all:
`$ bundle install`

get packages for gulp
`$ npm install`

watch scss:
`$ gulp watch`

run the server:
`$ rackup`

This assumes that your template uses relative references to the images and stylesheets. Go ahead and deploy the app. If you are not sure how to deploy to Heroku check out the [quickstart guide](https://devcenter.heroku.com/articles/quickstart).

