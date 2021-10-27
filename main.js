$(document).ready(function() {
    $('#gnb>li').hover(function() {
        $('.submenu',this).stop().slideDown();
    },function() {
        $('.submenu',this).stop().slideUp();
    });
 
 
    var idx=0;
 
    var scnt = $('#slide>a').length - 1;
 
    slide();
 
 
     function slide(){
         ms = setInterval(function() {
             $('#slide>a').eq(idx).animate({left: '-100%'},800).animate({left: '100%'},0);
             idx == scnt? idx =0:idx++;
             $('#slide>a').eq(idx).animate({left: 0},800);
         },3500);
     }
 
    $('#slide').hover(function() {
         clearInterval(ms);
    }, function() {
         slide();
    });
 
    $(window).scroll(function() {
        var dist = $(this).scrollTop();
        if(dist >= 500){
            $('.gotop').fadeIn();
        }else{
            $('.gotop').hide();
        }
    });
    $('#pop').click(function() {
        $('#popup').fadeIn();
    });

    $('#close').click(function() {
        $('#popup').hide();
    });
    $('#pop1').click(function() {
        $('#popup1').fadeIn();
    });

    $('#close1').click(function() {
        $('#popup1').hide();
    });
    $('#pop2').click(function() {
        $('#popup2').fadeIn();
    });

    $('#close2').click(function() {
        $('#popup2').hide();
    });
 });
 function backgroundAnimation(){
    const colors = ["#ffd94a", "#fff"];

    const num = 20;
    const elementArr = [];

    for (let i = 0; i < num; i++) {
      let element = document.createElement("div");
      element.classList.add("ball");
      element.style.background = colors[Math.floor(Math.random() * colors.length)];
      element.style.left = `${Math.floor(Math.random() * 100)}vw`;
      element.style.top = `${Math.floor(Math.random() * 100)}vh`;
      element.style.transform = `scale(${Math.random()})`;
      element.style.width = `${Math.random()}em`;
      element.style.height = element.style.width;

      elementArr.push(element);
      document.body.append(element);
    }

    
    elementArr.forEach((el, i, ra) => {
      let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12
      };

      let anim = el.animate(
        [
          { transform: "translate(0, 0)" },
          { transform: `translate(${to.x}rem, ${to.y}rem)` }
        ],
        {
          duration: (Math.random() + 1) * 2000,
          direction: "alternate",
          fill: "both",
          iterations: Infinity,
          easing: "ease-in-out"
        }
      );
    });
}