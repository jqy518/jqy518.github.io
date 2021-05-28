function moveXY(wrapId) {
    let iMax=4;
    let oWrap=document.getElementById(wrapId);
    oWrap.querySelectorAll('.bg-object').forEach((item)=>{
        item.startX=parseInt(getStyle(item,'left'))
        item.startY=parseInt(getStyle(item,'top'))
    })
    oWrap.onmousemove=function(ev){
    ev=ev||window.event;
    let child = oWrap.querySelector('.active')
    //获取鼠标的位置与大盒子中心点位置的距离
    var iX=ev.clientX-(oWrap.offsetLeft+this.offsetWidth/2)
    var iY=ev.clientY-(oWrap.offsetTop+this.offsetHeight/2)
    //Zindex越大移动的相对距离越小
    var iDisL=-parseInt(iX/15)
    var iDisT=-parseInt(iY/15)
    //图片的距离等于原先的距离加上计算的距离
    child.style.left=child.startX+iDisL+'px'
    child.style.top=child.startY+iDisT+'px'
}
}
function getStyle(obj,attr){
 if(obj.currentStyle){
 return obj.currentStyle[attr]; 
 }
 return getComputedStyle(obj)[attr]; 
}

//网站
var webSwiper = new Swiper ('#website', {
    direction : 'vertical',
    pagination: {
	   el:'.swiper-pagination',
    },
    mousewheel: true,
    on:{
	  init: function(){
        swiperAnimateCache(this);
        swiperAnimate(this);
 	  },
    slideChangeTransitionEnd: function(){
  	    swiperAnimate(this);
      }
    }
  })   


//banner

var bannerSwiper = new Swiper('#banner', {
	mousewheel: true,
	effect: 'coverflow',
	speed: 300,
	watchSlidesProgress: true,
	on: {
		touchMove: function() {
			progress = this.progress
			for (i = 0; i < this.slides.length; i++) {
				slideProgress = this.slides[i].progress
				if (Math.abs(slideProgress) < 1) {
					thumbSwiper[i].setTranslate(thumbSwiper[i].width * (Math.abs(slideProgress) - 1))
				}
			}
		},
		init: function(){
				swiperAnimateCache(this);
				swiperAnimate(this);
		},
		slideChangeTransitionEnd: function(){
				swiperAnimate(this);
			},
		transitionStart: function() {
			activeIndex = this.activeIndex
			for (i = 0; i < thumbSwiper.length; i++) {
				if (i == activeIndex) {
					thumbSwiper[i].slideTo(1);
				} else {
					thumbSwiper[i].slideTo(0);
				}
			}
		},
	}
});
var thumbSwiper = new Swiper('.thumb', {
	watchSlidesProgress: true,
	effect: 'cube',
	touchRatio: 0,
	cubeEffect: {
		shadow: false,
	}
});
$('.thumb').mouseover(function() {
	bannerSwiper.slideTo($(this).index());
})
$(document).ready(function() {
    //moveXY('banner-box');
    $('#menu-box').click(function() {
        $(this).toggleClass('active');
    });

});

//网站
var tesheSwiper = new Swiper ('#teshe-box', {
	direction : 'vertical',
	on:{
	init: function(){
			swiperAnimateCache(this);
			swiperAnimate(this);
	 },
	slideChangeTransitionEnd: function(){
			swiperAnimate(this);
		}
	}
})  
$('.nav-box').mouseover(function() {
	$('.nav-box').removeClass('active')
	$(this).addClass('active')
	tesheSwiper.slideTo($(this).index());
})