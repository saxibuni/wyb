(function () {
	function EEntertainment () {
		this.initDom();
	}

	EEntertainment.prototype.initDom = function () {
		this.notice=new Notice({date:'2016-09-05',content:'这是一个测试公告',hasBtn:true});

		var noticeDom = this.notice.getDom();

		var topLeftModule=	'<div class="left top-left-module">'+
								'<div class="head-img">' +
									'<img src="../img/cj.jpg"/>' +
									this.createMarqueenLi1() +
								'</div>'+

								'<div class="left-list">' +
									'<div class="marqueen">' +
										'<ul></ul>'+
									'</div>' +
								'</div>' +
							'</div>';

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
								'<div class="amount-info"><p class="jackpot-value"></p></div>'+
								'<div class="user-info">'+
									'<p><span class="red">恭喜</span><span class="userName">Wang **</span></p>'+
									'<h3>于BBIN平台-连环夺宝</h3>'+
									'<p>获得<span>3,456,456.20</span></p>'+
								'</div>'+
								'<button>快速游戏</button>'+
							'</div>'+

							'<div class="clear"></div>';

		var topModule   =	'<div class="top-module">' +
								topLeftModule + 
								topBannerModule + 
								topRightModule + 
							'</div>';
	  	
	  	var middleNavModule='<ul class="middle-module">'+
								'<li class="pt-li selected">' +
									'<span class="img pt-img"></span>' +
									'<span class="name">真人、老虎机</span>' +
								'</li>'+
								'<li class="bbin-li">' +
									'<span class="img bbin-img"></span>' +
									'<span class="name">真人、老虎机</span>' +
								'</li>'+
								'<li class="ag-li">' +
									'<span class="img ag-img"></span>' +
									'<span class="name">真人、老虎机</span>' +
								'</li>'+
								'<li class="mg-li">' +
									'<span class="img mg-img"></span>' +
									'<span class="name">真人、老虎机</span>' +
								'</li>'+
							'</ul>'+

							'<div class="clear"></div>';

		var bottomLeftModule=	'<div class="bottom-left">' +
									'<div class="search-box">' +
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

		var listImg = this.getGameList();

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

		// $(".left-list").myScroll({
		// 	speed:40, //数值越大，速度越慢
		// 	rowHeight:30 //li的高度
		// });

		$('.slider').data('run', true);
	};

	EEntertainment.prototype.getDom = function () {
		return this.el;
	};

	EEntertainment.prototype.createMarqueenLi1 = function (data) {
		var temp =	'<div class="marqueen-li1">' +
						'<div class="marqueen-li1-wrapper">' +
							'<div class="row">' +
								'<div class="marqueen-li1-game">' +
									'百万幸运球' +
								'</div>' +

								'<div class="marqueen-li1-win">' +
									'12,325.00' +
								'</div>' +

								'<div class="clear"></div>' +
							'</div>' +

							'<div class="row">' +
								'<div class="marqueen-li1-game"></div>' +
								'<div class="marqueen-li1-win"></div>' +
								'<div class="clear"></div>' +
							'</div>' +
						'</div>' +
					'</div>';

		return temp;
	};

	EEntertainment.prototype.animateMarqueen = function (data) {
		var game;
		var win;
		var ulFirstLi;
		var marqueenLi1Row2;
		var that            =  this;
		var marqueenUl      =  this.zone.find('.left-list .marqueen ul');
		
		this.marqueenInterval = setInterval(function () {
			h         =  parseFloat(marqueenUl.children('li').css('height'));
			ulFirstLi =  marqueenUl.children('li:first-child');
			game      =  ulFirstLi.children('p:first-child').text();
			win       =  ulFirstLi.children('p:last-child').text();

			marqueenUl.animate({'top': (0 - h + 'px')}, 500, function () {
				ulFirstLi.remove();
				marqueenUl.css('top', '0');

				if (marqueenUl.children('li').length < 10) {
					that.setMarqueenItems();
				}
			});

			marqueenLi1Row2 = $(that.zone.find('.marqueen-li1 .row')[1]);
			marqueenLi1Row2.children('.marqueen-li1-game').text(game);
			marqueenLi1Row2.children('.marqueen-li1-win').text(win);
			that.animateMarqueenLi1();
		}, 5000);
	};

	EEntertainment.prototype.animateMarqueenLi1 = function (data) {
		var wrapper = this.zone.find('.marqueen-li1-wrapper');
		var rows    = this.zone.find('.marqueen-li1 .row');
		var row1    = $(rows[0]);
		var row2    = $(rows[1]);
		var temp    = 	'<div class="row">' +
							'<div class="marqueen-li1-game"></div>' +
							'<div class="marqueen-li1-win"></div>' +
							'<div class="clear"></div>' +
						'</div>';

		row1.animate({'top': '-30px'});
		row2.animate({'top': '0'}, 500, function () {
			row1.remove();
			wrapper.append(temp);
		});
	};

	EEntertainment.prototype.setMarqueenItems = function () {
		var i;
		var temp = '';
		var data = this.bonusPoolData;
		var values = [
			'79,983.22',
			'11,223,64.75',
			'1,342,624.02',
			'3264.75',
			'939,264.75',
			'11,264.75',
			'32,222.23',
			'234,627.42',
			'192,638.91',
			'847,173.88',
			'3,854.29',
			'42,332.30',
			'25,285.52',
			'76,947.44',
			'984,220.76',
			'112,034.49',
			'583,097.95',
			'98,802.63',
			'3,230.82',
			'45,338.01'
		];

		for (i = 0; i < data.length; i++) {
			temp += this.createMarqueenItem({
				game: data[i].Title,
				win: values[i]
			});
		}

		this.zone.find('.marqueen ul').html(temp);
		this.animateMarqueen();
	};

	EEntertainment.prototype.createMarqueenItem = function (data) {
		var temp = 	'<li>'+
						'<p>' +
							data.game +
						'</p>' +
						'<p>' +
							data.win +
						'</p>'+
					'</li>';

		return temp;
	};

	EEntertainment.prototype.getGameList = function () {
		var temp = {
			url:"../img/dv2.jpg",
			score:4,
			name:'古怪猴子'
		};

		var html='';

		for(var a = 0; a < 24; a++) {
			html  +=	'<li>'+
							'<img src='+temp.url+'><p><span class="game-name">'+temp.name+'</span>'+
							'<span class="red">'+temp.score+'</span><img class="collect" src="../img/sc-h.png"></p>'+
							'<p id="hover-layer" class="hover-layer-none"><button>开始游戏</button><br/><button>免费试玩</button></p>'+
						'</li>';
		}

		return html;
	};

    EEntertainment.prototype.createLoader = function() {
        var wrapper1 = this.zone.find('.top-right-module .amount-info')[0];
        var wrapper2 = this.zone.find('.top-left-module .marqueen')[0];

        this.loader1 = new Loader(wrapper1);
        this.loader2 = new Loader(wrapper2);
    };

	EEntertainment.prototype.getBonusPool = function () {
		var url;
		var that = this;

		this.loader1.play();

		url = app.urls.getBonusPool + 'pageIndex=0&pageSize=20'

        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            timeout: app.timeout,
            xhrFields: {
            	withCredentials: true
            }
        }).done(function (json) {
        	that.bonusPoolData = json;
        	that.setMarqueenItems();
        }).fail(function (xhr, testStatus, error) {
            alert(error);
        });
	};

    EEntertainment.prototype.setJackpotValue = function (data) {
    	data = '17,232,455.00';
    	this.zone.find('.jackpot-value').text(data);
    };

	EEntertainment.prototype.getJackpot = function () {
		var that = this;

		this.loader1.play();

        $.ajax({
            type: 'POST',
            url: app.urls.getJackpot,
            dataType: 'json',
            timeout: app.timeout
        }).done(function(json) {
        	if (json.StatusCode === 0) {
        		that.setJackpotValue();
        	} else {
        		that.setJackpotValue();
        	}
        }).fail(function(xhr, textStatus, error) {
            alert(error);
        }).done(function () {
        	that.loader1.stop();
        });
	};

	EEntertainment.prototype.show = function () {
		this.zone.fadeIn(500);
		this.getBonusPool();
		this.getJackpot();
	};

	EEntertainment.prototype.hide = function () {
		this.zone.fadeOut(500);
		//clearInterval(this.marqueenInterval);
		//this.marqueenInterval = undefined;
	};

	EEntertainment.prototype.bindEvents = function () {
		var pageUl;
		var stick;
		var index;
		var imgIndex;
		var imageUl;
		var moreGame;
		var imgSrc;
		var middleModuleUl;
		var that = this;

		this.zone = $('.main-content');
		this.notice.bindEvents();

		$('.slider').unslider({
			speed: 500,
			delay: 3000
		});

		pageUl         =  this.zone.find('.bottom-left ul');
		stick          =  this.zone.find('.bottom-left .stick');
		imgUl          =  this.zone.find('.bottom-right ul');
		marqueeList    =  this.zone.find('.top-left-module');
		moreGame       =  this.zone.find('.bottom-right .more-game');
		middleModuleUl = this.zone.find('.middle-module');

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
		});

		pageUl.delegate('li','click',function(){
				index = $(this).index();
				imgIndex=index+1;
				var path="../img/v0"+imgIndex+"-d.png";
				var tt=$(".selected").find("img").attr("src").replace("-d","-n");
				$(".selected").find("img").attr("src",tt);
				$(".bottom-left").find("li").removeClass("selected");
				$(this).addClass("selected");
				$(this).find("img").attr("src",path);
				stick.css('top',(index * 40 + 65) + 'px');
		});

		imgUl.delegate('li','mouseover',function(){
			  $(this).find("#hover-layer").removeClass("hover-layer-none").addClass("hover-layer");
		});

		imgUl.delegate('li','mouseout',function(){
			  $(this).find("#hover-layer").removeClass("hover-layer").addClass("hover-layer-none");
		});

		middleModuleUl.delegate('li', 'click', function () {
			middleModuleUl.find('li').removeClass('selected');
			$(this).addClass('selected');
		});

		this.zone.delegate('.collect', 'click', function () {
			imgSrc = $(this).attr('src');

			if (imgSrc.indexOf('sc-h.png') !== -1) {
				$(this).attr('src', '../img/sc-d.png');
				app.header.addCollectGame();
			} else {
				$(this).attr('src', '../img/sc-h.png');
				app.header.deleteCollectGame();
			}
		});
		
		$(document).scroll(function(e) {
		    var viewH     = $('body').height();
		    var contentH  = $('body').get(0).scrollHeight; 
		    var scrollTop = $('body').scrollTop();

		    if (imgUl.children('li').length > 72) {
		    	moreGame.html('没有更多');
		    	return;
		    }

		    if (contentH - viewH - scrollTop <= 10) {
		    	moreGame.html('加载中...');

		    	if (!that.loadImageTimeout) {
			    	that.loadImageTimeout = setTimeout(function () {
			    		imgUl.append(that.getGameList());
			    		moreGame.html('更多游戏');
			    		clearTimeout(that.loadImageTimeout);
			    		that.loadImageTimeout = undefined;
			    	}, 2000);
		    	}
		    }
		});

		this.createLoader();
	};

	window.EEntertainment = EEntertainment;
}());