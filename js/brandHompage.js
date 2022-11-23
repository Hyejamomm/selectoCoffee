$(document).ready(function(){


    //화면의 높이 구하기
    let hg = $( document ).outerHeight(true);
    console.log(hg)

    // 메인화면 자동 - 오른쪽으로
    setInterval(function(){
        $('.main-img-box').animate({'margin-left':'-100%'},3000,function(){
            $('.main-img-box a').first().appendTo('.main-img-box');
            $('.main-img-box').css({'margin-left':'0px'});
        })
    },8000)

    // 메인화면 자동 - 왼쪽으로
    // setInterval(function(){
    //     $('.main-img-box').animate({'margin-left':'0px'},1000,function(){
    //         $('.main-img-box a').last().prependTo('.main-img-box');
    //         $('.main-img-box').css({'margin-left':'-100%'});
    //     })
    // },5000)



    // 오늘 하루 창 열지 않기
    $('.link-box-content:nth-of-type(1)').children('button').on('click',function(){
        $('.link-box-content:nth-of-type(1)').css({'opacity':'0'})
    })
    $('.link-box-content:nth-of-type(2)').children('button').on('click',function(){
        $('.link-box-content:nth-of-type(2)').css({'opacity':'0'})
    })




    // 숫자 이동? 자동
    setInterval(function(){
        $('.move-box').animate({'margin-left':'-100%'},10000,'linear',function(){
            $('.move-text').first().appendTo('.move-box');
            $('.move-box').css({'margin-left':'0px'});
        })
    })









    //도네이션 숫자 올라가는거 - 첫번째 span
    let number1 = 55;
    count1 = setInterval(function(){
        $('.pack-number h1').children('span:nth-of-type(1)').text(number1);
        number1+=8;
        if (number1>=276) {
            $('.number1').text(276);
            clearInterval(count1)}
    },10)

    //도네이션 숫자 올라가는거 - 첫번째 span
    let number2 = 55;
    count2 = setInterval(function(){
        $('.pack-number h1').children('span:nth-of-type(3)').text(number2);
        number2+=8;
        if (number2>=422) {
            $('.pack-number h1').children('span:nth-of-type(3)').text(422);
            clearInterval(count2)}
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

    $('.ul-menu a').on('mouseenter',function(){
        $('nav').stop().animate({'height':'400px'})
        $('.icon-box').children('button').css({'color':'#FF4713','border':'1px solid #FF4713','background-color':'#fff'})
    })
    $('nav').on('mouseleave',function(){
        $('nav').stop().animate({'height':'100px'})
        $('.icon-box').children('button').css({'color':'#fff','border':'none','background-color':'#FF4713'})
    })







    // $('.show-menu').children('ul').on('mouseenter',function(){
    //     $('nav').slideDown();
    //     $('.icon-box').children('button').css({'color':'#FF4713','border':'1px solid #FF4713','background-color':'#fff'})
    // })
    // $('nav').on('mouseleave',function(){
    //     $(this).slideUp();
    //     $('.icon-box').children('button').css({'color':'#fff','border':'none','background-color':'#FF4713'})
    // })



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



    //top 버튼 눌렀을때 스무스하게 올라가기
    $('.f-circle-box').on('click',function(){
        window.scrollTo({top : 0 , behavior : 'smooth'})
    })




    //네브바 올라가기??
    // window.scrollTo({top : 100 },function(){
    //     $('.show-menu').css({'display':'none'})
    // })
    var lastScrollTop = 0, delta = 15;
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        if(Math.abs(lastScrollTop - scrollTop) <= delta) // 스크롤 값을 받아서 ~
        return; // ~ 리턴

        if ((scrollTop > lastScrollTop) && (lastScrollTop>0)) {
        	/* 화면에 나오지 않을 때, top값은 요소가 보이지 않을 정도로 사용해야함 */
            $(".show-menu").slideUp(300);
        } else {
            $(".show-menu").slideDown(300);
        }
        lastScrollTop = scrollTop;
    })









    
})