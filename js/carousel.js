json0 = {"width": '530px', 'height': '100px', 'left': '-530px', 'top': '85px'};
json1 = {"width": '530px', 'height': '224px', 'left': 0, 'top': '23px'};
json2 = {"width": '640px', 'height': '270px', 'left': '275px', 'top': 0};
json3 = {"width": '530px', 'height': '224px', 'left': '660px', 'top': '23px'};
json4 = {"width": '530px', 'height': '100px', 'left': '1190px', 'top': '85px'};
var flag = false;
var index = 0;
var num = $(".carousel .imgbox ul li").length;
var speed = 500;
var timer = setInterval(rightBtnClick, 3000);
$(".carousel").mouseenter(function(){
	clearInterval(timer);
});
$(".carousel").mouseleave(function(){
	timer = setInterval(rightBtnClick, 3000);
});
$(".rightBtn").click(rightBtnClick);
function rightBtnClick(){
	if(!$(".carousel .imgbox li").is(":animated")){
		if(index < num - 1){
			index ++;
		}else{
			index = 0;
		}
		$(".carousel .navbox ul li").eq(index).addClass("selected").siblings().removeClass("selected");
		$(".no1").animate(json0,speed);
		$(".no2").animate(json1,speed);
		$(".no3").animate(json2,speed);
		$(".no4").animate(json3,speed);
		$(".no0").attr("class","waiting");
		$(".no1").attr("class","no0");
		$(".no2").attr("class","no1");
		$(".no3").attr("class","no2");
		$(".no4").attr("class","no3");
		if($(".no3").next().length != 0){
			$(".no3").next().css(json4).attr("class","no4");
		}else{
			$(".carousel .imgbox li:first").css(json4).attr("class","no4"); 
		}
	}
}
$(".leftBtn").click(function(){
	if(!$(".carousel .imgbox li").is(":animated")){
		if(index > 0){
			index --;
		}else{
			index = num - 1;
		}
		$(".carousel .navbox ul li").eq(index).addClass("selected").siblings().removeClass("selected");
		$(".no3").animate(json4,speed);
		$(".no2").animate(json3,speed);
		$(".no1").animate(json2,speed);
		$(".no0").animate(json1,speed);
		$(".no4").attr("class","waiting");
		$(".no3").attr("class","no4");
		$(".no2").attr("class","no3");
		$(".no1").attr("class","no2");
		$(".no0").attr("class","no1");
		if($(".no1").prev().length != 0){
			$(".no1").prev().css(json0).attr("class","no0");
		}else{
			$(".carousel .imgbox li:last").css(json0).attr("class","no0");
		}
	}
});
$(".carousel .navbox ul li").click(function(){
	if(!$(".carousel .imgbox ul li").is(":animated")){
		flag = true;
		speed = 10;
		var clickIndex = $(this).index();
		var count = clickIndex - index;
		if(clickIndex > index){
			for(var i = 0; i < count; i++){
				$(".rightBtn").trigger("click");
			}
		}else{
			for(var i = 0; i < -count; i++){
				$(".leftBtn").trigger("click");
			}
		}
		flag = false;
		speed = 500;
	}
});