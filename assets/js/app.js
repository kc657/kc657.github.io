// sanity check
console.log("app.js linked.");
$(document).ready(function() {
  //all jquery event listeners will go here
  // $(window).on('scroll', function scrolling(){
  // $('body').append("<p>asdfljal;skdf</p>")
  // });

  $("a").hover(function() {
    $(this).toggleClass("toplinks_hover");
  });

});
