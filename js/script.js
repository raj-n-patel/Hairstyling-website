$(document).ready(function(){
        $(window).scroll(function(){
            if(this.scrollY > 20){
                $('.navbar').addClass("sticky");
            }else{
                $('.navbar').removeClass("sticky");
            }  
    });

   // typing animation script
   var typed = new Typed(".typing", {
    strings: ["Beautiful", "Gorgeous", "Confident"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
  

    
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});





