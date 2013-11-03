$(function() {

    var getPeople = function(access_token) {
        $.ajax({
          type: "GET",
          //the url where you want to sent the userName and password to
          url: 'https://graph.facebook.com/355909651212384/attending?access_token=' +access_token,
          dataType: 'json',
          async: false,
          success: function (data) {
            var names = data.data;
            $("#participants").text(names.length + 14);
            $.each(names, function (i, item) {
              var person = '<li>' + '<img src="http://graph.facebook.com/' +item.id+ '/picture"><span>' +item.name+ '</span></li>'
              $('#people').append(person);
              
            });
          },
          error: function(req, status, er) {
            alert("ERROR: "+ req.responseText);
          }
        });
      }

    getPeople("212262562287769|e794e5c8e96bf53a750b8324520c3407");

});

