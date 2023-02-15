var btn=document.querySelector(".menu_btn");
btn.addEventListener("click",function () {
var menu=document.querySelector(".menu");
var menu_btn=document.querySelector(".menu_btn");
menu.classList.toggle("active");
menu_btn.classList.toggle("active");
});

var list=document.querySelectorAll(".menu ul li");
for(var i =0 ; i<list.length;i++){
  list[i].addEventListener("click" ,function () {
    var menu=document.querySelector(".menu");
    var menu_btn=document.querySelector(".menu_btn");
 menu.classList.remove("active");
 menu_btn.classList.remove("active");
  })
}

window.addEventListener("scroll",function(){
  var header=document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY >50 );
});



  $(document).ready(function () {
  
        $('.bck').backToTop({
            
              trigger : 300
            
            });
        
         
                


    $(".list-item").click(function () {
        let value = $(this).attr("data-filter");
        if (value == 'all') {
            $(".list-box").show("600");
        }
        else {
            $(".list-box").not("." + value).hide("600");
            $(".list-box").filter("." + value).show("600");
        }

    })
    $(".list-item").click(function () {

        $(this).addClass("active").siblings().removeClass("active");

    })

 

    $(".owl-carousel").owlCarousel({
        loop: true,
        animateOut: "slideOutDown",
        animateIn: "flipInX",
        margin: 30,
        stagePadding: 30,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
      });

      // $(function() {
      //   $('#navigation').navpoints({
      //       speed: 1000,
      //       offset: 70,
      //       currentClass:'active',
      //       updateHash:true,
      //       classToParent:true,

      //     });
        
      //   });
      $(document).ready(function(){
        $('.scrollspy').scrollSpy();
      });
      
            
        

});