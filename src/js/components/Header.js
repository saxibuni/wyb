(function () {
	function Header () {
		this.initDom();
	}
	
	Header.prototype.initDom = function () {
		var temp = '';

		this.switch = new Switch({id: 'money-switch'});
		this.lxkfButton = new Button({
			id: 'header-lxkf',
			className: 'header-button lxkf-button',
			name: '在线客服',
			width: 70,
			height: 22
		});

		// temp +=	'<nav class="navbar navbar-inverse header" role="navigation">' +
		// 		    '<div class="container">' +
		// 			    '<div>' +
		// 				    '<p class="navbar-text navbar-left">' + 'GMT +8' + '</p>' +
		// 				    '<p class="navbar-text navbar-left">' + '12:15:30' + '</p>' +

		// 			        '<ul class="nav navbar-nav navbar-right">' +
		// 			            '<li class="dropdown">' +
		// 			                '<a href="#" class="dropdown-toggle" data-toggle="dropdown">' +
		// 			                    '中文 <b class="caret"></b>' +
		// 			                '</a>' +
		// 			                '<ul class="dropdown-menu">' +
		// 			                    '<li><a href="#">中文</a></li>' +
		// 			                    '<li><a href="#">English</a></li>' +
		// 			                '</ul>' +
		// 			            '</li>' +
		// 			        '</ul>' +

		// 			        '<p class="navbar-text navbar-right bzzx">帮助中心</p>' +

		// 			        '<ul class="nav navbar-nav navbar-right">' +
		// 			            '<li class="dropdown">' +
		// 			                '<a href="#" class="dropdown-toggle" data-toggle="dropdown">' +
		// 			                    '我的收藏 <b class="caret"></b>' +
		// 			                '</a>' +
		// 			                '<ul class="dropdown-menu">' +
		// 			                    '<li><a href="#">捕鱼网</a></li>' +
		// 			                    '<li><a href="#">快乐猴子</a></li>' +
		// 			                    '<li><a href="#">AG老虎机</a></li>' +
		// 			                    '<li><a href="#">PT老虎机</a></li>' +
		// 			                '</ul>' +
		// 			            '</li>' +
		// 			        '</ul>' +

		// 			        '<p class="navbar-text navbar-right zz">转账</p>' +
		// 			        '<p class="navbar-text navbar-right tk">提款</p>' +
		// 			        '<p class="navbar-text navbar-right cz">充值</p>' +

		// 			        this.switch.getDom() +

		// 			        '<p class="navbar-text navbar-right balance-value">10000000.00</p>' +
		// 			        '<p class="navbar-text navbar-right money-icon">¥</p>' +
		// 					'<p class="navbar-text navbar-right title">余额</p>' +

		// 			      	'<a class="navbar-right message" href="#">' +
		// 			        	'<span class="glyphicon glyphicon-envelope message-img"></span>' +
		// 			        	'<div class="dot">1</div>' +
		// 			      	'</a>' +

		// 			        '<ul class="nav navbar-nav navbar-right grzx">' +
		// 			            '<li class="dropdown">' +
		// 			                '<a href="#" class="dropdown-toggle" data-toggle="dropdown">' +
		// 			                    '个人中心 <b class="caret"></b>' +
		// 			                '</a>' +
		// 			                '<ul class="dropdown-menu">' +
		// 			                    '<li><a href="#">LORENZO VIP3</a></li>' +
		// 			                    '<li><a href="#">资金管理</a></li>' +
		// 			                    '<li><a href="#">投注记录</a></li>' +
		// 			                    '<li><a href="#">充值记录</a></li>' +
		// 			                    '<li><a href="#">修改密码</a></li>' +
		// 			                    '<li><a href="#">退出</a></li>' +
		// 			                '</ul>' +
		// 			            '</li>' +
		// 			        '</ul>' +
		// 			    '</div>' +
		// 		    '</div>' +
		// 		'</nav>';

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
									'<div class="grzx-layer cz action"><span>充值</span></div>' +
									'<div class="grzx-layer tk action"><span>提款</span></div>' +
									'<div class="grzx-layer zz action"><span>转账</span></div>' +
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
								// '<li data-value="promoActivity">优惠活动</li>' +
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
								'<li class="grzx-layer zjgl"><span>资金管理</span></li>' +
								'<li class="grzx-layer tzjl"><span>投注记录</span></li>' +
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
					'<div class="header-float-window">' +
						'<ul class="ul dzyy">' +
							'<li>' +
								'<img class="message-img" src="../img/dzyy-float-img1.png">' +
							'</li>' +

							'<li>' +
								'<img class="message-img" src="../img/dzyy-float-img2.png">' +
							'</li>' +

							'<li>' +
								'<img class="message-img" src="../img/dzyy-float-img3.png">' +
							'</li>' +
						'</ul>' +

						'<ul class="ul ty">' +
							'<li>' +
								'<img class="message-img" src="../img/ty-float-img1.png">' +
							'</li>' +

							'<li>' +
								'<img class="message-img" src="../img/ty-float-img2.png">' +
							'</li>' +

							'<li>' +
								'<img class="message-img" src="../img/ty-float-img3.png">' +
							'</li>' +
						'</ul>' +
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

	Header.prototype.showHeaderFloatWindow = function () {
		var headerFloatWindow = this.zone.find('.header-float-window');

		headerFloatWindow.css({
			top: '85px',
			opacity: '1'
		});
	};

	Header.prototype.hideHeaderFloatWindow = function () {
		var headerFloatWindow = this.zone.find('.header-float-window');

		headerFloatWindow.css({
			top: '-200px',
			opacity: '0'
		});
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
		var headerFloatWindow;
		var grzxNav;
		var that = this;

		this.zone = $('.header');
		pagesUl           = this.zone.find('.pages');
		pagesUl2          = this.zone.find('.row1');
		headRow2          = this.zone.find('.row2');
		langHoverItem     = this.zone.find('.language, .language-float-window');
		grzxHoverItem     = this.zone.find('.grzx, .grzx-float-window');
		wdscHoverItem     = this.zone.find('.wdsc, .wdsc-float-window');
		grzxFloatWindow   = this.zone.find('.grzx-float-window');
		wdscFloatWindow   = this.zone.find('.wdsc-float-window');
		langFloatWindow   = this.zone.find('.language-float-window');
		grzxUl            = this.zone.find('.grzx-float-window ul');
		menu              = this.zone.find('.menu');
		headerFloatItem   = this.zone.find('.pages li, .header-float-window');
		headerFloatWindow = this.zone.find('.header-float-window');
		grzxNav 		  = this.zone.find('.grzx-layer');
		stick             = pagesUl.children('.stick');
		balance           = this.zone.find('.balance-value');

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

		langHoverItem.click(function () {
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

		grzxNav.click(function(){
			if (!app.personCenterDialog) {
				app.personCenterDialog = new PersonalCenter();
				$('.app').append(app.personCenterDialog.getDom());
				app.personCenterDialog.bindEvents();
			}
			app.personCenterDialog.show();
		});

		headerFloatItem.mouseover(function () {
			var parent = $(this).parent('ul');
			
			if (parent && parent.hasClass('pages') && $(this).attr('data-value') === 'eEntertainment') {
				headerFloatWindow.children('ul').hide();
				headerFloatWindow.children('.dzyy').show();
				that.showHeaderFloatWindow();
			} else if (parent && parent.hasClass('pages') && $(this).attr('data-value') === 'sportsCompetition') {
				headerFloatWindow.children('ul').hide();
				headerFloatWindow.children('.ty').show();
				that.showHeaderFloatWindow();
			} else if (parent && parent.hasClass('pages') 
							  && $(this).attr('data-value') !== 'eEntertainment'
							  && $(this).attr('data-value') !== 'sportsCompetition') {

				that.hideHeaderFloatWindow();
			} else {
				that.showHeaderFloatWindow();
			}
		}).mouseout(function () {
			that.hideHeaderFloatWindow();
		});

		pagesUl2.delegate('.bzzx','click',function(){
			pageName = $(this).attr('data-value');
			window.open('help.html');
		});

		grzxUl.delegate('li', 'click', function () {
			if ($(this).hasClass('signout')) {
				grzxFloatWindow.css('top', '-300px');
				that.showSignedOutHeader();
				app.goTo('homePage');
			}
		});

		menu.click(function () {
			if (parseInt(headRow2.css('height')) !== 0) {
				headRow2.css({
					'height': '0',
					'opacity': '0'
				});
				$('.app .main').css('margin-top', '30px');
			} else {
				headRow2.css({
					'height': '55px',
					'opacity':'1'
				});
				$('.app .main').css('margin-top', '85px');
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
			that.hideHeaderFloatWindow();

			if (document.body.scrollTop > 50) {
				headRow2.css({
					'height': '0',
					'opacity':'0'
				});
				that.zone.addClass('fixed-header');
				$('.app .main').css('margin-top', '30px');
			} else {
				headRow2.css({
					'height': '55px',
					'opacity':'1'
				});
				that.zone.removeClass('fixed-header');
				$('.app .main').css('margin-top', '85px');
			}
		});

		this.showSignedOutHeader();
		//this.showSignedInHeader();
		this.lxkfButton.bindEvents();
	};

	window.Header = Header;
}());