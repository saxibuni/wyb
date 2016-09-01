(function () {
	function Header () {
		this.initDom();
	}
	
	Header.prototype.initDom = function () {
		var temp;

		this.switch = new Switch({id: 'money-switch'});

		temp =	'<div class="header">' +
					'<div class="wrapper">' +
						'<div class="row1">' +
							'<div class="language">' +
								'<img class="message-img" src="../img/zh-lang.png">' +
								'<span>CHN</span>' +

								'<div class="language-float-window">' +
									'<ul>' +
										'<li><span>中文</span></li>' +
										'<li><span>English</span></li>' +
									'</ul>' +
								'</div>' +

							'</div>' +

							'<div class="swsy top-item">' +
								'设为首页' +
							'</div>' +

							'<div class="bzzx top-item">' +
								'帮助中心' +
							'</div>' +

							'<div class="wdsc top-item">' +
								'我的收藏' +
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
								'<div class="title">' +
									'个人中心' +
								'</div>' +

								'<div class="message">' +
									'<img class="message-img" src="../img/message.png">' +
									'<div class="dot">1</div>' +
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
										'<li><span>退出</span></li>' +
									'</ul>' +
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
						'</div>' +

						'<div class="row2">' +
							'<div class="buttons-zone">' +
								'<div class="header-button signup-button">' +
									'登录' +
								'</div>' +

								'<div class="header-button signin-button">' +
									'注册' +
								'</div>' +

								'<div class="header-button lxkf-button">' +
									'联系客服' +
								'</div>' +
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
					'</div>' +
				'</div>';
		
		this.el  = temp;
	};

	Header.prototype.getDom = function () {
		return this.el;
	};

	Header.prototype.setHome = function () {
        if (document.all) {
            document.body.style.behavior='url(#default#homepage)';
            document.body.setHomePage(window.location);
        } else {
            alert("您好,您的浏览器不支持自动设置页面为首页功能,请您手动在浏览器里设置该页面为首页!");
        }
	};

	Header.prototype.bindEvents = function () {
		var index;
		var pagesUl;
		var stick;
		var pageName;
		var balance;
		var that = this;

		this.zone = $('.header');
		pagesUl   = this.zone.find('.pages');
		stick     = pagesUl.children('.stick');
		balance   = this.zone.find('.balance-value');

		pagesUl.delegate('li', 'click', function () {
			pageName = $(this).attr('data-value');
			index    = $(this).index();
			stick.css('left', index*80 + 'px');
			app.goTo(pageName);
		});

		this.zone.find('.top-item').click(function  () {
			if($(this).hasClass('swsy')) {
				that.setHome();
			}
		});


		this.switch.bindEvents(function () {
			balance.toggle();
		});
	};

	window.Header = Header;
}());
