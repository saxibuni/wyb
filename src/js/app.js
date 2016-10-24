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
		this.suspension = new Suspension();
		this.header     = new Header();
		this.footer     = new Footer();

		this.el  = 	this.header.getDom() +
					'<div class="main">' +
						'<div class="logo-wrapper">' +
						'</div>' +

						'<div class="main-wrapper">' +
						'</div>' +
					'</div>' +

					this.footer.getDom() +
					this.suspension.getDom();

		this.zone.append(this.el);
		this.initRegs();
		this.bindEvents();
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
		this.chineseNameReg      =  '';
		this.qqReg               =  '';
		this.urlReg              =  '';

		this.timeout       = 12000;
		this.domain        = 'http://api.vebets.com/';
		this.imageServer   = 'http://img.vebets.com/';
		this.liveCsUrl     = 'https://server.iad.liveperson.net/hc/63269832/?cmd=file&amp;file=preChatSurveyContent&amp;site=63269832&amp;sessionkey=H2423850037524059158-b3de96a250df4028b9d87d2aded38e6dK13065169&amp;survey=Pre-Chat';
		this.agentLoginUrl = 'http://at.vebets.com/home/login?redirectUrl=http%3a%2f%2fat.vebets.com%2fhome%2findex';
		this.urls  = {
			signUp: this.domain + 'api/Account/Regist',
			agentSignUp: this.domain + 'api/Account/RegistAgent',
			signIn: this.domain + 'api/Account/Login',
			signOut: this.domain + 'api/Account/Logout',
			verifyImage: this.domain + 'api/AuthCode/CreateImageCode',
			checkVerifyImage: this.domain + 'api/AuthCode/CheckImageCode?',
			loginStatus: this.domain + 'api/Account/GetLoginStatus',
			luckyDrawWinRecords: this.domain + 'api/Lucky/GetPrizes',
			
			getFavoriteGames: this.domain + 'api/Game/GetFavoriteGames?', //获取所有收藏的游戏
			addFavoriteGameById: this.domain + 'api/Game/AddFavorite',       //添加收藏游戏
			deleteFavoriteGameById: this.domain + 'api/Game/DeleteFavorite',  //删除收藏游戏
			getFavoriteGameIds: this.domain + 'api/Game/GetFavoriteGameIds?',

			getAds: this.domain + 'api/News/GetAds?',

			getJackpotsGames: this.domain + 'api/Game/GetJackpotsGames?',   //获取PT奖金池游戏
			getGameCategories: this.domain + 'api/Game/GetCategories?',   //获取电子游艺游戏类型
			getGameList: this.domain + 'api/Game/GetList?',              //获取电子游艺游戏列表
			getGameLaunchUrl: this.domain + 'api/Game/GetGameLaunchUrl?',  //游戏试玩地址
			getGameLoginUrl: this.domain + 'api/Game/GetGameLoginUrl?',   //登录后玩游戏的地址
			getJackpotsByUrl: this.domain + 'api/Game/GetJackpotsByUrl',  //获取PT单个游戏jackpot基础值
			getPtSumJackpotBaseValue: 'http://tickers.playtech.com/jackpots/new_jackpotxml.php?info=4&currency=cny&casino=greatfortune88',  //获取pt jackpot总奖池基础值
			getJackpots: this.domain + 'api/Game/GetJackpots',  //获取MG单个游戏和总游戏jackpot基础值

			getGameUrlForLogin: this.domain + 'api/Game/GetGameUrlForLogin?',

			queryPromoTypes: this.domain + 'api/Promo/GetAllType?',
			queryPromoListByType: this.domain + 'api/Promo/GetList',
			queryPromoContentById: this.domain + 'api/Promo/GetInfo',

			topupRecords: this.domain + 'api/Deposit/GetDepositList?',   //获取充值列表
			transferRecords: this.domain + 'api/Transfer/GetTransferList?',
			withdrawRecords: this.domain + 'api/Withdrawal/GetWithdrawalList?',
			bettingRecords: this.domain + 'api/Bet/GetBetList?',
			dividentRecords: this.domain + 'api/Lucky/JackpotList?',
			getStationLetters: this.domain + 'api/User/GetMessageList?',
			getAnnouncements: this.domain + 'api/News/GetNotices?',
			getStationLetterCount: this.domain + 'api/User/GetUnreadMessageCount?',

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
			getCenterWalletCash: this.domain + 'api/User/GetUserCash',

			getUserPays: this.domain + 'api/Deposit/GetUserPays',
			payForm: this.domain + 'api/Pay/PayForm',
			addDeposit: this.domain + 'api/Deposit/AddDeposit',
			getUserAdminBank: this.domain + 'api/Deposit/GetUserAdminBank?',

			transferToPlatform: this.domain + 'api/Transfer/DoTransferToGame',
			transferToAccount: this.domain + 'api/Transfer/DoTransferFromGame',

			withdraw: this.domain + 'api/Withdrawal/DoWithdrawal',
			getUserBankList: this.domain + 'api/User/GetUserBankList',

			getUserBankCount: this.domain + 'api/User/GetUserBankCount',

			changeLoginPassword: this.domain + 'api/User/ChangePasswordByUser',
			changeWithdrawPassword: this.domain + 'api/User/UpdateWithdrawalPwd',
			checkWithdrawPwd: this.domain + 'api/User/CheckWithdrawPwd',

			getLoginInUserInfo: this.domain + 'api/Account/GetLoginUser',
			getInfoByUserName: this.domain + 'api/User/GetByUserName?',
			updateUserInfo: this.domain + 'api/User/UpdateUserInfo',

			getRouteCheckList: this.domain + 'api/Config/GetSpareDomain'
		};
	};

	app.prototype.addFavoriteGame = function (gameId) {
		var that = this;
		var opt  =  {
			url: this.urls.addFavoriteGameById,
            data: {
            	'': gameId
            },
		};

		var callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				alert(json.Message);
				return;
			}

        	if (json.Data) {
        		that.header.getCollectList(true);
        	} else {
        		alert('添加失败');
        	}
		};

		Service.post(opt, callback);
	};

	app.prototype.deleteFavoriteGame = function (collectId, cb) {
		var that = this;
		var opt  =  {
			url: this.urls.deleteFavoriteGameById,
            data: {
            	'': collectId
            }
		};

		var callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				alert(json.Message);
				return;
			}

        	if (json.Data == true && typeof cb === 'function') {
        		cb();
        	} else {
        		alert('删除失败');
        	}
		};

		Service.post(opt, callback);
	};

	app.prototype.initRouter = function () {
		var temp;
		var hash;
		var page;
		var pos;
		var pos2;
		var key;
		var index;
		var wrapper = this.zone.find('.main-wrapper');
		var that = this;
		var dict = {
			'homePage'          : {'className': HomePage,          'index': 0, 'cssClass': 'home-page'},
			'liveVideo'         : {'className': LiveVideo,         'index': 1, 'cssClass': 'live-video'},
			'eEntertainment'    : {'className': EEntertainment,    'index': 2, 'cssClass': 'e-entertainment'},
			'sportsCompetition' : {'className': SportsCompetition, 'index': 3, 'cssClass': 'sports-competition'},
			'lotteryGame'       : {'className': LotteryGame,       'index': 4, 'cssClass': 'lottery-game'},
			'promoActivity'     : {'className': PromoActivity,     'index': 5, 'cssClass': 'promo-activity'},
			'clientDownload'    : {'className': ClientDownload,    'index': 6, 'cssClass': 'client-download'},
			'routeCheck'        : {'className': RouteCheck,        'index': -1, 'cssClass': 'route-check'},
			'personalCenter'	: {'className': PersonalCenter,    'index': -1, 'cssClass': 'personal-center'},
			'forgetPassword'    : {'className': ForgetPassword ,   'index': -1, 'cssClass': 'forget-password'},
			'agentSignup'       : {'className': AgentSignup,       'index': -1, 'cssClass': 'agent-signup'}
		};

		var routes = {};

		for (key in dict) {
			routes['/' + key] =  (function (pageName) {
				return function () {
					that.zone.find('.page').hide();

			      	if (pageName === 'eEntertainment') {
			      		$('.app').addClass('entertainment-bg');
			      	} else {
			      		$('.app').removeClass('entertainment-bg');
			      	}

					if (!that[pageName]) {
						that[pageName] = new (dict[pageName].className)();
						that.zone.find('.main-wrapper').append(that[pageName].getDom());
						that[pageName].bindEvents();
					}
					
					that.header.setStick(dict[pageName].index);
					that[pageName].show();
					that.currentPage = pageName;
				}
			})(key);
		}

      	this.router = Router(routes).init();

      	this.router.on('/promoActivity/:mainRouter/:subRouter', function (mainRouter, subRouter) {
			that.zone.find('.page').hide();
			var pageName = 'promoActivity';

			if (!that[pageName]) {
				that[pageName] = new (dict[pageName].className)();
				that.zone.find('.main-wrapper').append(that[pageName].getDom());
				that[pageName].bindEvents();
			}
			
			that.header.setStick(dict[pageName].index);
			that[pageName].show(mainRouter, subRouter);
			that.currentPage = pageName;
      	});

      	hash = window.location.hash;
      	pos  = hash.indexOf('#/');
      	temp = hash.substring(pos + 2);
      	pos2 = temp.indexOf('/');

      	if (pos2 !== -1) {
      		page = temp.substring(0, pos2);
      	} else {
      		page = temp;
      	}

      	if (pos == -1 || !dict[page]) {
      		this.router.setRoute('/homePage');
      	} else {
      		this.router.setRoute(page);
      	}

      	if (page === 'eEntertainment') {
      		$('.app').addClass('entertainment-bg');
      	} else {
      		$('.app').removeClass('entertainment-bg');
      	}
	};

	app.prototype.showSignInDialog = function () {
		if (!this.signInDialog) {
			this.signInDialog = new SignIn();
			$('.app').append(this.signInDialog.getDom());
			this.signInDialog.bindEvents();
		}

		this.signInDialog.show();
	};

	app.prototype.showSignUpDialog = function () {
		if (!this.signUpDialog) {
			this.signUpDialog = new SignUp();
			$('.app').append(this.signUpDialog.getDom());
			this.signUpDialog.bindEvents();
		}

		this.signUpDialog.show();
	};

	app.prototype.signedInProcedures = function () {
		this.signedIn = true;
		this.header.showSignedInHeader();

		if (this.currentPage === 'homePage') {
			this.homePage.showDepositLi();
			//this.homePage.getLuckyDrawWinRecords();
		} else if (this.currentPage === 'liveVideo') {
			this.liveVideo.getGameLoginUrls();
		} else if (this.currentPage === 'sportsCompetition') {
			this.sportsCompetition.getGameLoginUrls();
		} else if (this.currentPage === 'lotteryGame') {
			this.lotteryGame.getGameLoginUrls();
		}
	};

	app.prototype.signedOutProcedures = function () {
		this.signedIn = false;
		this.header.showSignedOutHeader();

		if (this.currentPage === 'homePage') {
			this.homePage.hideDepositLi();
		}
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

	app.prototype.getJackpotsGames = function (platform, n, cb) {
		var callback;
		var that =  this;
		var opt  =  {
			url: this.urls.getJackpotsGames,
	        data: {
	        	platform: platform,
	        	pageIndex: 0,
	        	pageSize: n
	        }
		};

		if (platform !== 'PT' && platform !== 'MG') {
			return;
		}

		callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				alert(json.Message);
				return;
			}

			if (typeof cb === 'function') {
				cb(json);
			}
		};

		Service.get(opt, callback);
	};

	app.prototype.formatJackpotsUrl = function (data) {
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
	
	app.prototype.showLoginNotice = function () {
		this.showSignInDialog();
	};

	app.prototype.showPersonalCenter = function () {
		this.userTotalInfo = {
		    "Id": 39,
		    "UserName": "mirek2016013",
		    "UserLevel": 4,
		    "UserLevelName": "四级会员",
		    "TrueName": "王小四",
		    "Cash": 1999997126.98,
		    "Email": "",
		    "EmailValidateStatus": false,
		    "Phone": "123",
		    "PhoneValidateStatus": false,
		    "Birthday": "2016-10-03 00:00:00",
		    "MaxDeposit": 500000,
		    "MinDeposit": 100,
		    "MaxWithdraw": 1000000,
		    "MinWithdraw": 0,
		    "SingleMaxWithdraw": 500000,
		    "SingleMinWithdraw": 100,
		    "ThirdPayDepositSingleMax": 50000,
		    "ThirdPayDepositSingleMin": 50,
		    "HasWithdrawalPassword": true,
		    "CreateTime": "2016-10-04 01:31:20",
		    "AliPayMaxAmount": 500,
		    "AliPayMinAmount": 10,
		    "WXMaxAmount": 500,
		    "WXMinAmount": 10,
		    "UserGroup": {
		        "Id": 3,
		        "GroupName": "大客户组",
		        "ThirdPays": null,
		        "AutoPays": null,
		        "AdminBanks": null
		    },
		    "LastLoginTime": "2016-10-23 23:33:47"
		};

		if (!this.personCenterDialog) {
			this.personCenterDialog = new PersonalCenter();
			$('.app').append(this.personCenterDialog.getDom());
			this.personCenterDialog.bindEvents();
		}

		this.personCenterDialog.show();
	};

	app.prototype.bindEvents = function () {
		this.suspension.bindEvents();
		this.header.bindEvents();
		this.footer.bindEvents();
	};

	window.app = new app();
	window.app.initRouter();
	//window.app.showPersonalCenter();
})();