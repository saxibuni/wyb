(function () {
	function EEntertainment () {
		this.flag1 = false;  //奖金池游戏是否构造完成
		this.flag2 = false;  //GameList是否构造完成

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

	EEntertainment.prototype.show = function (subRouter) {
		var timeout;
		var callback;
		var that = this;

		this.subRouter = subRouter || '';

		if (this.subRouter) {
			this.zone.fadeIn(500, function () {
				$(that.zone.find('.middle-module li')[that.subRouter]).click();
			});
		} else {
			this.zone.fadeIn(500);
		}

		if (!this.firstTime) {
			this.getAds();
			this.getJackpotsGames('PT');  //获取pt奖金池
			this.getGameCategories();
			this.firstTime = true;
		}
	};

	EEntertainment.prototype.hide = function () {
		this.zone.fadeOut(500);
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
	        	pageSize: 25
	        }
		};

		if (platform !== 'PT' && platform !== 'MG') {
			return;
		}

		callback = function (json) {
        	that.bonusPoolData = json;
        	that.setMarqueenItems(true);
		};

		Service.get(opt, callback);
	};

	/*
	**  获取游戏树
	*/
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

	EEntertainment.prototype.checkDomStatus = function () {
		if (this.flag1 && this.flag2) {
			this.startGlobalInterval();
			this.flag1 = false;  //恢复原始设置，防止切换平台的时候又重新startGlobalInterval
			this.flag2 = false;  
		}
	};

	EEntertainment.prototype.startGlobalInterval = function () {
		var count = 0;
		var that  = this;

		that.globalRefreshBaseJackpots();

		this.globalBigInterval = setInterval(function () {
			that.globalRefreshBaseJackpots();
			count = that.animateMarqueen(count);
		}, 10000);

		this.globalSmallInterval = setInterval(function () {
			that.globalRefreshJackpots();
		}, 1000);
	};

	EEntertainment.prototype.getRefreshItemsdict = function () {
		var i;
		var url;
		var item1;
		var item2;
		var id1;
		var id2;
		var dict            = {};
		var currentPlatform = this.zone.find('.middle-module li.selected').attr('data-type');
		var marqueenLis     = this.zone.find('.left-list .marqueen ul li');
		var gamelis         = this.zone.find('.bottom-right ul li[data-showjackpots="true"]');

		if (currentPlatform === 'PT') {  //都是PT，小游戏区就可能有游戏与奖金池游戏重合
			for (i = 0; i < marqueenLis.length; i++) {
				item1     = $(marqueenLis[i]).children('.jackpots-basevalue');
				id1       = item1.attr('data-id');
				url       = item1.attr('data-url');
				dict[id1] = {
					items: [item1],
					url: url
				};
			}

			for (i = 0; i < gamelis.length; i++) {
				item2 = $(gamelis[i]);
				id2   = item2.attr('data-id');
				url   = item2.attr('data-url');

				if (dict[id2]) {
					dict[id2].items.push($(item2.children('.jackpot-value-span')));
				} else {
					dict[id2] = {
						items: [$(item2.children('.jackpot-value-span'))],
						url: url
					};
				}
			}
		} else {
			for (i = 0; i < marqueenLis.length; i++) {
				item1     = $(marqueenLis[i]).children('.jackpots-basevalue');
				id1       = item1.attr('data-id');
				url       = item1.attr('data-url');
				dict[id1] = {
					items: [item1],
					url: url
				};
			}

			for (i = 0; i < gamelis.length; i++) {
				item2     = $(gamelis[i]);
				id2       = item2.attr('data-id');
				dict[id2] = {
					items: [$(item2.children('.jackpot-value-span'))],
					platform: currentPlatform,
					gameId: id2
				};
			}
		}

		return dict;
	};

	EEntertainment.prototype.globalRefreshJackpots = function () {
		var i;
		var key;
		var items;
		var value;
		var small      = 0.07;
		var big        = 0.37;
		var dict       = this.getRefreshItemsdict();
		var jackpotSum = this.zone.find('.top-right-module .jackpot-value');

		if (jackpotSum.text()) {
			value =  window.Util.formatCurToNum( jackpotSum.text() );
			value += big;
			value =  value.toFixed(2);
			jackpotSum.text(window.Util.formatNumToCur(value));
		}

		for (key in dict) {
			items = dict[key].items;

			for (i = 0; i < items.length; i++) {
				if (items[i].text()) {
					value = window.Util.formatCurToNum(items[i].text());
					value += small;
					value = value.toFixed(2);
					items[i].text(window.Util.formatNumToCur(value));
				}
			}
		}
	};

	EEntertainment.prototype.globalRefreshBaseJackpots = function () {
		var key;
		var dict = this.getRefreshItemsdict();

		this.setPtSumBaseValue();

		for (key in dict) {
			if (dict[key].url) {
				this.setPtSingleBaseValue(dict[key].url, dict[key].items);
			} else {
				this.setMgSingleBaseValue(dict[key].platform, dict[key].gameId, dict[key].items);
			}
		}
	};

	EEntertainment.prototype.animateMarqueen = function (count) {
		var marqueenUl      =  this.zone.find('.left-list .marqueen ul');
		var lis             =  marqueenUl.children('li');
		var len             =  lis.length;
		var h               =  parseFloat(marqueenUl.children('li').css('height'));
		var ulFirstLi       =  $(marqueenUl.children('li')[count]);
		var game            =  ulFirstLi.children('p:first-child').text();
		var win             =  ulFirstLi.children('p:last-child').text();
		var marqueenLi1Row2 =  $(this.zone.find('.marqueen-li1 .row')[1]);
		var top             =  (0 - (count + 1) * h)  + 'px';

		if (count > 15) {
			count = 0;
			marqueenUl.stop();
			marqueenUl.animate({'top': 0}, 0);
		} else {
			marqueenUl.animate({'top': top}, 1000);
			marqueenLi1Row2.children('.marqueen-li1-game').text(game);
			marqueenLi1Row2.children('.marqueen-li1-win').text(win);
			this.animateMarqueenLi1();
			count++;
		}

		return count;
	};

	EEntertainment.prototype.animateMarqueenLi1 = function (data) {
		var wrapper = this.zone.find('.marqueen-li1-wrapper');
		var rows    = this.zone.find('.marqueen-li1 .row');
		var row1    = $(rows[0]);
		var row2    = $(rows[1]);
		var h       = parseFloat(row1.css('height'));
		var temp    = 	'<div class="row">' +
							'<div class="marqueen-li1-game"></div>' +
							'<div class="marqueen-li1-win"></div>' +
							'<div class="clear"></div>' +
						'</div>';

		row1.animate({'top': 0 - h + 'px'});
		row2.animate({'top': '0'}, 1000, function () {
			row1.remove();
			wrapper.append(temp);
		});
	};

	EEntertainment.prototype.setPtSingleBaseValue = function (url, items) {
		var i;
		var callback;
		var that =  this;
		var opt  =  {
			url: app.urls.getJackpotsByUrl,
	        data: {
	        	'': url
	        }
		};

		callback = function (data) {
			if (parseInt(data.Data) === 0) {
				items[0].parent('li').remove();

				if (items.length > 1) { //如果游戏列表和奖金池的游戏的jackpots都是0
					items[1].text('0.00');
				}
			} else {
				for (i = 0; i < items.length; i++) {
					items[i].text( window.Util.formatNumToCur(data.Data) );
				}
			}
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
		};

		Service.post(opt, callback);
	};

	EEntertainment.prototype.setMgSingleBaseValue = function (platform, gameId, items) {
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
			for (i = 0; i < items.length; i++) {
				items[i].text( window.Util.formatNumToCur(data.Data) );
			}
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
		};

		Service.post(opt, callback);
	};

	EEntertainment.prototype.stopAnimation = function () {
		this.zone.find('.marqueen-li1 .row').stop();
		this.zone.find('.left-list .marqueen ul').stop();
		clearInterval(this.globalSmallInterval);
		this.globalSmallInterval = undefined;
		clearInterval(this.globalBigInterval);
		this.globalBigInterval = undefined;
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

		this.flag1 = true;
		this.checkDomStatus();
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
		var item;
		var gameId;
		var ul;
		var lis;
		var url;
		var html      = '';
		var platform  = this.zone.find('.middle-module li.selected').attr('data-type');
		var ids       = this.favoriteGameIds[platform] || [];

		for (i = 0; i < data.length; i++) {
			html +=	'<li      data-id="' + data[i].Id + '"' +
							' data-identify="' + data[i].GameIdentify + '"' +
							' data-try="' + data[i].IsTry + '"' +
							' data-gametype="' + data[i].GameTypeText_EN + '"' +
							' data-platform="' + data[i].Api.GamePlatform + '"' +
							' data-collectid=""' +
							' data-cnname="' + data[i].Title + '"' +
							' data-showjackpots="' + data[i].ShowJackpots + '"' +
							((data[i].Api.GamePlatform === 'PT' && data[i].ShowJackpots)?' data-url="' + app.formatJackpotsUrl(data[i]) + '"': '') + 
							'>' +
						(data[i].ShowJackpots?'<p class="jackpot-value-span"></p>': '') +
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

		ul = this.zone.find('.bottom-right ul');

		if (!this.isScroll) {
			ul.html(html);
		} else {
			ul.append(html);
		}

		this.flag2 = true;
		this.checkDomStatus();
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
		var cb;
		var name;
		var middleModuleUl;
		var lastScrollTop = 0;
		var direction;
		var st;
		var item;
		var that = this;

		this.zone      = $('.e-entertainment');
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
			name     = li.attr('data-cnname');

			if (!app.win || app.win.closed) {
				app.win = window.open("loading.html");
			}

			cb = function (data) {
				app.win.location.href = data;
			};

			Service.getGameLoginUrl(platform, gameType, identify, cb.bind(this));
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