//循环滚动
var area = document.getElementById('con1');
var ul1 = document.getElementById('ul1');

var ul2 = document.getElementById('ul2');

ul2.innerHTML = ul1.innerHTML;
function scrollUp() {
	if (area.scrollTop >= con1.offsetHeight) {
		area.scrollTop = 0;
	}else{
		area.scrollTop++;
	}
}
var time = 50;
var myScroll = setInterval('scrollUp()' , time);//内置函数，这句为赋值
area.onmouseover = function () {
	clearInterval(myScroll);
};
area.onmouseout = function(){
	myScroll = setInterval('scrollUp()' , time);
};

//间歇性滚动
 // var area = document.getElementById('con1');
 // var iliHeight = 24;//单行滚动的高度
 // var speed = 50;//滚动的速度
 // var time;
 // var delay= 2000;
 // area.scrollTop=0;
 // area.innerHTML+=area.innerHTML;//克隆一份一样的内容
 // function startScroll(){
	//  time=setInterval("scrollUp()",speed);
	//  area.scrollTop++;
	//  }
 // function scrollUp(){
	//  if(area.scrollTop % iliHeight==0){
	// 	 clearInterval(time);
	// 	 setTimeout(startScroll,delay);
	// 	 }else{
	// 		 area.scrollTop++;
	// 		 if(area.scrollTop >= area.scrollHeight/2){
	// 			 area.scrollTop =0;
	// 			 }
	// 		 }
	//  }
	//  setTimeout(startScroll,delay)
