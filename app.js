function initFlipbook() {
  const width = Math.min(window.innerWidth * 0.9, 800);
  const height = width * 0.66;

  $('#flipbook').turn({
    width: width,
    height: height,
    autoCenter: true,
    when: {
      turned: function (event, page) {
        const audioSrc = $("#flipbook .page").eq(page - 1).data("audio");
        const narrador = document.getElementById("narrador");
        if (audioSrc) {
          narrador.src = audioSrc;
          narrador.play();
        } else {
          narrador.pause();
        }
      }
    }
  });
}

$(document).ready(function () {
  initFlipbook();
  $(window).on("resize", function () {
    $('#flipbook').turn('destroy').html($('#flipbook').html());
    initFlipbook();
  });
});
