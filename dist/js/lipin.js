$.ajax({tyoe:"get",url:"json/lipin.json",async:!0,dataType:"json",success:function(s){for(var n in s)$("<li/>").html("<p>"+s[n].title+"</p><img src='"+s[n].img+"'/><span>"+s[n].jia+"</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>"+s[n].gs+"</span>").appendTo($("#uls"))},error:function(s){console.log("失败")}}),$("#shhai").mouseenter(function(){$("#dizhi").css("display","block"),$("#shhai").css("background","#fff")}).mouseleave(function(){$("#dizhi").css("display","none"),$("#shhai").css("background","#ccc")}),$("#dizhi").mouseenter(function(){$("#dizhi").css("display","block"),$(".dizhi1").css("display","block"),$("#shhai").css("background","#fff")}).mouseleave(function(){$("#dizhi").css("display","none"),$("#shhai").css("background","#ccc")}),$(".guogao").mouseenter(function(){$(".guogao").css("background","#fff"),$(".gong").css("display","block")}).mouseleave(function(){$(".guogao").css("background","#ccc"),$(".gong").css("display","none")}),$(".gong").mouseenter(function(){$(".gong").css("display","block")}).mouseleave(function(){$(".guogao").css("background","#ccc"),$(".gong").css("display","none")}),$("#shg").mouseenter(function(){$("#shg").css("background","#fff"),$(".shouji").css("display","block")}).mouseleave(function(){$("#shg").css("background","#ccc"),$(".shouji").css("display","none")}),$(".shouji").mouseenter(function(){$("#shg").css("background","#fff"),$(".shouji").css("display","block")}).mouseleave(function(){$(".shouji").css("display","none"),$("#shg").css("background","#ccc")}),$(".ce").click(function(){$(document).scrollTop(0)});