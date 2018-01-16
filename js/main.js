

$(document).ready(function(){
  $('#newquote').click(function(){

    getRandomQuote();
  });
});

function getRandomQuote() {
  var color = ['#F64747','#663399','#4183D7','#22313F','#9A12B3','#03A678'];
  var index = color[Math.floor(Math.random()*color.length)];
  $.ajax({
  url: 'https://talaikis.com/api/quotes/random/',
  type: 'GET',
  dataType: 'json',
  success: function(data) {
    // alert(JSON.stringify(data));
    $('.quote #data').html(data.quote);
    $('.quote h4').html('- ' + data.author)
    $('body').fadeIn().css('background-color', index);
    $('.col').fadeIn('slow').css('background-color', index);
    $('#newquote').css('color', 'white');
    $('.color').css('color', index);
     $('#twitter').attr('href',"https://twitter.com/intent/tweet?text="+data.quote+" "+data.author);
  },
  error: function(err) {
    $('.quote #data').html("Oops something went wrong.");
  }
});
}
