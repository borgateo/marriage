use Rack::Deflater
use Rack::Static,
  :urls => ["/images", "/js", "/css"],
  :root => "public"


map "/" do
  run lambda { |env|
  [
    200, 
    {
      'Content-Type'  => 'text/html', 
      'Cache-Control' => 'public, max-age=86400' 
    },
    File.open('public/pages/index.html', File::RDONLY)
  ]
}
end


map "/dettagli" do
  run lambda { |env|
  [
    200, 
    {
      'Content-Type'  => 'text/html', 
      'Cache-Control' => 'public, max-age=86400' 
    },
    File.open('public/pages/dettagli.html', File::RDONLY)
  ]
}
end

map "/lista-nozze" do
  run lambda { |env|
  [
    200, 
    {
      'Content-Type'  => 'text/html', 
      'Cache-Control' => 'public, max-age=86400' 
    },
    File.open('public/pages/lista-nozze.html', File::RDONLY)
  ]
}
end

map "/rsvp" do
  run lambda { |env|
  [
    200, 
    {
      'Content-Type'  => 'text/html', 
      'Cache-Control' => 'public, max-age=86400' 
    },
    File.open('public/pages/rsvp.html', File::RDONLY)
  ]
}
end

map "/video" do
  run lambda { |env|
  [
    200, 
    {
      'Content-Type'  => 'text/html', 
      'Cache-Control' => 'public, max-age=86400' 
    },
    File.open('public/pages/video.html', File::RDONLY)
  ]
}
end
