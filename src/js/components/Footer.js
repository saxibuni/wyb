(function () {
	function Footer () {
		this.initDom();
	}
	
	Footer.prototype.initDom = function () {
		var temp =	'<div class="footer">' +
						'<div class="wrapper">' +
							'<div class="footer-left">' +
								'<div class="row1">' +
									'<span class="platforms-icon"></span>' +
								'</div>' +

								'<div class="row2">' +
									'<ul>' +
										'<li data-value="aboutus"><span>关于我们</span></li>' +
										'<li data-value="contactus"><span>联系我们</span></li>' +
										'<li data-value="deposithelp"><span>存取款帮助</span></li>' +
										'<li data-value="faq"><span>常见问题</span></li>' +
										'<li data-value="partner"><span>合作伙伴</span></li>' +
										'<li data-value="routeCheck"><span>线路检测</span></li>' +
										'<li data-value="agentLogin"><span>代理登录</span></li>' +
										'<li data-value="agentSignup"><span>代理注册</span></li>' +
									'</ul>' +
								'</div>' +
							'</div>' +
							
							'<div class="footer-right">' +
								'<div class="row1">' +
									'<div class="title">' +
										'推荐：' +
									'</div>' +

									'<ul>' +
										'<li data-value="chrome">' +
											'<span class="icon chrome-icon"></span>' +
											'<span>Chrome</span>' +
										'</li>' +

										'<li data-value="firefox">' +
											'<span class="icon firefox-icon"></span>' +
											'<span>Firefox</span>' +
										'</li>' +

										'<li data-value="ie">' +
											'<span class="icon ie-icon"></span>' +
											'<span>IE10.0+</span>' +
										'</li>' +

										'<li data-value="safari">' +
											'<span class="icon safari-icon"></span>' +
											'<span>Safari</span>' +
										'</li>' +
									'</ul>' +
								'</div>' +

								'<div class="row2">' +
									'<div class="title">' +
										'<span class="span1">Copyright © 2006 - 2016</span><span class="span2"> VEB Entertainment (伟易博) All Rights Reserved</span>' +
									'</div>' +
								'</div>' +
							'</div>' +

							'<div class="clear"></div>' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	Footer.prototype.getDom = function () {
		return this.el;
	};

	Footer.prototype.fixToBottom = function () {
		this.zone.addClass('fix-bottom');
	};

	Footer.prototype.releaseFix = function () {
		this.zone.removeClass('fix-bottom');
	};

	Footer.prototype.bindEvents = function () {
		var featureUl;
		var pageName;
		var downLoadUl;
		var browserName;
		var that = this;

		this.zone = $('.footer');

		featureUl  = this.zone.find('.footer-left .row2 ul');
		downLoadUl = this.zone.find('.footer-right .row1 ul');

		featureUl.delegate('li', 'click', function () {
			pageName = $(this).attr('data-value');
			if (pageName === 'routeCheck' ||
				pageName === 'agentSignup') {
				app.router.setRoute(pageName);
			} else if (pageName === 'agentLogin') {
				window.open(app.agentLoginUrl);
			} else {
				window.open('help.html?item=' + pageName);
			}
		});

		downLoadUl.delegate('li', 'click', function () {
			browserName = $(this).attr('data-value');

			if (browserName === 'ie') {
				window.open('https://support.microsoft.com/zh-cn/help/17621/internet-explorer-downloads');
			} else if (browserName === 'chrome') {
				window.open('https://www.google.com/intl/zh-CN/chrome/browser/desktop/index.html');
			} else if (browserName === 'safari') {
				window.open('http://www.apple.com/cn/safari/');
			} else if (browserName === 'firefox') {
				window.open('http://www.firefox.com.cn/download/');
			}
		});

	};

	window.Footer = Footer;
}());
