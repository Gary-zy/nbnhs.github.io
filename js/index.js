$(function(){
	$(".p1").mouseover(function(){		
		$(".tepe_qh1").fadeIn().siblings().hide()
		
	})
	$(".p2").mouseover(function(){
		$(".tepe_qh2").fadeIn().siblings().hide()
		
	})
	
	$(".fc").click(function(){
		$(".fuceng").css("display","block")
	})
	$(".fuceng").click(function(){
		$(".fuceng").css("display","none")
	})
	
	$(".right_dw").hover(function(){
		$(this).stop().animate({"right":"0"},500)
	},function(){
		$(this).stop().animate({"right":"-35px"},500)
	})	
	$(document).scroll(function(){
		var i=$(document).scrollTop()
		
		if ($(document).scrollTop()>1200) {
			$(".gd_db").css("display","block")		
		} else{
			$(".gd_db").css("display","none")
		}
	}).trigger("scroll")
	$(".gd_db").click(function(){
		$(document).scrollTop(0)
	})
	
	
	$(".uls li").click(function(){
			var qccc=$(this).index()
		$(this).addClass("dianji").siblings().removeClass("dianji").parent().parent().siblings().children().eq(qccc).fadeIn().siblings().hide()
		
	})
	
	$(".rtx ul li").click(function(){
			var qcc=$(this).index()
		$(this).parent().siblings().children().eq(qcc).fadeIn().siblings().hide()
		
	})
	$(".nr2 ul li").click(function(){
			var qec=$(this).index()
		$(this).addClass("xuanzong").siblings().removeClass("xuanzong").parent().siblings().children().eq(qec).fadeIn().siblings().hide()
		
	})
	
	$(".xz_an ul li").click(function(){
		var qece=$(this).index()
		$(this).parent().parent().siblings().children().eq(qece).show().siblings().hide()
	})
	
	$(".top_right ul li a").click(function(){
		$(this).addClass("cxin").siblings().removeClass("cxin")
	})
	
	
	$(".xiaoxingerweima").mouseover(function(){
		$(".erweima").show()	
	})
	
	$(".xiaoxingerweima").mouseout(function(){
		$(".erweima").hide()
	})
	
	$(".box-radiso span").click(function(){
		$(".box-radiso  em").css("border","6px solid #005AE5")
		$(".span1").hide()
	})
	new WOW().init();
})