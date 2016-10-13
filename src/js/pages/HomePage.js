(function () {
	function HomePage () {
		this.initDom();
	}
	
	HomePage.prototype.initDom = function () {
		this.suspension = new Suspension();

		this.notice = new Notice2({
			id: 'home-page-notice',
			hasBtn: false
		});

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
						
						this.suspension.getDom() +
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
				pageName: 'eEntertainment'
			},
			{
				name: '真人视讯',
				title: '立即游戏',
				className: 'home-video-icon',
				pageName: 'liveVideo'
			},
			{
				name: '体育赛事',
				title: '立即游戏',
				className: 'home-sports-icon',
				pageName: 'sportsCompetition'
			},
			{
				name: '彩票游戏',
				title: '立即游戏',
				className: 'home-lottery-icon',
				pageName: 'lotteryGame'
			},
			{
				name: '免费开户',
				title: '立即注册',
				className: 'home-signup-icon',
				pageName: 'eEntertainment'
			},
			{
				name: 'VIP计划',
				title: '立即加入',
				className: 'home-vip-icon'
			}
		];

		for (i = 0; i < arr.length; i++) {
			temp +=	'<li data-page="' + (arr[i].pageName || '') + '">' +
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

		for (i = 0; i < 6; i++) {
			temp += 	'<li>' +
							'<img src="">' +
						'</li>';
		}

		temp +=		'</ul>';

		return temp;
	};

	HomePage.prototype.initTabSliders = function () {
		this.zone.find('.tab-sliders').unslider({
			speed: 500,
			delay: 5000,
			autoplay: true,
			arrows: false
		});
	};

	HomePage.prototype.createTabUl = function () {
		var i;
		var temp =	'<ul>';

		for (i = 0; i < 5; i++) {
			if (i % 2 === 0) {
				temp +=	'<li class="odd">';
			} else {
				temp +=	'<li class="even">';
			}

			temp +=			'<div class="time">' +
								'2016-09-20 15:50:46' +
							'</div>' +

							'<div class="info">' +
								'电子游戏-百万富翁全新上线' +
							'</div>' +
						'</li>';
		}

		temp +=		'</ul>';

		return temp;
	};

	HomePage.prototype.createJackpotsTable = function () {
		var i;
		var temp =	'<div class="table jackpots-table">' +
						'<div class="thead">' +
							'<div class="tr">' +
								'<div class="td td1">时间</div>' +
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

	HomePage.prototype.setJackpotstable = function (data) {
		var i;
		var temp = '';

		for (i = 0; i < data.length; i++) {
			temp += this.createJackpotsTr({
				game        : data[i].Title,
				platform    : data[i].Api.GamePlatform,         //取MG基础值的时候用
				id          : data[i].Id,                       //取MG基础值的时候用
				jackpotsUrl : app.formatJackpotsUrl(data[i])    //取PT基础值的时候用
			});
		}

		this.zone.find('.jackpots-table .tbody').html(temp);
	};

	HomePage.prototype.createJackpotsTr = function (data) {
		var temp = 	'<div class="tr jackpots-basevalue" ' +
							'data-url="' + data.jackpotsUrl + '" ' +
							'data-id="' + data.id + '" ' +
							'data-platform="' + data.platform + '">' +

						'<div class="td td1">' +
							'--' +
						'</div>' +

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
		this.getAds();
		this.getAds2();
		this.getJackpots();
		this.setPtSumBaseValue();
	};

	HomePage.prototype.hide = function () {
		this.zone.fadeOut(500);
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
			if (!data) {
				return;
			}
			
			that.addSliders(data);
			that.loader1.stop();
		};

		Service.get(opt, callback);
	};

	HomePage.prototype.getAds2 = function (type) {
		var callback;
		var that  =  this;
		var opt   =  {
			url: app.urls.getAds,
			data: {
				type: type || 'pd_wyb_index_promo_ads',
				pageIndex: 0,
				pageSize: 6
			}
		};

		this.loader2.play();

		callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				alert(json.Message);
				return;
			}
			
			that.setSliders2(json.list);
			that.loader2.stop();
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

			that.setJackpotstable(json);
			that.resfreshBaseValues('PT');
		};

		app.getJackpotsGames('PT', 6, callback.bind(this));
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

	HomePage.prototype.setSliders2 = function (data) {
		var i;
		var images = this.zone.find('.tab-sliders img');

		for (i = 0; i < data.length; i++) {
			$(images[i]).attr('src', app.imageServer + data[i].ImgUrl);
		}
	};

	HomePage.prototype.setTabUl = function () {
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
			that.zone.find('.pt-jackpot-value').text(data.Data);
			that.startJackpotAnimation();
		};

		Service.post(opt, callback);
	};

	HomePage.prototype.startJackpotAnimation = function () {
		var base;
		var jackpot = this.zone.find('.pt-jackpot-value')
		var that    = this;
		var gap     = 35.57;

		this.setInterval = setInterval(function () {
			base = parseFloat(jackpot.text());
			base += gap;
			base = base.toFixed(2);
			jackpot.text(base);
		}, 1000);
	};

	HomePage.prototype.addSliders = function (data) {
		var i;
		var len = data.count;
		var arr = data.list;
		var logoTemp = 	'<ul>';

		for (i = 0; i < len; i++) {
			logoTemp += 	'<li>' +
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
			arrows: {
				prev: 	'<a class="unslider-arrow prev" style="margin-top: -15%">' +
							'<img src="../img/left-normal.png">' +
						'</a>',
				next: 	'<a class="unslider-arrow next" style="margin-top: -15%">' +
							'<img src="../img/right-normal.png">' +
						'</a>'
			}
		});
	};

	HomePage.prototype.bindEvents = function () {
		var pageName;
		var type;
		var stick;
		var index;

		this.zone        = $('.home-page');
		stick            = this.zone.find('.home-tab .stick');

		this.zone.find('.page-nav').delegate('li', 'click', function () {
			pageName = $(this).attr('data-page');
			app.router.setRoute('/' + pageName);	
		});

		this.zone.find('.home-tab').delegate('li', 'click', function () {
			type  = $(this).attr('data-value');
			index = $(this).index();
			stick.css('left', index*100 + 'px');
			that.getAds2(type);
			that.setTabUl();
		});

		this.notice.bindEvents();
		this.suspension.bindEvents();
		this.createLoader();
		this.initTabSliders();
	};

	window.HomePage = HomePage;
}());


