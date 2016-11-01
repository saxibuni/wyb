(function () {
	function HomePage () {
		this.firstShow  = true;
		this.currentTab = 0;
		this.initDom();
	}
	
	HomePage.prototype.initDom = function () {
		var temp = 	'<div class="page home-page">' +
						'<div class="wrapper">' +
							'<div class="sliders"></div>' +

							'<div class="content">' +
								'<ul class="page-nav">' +
									this.createPageNav() +
								'</ul>' +

								'<div class="bottom-left">' +
									'<ul class="home-tab">' +
										this.createHomeTab() +
										'<div class="stick"></div>' +
									'</ul>' +

									'<div class="tab-content">' +
										'<div class="tab-sliders">' +
											this.createTabSliders() +
										'</div>' +

										'<ul class="tab-ul">' +
											this.createTabUl() +
										'</ul>' +
									'</div>' +
								'</div>' +

								'<div class="bottom-right">' +
									'<div class="title">' +
										'<div class="cup-icon"></div>' +
										'<span>超级彩金</span>' +
 									'</div>' +

 									'<div class="jackpot">' +
 										'<ul class="jackpot-vendor">' +
 											'<li>' +
		 										'<div class="ag-icon"></div>' +
		 										'<span>PT电子游戏(TOP6)</span>' +
 											'</li>' +
 										'</ul>' +

 										'<div class="jackpot-value">' +
 											'<span>JACKPOT</span>' +
 											'<span class="pt-jackpot-value"></span>' +
 										'</div>' +

 										this.createJackpotsTable() +
 									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>';

		this.el  = temp;
	};

	HomePage.prototype.getDom = function () {
		return this.el;
	};

	HomePage.prototype.createPageNav = function () {
		var i;
		var temp = '';
		var arr  = [
			{
				name: '电子游艺',
				title: '立即游戏',
				className: 'home-casino-icon',
				pageName: 'eEntertainment',
				liClassName: 'home-casino-li'
			},
			{
				name: '真人视讯',
				title: '立即游戏',
				className: 'home-video-icon',
				pageName: 'liveVideo',
				liClassName: 'home-video-li'
			},
			{
				name: '体育赛事',
				title: '立即游戏',
				className: 'home-sports-icon',
				pageName: 'sportsCompetition',
				liClassName: 'home-sports-li'
			},
			{
				name: '彩票游戏',
				title: '立即游戏',
				className: 'home-lottery-icon',
				pageName: 'lotteryGame',
				liClassName: 'home-lottery-li'
			},
			{
				name: '马上充值',
				title: '立即充值',
				className: 'home-deposit-icon',
				pageName: 'deposit',
				liClassName: 'home-deposit-li hide'
			},
			{
				name: '免费开户',
				title: '立即注册',
				className: 'home-signup-icon',
				pageName: 'signup',
				liClassName: 'home-signup-li'
			},
			{
				name: 'VIP计划',
				title: '立即加入',
				className: 'home-vip-icon',
				pageName: 'promoActivity',
				liClassName: 'home-vip-li'
			}
		];

		for (i = 0; i < arr.length; i++) {
			temp +=	'<li class="' + arr[i].liClassName + '" data-page="' + (arr[i].pageName || '') + '">' +
						'<div class="li-zone1">' +
							'<div class="home-icon ' + arr[i].className + '"></div>' +
							'<div class="li-name">' + arr[i].name + '</div>' +
							'<div class="overlay"></div>' +
						'</div>' +

						'<div class="li-zone2">' +
							arr[i].title +
						'</div>' +
					'</li>';
		}

		return temp;
	};

	HomePage.prototype.createHomeTab = function () {
		var i;
		var temp = '';
		var arr  = [
			{
				title: '优惠活动',
				tabId: '1',
				value: 'pd_wyb_index_promo_ads'
			},
			{
				title: '热门推荐',
				tabId: '2',
				value: 'pd_wyb_index_recommend_ads'
			},
			{
				title: '活动宣传',
				tabId: '3',
				value: 'pd_wyb_index_activity_ads'
			}
		];

		for (i = 0; i < arr.length; i++) {
			temp +=	'<li data-tab="' + arr[i].tabId + '" data-value="' + arr[i].value + '">' +
						'<div class="tab-title">' + arr[i].title + '</div>' +
						'<div class="dot"></div>' +
					'</li>';
		}

		return temp;
	};

	HomePage.prototype.createTabSliders = function () {
		var i;
		var temp = 	'<ul>';

		for (i = 0; i < 5; i++) {
			temp += 	'<li>' +
							'<img src="">' +
						'</li>';
		}

		temp +=		'</ul>';

		return temp;
	};

	HomePage.prototype.initTabSliders = function () {
		var that = this;

		this.tabSlider = this.zone.find('.tab-sliders').unslider({
			speed: 500,
			delay: 5000,
			autoplay: true,
			arrows: false
		});

		this.tabSlider.on('unslider.change', function(event, index, slide) {
			that.zone.find('.tab-ul li').removeClass('active');
			that.zone.find('.tab-ul li:nth-child(' + (parseInt(index) + 1) + ')').addClass('active');
		});
	};

	HomePage.prototype.createTabUl = function () {
		var i;
		var temp =	'<ul>';

		for (i = 0; i < 5; i++) {
			if (i % 2 === 0) {
				if (i === 0) {
					temp +=	'<li class="odd active">';
				} else {
					temp +=	'<li class="odd">';
				}
			} else {
				temp +=		'<li class="even">';
			}

			temp +=				'<div class="time">--</div>' +
								'<div class="info">--</div>' +
							'</li>';
		}

		temp +=		'</ul>';

		return temp;
	};

	HomePage.prototype.setPromoTabUl = function (data) {
		var i;
		var lis = this.zone.find('.tab-ul li');

		data = this.promoTabData || data;

		for (i = 0; i < data.length; i++) {
			$(lis[i]).attr('data-route', '0 ' + i);
			$(lis[i]).children('.time').text(data[i].StartTime.substring(0, 10) + '至' + data[i].EndTime.substring(0, 10));
			$(lis[i]).children('.info').text(data[i].Title);
		}

		this.promoTabData = data;
	};

	HomePage.prototype.setRecommendTabUl = function () {
		var i;
		var data;
		var lis = this.zone.find('.tab-ul li');

		this.recommendTabData = [
			{
				englishName: 'FEI CUI GONG ZHU',
				chineseName: '翡翠公主'
			},
			{
				englishName: 'IRON MAN2',
				chineseName: '钢铁侠'
			},
			{
				englishName: 'Highway Kings',
				chineseName: '漂移之王专业版'
			},
			{
				englishName: 'Funky Monkey',
				chineseName: '古怪猴子'
			},
			{
				englishName: 'Vacation Station',
				chineseName: '开心假期'
			}
		];

		data = this.recommendTabData;

		for (i = 0; i < data.length; i++) {
			$(lis[i]).children('.time').text(data[i].englishName);
			$(lis[i]).children('.info').text(data[i].chineseName);
		}
	};

	HomePage.prototype.createJackpotsTable = function () {
		var i;
		var temp =	'<div class="table jackpots-table">' +
						'<div class="thead">' +
							'<div class="tr">' +
								// '<div class="td td1">时间</div>' +
								'<div class="td td2">游戏名称</div>' +
								'<div class="td td3">奖金</div>' +
							'</div>' +
						'</div>' +

						'<div class="tbody">' +
							'<span>暂无数据</span>' +
						'</div>' +
					'</div>';

		return temp;
	};

	HomePage.prototype.setJackpotsTable = function (data) {
		var i;
		var temp = '';

		for (i = 0; i < data.length; i++) {
			temp += this.createJackpotsTr({
				game        : data[i].Title,
				platform    : data[i].Api.GamePlatform,         //取MG基础值的时候用
				id          : data[i].Id,                       //取MG基础值的时候用
				jackpotsUrl : app.formatJackpotsUrl(data[i]),   //取PT基础值的时候用
				className   : (i%2 === 0? 'odd': 'even')
			});
		}

		this.zone.find('.jackpots-table .tbody').html(temp);
	};

	HomePage.prototype.createJackpotsTr = function (data) {
		var temp = 	'<div class="tr jackpots-basevalue ' + data.className + '" ' +
							'data-url="' + data.jackpotsUrl + '" ' +
							'data-id="' + data.id + '" ' +
							'data-platform="' + data.platform + '">' +

						// '<div class="td td1">' +
						// 	'--' +
						// '</div>' +

						'<div class="td td2">' +
							data.game +
						'</div>' +

						'<div class="td td3">' +
							'--' +
						'</div>' +
					'</div>';

		return temp;
	};

	HomePage.prototype.show = function () {
		this.zone.fadeIn(500);

		if (this.firstShow) {
			this.getAds();
			this.getJackpots();
			this.setPtSumBaseValue();
			this.queryPromoListsByType(6);
			this.firstShow = false;
		}

		if (app.signedIn) {
			this.showDepositLi();
		} else {
			this.hideDepositLi();
		}
	};

	HomePage.prototype.hide = function () {
		this.zone.fadeOut(500);
	};

	HomePage.prototype.showDepositLi = function () {
		this.zone.find('.home-deposit-li').removeClass('hide');
		this.zone.find('.home-signup-li').addClass('hide');
	};

	HomePage.prototype.hideDepositLi = function () {
		this.zone.find('.home-deposit-li').addClass('hide');
		this.zone.find('.home-signup-li').removeClass('hide');
	};

    HomePage.prototype.createLoader = function() {
        var wrapper1 = this.zone.find('.sliders')[0];
        var wrapper2 = this.zone.find('.tab-sliders')[0];
        var wrapper3 = this.zone.find('.jackpots-table .tbody')[0];
        
        this.loader1 = new Loader(wrapper1, {
        	top: '20%'
        });

        this.loader2 = new Loader(wrapper2, {
        	top: '45%'
        });

        this.loader3 = new Loader(wrapper3, {
        	top: '20%'
        });
    };

	HomePage.prototype.getAds = function () {
		var callback;
		var that    =  this;
		var opt     =  {
			url: app.urls.getAds,
			data: {
				type: 'pd_wyb_index_ads',
				pageIndex: 0,
				pageSize: 10
			}
		};

		this.loader1.play();
		callback = function (data) {
			that.loader1.stop();
			
			if (!data) {
				return;
			}
			
			that.addSliders(data);
			$('body').scrollTop(0);
		};

		Service.get(opt, callback);
	};

	HomePage.prototype.getRecommendAds = function (type) {
		var callback;
		var that  =  this;
		var opt   =  {
			url: app.urls.getAds,
			data: {
				type: type,
				pageIndex: 0,
				pageSize: 5
			}
		};

		this.loader2.play();

		callback = function (json) {
			that.loader2.stop();

			if (json.StatusCode && json.StatusCode != 0) {
				alert(json.Message);
				return;
			}
			
			that.setRecommendSliders(json.list);
		};

		Service.get(opt, callback);
	};

	HomePage.prototype.getJackpots = function () {
		var that = this;
		var callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				alert(json.Message);
				return;
			}

			that.setJackpotsTable(json);
			that.resfreshBaseValues('PT');
		};

		app.getJackpotsGames('PT', 6, callback.bind(this));
	};

	HomePage.prototype.getHotGameInfos = function () {
		var name;
		var lis = this.zone.find('.tab-ul li');

		for (i = 0; i < lis.length; i++) {
			name = $(lis[i]).children('.info').text();
			this.getHotGameInfo(name, $(lis[i]));
		}
	};

	HomePage.prototype.getHotGameInfo = function (name, item) {
		var opt;
		var i;
		var callback;
		var tabUl  = this.zone.find('.tab-ul');
		var that   =  this;

		opt  =  {
			url: app.urls.getGameList,
			data: {
				title: name,
				pageIndex: 0,
				pageSize: 1
			}
		};

		callback = function (data) {
			if (data.StatusCode && data.StatusCode != 0) {
				alert(data.Message);
				return;
			}

			item.attr({
				'data-identify': data.list[0].GameIdentify,
				'data-platform': data.list[0].Api.GamePlatform,
				'data-gametype': data.list[0].GameTypeText_EN
			});
		};

		Service.get(opt, callback);
	};

	HomePage.prototype.resfreshBaseValues = function (parentPlatform) {
		var i;
		var item;
		var items;
		var platform;
		var gameId;
		var url;

		items = this.zone.find('.jackpots-table .jackpots-basevalue');
		
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

	HomePage.prototype.queryPromoListsByType = function (type) {
		var url;
		var that = this;

		url = app.urls.queryPromoListByType + '?type=' + type + '&pageIndex=0&pageSize=5'; 

        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            timeout: app.timeout,
            xhrFields: {
            	withCredentials: true
            }
        }).done(function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				alert(json.Message);
				return;
			}
			
        	that.setPromoTabUl(json.list);
        	that.setPromoSliders(json.list);
        }).fail(function (xhr, testStatus, error) {
            alert(error);
        });
	};

	HomePage.prototype.setPromoSliders = function (d) {
		var i;
		var data   = this.promoSliderData || d;
		var images = this.zone.find('.tab-sliders img');

		this.promoSliderData = data;

		for (i = 0; i < data.length; i++) {
			$(images[i]).attr('src', app.imageServer + data[i].Thumbnail);
		}
	};

	HomePage.prototype.setRecommendSliders = function (d) {
		var i;
		var data   = this.recommendSliderData || d;
		var images = this.zone.find('.tab-sliders img');

		this.recommendSliderData = data;

		for (i = 0; i < data.length; i++) {
			$(images[i]).attr('src', app.imageServer + data[i].ImgUrl);
		}
	};

	HomePage.prototype.setPtSingleBaseValue = function (url, item) {
		var callback;
		var that =  this;
		var opt  =  {
			url: app.urls.getJackpotsByUrl,
	        data: {
	        	url: url
	        }
		};

		callback = function (data) {
			item.children('.td3').text(data.Data);
		};

		Service.post(opt, callback);
	};

	HomePage.prototype.setTabUl = function (index) {
		if (index === 0) {
			this.setPromoTabUl();
		} else if (index === 1) {
			this.setRecommendTabUl();
		} else if (index === 2) {

		}
	};

	HomePage.prototype.setPtSumBaseValue = function () {
		var callback;
		var that =  this;
		var opt  =  {
			url: app.urls.getJackpotsByUrl,
	        data: {
	        	'': app.urls.getPtSumJackpotBaseValue
	        }
		};

		callback = function (data) {
			that.zone.find('.pt-jackpot-value').text(window.Util.formatNumToCur(data.Data));
			that.startJackpotAnimation();
		};

		Service.post(opt, callback);
	};

	HomePage.prototype.startJackpotAnimation = function () {
		var base;
		var jackpot = this.zone.find('.pt-jackpot-value');
		var that    = this;
		var gap     = 1.37;

		this.setInterval = setInterval(function () {
			base = window.Util.formatCurToNum( jackpot.text() );
			base += gap;
			base = base.toFixed(2);
			jackpot.text(window.Util.formatNumToCur(base));
		}, 1000);
	};

	HomePage.prototype.addSliders = function (data) {
		var i;
		var route;
		var len  = data.count;
		var arr  = data.list;

		var logoTemp = 	'<ul>';

		for (i = 0; i < len; i++) {
			logoTemp += 	'<li data-route="' + (i + 1) + ' -1">' +
								'<img src="' + app.imageServer + arr[i].ImgUrl + '">' +
							'</li>';
		}

		logoTemp +=		'</ul>';

		this.logoHtml = logoTemp;
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

	HomePage.prototype.bindEvents = function () {
		var platform;
		var gameType;
		var gameIdentify;
		var pageName;
		var type;
		var stick;
		var index;
		var route;
		var tabUlItem;
		var that = this;

		this.zone  = $('.home-page');
		stick      = this.zone.find('.home-tab .stick');

		this.zone.find('.page-nav').delegate('li', 'click', function () {
			pageName = $(this).attr('data-page');

			if ($(this).hasClass('home-signup-li')) {
				app.showSignUpDialog();
			} else if ($(this).hasClass('home-deposit-li')) {
				app.personCenterRouter(0, 0);
			} else {
				app.router.setRoute('/' + pageName);
			}
		});

		this.zone.find('.home-tab').delegate('li', 'click', function () {
			type            = $(this).attr('data-value');
			index           = $(this).index();
			that.currentTab = index;
			stick.css('left', index * 100 + 'px');

			if (index === 0) {
				that.setPromoSliders();
				that.setTabUl(index);
				return;
			}

			if (index === 1) {
				if (!that.recommendSliderData) {
					that.getRecommendAds(type);
				} else {
					that.setRecommendSliders();
				}

				that.setTabUl(index);

				tabUlItem = $(that.zone.find('.tab-ul li')[0]);

				if (!tabUlItem.attr('data-identify')) {
					that.getHotGameInfos();
				}

				return;
			}

			if (index === 2) {
				window.open('http://race.vebets.com/');
				return;
			}
		});

		this.zone.find('.tab-ul').delegate('li', 'click', function () {
			if (that.currentTab === 0) {
				route = $(this).attr('data-route').split(' ');
				app.router.setRoute('/promoActivity/' + route[0] + '/' + route[1]);
			} else if (that.currentTab === 1) {
				if (!app.signedIn) {
					app.showLoginNotice();
					return;
				}
				
				gameIdentify = $(this).attr('data-identify');
				platform     = $(this).attr('data-platform');
				gameType     = $(this).attr('data-gametype');
				Service.getGameLoginUrl(platform, gameType, gameIdentify);
			}
		});

		this.createLoader();
		this.initTabSliders();
	};

	window.HomePage = HomePage;
}());


