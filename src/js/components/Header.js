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
								'语言' +
							'</div>' +

							'<div class="bzzx top-item">' +
								'设为首页' +
							'</div>' +

							'<div class="bzzx top-item">' +
								'帮助中心' +
							'</div>' +

							'<div class="bzzx top-item">' +
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
								'<li>首页</li>' +
								'<li>真人视讯</li>' +
								'<li>电子游艺</li>' +
								'<li>体育竞技</li>' +
								'<li>彩票游戏</li>' +
								'<li>优惠活动</li>' +
								'<li>客户端</li>' +
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

	Header.prototype.show = function () {
	};

	Header.prototype.hide = function () {
	};

	Header.prototype.bindEvents = function () {
		var index;
		var pagesUl;
		var stick;
		var that = this;

		this.zone = $('.header');
		pagesUl   = this.zone.find('.pages');
		stick     = pagesUl.children('.stick');

		pagesUl.delegate('li', 'click', function () {
			index = $(this).index();
			stick.css('left', index*80 + 'px');
		});

		this.switch.bindEvents();
	};

	window.Header = Header;
}());
