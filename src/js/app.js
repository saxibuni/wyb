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
		this.platforms = [
			'MG', 'PT', 'HG', 'BBIN', 'IBC', 'T188', 'EA', 'TB', 'AB', 'TTG', 'OW'
			, 'MT', 'HY', 'FG', 'OPUS', 'OPUS2', 'AG'
		];

		this.usernameReg         =  '^[A-Za-z0-9]{6,12}$';
		this.passwordReg         =  '^[A-Za-z0-9]{6,50}$';
		this.verifyReg           =  '^[A-Za-z0-9]{4}$';
		this.popularizeReg       =  '^[A-Za-z0-9]{10}$';
		this.emailReg            =  '^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$';
		this.emailReg            =  '';
		this.emailVerifyCodeReg  =  '^[0-9]{4}$';
		this.moneyReg            =  '^[0-9]+(.[0-9]{1,2})?$';
		this.phoneNumberReg      =  '^[0-9]{11}$';
		this.realNameReg         =  '';

		this.timeout = 12000;
		this.domain  = 'http://api.vebets.com/';
		this.imageServer = 'http://img.vebets.com/';
		this.urls    = {
			signUp: this.domain + 'api/Account/Regist',
			signIn: this.domain + 'api/Account/Login',
			signOut: this.domain + 'api/Account/Logout',
			verifyImage: this.domain + 'api/AuthCode/CreateImageCode',
			checkVerifyImage: this.domain + 'api/AuthCode/CheckImageCode?',
			loginStatus: this.domain + 'api/Account/GetLoginStatus',
			luckyDrawWinRecords: this.domain + 'api/Lucky/GetPrizes',
			
			getFavoriteGames: this.domain + 'api/Game/GetFavoriteGames?', //获取所有收藏的游戏
			addFavoriteGameById: this.domain + 'api/Game/AddFavorite',       //添加收藏游戏
			deleteFavoriteGameById: this.domain + 'api/Game/DeleteFavorite',  //删除收藏游戏

			getAds: this.domain + 'api/News/GetAds?',

			getJackpotsGames: this.domain + 'api/Game/GetJackpotsGames?',   //获取PT奖金池游戏
			getGameCategories: this.domain + 'api/Game/GetCategories?',   //获取电子游艺游戏类型
			getGameList: this.domain + 'api/Game/GetList?',              //获取电子游艺游戏列表

			getGameUrlForLogin: this.domain + 'api/Game/GetGameUrlForLogin?',

			queryPromoTypes: this.domain + 'api/Promo/GetAllType?',
			queryPromoListByType: this.domain + 'api/Promo/GetList',
			queryPromoContentById: this.domain + 'api/Promo/GetInfo',

			topupRecords: this.domain + 'api/Deposit/GetDepositList?',   //获取充值列表
			transferRecords: this.domain + 'api/Transfer/GetTransferList',
			withdrawRecords: this.domain + 'api/Withdrawal/GetWithdrawalList',
			bettingRecords: this.domain + 'api/Bet/GetBetList',
			dividentRecords: this.domain + '',
			queryStationLetter: this.domain + 'api/User/GetMessageList',
			queryNotices: this.domain + 'api/News/GetNotices',

			validateEmail: this.domain + 'api/User/ValidateEmail',     //验证邮箱
			validatePhone: this.domain + 'api/User/ValidatePhone',     //验证手机
			sendEmailValidateCode: this.domain + 'api/User/SendEmailValidateCode',  //发送邮箱验证码
			sendPhoneValidateCode: this.domain + 'api/User/SendMobileValidateCode', //发送手机验证码
			getForgetPwdValidateCode: this.domain + 'api/User/GetForgetPwdValidateCode?', //发送手机和邮箱验证码
			changePasswordByForget: this.domain + 'api/User/ChangePasswordByForget', //更改用户密码

			addUserBank: this.domain + 'api/Withdrawal/AddUserBank',
			getBankList: this.domain + 'api/Config/GetBankList',
			getProvinceList: this.domain + 'api/Config/GetProvinceList',
			getCityList: this.domain + 'api/Config/GetCityList?',

			getThirdPay: this.domain + 'api/Pay/GetThirdPay?id={id}',

			getWalletList: this.domain + 'api/Promo/GetWalletList?',
			getWalletCash: this.domain + 'api/User/GetWalletCash?',

			fastPay: this.domain + '',
			superFastTransfer: '',
			bankTransfer: '',

			getAllAPI: this.domain + 'api/Game/GetAllApi',
			getPlatformBalance: this.domain + 'api/Game/GetCash?',
			getBalanceSum: this.domain + 'api/Game/GetCashSum',

			getUserPays: this.domain + 'api/Deposit/GetUserPays',
			payForm: this.domain + 'api/Pay/PayForm',
			addDeposit: this.domain + 'api/Deposit/AddDeposit',
			getUserAdminBank: this.domain + 'api/Deposit/GetUserAdminBank?',

			changeLoginPassword: this.domain + 'api/User/ChangePasswordByUser',
			changeWithdrawPassword: this.domain + 'api/User/UpdateWithdrawalPwd',
			checkWithdrawPwd: this.domain + 'api/User/CheckWithdrawPwd',

			getLoginInUserInfo: this.domain + 'api/Account/GetLoginUser',
			getInfoByUserName: this.domain + 'api/User/GetByUserName?',

			getStationLetters: this.domain + 'api/User/GetMessageList?',
			getAnnouncements: this.domain + 'api/News/GetNotices?'
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
        	callback(json);
        }).fail(function (xhr, testStatus, error) {
            alert(error);
        });
	};

	app.prototype.getJackpotsGames = function (callback) {
		var that = this;

        $.ajax({
            type: 'GET',
            url: this.urls.getJackpotsGames + 'platform=pt&pageIndex=0&pageSize=20',
            dataType: 'json',
            timeout: this.timeout,
            xhrFields: {
            	withCredentials: true
            }
        }).done(function (json) {
        	if (typeof callback === 'function') {
        		callback(json);
        	}
        }).fail(function (xhr, testStatus, error) {
            alert(error);
        });
	};

	app.prototype.addFavoriteGame = function (gameId) {
		var that = this;

		console.log('添加收藏游戏gameId = ' + gameId);
        
        $.ajax({
            type: 'POST',
            url: this.urls.addFavoriteGameById,
            dataType: 'json',
            timeout: this.timeout,
            data: {
            	id: gameId
            },
            xhrFields: {
            	withCredentials: true
            }
        }).done(function (json) {
        	debugger
        	that.header.addCollectGame();
        }).fail(function (xhr, testStatus, error) {
            alert(error);
        });
	};

	app.prototype.deleteFavoriteGame = function (gameId, callback) {
		var that = this;

		console.log('删除收藏游戏gameId = ' + gameId);
        
        $.ajax({
            type: 'POST',
            url: this.urls.deleteFavoriteGameById,
            dataType: 'json',
            timeout: this.timeout,
            data: {
            	id: gameId
            },
            xhrFields: {
            	withCredentials: true
            }
        }).done(function (json) {
        	debugger
        	if (typeof callback === 'function') {
        		callback();
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

	app.prototype.showSignInDialog = function () {
		if (!this.signInDialog) {
			this.signInDialog = new SignIn();
			$('.app').append(this.signInDialog.getDom());
			this.signInDialog.bindEvents();
		}

		this.signInDialog.show();
	};

	app.prototype.personCenterRouter = function (mainRouter, subRouter) {
		if (!this.signedIn) {
			this.showSignInDialog();
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
	};

	app.a2jfdh22e3 = function () {
		
	};

	window.app = new app();
	window.app.goTo('homePage');
})();