$(document).ready(function(){

    $('.main-left').children('a').on('mouseenter',function(){
        $('.round').stop().addClass('active')
    })
    $('.main-left').children('a').on('mouseleave',function(){
        $('.round').stop().removeClass('active')
    })

    $('.main-right').children('a').on('mouseenter',function(){
        $('.circle2').stop().addClass('active')
    })
    $('.main-right').children('a').on('mouseleave',function(){
        $('.circle2').stop().removeClass('active')
    })    














})