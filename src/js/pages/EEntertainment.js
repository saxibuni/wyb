(function () {
	function EEntertainment () {
		this.favoriteGameIds = {};
		this.initDom();
	}

	EEntertainment.prototype.initDom = function () {
		this.currenPage = 0;
		this.notice     = new Notice({date:'2016-09-05',content:'这是一个测试公告',hasBtn:true});

		var noticeDom   = this.notice.getDom();

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
								'<li class="pt-li selected" data-type="PT">' +
									'<span class="img pt-img"></span>' +
									'<span class="name">真人、老虎机</span>' +
								'</li>'+
								'<li class="bbin-li" data-type="BBIN">' +
									'<span class="img bbin-img"></span>' +
									'<span class="name">真人、老虎机</span>' +
								'</li>'+
								'<li class="ag-li" data-type="AG">' +
									'<span class="img ag-img"></span>' +
									'<span class="name">真人、老虎机</span>' +
								'</li>'+
								'<li class="mg-li" data-type="MG">' +
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

									'<ul class="game-tree">'+
										// '<li class="selected"><img src="../img/v01-d.png" /><span>热门游戏</span><div></div></li>'+
										// '<li><img src="../img/v02-n.png" /><span>全部游戏</span><div></div></li>'+
										// '<li><img src="../img/v03-n.png" /><span>经典游戏</span><div></div></li>'+
										// '<li><img src="../img/v04-n.png" /><span>奖金游戏</span><div></div></li>'+
										// '<li><img src="../img/v05-n.png" /><span>视频扑克</span><div></div></li>'+
										// '<li><img src="../img/v06-n.png" /><span>免费游戏</span><div></div></li>'+
										// '<li><img src="../img/v07-n.png" /><span>我的收藏</span><div></div></li>'+
									'</ul>'+

									'<div class="stick"></div>'+
								'</div>';

	  	var bottomRightModule='<div class="bottom-right">'+
														'<ul>'+
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

	/*
	**  获取奖金池游戏
	*/
	EEntertainment.prototype.getJackpotsGames = function (platform) {
		var callback;
		var that =  this; 
		var opt  =  {
			url: app.urls.getJackpotsGames,
	        data: {
	        	platform: platform,
	        	pageIndex: 0,
	        	pageSize: 20
	        }
		};

		if (platform !== 'PT' && platform !== 'MG') {
			return;
		}

		callback = function (json) {
        	that.bonusPoolData = json;
        	that.setMarqueenItems(true);
        	that.resfreshBaseValues(platform);
        	that.animateMarqueen();
		};

		Service.get(opt, callback);
	};

	/*
	** Marqueen
	*/
	EEntertainment.prototype.formatJackpotsUrl = function (data) {
        var jackpotsUrl;
        var jackpotCode;
		var _jackpotInfoType = {
            CASINOBASED    : '2',
            CASINOSTOTAL   : '4',
            GAMEBASED      : '1',
            GAMEGROUPTOTAL : '5',
            GAMETOTAL      : '3'
        };

	    if (data.ShowJackpots) {
	        jackpotsUrl = data.Api.LoginUrl2 + "?info=" + data.JackpotsInfo + "&currency=cny";

	        if (data.JackpotsInfo == _jackpotInfoType.GAMEBASED) {
	            jackpotCode = data.GameIdentify;

	            if (data.JackpotsParams.length > 0) {
	                jackpotCode = data.JackpotsParams;
	            }

	            jackpotsUrl += "&casino=playtech&game=" + jackpotCode;
	        } else if ( data.JackpotsInfo == _jackpotInfoType.CASINOBASED || 
	        			data.JackpotsInfo == _jackpotInfoType.CASINOSTOTAL) {
	            jackpotsUrl += "&casino=playtech";
	        } else if (data.JackpotsInfo == _jackpotInfoType.GAMEGROUPTOTAL) {
	            jackpotCode = data.GameIdentify;

	            if (data.JackpotsParams.length > 0) {
	                jackpotCode = data.JackpotsParams;
	            }

	            jackpotsUrl += "&casino=playtech&group=" + jackpotCode;
	        }
	    }

	    return jackpotsUrl;
	};

	EEntertainment.prototype.createMarqueenLi1 = function (data) {
		var temp =	'<div class="marqueen-li1">' +
						'<div class="marqueen-li1-wrapper">' +
							'<div class="row">' +
								'<div class="marqueen-li1-game"></div>' +
								'<div class="marqueen-li1-win"></div>' +
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

	EEntertainment.prototype.setMarqueenItems = function (isNewPlatform) {
		var i;
		var jackpotsUrl;
		var temp   = '';
		var data   = this.bonusPoolData;
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
				game        : data[i].Title,
				platform    : data[i].Api.GamePlatform,         //取MG基础值的时候用
				id          : data[i].Id,                       //取MG基础值的时候用
				jackpotsUrl : this.formatJackpotsUrl(data[i])   //取PT基础值的时候用
			});
		}

		if (isNewPlatform) {
			this.zone.find('.marqueen ul').html(temp);
		} else {
			this.zone.find('.marqueen ul').append(temp);
		}
	};

	EEntertainment.prototype.createMarqueenItem = function (data) {
		var temp = 	'<li>'+
						'<p>' +
							data.game +
						'</p>' +
						'<p class="jackpots-basevalue" data-url="' + data.jackpotsUrl + '" data-id="' + data.id + '" data-platform="' + data.platform + '">' +
						'</p>'+
					'</li>';

		return temp;
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

	EEntertainment.prototype.animateMarqueen = function (data) {
		var game;
		var win;
		var ulFirstLi;
		var h;
		var top = 0;
		var count = 0;
		var marqueenLi1Row2;
		var that            =  this;
		var marqueenUl      =  this.zone.find('.left-list .marqueen ul');
		
		this.marqueenInterval = setInterval(function () {
			// h         =  parseFloat(marqueenUl.children('li').css('height'));
			// ulFirstLi =  marqueenUl.children('li:first-child');
			// game      =  ulFirstLi.children('p:first-child').text();
			// win       =  ulFirstLi.children('p:last-child').text();

			// marqueenUl.animate({'top': (0 - h + 'px')}, 500, function () {
			// 	ulFirstLi.remove();
			// 	marqueenUl.css('top', '0');

			// 	if (marqueenUl.children('li').length < 10) {
			// 		that.setMarqueenItems();
			// 	}
			// });

			h         =  parseFloat(marqueenUl.children('li').css('height'));
			ulFirstLi =  $(marqueenUl.children('li')[count]);
			game      =  ulFirstLi.children('p:first-child').text();
			win       =  ulFirstLi.children('p:last-child').text();
			top       -= h;
			count++;

			if (count === 14) {
				count = 0;
				top   = 0;
				marqueenUl.stop();
				marqueenUl.animate({'top': top}, 0);
			} else {
				marqueenUl.animate({'top': (top + 'px')}, 500);
				marqueenLi1Row2 = $(that.zone.find('.marqueen-li1 .row')[1]);
				marqueenLi1Row2.children('.marqueen-li1-game').text(game);
				marqueenLi1Row2.children('.marqueen-li1-win').text(win);
				that.animateMarqueenLi1();
			}
		}, 5000);
	};

	EEntertainment.prototype.stopAnimation = function () {
		this.zone.find('.marqueen-li1 .row').stop();
		this.zone.find('.left-list .marqueen ul').stop();
		clearInterval(this.marqueenInterval); 
		this.marqueenInterval = undefined;
	};

	/*
	** Marqueen Data
	*/
	EEntertainment.prototype.resfreshBaseValues = function (parentPlatform) {
		var i;
		var item;
		var items;
		var platform;
		var gameId;
		var url;

		items = this.zone.find('.marqueen ul .jackpots-basevalue');
		
		for (i = 0; i < items.length; i++) {
			item     = $(items[i]);
			platform = item.attr('data-platform');
			gameId   = item.attr('data-id');
			url      = item.attr('data-url');

			if (platform === 'MG') {
				this.setMgSingleBaseValue(platform, gameId, item);
			} else if (platform === 'PT') {
				this.setPtSingleBaseValue(item.attr('data-url'), item);
			} else {

			}
		}

		if (parentPlatform === 'MG') {
			this.setMgSumBaseValue('MG');
		} else if (parentPlatform === 'PT') {
			this.setPtSumBaseValue();
		} else {
			
		}
	};

	EEntertainment.prototype.setPtSingleBaseValue = function (url, item) {
		var callback;
		var that =  this;
		var opt  =  {
			url: app.urls.getJackpotsByUrl,
	        data: {
	        	url: url
	        }
		};

		callback = function (data) {
			item.text(data.Data);
		};

		Service.post(opt, callback);
	};

	EEntertainment.prototype.setPtSumBaseValue = function () {
		var callback;
		var that =  this;
		var opt  =  {
			url: app.urls.getJackpotsByUrl,
	        data: {
	        	'': app.urls.getPtSumJackpotBaseValue
	        }
		};

		callback = function (data) {
			that.zone.find('.top-right-module .jackpot-value').text(data.Data);
			that.startJackpotAnimation();
		};

		Service.post(opt, callback);
	};

	EEntertainment.prototype.setMgSingleBaseValue = function (platform, gameId, item) {
		var callback;
		var that =  this;
		var opt  =  {
			url: app.urls.getJackpots,
	        data: {
	        	Game: platform,
	        	JackpotInfoType: 1,
	        	GameNameId: gameId
	        }
		};

		callback = function (data) {
			that.zone.find('.top-right-module .jackpot-value').text(data.Data);
		};

		Service.post(opt, callback);
	};

	EEntertainment.prototype.setMgSumBaseValue = function (platform) {
		var callback;
		var that =  this;
		var opt  =  {
			url: app.urls.getJackpots,
	        data: {
	        	Game: platform,
	        	JackpotInfoType: 3
	        }
		};

		callback = function (data) {
			that.zone.find('.top-right-module .jackpot-value').text(data);
			that.startJackpotAnimation();
		};

		Service.post(opt, callback);
	};

	EEntertainment.prototype.startJackpotAnimation = function () {
		var i;
		var base;
		var jackpotSum = this.zone.find('.top-right-module .jackpot-value');
		var jackpots   = this.zone.find('.jackpots-basevalue');
		var that       = this;
		var sumGap     = 35.57;
		var singleGap  = 1.23;

		this.sumInterval = setInterval(function () {
			for (i = 0; i < jackpots.length; i++) {
				base = parseFloat($(jackpots[i]).text());
				base += singleGap;
				base = base.toFixed(2);
				$(jackpots[i]).text(base);
			}

			base = parseFloat(jackpotSum.text());
			base += sumGap;
			base = base.toFixed(2);
			jackpotSum.text(base);
		}, 500);
	};

	/*
	** game tree
	*/
    EEntertainment.prototype.setGameTree = function (data) {
    	var i;
    	var temp = '';

    	for (i = 0; i < data.length; i++) {
    		temp += '<li ' + ((i === 0)?'class="selected" ': '') + 'data-id="' + data[i].Id + '">' +
    					'<span>' +
    						data[i].Name +
    					'</span>' +
    					'<div></div>' +
    				'</li>';
    	}

    	this.zone.find('.game-tree').html(temp);
    	this.bindTreeEvents();
    };

	EEntertainment.prototype.getGameCategories = function () {
		var that = this;

		this.loader3.play();

        $.ajax({
            type: 'GET',
            url: app.urls.getGameCategories + 'code=electron',
            dataType: 'json',
            timeout: app.timeout,
            xhrFields: {
            	withCredentials: true
            }
        }).done(function (json) {
        	that.setGameTree(json);
        	that.getFavoriteGameIds();
        }).fail(function (xhr, testStatus, error) {
            alert(error);
        });
	};

	/*
	** game zone
	*/

    EEntertainment.prototype.createLoader = function() {
    	var wrapper1 = this.zone.find('.top-left-module .marqueen')[0];
        var wrapper2 = this.zone.find('.top-right-module .amount-info')[0];
        var wrapper3 = this.zone.find('.bottom-right')[0];
        
        this.loader1 = new Loader(wrapper1);
        this.loader2 = new Loader(wrapper2, {
        	top: '74%'
        });
        this.loader3 = new Loader(wrapper3, {
        	left: '60%',
        	top: '80%'
        });
    };

    EEntertainment.prototype.getFavoriteGameIds = function () {
		var callback;
		var platform  = this.zone.find('.middle-module li.selected').attr('data-type');
		var that      =  this;
		var opt       =  {
			url: app.urls.getFavoriteGameIds,
			data: {
				platform: platform || ''
			}
		};

		callback = function (data) {
			if (data.StatusCode && data.StatusCode != 0) {
				alert(data.Message);
				return;
			}

			if (data.Data) {
				that.favoriteGameIds[platform] = data.Data.split(',');
			}
			
			that.getGameList();
		};

		Service.get(opt, callback);
    };

    EEntertainment.prototype.getGameList = function () {
		var callback;
		var platformUl = this.zone.find('.middle-module');
		var treeUl     = this.zone.find('.game-tree');
		var platform   = platformUl.children('li.selected').attr('data-type');
		var cateGoryId = treeUl.children('li.selected').attr('data-id');
		var that       =  this;
		var opt        =  {
			url: app.urls.getGameList,
			data: {
				platform: platform,
				categoryId: cateGoryId,
				pageIndex: this.currenPage,
				pageSize: 24
			}
		};

		callback = function (data) {
			if (data.StatusCode && data.StatusCode != 0) {
				alert(data.Message);
				return;
			}

        	that.loader3.stop();
        	that.setGameList(data.list);

        	if (data.list.length < 1) {
        		that.zone.find('.bottom-right .more-game').text('没有更多');
        		that.zone.find('.bottom-right .more-game').show();
        	} else {
        		that.zone.find('.bottom-right .more-game').hide();
        	}
		};

		this.loader3.play();
		Service.get(opt, callback);
    };

	EEntertainment.prototype.setGameList = function (data) {
		var i;
		var html      = '';
		var platform  = this.zone.find('.middle-module li.selected').attr('data-type');
		var ids       = this.favoriteGameIds[platform] || [];

		for (i = 0; i < data.length; i++) {
			html +=	'<li data-id="' + data[i].Id + '"' + 
							' data-identify="' + data[i].GameIdentify + 
							'" data-try="' + data[i].IsTry + 
							'" data-platform="' + data[i].Api.GamePlatform + '"' +
							'" data-collectid="' + '' + '"' + 
							'>' +
						'<img src='+app.imageServer + data[i].ImageUrl+'>' +
						'<p>' +
							'<span class="game-name">'+data[i].Title+'</span>'+
							'<span class="red">'+data[i].RecommendNo+'</span>' +
							'<img class="collect" src="../img/sc-' + 
								(($.inArray(data[i].Id, ids) != -1)?'d': 'h') +
							'.png">' +
						'</p>'+
						'<p id="hover-layer" class="hover-layer-none">' +
							'<button class="start-game">开始游戏</button>' +
							'<br/>' +
							'<button class="try-game">免费试玩</button>' +
						'</p>' +
					'</li>';
		}

		if (!this.isScroll) {
			this.zone.find('.bottom-right ul').html(html);
		} else {
			this.zone.find('.bottom-right ul').append(html);
		}
	};

    EEntertainment.prototype.getGameLaunchUrl = function (gameId) {
		var callback;
		var platformUl = this.zone.find('.middle-module');
		var platform   = platformUl.children('li.selected').attr('data-type');
		var that       =  this; 
		var opt        =  {
			url: app.urls.getGameLaunchUrl,
			data: {
				gamePlatform: platform,
				gameType: '',
				gameId: gameId
			}
		};

		callback = function (data) {
			window.open(data);
		};

		Service.get(opt, callback);
    };

    EEntertainment.prototype.getGameLoginUrl = function (gameId) {
    	var opt;
		var callback;
		var platformUl = this.zone.find('.middle-module');
		var platform   = platformUl.children('li.selected').attr('data-type');
		var that       =  this;
		
		function callback(data) {
			if (data == 1) {
				alert('请先登录');
				return;
			}

			opt =  {
				url: app.urls.getGameLoginUrl,
				data: {
					gamePlatform: platform,
					gameType: 'slot',
					gameId: gameId
				}
			};

			callback = function (data) {
				window.open(data);
			};

			Service.get(opt, callback);
		}

		app.getLoginStatus(callback.bind(this));
    };

	EEntertainment.prototype.show = function () {
		var callback;
		var that = this;

		this.zone.fadeIn(500);

		if (!this.firstTime) {
			this.getJackpotsGames('PT');  //获取pt奖金池
			this.getGameCategories();
			this.firstTime = true;
		}
	};

	EEntertainment.prototype.hide = function () {
		this.zone.fadeOut(500);
	};

	EEntertainment.prototype.bindTreeEvents = function () {
		var index;
		var pageUl =  this.zone.find('.bottom-left ul');
		var stick  = this.zone.find('.bottom-left .stick');
		var that   = this;

		pageUl.delegate('li','click',function(){
			index = $(this).index();
			$(".bottom-left").find("li").removeClass("selected");
			$(this).addClass("selected");
			stick.css('top',(index * 40 + 65) + 'px');
			that.isScroll = false;
			that.currenPage = 0;
			that.getFavoriteGameIds();
		});

		// pageUl.delegate('li','click',function(){
		// 	index = $(this).index();
		// 	imgIndex=index+1;
		// 	var path="../img/v0"+imgIndex+"-d.png";
		// 	var tt=$(".selected").find("img").attr("src").replace("-d","-n");
		// 	$(".selected").find("img").attr("src",tt);
		// 	$(".bottom-left").find("li").removeClass("selected");
		// 	$(this).addClass("selected");
		// 	$(this).find("img").attr("src",path);
		// 	stick.css('top',(index * 40 + 65) + 'px');
		// });

		// pageUl.delegate('li','mouseover',function(){
		// 	index = $(this).index();
		// 	imgIndex=index+1;
		// 	var path="../img/v0"+imgIndex+"-d.png";
		// 	$(this).find("img").attr("src",path);
		// });

		// pageUl.delegate('li','mouseout',function(){
		// 	index = $(this).index();
		// 	imgIndex=index+1;
		// 	var path="../img/v0"+imgIndex+"-n.png";
		// 	if(!$(this).hasClass("selected")){
		// 		$(this).find("img").attr("src",path);
		// 	}
		// });
	};

	EEntertainment.prototype.bindEvents = function () {
		var gameId;
		var imgIndex;
		var imageUl;
		var moreGame;
		var imgSrc;
		var parentLi;
		var platform;
		var isTry;
		var identify;
		var middleModuleUl;
		var that = this;

		this.zone = $('.main-content');
		this.notice.bindEvents();

		$('.slider').unslider({
			speed: 500,
			delay: 3000
		});

		imgUl          =  this.zone.find('.bottom-right ul');
		marqueeList    =  this.zone.find('.top-left-module');
		moreGame       =  this.zone.find('.bottom-right .more-game');
		middleModuleUl = this.zone.find('.middle-module');

		imgUl.delegate('li','mouseover',function(){
			  $(this).find("#hover-layer").removeClass("hover-layer-none").addClass("hover-layer");
		});

		imgUl.delegate('li','mouseout',function(){
			  $(this).find("#hover-layer").removeClass("hover-layer").addClass("hover-layer-none");
		});

		middleModuleUl.delegate('li', 'click', function () {
			middleModuleUl.find('li').removeClass('selected');
			$(this).addClass('selected');
			that.isScroll   = false;
			that.currenPage = 0;
			that.stopAnimation();
			that.getJackpotsGames($(this).attr('data-type'));
			that.getFavoriteGameIds();
		});

		this.zone.delegate('.collect', 'click', function () {
			imgSrc = $(this).attr('src');
			gameId = $(this).parent().parent('li').attr('data-id');

			if (!app.signedIn) {
				alert('请先登录');
				return;
			}

			if (imgSrc.indexOf('sc-h.png') !== -1) {
				$(this).attr('src', '../img/sc-d.png');
				app.addFavoriteGame(gameId);
			} else {
				alert('请去收藏列表中取消收藏');
			}
		});

		this.zone.delegate('.start-game', 'click', function () {
			gameId = $(this).parent().parent('li').attr('data-id');
			that.getGameLoginUrl(gameId);
		});

		this.zone.delegate('.try-game', 'click', function () {
			parentLi = $(this).parent().parent('li');
			platform = parentLi.attr('data-platform');
			isTry    = parentLi.attr('data-try');
			identify = parentLi.attr('data-identify');

			if (platform == 'PT' && isTry == 'true') {
				window.open('http://cache.download.banner.greatfortune88.com/casinoclient.html?mode=offline&language=zh-cn&affiliates=1&game=' + identify);
			} else {
				alert('该游戏暂时不能试玩!');
				return;
			}

			gameId = parentLi.attr('data-id');
			that.getGameLaunchUrl(gameId);
		});

		$(document).scroll(function(e) {
		    var viewH     = $('body').height();
		    var contentH  = $('body').get(0).scrollHeight; 
		    var scrollTop = $('body').scrollTop();

		    if (contentH - viewH - scrollTop <= 10) {
		    	moreGame.html('加载中...');
		    	moreGame.show();

		    	that.isScroll = true;
		    	that.currenPage++;
		    	that.getGameList();
		    }
		});

		this.createLoader();
	};

	window.EEntertainment = EEntertainment;
}());