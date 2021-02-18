// $('.counter-count').each(function () {
//         $(this).prop('Counter',0).animate({
//             Counter: $(this).text()
//         }, {
//             duration: 5000,
//             easing: 'swing',
//             step: function (now) {
//                 $(this).text(Math.ceil(now));
//             }
//         });
//     });
// function Circlle(el){
//     $(el).circleProgress({fill:{color:'#ff5c5c'}})
//     .on('circle-animation-progress',function(event,progress,stepValue){
//         $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2)+'%')
//     });
// }
// Circlle('.round');
function Circlle(el){
    $(el).circleProgress({fill: {color: '#ff5c5c'}})
      .on('circle-animation-progress', function(event, progress, stepValue){
                      $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2)+'%');
              });  
  };
  Circlle('.round');