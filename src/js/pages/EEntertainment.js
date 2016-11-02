(function () {
	function EEntertainment () {
		this.favoriteGameIds = {};
		this.initDom();
	}

	EEntertainment.prototype.initDom = function () {
		this.currenPage = 0;

		var topLeftModule 	=	'<div class="left top-left-module">' +
									'<div class="czcj-head">' +
										'<span class="title">超级彩金</span>' +
										this.createMarqueenLi1() +
									'</div>' +

									'<div class="left-list">' +
										'<div class="marqueen">' +
											'<ul></ul>' +
										'</div>' +
									'</div>' +
								'</div>';

	  	var topBannerModule	=	'<div class="middle-banner">' +
									'<div class="sliders"></div>' +
								'</div>';

		var topRightModule 	= 	'<div class="left top-right-module">' +
									'<div class="jackpots-title">JACKPOT</div>' +
									'<div class="amount-info jackpot-value"></div>' +
									'<div class="user-info">' +
										'<p><span class="red">恭喜</span><span class="userName">Wang **</span></p>' +
										'<h3>于BBIN平台-连环夺宝</h3>' +
										'<p>获得<span>3,456,456.20</span></p>' +
									'</div>' +
									'<div class="button">快速游戏</div>' +
								'</div>';

		var bottomLeftModule =	'<div class="bottom-left">' +
									'<div class="search-box">' +
										'<input type="text" placeholder="快速查找本平台游戏">' +
										'<div class="search-btn"></div>' +
										'<div class="clear"></div>' +
									'</div>'+

									'<ul class="game-tree"></ul>' +
								'</div>';

	  	var bottomRightModule =	'<div class="bottom-right">' +
									'<ul></ul>' +
									'<div class="more-game">更多游戏</div>' +
								'</div>';

		var topModule   =		'<div class="top-module">' +
									topLeftModule +
									topBannerModule +
									topRightModule +
									'<div class="clear"></div>' +
								'</div>';
	  	
	  	var middleNavModule	=	'<ul class="middle-module">' +
									'<li class="pt-li selected" data-type="PT">' +
										'<span class="img pt-img"></span>' +
										'<span class="name">PT电子</span>' +
									'</li>' +
									'<li class="bbin-li" data-type="BBIN">' +
										'<span class="img bbin-img"></span>' +
										'<span class="name">BBIN电子</span>' +
									'</li>' +
									'<li class="mg-li" data-type="MG">' +
										'<span class="img mg-img"></span>' +
										'<span class="name">MG电子</span>' +
									'</li>' +
									'<li class="ag-li" data-type="AG">' +
										'<span class="img ag-img"></span>' +
										'<span class="name">AG电子</span>' +
									'</li>' +
									'<li class="ttg-li" data-type="TTG">' +
										'<span class="img ttg-img"></span>' +
										'<span class="name">TTG电子</span>' +
									'</li>' +
									'<li class="mt-li" data-type="MT">' +
										'<span class="img mt-img"></span>' +
										'<span class="name">MT电子</span>' +
									'</li>' +
								'</ul>';

		var bottomModule   =	'<div class="bottom-module">' +
									bottomLeftModule +
									bottomRightModule +
									'<div class="clear"></div>' +
								'</div>';

		var mainConent     =	'<div class="page e-entertainment">' +
									'<div class="wrapper">' +
										topModule +
						 		   		middleNavModule +
						 		   		bottomModule +
						 		   	'</div>' +
						 		'</div>';

		this.el  = mainConent;
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
	**  获取轮播图图片
	*/
	EEntertainment.prototype.getAds = function () {
		var callback;
		var that    =  this;
		var opt     =  {
			url: app.urls.getAds,
			data: {
				type: 'pd_wyb_slot_ads',
				pageIndex: 0,
				pageSize: 10
			}
		};

		this.loader4.play();
		callback = function (data) {
			that.loader4.stop();
			
			if (!data) {
				return;
			}
			
			that.addSliders(data);
		};

		Service.get(opt, callback);
	};

	EEntertainment.prototype.addSliders = function (data) {
		var i;
		var route;
		var len  = data.count;
		var arr  = data.list;
		var logoTemp = 	'<ul>';

		for (i = 0; i < len; i++) {
			logoTemp += 	'<li data-route=2 -1">' +
								'<img src="' + app.imageServer + arr[i].ImgUrl + '">' +
							'</li>';
		}

		logoTemp +=		'</ul>';

		this.zone.find('.sliders').html(logoTemp);
		this.zone.find('.sliders').unslider({
			speed: 500,
			delay: 5000,
			autoplay: true,
			arrows: false
		});

		this.zone.find('.sliders .unslider-carousel').delegate('li', 'click', function () {
			route = $(this).attr('data-route').split(' ');
			app.router.setRoute('/promoActivity/' + route[0] + '/' + route[1]);
		});
	};

	/*
	** Marqueen
	*/
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

		for (i = 0; i < data.length; i++) {
			temp += this.createMarqueenItem({
				game        : data[i].Title,
				platform    : data[i].Api.GamePlatform,         //取MG基础值的时候用
				id          : data[i].Id,                       //取MG基础值的时候用
				jackpotsUrl : app.formatJackpotsUrl(data[i])    //取PT基础值的时候用
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
		row2.animate({'top': '0'}, 1000, function () {
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
				marqueenUl.animate({'top': (top + 'px')}, 1000);
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
	        	'': url
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
			that.zone.find('.top-right-module .jackpot-value').text(window.Util.formatNumToCur(data.Data));
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
		var sumGap     = 1.37;
		var singleGap  = 1.11;

		this.sumInterval = setInterval(function () {
			for (i = 0; i < jackpots.length; i++) {
				base = window.Util.formatCurToNum( $(jackpots[i]).text() );
				base += singleGap;
				base = base.toFixed(2);
				$(jackpots[i]).text(window.Util.formatNumToCur(base));
			}

			base = window.Util.formatCurToNum( jackpotSum.text() );
			base += sumGap;
			base = base.toFixed(2);
			jackpotSum.text(window.Util.formatNumToCur(base));
		}, 1000);
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
        var wrapper4 = this.zone.find('.sliders')[0];

        this.loader1 = new Loader(wrapper1);
        this.loader2 = new Loader(wrapper2, {
        	top: '74%'
        });
        this.loader3 = new Loader(wrapper3, {
        	left: '60%',
        	top: '80%'
        });
        this.loader4 = new Loader(wrapper1, {
        	top: '20%'
        });
    };

    EEntertainment.prototype.getFavoriteGameIds = function () {
		var callback;
		var platform  = this.zone.find('.middle-module li.selected').attr('data-type');
		var that      = this;
		var opt       = {
			url: app.urls.getFavoriteGameIds,
			data: {
				platform: platform || ''
			}
		};

		callback = function (data) {
			if (data.StatusCode && data.StatusCode != 0) {
				if (data.Message == '未登录') {
					that.favoriteGameIds[platform] = [];
				} else {
					alert(data.Message);
					return;
				}
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

        	if (data.list.length < 24) {
        		that.zone.find('.bottom-right .more-game').text('没有更多');
        	} else {
        		that.zone.find('.bottom-right .more-game').text('加载更多');
        	}
		};

		this.loader3.play();
		Service.get(opt, callback);
    };

    EEntertainment.prototype.getGameListByName = function () {
    	var that = this;
    	var name = this.zone.find('.search-box input').val();
		var opt  = {
			url: app.urls.getGameList,
			data: {
				title: name,
				pageIndex: 0,
				pageSize: 1000
			}
		};

		var callback = function (data) {
			if (data.StatusCode && data.StatusCode != 0) {
				alert(data.Message);
				return;
			}

        	that.loader3.stop();
        	that.setGameList(data.list);

        	if (data.list.length < 1000) {
        		that.zone.find('.bottom-right .more-game').text('没有更多');
        	} else {
        		that.zone.find('.bottom-right .more-game').text('加载更多');
        	}
		};

    	this.isScroll = false;
    	this.currenPage = 0;
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
							'" data-gametype="' + data[i].GameTypeText_EN +
							'" data-platform="' + data[i].Api.GamePlatform + '"' +
							'" data-collectid="' + '' + '"' + 
							'>' +
						'<img src='+app.imageServer + data[i].ImageUrl+'>' +
						'<p>' +
							'<span class="game-name">' + data[i].Title + '</span>'+
							'<span class="collect' +
								(($.inArray(data[i].Id, ids) != -1)?' collected': '') +
							'"></span>' +
							'<span class="recommend-no">' + data[i].RecommendNo + '</span>' +
							'<span class="clear"></span>' +
						'</p>'+
						'<p id="hover-layer" class="hover-layer-none">' +
							'<button class="start-game">开始游戏</button>' +
							'<br/>' +
							(data[i].IsTry?'<button class="try-game">免费试玩</button>' : '') +
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

	EEntertainment.prototype.show = function (subRouter) {
		var timeout;
		var callback;
		var that = this;

		this.zone.fadeIn(500);

		this.subRouter = subRouter || '';

		if (!this.firstTime) {
			this.getAds();
			this.getJackpotsGames('PT');  //获取pt奖金池
			this.getGameCategories();
			this.firstTime = true;
		}

		if (this.subRouter) {
			timeout = setTimeout(function () {
				$(that.zone.find('.middle-module li')[that.subRouter]).click();
				clearTimeout(timeout);
			}, 1000);		
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
	};

	EEntertainment.prototype.bindEvents = function () {
		var gameId;
		var imgIndex;
		var imageUl;
		var moreGame;
		var imgSrc;
		var parentLi;
		var platform;
		var gameType;
		var identify;
		var isTry;
		var li;
		var middleModuleUl;
		var lastScrollTop = 0;
		var direction;
		var st;
		var that = this;

		this.zone = $('.e-entertainment');
		imgUl          =  this.zone.find('.bottom-right ul');
		marqueeList    =  this.zone.find('.top-left-module');
		moreGame       =  this.zone.find('.bottom-right .more-game');
		middleModuleUl = this.zone.find('.middle-module');

		imgUl.delegate('li','mouseover',function(){
			  $(this).find("#hover-layer").removeClass("hover-layer-none").addClass("hover-layer");
		});

		imgUl.delegate('li', 'mouseout', function() {
			  $(this).find("#hover-layer").removeClass("hover-layer").addClass("hover-layer-none");
		});

		middleModuleUl.delegate('li', 'click', function () {
			middleModuleUl.find('li').removeClass('selected');
			$(this).addClass('selected');
			that.isScroll   = false;
			that.currenPage = 0;
			that.stopAnimation();
			//that.getJackpotsGames($(this).attr('data-type'));
			that.getFavoriteGameIds();
		});

		this.zone.delegate('.collect', 'click', function () {
			gameId = $(this).parent().parent('li').attr('data-id');

			if (!app.signedIn) {
				app.showLoginNotice();
				return;
			}

			if ($(this).hasClass('collected')) {
				alert('请去收藏列表中取消收藏');
			} else {
				$(this).addClass('collected');
				app.addFavoriteGame(gameId);
			}
		});

		this.zone.delegate('.start-game', 'click', function () {
			if (!app.signedIn) {
				app.showLoginNotice();
				return;
			}

			li       = $(this).parent().parent('li');
			identify = li.attr('data-identify');
			platform = li.attr('data-platform');
			gameType = li.attr('data-gametype');

			Service.getGameLoginUrl(platform, gameType, identify);
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

		this.zone.find('.search-btn').click(function () {
	    	that.getGameListByName();
		});

		this.zone.find('.search-box input').keypress(function(e) {
		    if(e.which == 13) {
		        that.getGameListByName();
		    }
		});

		$(document).scroll(function(e) {
		    var viewH     = $('body').height();
		    var contentH  = $('body').get(0).scrollHeight; 
		    var scrollTop = $('body').scrollTop();

			st = $(this).scrollTop();

			if (st > lastScrollTop) {
				direction = 'down';
			} else {
				direction = 'up';
			}

			lastScrollTop = st;

		    if (direction === 'down' && contentH - viewH - scrollTop <= 10 && moreGame.text() !== '没有更多') {
		    	moreGame.text('加载中...');
		    	that.isScroll = true;
		    	that.currenPage++;
		    	that.getGameList();
		    }
		});

		this.createLoader();
	};

	window.EEntertainment = EEntertainment;
}());