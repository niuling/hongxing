$(function(){
    var cArr=["p6","p5","p4","p3","p2","p1"];
    var index=0;
    //上一张
    function previmg(){
        cArr.unshift(cArr[5]);
        cArr.pop();
        //i是元素的索引，从0开始
        //e为当前处理的元素
        //each循环，当前处理的元素移除所有的class，然后添加数组索引i的class
        $(".list li").each(function(i,e){
            $(e).removeClass().addClass(cArr[i]);
        })
        index--;
        if (index<0) {
            index=5;
        }
    }
    //下一张
    function nextimg(){
        cArr.push(cArr[0]);
        cArr.shift();
        $(".list li").each(function(i,e){
            $(e).removeClass().addClass(cArr[i]);
        })
        index++;
        if (index>5) {
            index=0;
        }
    
    }
    //点击class为p2的元素触发上一张照片的函数
    $(document).on("click",".p2",function(){
        previmg();
        return false;//返回一个false值，让a标签不跳转
    });
    //点击class为p4的元素触发下一张照片的函数
    $(document).on("click",".p4",function(){
        nextimg();
        return false;
    });
    //			鼠标移入box时清除定时器
    $(".maright").mouseover(function(){
        clearInterval(timer);
    })
    //			鼠标移出box时开始定时器
    $(".maright").mouseleave(function(){
        timer=setInterval(nextimg,4000);
    })
    //			进入页面自动开始定时器
    timer=setInterval(nextimg,4000);
    //header
    $(".headnav").click(function(){
    if($(".mobnav").css("display")=="none"){
        $(".showlist").css("display","none");
        $(".closelist").css("display","block");
        $(".mobnav").slideToggle(600);
    }else{
        $(".showlist").css("display","block");
        $(".closelist").css("display","none");
        $(".mobnav").slideToggle(600);
    }
  })

})

  //返回顶部
$('.return_top').click(function() {
    $('body,html').animate({
        'scrollTop': 0
    }, 500);
});
$(window).scroll(function() {
    var _top = $(window).scrollTop();
    if (_top < 100) {
        $('.return_top').stop().slideUp(0);
    } else {
        $('.return_top').stop().slideDown(0);
    }
});


