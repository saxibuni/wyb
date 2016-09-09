(function () {
	function Header () {
		this.initDom();
	}
	
	Header.prototype.initDom = function () {
		var temp;

		this.switch = new Switch({id: 'money-switch'});
		this.lxkfButton = new Button({
			id: 'header-lxkf',
			className: 'header-button lxkf-button',
			name: '联系客服',
			width: 70,
			height: 22
		});

		temp =	'<div class="header">' +
					'<div class="wrapper">' +
						'<div class="row1">' +
							'<div class="language">' +
								'<img class="message-img" src="../img/zh-lang.png">' +
								'<span>CHN</span>' +
							'</div>' +

							'<div class="bzzx top-item nav-page" data-value="helpPage">' +
								'帮助中心' +
							'</div>' +

							'<div class="wdsc top-item">' +
								'<span class="my-collection">我的收藏</span>' +
							'</div>' +

							'<div class="money-actions">' +
							 	'<div class="wrapper">' +
									'<div class="cz action"><span>充值</span></div>' +
									'<div class="tk action"><span>提款</span></div>' +
									'<div class="zz action"><span>转账</span></div>' +
								'</div>' +
							'</div>' +

							'<div class="balance">' +
								'<div class="balance-item title">余额</div>' +
								'<div class="balance-item money-icon">¥</div>' +
								'<div class="balance-item balance-value">10000000.00</div>' +
								this.switch.getDom() +
							'</div>' +

							'<div class="grzx">' +
								'<div class="title nav-page" data-value="personalCenter">' +
									'个人中心' +
								'</div>' +

								'<div class="message">' +
									'<img class="message-img" src="../img/message.png">' +
									'<div class="dot">1</div>' +
								'</div>' +
							'</div>' +

							'<div class="time">' +
								'<div class="time-zone">' +
									'GMT +8' +
								'</div>' +

								'<div class="time-value">' +
									'12:15:30' +
								'</div>' +

								'<div class="clear"></div>' +
							'</div>' +

							'<div class="menu">' +
								'<img class="message-img" src="../img/menu.png">' +
							'</div>' +
						'</div>' +

						'<div class="row2">' +
							'<div class="header-logo">' +
								'<img class="message-img" src="../img/logo-sands-macao.png">' +
							'</div>' +

							'<div class="buttons-zone">' +
								'<div class="header-button signin-button">' +
									'登录' +
								'</div>' +

								'<div class="header-button signup-button">' +
									'注册' +
								'</div>' +

								this.lxkfButton.getDom() +
							'</div>' +

							'<ul class="pages">' +
								'<li data-value="homePage">首页</li>' +
								'<li data-value="liveVideo">真人视讯</li>' +
								'<li data-value="eEntertainment">电子游艺</li>' +
								'<li data-value="sportsCompetition">体育竞技</li>' +
								'<li data-value="lotteryGame">彩票游戏</li>' +
								'<li data-value="promoActivity">优惠活动</li>' +
								'<li data-value="clientDownload">客户端</li>' +
								'<div class="stick"></div>' +
							'</ul>' +

							'<div class="clear"></div>' +
						'</div>' +

						'<div class="grzx-float-window">' +
							'<div class="title">' +
								'<div class="username">LORENZO</div>' +
								'<div class="userid">' +
									'<span class="text">ID:</span>' +
									'<span class="id-value">2678899511</span>' +
								'</div>' +
							'</div>' +

							'<ul>' +
								'<li><span>资金管理</span></li>' +
								'<li><span>投注记录</span></li>' +
								'<li><span>充值记录</span></li>' +
								'<li><span>修改密码</span></li>' +
								'<li class="signout"><span>退出</span></li>' +
							'</ul>' +
						'</div>' +

						'<div class="wdsc-float-window">' +
							'<ul>' +
								'<li><span>古怪猴子</span></li>' +
								'<li><span>古怪猴子</span></li>' +
							'</ul>' +
						'</div>' +

						'<div class="language-float-window">' +
							'<ul>' +
								'<li><span>中文</span></li>' +
								'<li><span>English</span></li>' +
							'</ul>' +
						'</div>' +
					'</div>' +
				'</div>';
		
		this.el  = temp;
	};

	Header.prototype.getDom = function () {
		return this.el;
	};

	Header.prototype.showSignedInHeader = function () {
		this.zone.find('.money-actions, .balance, .grzx').show();
		this.zone.find('.my-collection').show();
		this.zone.find('.signin-button, .signup-button').hide();
	};

	Header.prototype.showSignedOutHeader = function () {
		this.zone.find('.money-actions, .balance, .grzx').hide();
		this.zone.find('.my-collection').hide();
		this.zone.find('.signin-button, .signup-button').show();
	};

	Header.prototype.bindEvents = function () {
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
		var that = this;

		this.zone = $('.header');
		pagesUl         = this.zone.find('.pages');
		pagesUl2        = this.zone.find('.row1');
		headRow2        = this.zone.find('.row2');
		langHoverItem   = this.zone.find('.language, .language-float-window');
		grzxHoverItem   = this.zone.find('.grzx, .grzx-float-window');
		wdscHoverItem   = this.zone.find('.wdsc, .wdsc-float-window');
		grzxFloatWindow = this.zone.find('.grzx-float-window');
		wdscFloatWindow = this.zone.find('.wdsc-float-window');
		langFloatWindow = this.zone.find('.language-float-window');
		grzxUl          = this.zone.find('.grzx-float-window ul');
		menu            = this.zone.find('.menu');
		
		stick           = pagesUl.children('.stick');
		balance         = this.zone.find('.balance-value');

		grzxHoverItem.mouseover(function () {
			grzxFloatWindow.css('top', '30px');
		}).mouseout(function () {
			grzxFloatWindow.css('top', '-300px');
		});

		wdscHoverItem.mouseover(function () {
			wdscFloatWindow.css('top', '30px');
		}).mouseout(function () {
			wdscFloatWindow.css('top', '-300px');
		});

		langHoverItem.mouseover(function () {
			langFloatWindow.css('top', '30px');
		}).mouseout(function () {
			langFloatWindow.css('top', '-300px');
		});

		pagesUl.delegate('li', 'click', function () {
			pageName = $(this).attr('data-value');
			index    = $(this).index();
			stick.css('left', index * 80 + 'px');
			//page('/' + pageName);
			app.goTo(pageName);
		});

		pagesUl2.delegate('.nav-page','click',function(){
			pageName = $(this).attr('data-value');
			//page('/' + pageName);
			app.goTo(pageName);
		});

		grzxUl.delegate('li', 'click', function () {
			if ($(this).hasClass('signout')) {
				that.showSignedOutHeader();
				app.goTo('homePage');
			}
		});

		menu.click(function () {
			if (parseInt(headRow2.css('height')) !== 0) {
				headRow2.css('height', '0');
				$('.app .main-wrapper').css('margin-top', '30px');
			} else {
				headRow2.css('height', '55px');
				$('.app .main-wrapper').css('margin-top', '85px');
			}
		});

		this.zone.find('.top-item').click(function  () {
		});

		this.zone.find('.header-button').click(function () {
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
			balance.toggle();
		});

		$(document).scroll(function(e) {
			if (document.body.scrollTop > 15) {
				headRow2.css('height', '0');
				that.zone.addClass('fixed-header');
				$('.app .main-wrapper').css('margin-top', '30px');
			} else {
				headRow2.css('height', '55px');
				that.zone.removeClass('fixed-header');
				$('.app .main-wrapper').css('margin-top', '85px');
			}
		});

		this.showSignedOutHeader();
		//this.showSignedInHeader();
		this.lxkfButton.bindEvents();
	};

	window.Header = Header;
}());