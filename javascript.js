$(document).ready(function(){
    var $menu = $('.quick li a'),
    $contents = $('.anchor_area .anchor_div')
    $(window).scroll(function(){
    var scltop = $(window).scrollTop();
    $.each($contents, function(idx, item){
    var $target   = $contents.eq(idx),
    i = $target.index(),
    targetTop = $target.offset().top;
    if (targetTop <= scltop) {
    $menu.removeClass('on');
    $menu.eq(idx).addClass('on');
    }
    if (!(200 <= scltop)) {
    $menu.removeClass('on');
    }
    })
    });
   /* 탭 클릭 */
    $('.quick li a').on('click',function(){
    var anchorId = $(this).attr('data-anchor');
    // 스크롤 이동
    scroll_to_anchor_tab(anchorId);
    });
   // 퀵배너 스크롤
    $(window).scroll(function(){
    var quickPos = $('.quick_pos').offset().top;
    var winPos = $(window).scrollTop();
    if( winPos > quickPos ) $('.quick_pos .quick').addClass('fixed');
    else $('.quick_pos .quick').removeClass('fixed');
    });
    });
    // 탭 이동 - 부드러운 스크롤
    function scroll_to_anchor_tab(anchor_id,speed) {
    if( !speed ) var speed = 'slow';
    var a_tag = $("#"+anchor_id);
    if(a_tag.length > 0){
    $('html, body').animate({
    scrollTop: a_tag.offset().top - $('').height() -  $('').height() // 상단에 특정 위치를 제외하고 스크롤할때 해당 이름 작성
    }, speed);
    }
    }