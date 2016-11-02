(function () {
	function RouteCheck () {
		this.initDom();
	}
	
	RouteCheck.prototype.initDom = function () {
		var temp =	'<div class="page route-check">' +
						'<div class="wrapper">' +
							'<div class="title">' +
								'<div class="text1">' +
									'线路测速' +
								'</div>' +

								'<div class="text2">' +
									'LINE VILOCITY MEASUREMENT' +
								'</div>' +

								'<div class="stick"></div>' +
							'</div>' +

							'<div class="content">' +
								'<div class="left-content">' +
									'<table cellspacing="0" cellpadding="0">' +
										'<thead>' +
											'<tr>' +
												'<th class="td1">网址</th>' +
												'<th class="td2">访问速度</th>' +
												'<th class="td3">操作</th>' +
											'</tr>' +
										'</thead>' +

										'<tbody>' +
										'</tbody>' +
									'</table>' +
								'</div>' +

								'<div class="right-content">' +
									'<div class="title">' +
										'<span class="route-check-icon notice-icon"></span>' +
										'<span>温馨提示</span>' +
									'</div>' +

									'<div class="item">' +
										'<p class="subtitle">' +
											'访问速度越小, 打开的速度越快' +
										'</p>' +

										'<p class="text">' +
											'如果我们检测中心对您有帮助，请按“Ctrl+D”进行收藏' +
										'</p>' +
									'</div>' +

									'<div class="item">' +
										'<p class="subtitle">' +
											'如果我们检测中心对您有帮助,' +
										'</p>' +

										'<ul class="collect-site">' +
											'<li>1、打开IE浏览器;</li>' +
											'<li>2、选择“工具”菜单;</li>' +
											'<li>3、点击“Internet”选项;</li>' +
											'<li>4、选择“删除浏览记录”选项</li>' +
											'<li>5、点击“删除”按钮;</li>' +
											'<li>6、关闭IE浏览器，再重新打开IE浏览器即可</li>' +
										'</ul>' +
									'</div>' +

									'<div class="item">' +
										'<div class="subtitle">' +
											'推荐使用浏览器，享用更优质的服务体验' +
										'</div>' +

										'<ul class="recommend-browsers">' +
											'<li data-value="chrome">' +
												'<div>' +
													'<div class="route-check-icon route-chrome-icon"></div>' +
												'</div>' +
												'<div class="name">Chrome</div>' +
											'</li>' +
											'<li data-value="firefox">' +
												'<div>' +
													'<div class="route-check-icon route-firefox-icon"></div>' +
												'</div>' +
												'<div class="name">Firefox</div>' +
											'</li>' +
											'<li data-value="ie">' +
												'<div>' +
													'<div class="route-check-icon route-ie-icon"></div>' +
												'</div>' +
												'<div class="name">IE10.0+</div>' +
											'</li>' +
										'</ul>' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	RouteCheck.prototype.getDom = function () {
		return this.el;
	};

    RouteCheck.prototype.getRoutes = function () {
		var callback;
		var that       =  this; 
		var opt        =  {
			url: app.urls.getRouteCheckList,
			data: {}
		};

		callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				alert(json.Message);
				return;
			}

			that.setRoutes(json);
		};

		Service.get(opt, callback);
    };

    RouteCheck.prototype.setRoutes = function (data) {
    	var i;
    	var temp = '';

    	for (i = 0; i < data.length; i++) {
			temp +=	'<tr class="' + (i%2 === 0? 'even': 'odd') + '">' +
						'<td class="td1">' +
							'<span>网址：<span>' +
							'<span class="site">' + 
								data[i].DomainUrl + 
							'</span>' +
						'</td>' +

						'<td class="td2">' +
							'<ul>' +
								'<li></li>' +
								'<li></li>' +
								'<li></li>' +
								'<li></li>' +
								'<li></li>' +
								'<li></li>' +
								'<li></li>' +
								'<li></li>' +
								'<li></li>' +
								'<li></li>' +
							'</ul>' +

							'<span>395毫秒</span>' +
						'</td>' +

						'<td class="td3">' +
							'<a>直接访问</a>' +
						'</td>' +
					'</tr>';
    	}

    	this.zone.find('.left-content table tbody').html(temp);
    };

	RouteCheck.prototype.show = function () {
		this.zone.show();
	};

	RouteCheck.prototype.hide = function () {
		this.zone.hide();
	};

	RouteCheck.prototype.bindEvents = function () {
		var site;
		var tbody
		var downLoadUl;
		var that   = this;

		this.zone  = $('.route-check');

		downLoadUl = this.zone.find('.right-content .recommend-browsers');
		tbody      = this.zone.find('.left-content tbody');

		downLoadUl.delegate('li', 'click', function () {
			browserName = $(this).attr('data-value');

			if (browserName === 'ie') {
				window.open('https://support.microsoft.com/zh-cn/help/17621/internet-explorer-downloads');
			} else if (browserName === 'chrome') {
				window.open('https://www.google.com/intl/zh-CN/chrome/browser/desktop/index.html');
			} else if (browserName === 'firefox') {
				window.open('http://www.firefox.com.cn/download/');
			}
		});

		tbody.delegate('.td3 a', 'click', function () {
			site = $(this).parent('.td3').siblings('.td1').find('.site').text();
			window.open(site);
		});

		this.getRoutes();
	};

	window.RouteCheck = RouteCheck;
}());
