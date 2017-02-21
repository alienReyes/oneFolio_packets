var jsonPath='js/'+jFile;
$(document).ready(function() {

    $.getJSON(jsonPath, function(data) {
        var template = document.getElementById('thumbTemplate').innerHTML;
        $.each(data.videos, function(i, item) {
            var html = Mustache.to_html(template, item);
            $('#thumbsContainer').append(html);
            $( ".thumbElement" ).fadeIn(158)
            $( ".thumbElement" ).click(function(e) {
              e.stopPropagation();
              e.preventDefault();
                $('#rowVideo').show(100);
                showVideo($(this).data("video"))

        });
        });
          $("html").css("height","100%");
          $("body").css("height","100%")

    });

    $('#rowVideo').hide();
    function showVideo(srcvideo) {
      var videoSource= srcvideo+".html";
      console.log(videoSource+"<<<<<<")
      $('#videoContainer').attr("src",videoSource);
      $("html").css("height","150%");
      $("body").css("height","150%");
    }



});
