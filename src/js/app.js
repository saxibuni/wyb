/*
 *  bet页面 入口函数
 */

(function () {
	'use strict';

	function app () {
		this.zone = $('.app');
		this.init();
	}

	app.prototype.init = function () {
		this.header   = new Header();
		this.footer   = new Footer();
		this.homePage = new HomePage();

		this.el  = 	this.header.getDom() +
					'<div class="main">' +
						'<div class="logo-wrapper">' +
						'</div>' +

						'<div class="main-wrapper">' +
							this.homePage.getDom() +
						'</div>' +
					'</div>' +

					this.footer.getDom();

		this.zone.append(this.el);
		this.bindEvents();
		this.initRegs();
		//this.initRouter();
	};
	
	app.prototype.initRegs = function () {
		this.usernameReg         =  '^[A-Za-z0-9]{6,12}$';
		this.passwordReg         =  '^[A-Za-z0-9]{6,50}$';
		this.verifyReg           =  '^[A-Za-z0-9]{4}$';
		this.popularizeReg       =  '^[A-Za-z0-9]{10}$';
		this.emailReg            =  '^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$';
		this.emailVerifyCodeReg  =  '^[0-9]{4}$';
		this.moneyReg            =  '^[0-9]+(.[0-9]{1,2})?$';
		this.phoneNumberReg      =  '^[0-9]{11}$';

		this.timeout = 6000;
		this.domain  = 'http://api.vbetctrl.net/';
		this.urls    = {
			signUp: this.domain + 'api/Account/Regist',
			signIn: this.domain + 'api/Account/Login',
			signOut: this.domain + 'api/Account/Logout',
			verifyImage: this.domain + 'api/AuthCode/CreateImageCode',
			checkVerifyImage: this.domain + 'api/AuthCode/CheckImageCode?securityCode=',
			loginStatus: this.domain + 'api/Account/GetLoginStatus',
			luckyDrawWinRecords: this.domain + 'api/Lucky/GetPrizes',
			getJackpot: this.domain + 'api/Game/GetJackpots',
			queryPromoTypes: this.domain + 'api/Promo/GetAllType',
			queryPromoListByType: this.domain + 'api/Promo/GetList',
			queryPromoContentById: this.domain + 'api/Promo/GetInfo',
			topupRecords: this.domain + 'api/Withdrawal/GetWithdrawalList',
			transferRecords: this.domain + 'api/Transfer/GetTransferList',
			withdrawRecords: this.domain + 'api/Withdrawal/GetWithdrawalList',
			bettingRecords: this.domain + 'api/Bet/GetBetList',
			dividentRecords: this.domain + '',
			queryStationLetter: this.domain + 'api/User/GetMessageList',
			queryNotices: this.domain + 'api/News/GetNotices'
		};
	};

	app.prototype.getLoginStatus = function (callback) {
        $.ajax({
            type: 'GET',
            url: this.urls.loginStatus,
            dataType: 'json',
            timeout: this.timeout,
            xhrFields: {
            	withCredentials: true
            }
        }).done(function (json) {
        	console.log('登录状态：' + json);
        	if (json === 0) {
        		if (typeof callback === 'function') {
        			callback();
        		}
        	} else if (json === 1) {
        		alert('未登录');
        	} else if (json === 2) {
        		alert('已过期');
        	}
        }).fail(function (xhr, testStatus, error) {
            alert(error);
        });
	};

	app.prototype.goTo = function (pageName) {
		var wrapper = this.zone.find('.main-wrapper');
		var index;
		var tar;
		var height;
		var logoHeiht;
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
			'personalCenter'	: {'className': PersonalCenter,    'cssClass': 'personal-center'},
			'forgetPassword'    : {'className': ForgetPassword ,   'cssClass': 'forget-password'}
		};

		$('.page').hide();

		if (!that[pageName]) {
			that[pageName] = new (dict[pageName].className)();
			that.zone.find('.main-wrapper').append(that[pageName].getDom());
			that[pageName].bindEvents();
		}

		//没有轮播图
		if (!that[pageName].addSliders) {
			$('.main .logo-wrapper').html('');
			$('.main .logo-wrapper').css('height', '0');
		}

		if (pageName === 'homePage') {
			$('.main-wrapper').addClass('home');
		} else {
			$('.main-wrapper').removeClass('home');
		}

		// if (pageName === 'sportsCompetition' || 
		// 	pageName === 'lotteryGame' || 
		// 	pageName === 'clientDownload') {
		// 	this.footer.fixToBottom();
		// } else {
		// 	this.footer.releaseFix();
		// }

		that[pageName].show();
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

	app.prototype.personCenterRouter = function (mainRouter, subRouter) {
		if (!this.signedIn) {
			if (!this.signInDialog) {
				this.signInDialog = new SignIn();
				$('.app').append(this.signInDialog.getDom());
				this.signInDialog.bindEvents();
			}

			this.signInDialog.show();
			return;
		}

		if (!this.personCenterDialog) {
			this.personCenterDialog = new PersonalCenter();
			$('.app').append(this.personCenterDialog.getDom());
			this.personCenterDialog.bindEvents();
		}

		this.personCenterDialog.show();

		this.personCenterDialog.zone
			.find('.tree li:eq(' + mainRouter +')')
			.trigger('click');
		this.personCenterDialog.zone
			.find('[menu-index=' + mainRouter +']')
			.find('.tab > li:eq(' + subRouter + ')')
			.trigger('click');
	};

	app.prototype.bindEvents = function () {
		this.header.bindEvents();
		this.footer.bindEvents();
		this.homePage.bindEvents();
		this.homePage.bindEvents();
	};

	window.app = new app();
	window.app.goTo('homePage');
})();