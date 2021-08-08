let activeBlock = $(".active").attr('id');

function changeClass() {
  $("#"+activeBlock).addClass("active");
  $("#"+activeBlock+"A").addClass("nav-bottom-border");
  $("#"+activeBlock+"Nav").removeClass("inv");
}


$(".navitem").click(function(event){

  let block = event.currentTarget.id;
  $(this).trigger("mouseleave");

  if(activeBlock != block) {
  $("#"+activeBlock).removeClass("active");
  $("#"+activeBlock+"A").removeClass("nav-bottom-border");
  $("#"+activeBlock+"Nav").addClass("inv");

  activeBlock = block;
  changeClass();

}
$(this).trigger("mouseenter");
});

$(".navitem").hover(function(){
  let block =  event.currentTarget.id;

   if(block == activeBlock) {
     $("#"+block+"A").removeClass("nav-bottom-border");
     $("#"+block).addClass("nav-bottom-border hoverChange");
   } else {
     $("#"+block).addClass("hoverChange");
   }
}, function(){
  let block =  event.currentTarget.id;

   if(block == activeBlock) {
     $("#"+block+"A").addClass("nav-bottom-border");
     $("#"+block).removeClass("nav-bottom-border hoverChange");
   } else {
     $("#"+block).removeClass("hoverChange");
   }
});
