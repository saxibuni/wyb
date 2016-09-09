/*
 *  bet页面 入口函数
 */

(function () {
	'use strict';

	function app () {
		this.zone = $('.app');
		this.init();
		this.bindEvents();
	}

	app.prototype.init = function () {
		this.header   = new Header();
		this.footer   = new Footer();
		this.homePage = new HomePage();

		this.el  = 	this.header.getDom() +

					'<div class="main">' +
						'<div class="main-wrapper">' +
							this.homePage.getDom() +
						'</div>' +
					'</div>' +

					this.footer.getDom();

		this.zone.append(this.el);
		this.homePage.bindEvents();
		//this.initRouter();
		this.goTo('homePage');
	};
	
	app.prototype.goTo = function (pageName) {
		var wrapper = this.zone.find('.main-wrapper');
		var index;
		var tar;
		var that = this;
		var dict = {
			'homePage'          : {'className': HomePage,          'cssClass': 'home-page'},
			'liveVideo'         : {'className': LiveVideo,         'cssClass': 'live-video'},
			'eEntertainment'    : {'className': EEntertainment,    'cssClass': 'main-content'},
			'sportsCompetition' : {'className': SportsCompetition, 'cssClass': 'sports-competition'},
			'lotteryGame'       : {'className': LotteryGame,       'cssClass': 'lottery-game'},
			'promoActivity'     : {'className': PromoActivity,     'cssClass': 'promo-activity'},
			'clientDownload'    : {'className': ClientDownload,    'cssClass': 'client-download'},
			'routeCheck'        : {'className': RouteCheck,        'cssClass': 'route-check'},
			'helpPage'			: {'className': HelpPage,          'cssClass': 'help-page'},
			'personalCenter'	: {'className': PersonalCenter,    'cssClass': 'personal-center'},
			'forgetPassword'    : {'className': ForgetPassword ,   'cssClass': 'forget-password'}
		};

		if (!that[pageName]) {
			that[pageName] = new (dict[pageName].className)();
			that.zone.find('.main-wrapper').append(that[pageName].getDom());
			that[pageName].bindEvents();
		}

		index = $('.' + dict[pageName].cssClass).index();
		wrapper.css('left', (0 - 1024 * index) + 'px');
	};

	app.prototype.initRouter = function () {
		var key;
		var index;
		var wrapper = that.zone.find('.main-wrapper');
		var that = this;
		var dict = {
			'homePage'          : HomePage,
			'liveVideo'         : LiveVideo,
			'eEntertainment'    : EEntertainment,
			'sportsCompetition' : SportsCompetition,
			'lotteryGame'       : LotteryGame,
			'promoActivity'     : PromoActivity,
			'clientDownload'    : ClientDownload,
			'routeCheck'        : RouteCheck,
			'helpPage'			: HelpPage,
			'personalCenter'	: PersonalCenter
		};

		for (key in dict) {
			page('/' + key, (function (pageName) {
				return function () {
					that.zone.find('.page').hide();

					if (!that[pageName]) {
						that[pageName] = new (dict[pageName])();
						that.zone.find('.main').append(that[pageName].getDom());
						that[pageName].bindEvents();
					}

					that[pageName].show();
				}
			})(key));
		}

		page();
		page('/homePage');
	};

	app.prototype.bindEvents = function () {
		this.header.bindEvents();
		this.footer.bindEvents();
		this.homePage.bindEvents();
	};

	window.app = new app();
})();