(function () {
	function EEntertainment () {
		this.initDom();
	}

	EEntertainment.prototype.initDom = function () {
		this.notice=new Notice({date:'2016-09-05',content:'这是一个测试公告',hasBtn:true});
		var noticeDom=this.notice.getDom();
		var topLeftModule='<div class="left top-left-module">'+
													'<p class="head-img"> </p>'+
													'<ul class="left-list">'+
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
											  '</div>';
	  var topBannerModule='<div class="slider">'+
														'<img src="../img/test2.png"/>'+
												'</div>';

		var topRightModule='<div class="left top-right-module">'+
													'<div class="amount-info">4324432432432</div>'+
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
												'<div class="clear"></div>';
		var bottomLeftModule='<div class="bottom-left">'+
													'<div class="search-box">'+
														'<input type="text" placeholder="快速查找本平台游戏">'+
														'<img class="search-btn" src="../img/search.png">'+
														'<div class="clear"></div>'+
													'</div>'+
													'<ul>'+
														'<li><span>热门游戏</span><div></div></li>'+
														'<li><span>全部游戏</span><div></div></li>'+
														'<li><span>经典游戏</span><div></div></li>'+
														'<li><span>奖金游戏</span><div></div></li>'+
														'<li><span>视频扑克</span><div></div></li>'+
														'<li><span>免费游戏</span><div></div></li>'+
														'<li><span>我的收藏</span><div></div></li>'+
													'</ul>'+
													'<div class="stick"></div>'+
												'</div>';
		var testData=[{
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
						'<span class="red">'+temp.score+'</span><img src="../img/a02-h.png"></p>'+
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
		var mainConent='<div class="page main-content">'+topModule+
						 		   middleNavModule+bottomModule+'</div>';

		this.el  = noticeDom+mainConent;
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
		var that = this;
		this.zone = $('.main-content');
		this.notice.bindEvents();
		pageUl = this.zone.find('.bottom-left ul');
		stick = this.zone.find('.bottom-left .stick');
		pageUl.delegate('li','click',function(){
				index = $(this).index();
				stick.css('top',(index * 40 + 62) + 'px');
		});
	};

	window.EEntertainment = EEntertainment;
}());
