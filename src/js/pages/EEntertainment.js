(function () {
	function EEntertainment () {
		this.initDom();
	}

	EEntertainment.prototype.initDom = function () {
		this.notice=new Notice({date:'2016-09-05',content:'这是一个测试公告',hasBtn:true});
		var noticeDom=this.notice.getDom();
		var topLeftModule='<div class="left top-left-module">'+
													'<p class="head-img"><img src="../img/cj.jpg"/></p>'+
													'<div class="left-list"><div class="marqueen"><ul>'+
														'<li>'+
															'<p>百万幸运球</p><p>112321321321</p>'+
														'</li>'+
														'<li>'+
															'<p>百万幸运球</p><p>112321321321</p>'+
														'</li>'+
														'<li>'+
															'<p>百万幸运球</p><p>112321321321</p>'+
														'</li>'+
														'<li>'+
															'<p>百万幸运球</p><p>112321321321</p>'+
														'</li>'+
														'<li>'+
															'<p>百万幸运球</p><p>112321321321</p>'+
														'</li>'+
														'<li>'+
															'<p>百万幸运球</p><p>112321321321</p>'+
														'</li>'+
														'<li>'+
															'<p>百万幸运球</p><p>112321321321</p>'+
														'</li>'+
														'<li>'+
															'<p>百万幸运球</p><p>112321321321</p>'+
														'</li>'+
														'<li>'+
															'<p>百万幸运球</p><p>112321321321</p>'+
														'</li>'+
														'<li>'+
															'<p>百万幸运球</p><p>112321321321</p>'+
														'</li>'+
														'<li>'+
															'<p>百万幸运球</p><p>112321321321</p>'+
														'</li>'+
													'</ul>'+
											  '</div></div></div>';
	  var topBannerModule='<div class="middle-banner">' +
													'<div class="slider">'+
														'<ul>' +
															'<li><img src="../img/eGame-banner.jpg"></li>' +
															'<li><img src="../img/eGame-banner.jpg"></li>' +
															'<li><img src="../img/eGame-banner.jpg"></li>' +
														'</ul>' +
													'</div>' +
												'</div>';

		var topRightModule='<div class="left top-right-module">'+
													'<div class="amount-info"><p>4324432432432</p></div>'+
													'<div class="user-info">'+
														'<p><span class="red">恭喜</span><span class="userName">Wang **</span></p>'+
														'<h3>于BBIN平台-连环夺宝</h3>'+
														'<p>获得<span>122142121424</span></p>'+
													'</div>'+
													'<button>快速游戏</button>'+
												'</div>'+
												'<div class="clear"></div>';
		var topModule='<div class="top-module">'+topLeftModule+topBannerModule+topRightModule+'</div>';
	  var middleNavModule='<ul class="middle-module">'+
													'<li class="pt-li"></li>'+
													'<li class="bbin-li"></li>'+
													'<li class="ag-li"></li>'+
													'<li class="mg-li"></li>'+
												'</ul>'+
												'<ul class="middle-right-module">'+
													'<li></li>'+
													'<li></li>'+
													'<li></li>'+
												'</ul>'
												'<div class="clear"></div>';
		var bottomLeftModule='<div class="bottom-left">'+
													'<div class="search-box">'+
														'<input type="text" placeholder="快速查找本平台游戏">'+
														'<img class="search-btn" src="../img/search.png">'+
														'<div class="clear"></div>'+
													'</div>'+
													'<ul>'+
														'<li class="selected"><img src="../img/v01-d.png" /><span>热门游戏</span><div></div></li>'+
														'<li><img src="../img/v02-n.png" /><span>全部游戏</span><div></div></li>'+
														'<li><img src="../img/v03-n.png" /><span>经典游戏</span><div></div></li>'+
														'<li><img src="../img/v04-n.png" /><span>奖金游戏</span><div></div></li>'+
														'<li><img src="../img/v05-n.png" /><span>视频扑克</span><div></div></li>'+
														'<li><img src="../img/v06-n.png" /><span>免费游戏</span><div></div></li>'+
														'<li><img src="../img/v07-n.png" /><span>我的收藏</span><div></div></li>'+
													'</ul>'+
													'<div class="stick"></div>'+
												'</div>';
		var testData=[{
			url:"../img/test1.png",
			score:4,
			name:'古怪猴子'
		},{
			url:"../img/fnfrj.jpg",
			score:4,
			name:'古怪猴子'
		},{
			url:"../img/dw.jpg",
			score:4,
			name:'古怪猴子'
		},{
			url:"../img/dv2.jpg",
			score:4,
			name:'古怪猴子'
		},{
			url:"../img/test1.png",
			score:4,
			name:'古怪猴子'
		},{
			url:"../img/frr.jpg",
			score:4,
			name:'古怪猴子'
		},{
			url:"../img/test1.png",
			score:4,
			name:'古怪猴子'
		},{
			url:"../img/test1.png",
			score:4,
			name:'古怪猴子'
		},{
			url:"../img/test1.png",
			score:4,
			name:'古怪猴子'
		},{
			url:"../img/test1.png",
			score:4,
			name:'古怪猴子'
		},{
			url:"../img/test1.png",
			score:4,
			name:'古怪猴子'
		},{
			url:"../img/test1.png",
			score:4,
			name:'古怪猴子'
		},{
			url:"../img/test1.png",
			score:4,
			name:'古怪猴子'
		},{
			url:"../img/test1.png",
			score:4,
			name:'古怪猴子'
		},{
			url:"../img/test1.png",
			score:4,
			name:'古怪猴子'
		},{
			url:"../img/test1.png",
			score:4,
			name:'古怪猴子'
		},{
			url:"../img/test1.png",
			score:4,
			name:'古怪猴子'
		},{
			url:"../img/test1.png",
			score:4,
			name:'古怪猴子'
		},{
			url:"../img/test1.png",
			score:4,
			name:'古怪猴子'
		},{
			url:"../img/test1.png",
			score:4,
			name:'古怪猴子'
		},{
			url:"../img/test3.png",
			score:4,
			name:'古怪猴子'
		},{
			url:"../img/test1.png",
			score:4,
			name:'古怪猴子'
		},{
			url:"../img/test3.png",
			score:4,
			name:'古怪猴子'
		},{
			url:"../img/test3.png",
			score:4,
			name:'古怪猴子'
		},{
			url:"../img/test3.png",
			score:4,
			name:'古怪猴子'
		},{
			url:"../img/test3.png",
			score:4,
			name:'古怪猴子'
		},{
			url:"../img/test1.png",
			score:4,
			name:'古怪猴子'
		},{
			url:"../img/test1.png",
			score:4,
			name:'古怪猴子'
		}]
		var getGameList=function(){
			var html='';
			for(var a=0; a<testData.length;a++){
				var temp=testData[a];
					html+='<li>'+
						'<img src='+temp.url+'><p><span class="game-name">'+temp.name+'</span>'+
						'<span class="red">'+temp.score+'</span><img src="../img/sc-d.png"></p>'+
						'<p id="hover-layer" class="hover-layer-none"><button>开始游戏</button><br/><button>免费试玩</button></p>'+
					'</li>';
			}
			return html;
		};
		var listImg=getGameList();
	  var bottomRightModule='<div class="bottom-right">'+
														'<ul>'+
															listImg+
														'</ul>'+
														'<div class="more-game">更多游戏</div>'+
												'</div>'


		var bottomModule='<div class="bottom-module">'+bottomLeftModule+bottomRightModule+'</div>';
		var mainConent='<div class="page e-entertainment main-content"><div class="wrapper">'+noticeDom+topModule+
						 		   middleNavModule+bottomModule+'</div></div>';

		this.el  = mainConent;
		if(!$('.slider').data('run')) {
			$('.slider').unslider({
				speed: 500,
				delay: 3000
			});
		}
		$(".left-list").myScroll({
			speed:40, //数值越大，速度越慢
			rowHeight:30 //li的高度
		});
		$('.slider').data('run', true);
	};

	EEntertainment.prototype.getDom = function () {
		return this.el;
	};

	EEntertainment.prototype.show = function () {
		this.zone.show();

	};

	EEntertainment.prototype.hide = function () {
		this.zone.hide();
	};

	EEntertainment.prototype.bindEvents = function () {
		var pageUl;
		var stick;
		var index;
		var imgIndex;
		var that = this;
		this.zone = $('.main-content');
		this.notice.bindEvents();
		$('.slider').unslider({
			speed: 500,
			delay: 3000
		});

		pageUl = this.zone.find('.bottom-left ul');
		stick = this.zone.find('.bottom-left .stick');
		imgUl=this.zone.find('.bottom-right ul');
		marqueeList=this.zone.find('.top-left-module');

		pageUl.delegate('li','mouseover',function(){
			index = $(this).index();
			imgIndex=index+1;
			var path="../img/v0"+imgIndex+"-d.png";
			$(this).find("img").attr("src",path);
		});

		pageUl.delegate('li','mouseout',function(){
			index = $(this).index();
			imgIndex=index+1;
			var path="../img/v0"+imgIndex+"-n.png";
			if(!$(this).hasClass("selected")){
				$(this).find("img").attr("src",path);
			}
		})

		pageUl.delegate('li','click',function(){
				index = $(this).index();
				imgIndex=index+1;
				var path="../img/v0"+imgIndex+"-d.png";
				var tt=$(".selected").find("img").attr("src").replace("-d","-n");
				$(".selected").find("img").attr("src",tt);
				$(".bottom-left").find("li").removeClass("selected");
				$(this).addClass("selected");
				$(this).find("img").attr("src",path);
				stick.css('top',(index * 40 + 62) + 'px');
		});

		imgUl.delegate('li','mouseover',function(){
			  $(this).find("#hover-layer").removeClass("hover-layer-none").addClass("hover-layer");
		});
		imgUl.delegate('li','mouseout',function(){
			  $(this).find("#hover-layer").removeClass("hover-layer").addClass("hover-layer-none");
		});

		function marquee(obj, step){
			 obj.find("ul").animate({
				 marginTop: '-=1'
			 },0,function(){
				 var s = Math.abs(parseInt($(this).css("margin-top")));
				 if(s >= step){
					 $(this).find("li").slice(0, 1).appendTo($(this));
					 $(this).css("margin-top", 0);
				 }
			 });
		 }
		var _scroll = setInterval(function(){
			if($(".marqueen").find("ul").height()<=$(".marqueen").height()){
				clearInterval(_scroll);
			}else{
				marquee($(".marqueen"), 30);
			}
		}, 100);
		$(".marqueen").hover(function(){
			clearInterval(_scroll);
		},function(){
			_scroll = setInterval(function(){
				if($(".marqueen").find("ul").height()<=$(".marqueen").height()){
					clearInterval(_scroll);
				}else{
					marquee($(".marqueen"), 30);
				}
			}, 100);
		});




	};
	(function($){
	$.fn.myScroll = function(options){
	//榛樿閰嶇疆
	var defaults = {
		speed:40,  //婊氬姩閫熷害,鍊艰秺澶ч€熷害瓒婃參
		rowHeight:24 //姣忚鐨勯珮搴�
	};
	var opts = $.extend({}, defaults, options),intId = [];




	}

})(jQuery);
	window.EEntertainment = EEntertainment;
}());
