(function () {
	function Header (opt) {
		this.opt = opt || {};
		this.initDom();
	}

	Header.prototype.initDom = function () {
		var temp = '';

		if (!this.opt.helpPage) {
			this.notice = new Notice2({
				id: 'app-notice',
				hasBtn: false
			});
		}

		this.switch = new Switch({id: 'money-switch'});

		temp =	'<div class="header">' +
					'<div class="wrapper">' +
						'<div class="row1">' +
							'<div class="row1-wrapper">' +
								'<ul>' +
									'<li class="li-logo left">' +
										'<div class="icon logo-icon-small"></div>' +
										'<div class="icon menu menu-icon"></div>' +
										'<span class="text menu main-menu-text">主菜单</span>' +
									'</li>' +

									'<li class="li-language">' +
										'<span class="text">CHN</span>' +
										'<div class="icon down-icon"></div>' +
									'</li>' +

									'<li class="li-time-value">' +
										'<span class="text">10:09:09</span>' +
									'</li>' +

									'<li class="li-bzzx">' +
										'<div class="icon bzzx-icon"></div>' +
									'</li>' +

									'<li class="li-wdsc">' +
										'<div class="icon wdsc-icon"></div>' +
									'</li>' +

									'<li class="li-signin-signup">' +
										'<div class="sign-button signin-button">登录</div>' +
										'<div class="sign-button signup-button">注册</div>' +
									'</li>' +

									'<li class="li-money-actions">' +
										'<ul>' +
											'<li class="grzx-layer action" data-value="0 0">充值</li>' +
											'<li class="grzx-layer action" data-value="0 2">提款</li>' +
											'<li class="grzx-layer action" data-value="0 1">转账</li>' +
										'</ul>' +
									'</li>' +

									'<li class="li-balance">' +
										'<div class="icon refresh-icon"></div>' +
										'<div class="balance-item money-icon">¥</div>' +
										'<div class="balance-item balance-value">12345678.00</div>' +
										'<div class="icon down-icon"></div>' +
										this.switch.getDom() +
									'</li>' +

									'<li class="li-grzx">' +
										'<div class="grzx-layer message" data-value="3 0">' +
											'<div class="icon message-icon"></div>' +
											'<div class="dot message-count">1</div>' +
										'</div>' +

										'<div class="title nav-page grzx" data-value="personalCenter">' +
											'<span>个人中心</span>' +
											'<div class="icon down-icon"></div>' +
										'</div>' +
									'</li>' +

									'<div class="clear"></div>' +
								'</ul>' +

								'<div class="grzx-float-window">' +
									'<div class="title">' +
										'<div class="username">LORENZO</div>' +
										'<div class="userid">' +
											'<span class="text">ID:</span>' +
											'<span class="id-value">2678899511</span>' +
										'</div>' +
									'</div>' +

									'<ul>' +
										'<li class="grzx-layer" data-value="0 0"><span>资金管理</span></li>' +
										'<li class="grzx-layer" data-value="1 3"><span>投注记录</span></li>' +
										'<li class="grzx-layer" data-value="1 0"><span>充值记录</span></li>' +
										'<li class="grzx-layer" data-value="2 1"><span>修改密码</span></li>' +
										'<li class="signout"><span>退出</span></li>' +
									'</ul>' +
								'</div>' +

								'<div class="language-float-window">' +
									'<ul>' +
										'<li><span>中文</span></li>' +
										'<li><span>English</span></li>' +
									'</ul>' +
								'</div>' +

								'<div class="wdsc-float-window">' +
									'<ul>' +
									'</ul>' +
									'<div class="close-wdsc">' +
										'<img src="../img/pack-up-arrow.png">' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +

						'<div class="row2">' +
							'<div class="row2-wrapper">' +
								'<div class="header-logo">' +
									'<div class="icon logo-icon-big"></div>' +
								'</div>' +

								'<div class="button-zone">' +
									'<div class="lxkf-button">联系客服</div>' +
								'</div>' +

								'<ul class="pages">' +
									'<li data-value="homePage">首页</li>' +
									'<li data-value="liveVideo">真人视讯</li>' +
									'<li data-value="eEntertainment">电子游艺</li>' +
									'<li data-value="sportsCompetition">体育竞技</li>' +
									'<li data-value="lotteryGame">彩票游戏</li>' +
									'<li data-value="promoActivity">优惠活动</li>' +
									'<li data-value="clientDownload">下载中心</li>' +
									'<div class="stick"></div>' +
								'</ul>' +

								'<div class="clear"></div>' +
							'</div>' +
						'</div>' +

						(this.opt.helpPage?'': this.notice.getDom()) +

						'<div class="header-float-window">' +
							this.createHeaderFloatWindow() +
						'</div>' +
					'</div>' +
				'</div>';
		
		this.el  = temp;
	};

	Header.prototype.getDom = function () {
		return this.el;
	};

	Header.prototype.deleteCollectGame = function (id) {
		var ul = this.zone.find('.wdsc-float-window ul');
		ul.children('li:last-child').remove();
	};

	Header.prototype.createHeaderFloatWindow = function (pageName) {
		var i;
		var key;
		var arr;
		var width;
		var temp = '';
		var dict = {
			liveVideo: [
				{
					image: 'zrsx-float-img1.png',
					name: 'BBIN国际厅'
				}, {
					image: 'zrsx-float-img2.png',
					name: 'AG欧洲厅'
				}, {
					image: 'zrsx-float-img3.png',
					name: 'AB亚洲厅'
				}, {
					image: 'zrsx-float-img4.png',
					name: 'OG美洲厅'
				}
			],
			eEntertainment: [
				{
					image: 'dzyy-float-img1.png',
					name: 'PT'
				}, {
					image: 'dzyy-float-img2.png',
					name: 'BBIN'
				}, {
					image: 'dzyy-float-img3.png',
					name: 'MG'
				}, {
					image: 'dzyy-float-img4.png',
					name: 'AG'
				},{
					image: 'dzyy-float-img5.png',
					name: 'TTG'
				}, {
					image: 'dzyy-float-img6.png',
					name: 'MT'
				}
			],
			sportsCompetition: [
				{
					image: 'tyjj-float-img1.png',
					name: 'BBIN体育'
				}, {
					image: 'tyjj-float-img2.png',
					name: '沙巴体育'
				}
			],
			lotteryGame: [
				{
					image: 'cpyx-float-img1.png',
					name: 'KENO彩票'
				}, {
					image: 'cpyx-float-img2.png',
					name: 'BBIN彩票'
				}
			]
		};

		for (key in dict) {
			arr   = dict[key];
			width = parseFloat(100 / arr.length);
			temp +=	'<ul class="ul ' + key + '" data-value="' + key + '">';

			for (i = 0; i < arr.length; i++) {
				temp +=	'<li style="width:' + width + '%" data-index="' + i + '">' +
							'<div class="img-frame">' +
								'<img src="../img/' + arr[i].image + '">' +
							'</div>' +
							'<div class="name">' + arr[i].name + '</div>' +
						'</li>';
			}

			temp += '</ul>';
		}

		return temp;
	};

	Header.prototype.getUserInfo = function() {
		var i;
		var callback;
		var that = this;

		var opt  = {
			url: app.urls.getLoginInUserInfo,
			data: {}
		};

		callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				alert(json.Message);
				return;
			}
			
			app.userTotalInfo = json;
			that.zone.find('.balance-value').text(window.Util.formatNumToCur(json.Cash));
			that.zone.find('.grzx-float-window .username').text(json.UserName);
			that.zone.find('.grzx-float-window .userid .id-value').text(json.Id);

			//app.showPersonalCenter();
		};

		Service.get(opt, callback);
	};

	Header.prototype.setCollectList = function (data, flag) {
		var list = data.list;
		var url;
		var score;
		var name;
		var gameLocal;
		var collectId;
		var html = '';

		for (i = 0; i < list.length; i++) {
			gameLocal = list[i].GameLocal;
			url       = app.imageServer + gameLocal.ImageUrl;
			name      = gameLocal.Title;
			score     = gameLocal.RecommendNo;
			collectId = list[i].Id;

			html  +=	'<li data-collectid="' + collectId + '">'+
							'<img src=' + url + '>' +
							'<p>' +
								'<span class="game-name">'+name+'</span>'+
								'<span class="red">'+score+'</span>' +
								'<span class="collect collected"></span>' +
							'</p>'+
							'<p id="hover-layer" class="hover-layer-none"><button>开始游戏</button><br/><button>免费试玩</button></p>'+
						'</li>';

		}

		this.zone.find('.wdsc-float-window ul').html(html);

		if (flag) {
			this.zone.find('.wdsc-float-window').css('top', '40px');
		}
	};

	Header.prototype.getCollectList = function (flag) {
		var that = this;

        $.ajax({
            type: 'GET',
            url: app.urls.getFavoriteGames + 'platform=PT&pageSize=10&pageIndex=0',
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

        	that.setCollectList(json.Data, flag);
        }).fail(function (xhr, testStatus, error) {
            alert(error);
        });
	};

	Header.prototype.getUnreadMessageCount = function () {
		var i;
		var callback;
		var that      = this;
		var endtime   = new Date();
		var begintime = Util.getIntervalDate(endtime, -10);

		begintime = begintime.formatDate() + ' 00:00';
        endtime   = endtime.formatDate() + ' 23:59';

		var opt  = {
			url: app.urls.getStationLetterCount,
			data: {
				startTime: begintime,
				endTime: endtime
			}
		};

		callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				alert(json.Message);
				return;
			}

			if (parseInt(json) !== 0) {
				that.zone.find('.message-count').show();
				that.zone.find('.message-count').text(json);
			} else {
				that.zone.find('.message-count').hide();
			}
			
		};

		Service.get(opt, callback);
	};

	Header.prototype.getSportsUrl = function () {
    	var that  = this;
    	var opt   =  {
			url: app.urls.getGameLoginUrl,
			data: {
				gamePlatform: 'T188',
				gameType: 'sport'
			}
		};
		
		var callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				alert(json.Message);
				return;
			}
			debugger
			that.sportsUrl = json;
		};

		Service.get(opt, callback);
	};

	Header.prototype.showSignedInHeader = function () {
		this.zone.find('.li-money-actions').show();
		this.zone.find('.li-balance').show();
		this.zone.find('.li-grzx').show();
		this.zone.find('.li-signin-signup').hide();
		this.getUserInfo();
		this.getCollectList(false);
		this.getUnreadMessageCount();
		this.getSportsUrl();
	};

	Header.prototype.showSignedOutHeader = function () { 
		this.zone.find('.li-money-actions').hide();
		this.zone.find('.li-balance').hide();
		this.zone.find('.li-grzx').hide();
		this.zone.find('.li-signin-signup').show();
		this.zone.find('.wdsc-float-window ul').empty();
	};

	Header.prototype.showHeaderFloatWindow = function () {
		var headerFloatWindow = this.zone.find('.header-float-window');

		headerFloatWindow.css({
			top: '100px',
			opacity: '0.9'
		});
	};

	Header.prototype.hideHeaderFloatWindow = function () {
		var headerFloatWindow = this.zone.find('.header-float-window');

		headerFloatWindow.css({
			top: '-400px',
			opacity: '0'
		});
	};

	Header.prototype.setStick = function (index) {
		var stick = this.zone.find('.pages .stick');

		if (index === -1) {
			this.zone.find('.pages li').removeClass('selected');
			stick.hide();
			return;
		}

		stick.show();
		stick.css('left', index * 14.285 + '%');
		this.zone.find('.pages li').removeClass('selected');
		this.zone.find('.pages li:nth-child(' + (index + 1) + ')').addClass('selected');
	};

	Header.prototype.signOut = function () {
		var callback;
		var that = this;
		var grzxFloatWindow = this.zone.find('.grzx-float-window');

		callback = function () {
			grzxFloatWindow.css('top', '-300px');
			app.signedOutProcedures();
		};

        $.ajax({
            type: 'GET',
            url: app.urls.signOut,
            dataType: 'json',
            timeout: app.timeout,
            xhrFields: {
            	withCredentials: true
            }
        }).done(function (json) {
            if(json === true) {
            	callback();
            }
        }).fail(function (xhr, testStatus, error) {
            alert(error);
        });
	};

	Header.prototype.bindEvents = function () {
		var left;
		var index;
		var pagesUl;
		var pagesUl2;
		var stick;
		var pageName;
		var balance;
		var menu;
		var headRow2;
		var langHoverItem;
		var grzxHoverItem;
		var wdscHoverItem;
		var grzxFloatWindow;
		var wdscFloatWindow;
		var langFloatWindow;
		var grzxUl;
		var headerFloatWindow;
		var closeWdsc;
		var grzxNav;
		var grzxRouterValue;
		var deleteCollectCallback;
		var targetItem;
		var collectId;
		var that = this;

		this.zone = $('.header');

		if (this.opt.helpPage) {
			this.showSignedOutHeader();
			return;
		}

		pagesUl           = this.zone.find('.pages');
		pagesUl2          = this.zone.find('.row1');
		headRow2          = this.zone.find('.row2');
		langHoverItem     = this.zone.find('.li-language, .language-float-window');

		grzxHoverItem     = this.zone.find('.li-grzx .grzx, .grzx-float-window');
		wdscHoverItem     = this.zone.find('.li-wdsc');
		grzxFloatWindow   = this.zone.find('.grzx-float-window');
		wdscFloatWindow   = this.zone.find('.wdsc-float-window');
		closeWdsc         = wdscFloatWindow.find('.close-wdsc');
		langFloatWindow   = this.zone.find('.language-float-window');
		grzxUl            = this.zone.find('.grzx-float-window ul');
		menu              = this.zone.find('.menu');
		headerFloatItem   = this.zone.find('.pages li, .header-float-window');
		headerFloatWindow = this.zone.find('.header-float-window');
		grzxNav 		  = this.zone.find('.grzx-layer');
		stick             = pagesUl.children('.stick');
		balance           = this.zone.find('.balance-value');

		grzxHoverItem.mouseover(function () {
			left = that.zone.find('.li-grzx').position().left;
			grzxFloatWindow.css({
				'top': '40px',
				'left': left
			});
		}).mouseout(function () {
			grzxFloatWindow.css('top', '-300px');
		});

		wdscHoverItem.click(function () {
			if (wdscFloatWindow.css('top') === '40px') {
				wdscFloatWindow.css('top', '-600px');
			} else {
				wdscFloatWindow.css('top', '40px');
			}

			langFloatWindow.css('top', '-300px');
		});

		wdscFloatWindow.delegate('.collect', 'click', function () {
			imgSrc     = $(this).attr('src');
			collectId  = $(this).parent().parent('li').attr('data-collectid');
			targetItem = $(this).parents('li');

			deleteCollectCallback = function () {
				targetItem.remove();

				if (wdscFloatWindow.children('ul').children('li').length < 1) {
					wdscFloatWindow.css('top', '-600px');
				}
			};

			app.deleteFavoriteGame(collectId, deleteCollectCallback.bind(this));
		});

		langHoverItem.click(function () {
			if (langFloatWindow.css('top') === '40px') {
				langFloatWindow.css('top', '-300px');
			} else {
				langFloatWindow.css('top', '40px');
			}

			wdscFloatWindow.css('top', '-600px');
		});

		pagesUl.delegate('li', 'click', function () {
			pagesUl.children('li').removeClass('selected');
			$(this).addClass('selected');

			pageName = $(this).attr('data-value');
			index    = $(this).index();
			stick.css('left', index * 14.285  + '%');

			if (pageName === 'sportsCompetition') {
				window.open(that.sportsUrl);
			} else {
				app.router.setRoute('/' + pageName);
			}
		});

		grzxNav.click(function(){
			grzxRouterValue = $(this).attr('data-value').split(' ');
			app.personCenterRouter(grzxRouterValue[0],grzxRouterValue[1]);
		});

		this.zone.find('.li-grzx').click(function () {
			app.personCenterRouter(0, 0);
		});

		headerFloatItem.mouseover(function () {
			var parent = $(this).parent('ul');
			pageName   = $(this).attr('data-value');

			if (headerFloatWindow.children('.' + pageName).length > 0) {
				headerFloatWindow.children('ul').hide();
				headerFloatWindow.children('.' + pageName).show();
				that.showHeaderFloatWindow();
			} else {
				that.showHeaderFloatWindow();
			}
		}).mouseout(function () {
			that.hideHeaderFloatWindow();
		});

		this.zone.find('.pages li').mouseover(function () {
			pageName   = $(this).attr('data-value');

			if (headerFloatWindow.children('.' + pageName).length > 0) {
				headerFloatWindow.children('ul').hide();
				headerFloatWindow.children('.' + pageName).show();
				that.showHeaderFloatWindow();
			} else {
				that.hideHeaderFloatWindow();
			}
		}).mouseout(function () {
			that.hideHeaderFloatWindow();
		});

		this.zone.find('.header-float-window').mouseover(function () {
		    that.showHeaderFloatWindow();
		}).mouseout(function () {
			that.hideHeaderFloatWindow();
		});

		this.zone.find('.header-float-window ul').delegate('li img', 'click', function () {
			pageName  = $(this).parents('li').parent('ul').attr('data-value');
			subRouter = $(this).parents('li').attr('data-index');
			app.router.setRoute('/' + pageName + '/' + subRouter);
		});

		pagesUl2.delegate('.li-bzzx','click',function(){
			pageName = $(this).attr('data-value');
			window.open('help.html');
		});

		grzxUl.delegate('li', 'click', function () {
			if ($(this).hasClass('signout')) {
				that.signOut();
			}
		});

		closeWdsc.click(function () {
			wdscFloatWindow.css('top', '-600px');
		});

		this.zone.find('.sign-button').click(function () {
			if ($(this).hasClass('signin-button')) {
				if (!app.signInDialog) {
					app.signInDialog = new SignIn();
					$('.app').append(app.signInDialog.getDom());
					app.signInDialog.bindEvents();
				}

				app.signInDialog.show();
			} else if ($(this).hasClass('signup-button')) {
				if (!app.signUpDialog) {
					app.signUpDialog = new SignUp();
					$('.app').append(app.signUpDialog.getDom());
					app.signUpDialog.bindEvents();
				}

				app.signUpDialog.show();
			} else {

			}
		});

		this.switch.bindEvents(function () {
			that.zone.find('.li-balance .balance-item, .li-balance .refresh-icon').toggle();
		});

		this.zone.find('.lxkf-button').click(function () {
			window.open(app.liveCsUrl);
		});

		$(document).scroll(function(e) {
			that.hideHeaderFloatWindow();

			if (document.body.scrollTop > 0) {
				that.zone.addClass('fixed-header');
			} else {
				that.zone.removeClass('fixed-header');
				headRow2.show();
			}
		});

		menu.click(function () {
			if (headRow2.css('display') !== 'none') {
				headRow2.hide();
			} else {
				headRow2.show();
			}
		});

		this.showSignedOutHeader();
		this.notice.bindEvents();
	};

	window.Header = Header;
}());