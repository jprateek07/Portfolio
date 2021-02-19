function Circlle(el) {
  $(el).circleProgress({
      fill: {
        color: '#ff5c5c'
      },
      size: 100,
    })
    .on('circle-animation-progress', function (event, progress, stepValue) {
      $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2) + '%');
    });
};
Circlle('.round');
$('#myCarousel').on('slide.bs.carousel', function onSlide(ev) {
  var id = ev.relatedTarget.id;
  if ($('div.effect').hasClass(id)) {
    document.getElementsByClassName(id)[0].style.animation = "ClientPopUp 2s infinite"
    setTimeout(function () {
      document.getElementsByClassName(id)[0].style.animation = "PopUpEffect 4s infinite"
    }, 2000);
  }

})