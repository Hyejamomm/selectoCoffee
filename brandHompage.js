$(document).ready(function(){

    let roll = 1;
    // 메인화면 자동
    setInterval(function(){
        if(roll>2){roll = 1;}
        roll++
        $('.main-img>a:nth-of-type(1)').children('img').attr({'src':'./셀렉토이미지/main-img'+roll+'.jpg'})
    },3000)

    //도네이션 숫자 올라가는거
    let number = 55555;
    count = setInterval(function(){
        $('.pack-number').children('h1').text(number);
        number+=1502;
        if (number>=276422) {
            $('.pack-number').children('h1').text(276422);
            clearInterval(count)}
    },10)

    // 도네이션 자동 - 큰이미지
    let donation = 1;
    setInterval(function(){
        if(donation==1){
            $('.main-img2').children('img:nth-of-type(2)').fadeIn();
            donation=2;
        } else {
            $('.main-img2').children('img:nth-of-type(2)').fadeOut();
            donation=1;
        }
    },3000)

    // 도네이션 자동 - 작은이미지
    let donation2 = 1;
    setInterval(function(){
        if(donation2==1){
            $('.serve-img').children('img:nth-of-type(2)').fadeIn();
            donation2=2;
        } else {
            $('.serve-img').children('img:nth-of-type(2)').fadeOut();
            donation2=1;
        }
    },3000)


    // nav를 hover하면 발생되는 이벤트들
    $('.show-menu').children('ul').on('mouseenter',function(){
        $('nav').slideDown();
        $('.icon-box').children('button').css({'color':'#FF4713','border':'1px solid #FF4713','background-color':'#fff'})
    })
    $('nav').on('mouseleave',function(){
        $(this).slideUp();
        $('.icon-box').children('button').css({'color':'#fff','border':'none','background-color':'#FF4713'})
    })

    // scroll로 nav 없애기
    window.onscroll = scrollF();
    function scrollF() {
        if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.querySelector('.show-menu').style.top = '0px';
        }else {
            document.querySelector('.show-menu').style.top = '0px';
        }
    }



    // news events hover 
    $('.news-event-right-box a').on('mouseenter',function(){
        let me = $(this).index(); //0,1,2
        $(this).children('.n-e-right-hover-img').stop().fadeIn(200);
    })
    $('.news-event-right-box a').on('mouseleave',function(){
        let me = $(this).index(); //0,1,2
        $(this).children('.n-e-right-hover-img').stop().fadeOut(200);
    })











    
})