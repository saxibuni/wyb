(function () {
	function RouteCheck () {
		this.initDom();
	}
	
	RouteCheck.prototype.initDom = function () {
		var temp =	'<div class="page route-check">' +
						'<div class="wrapper">' +
							'<div class="title">' +
								'<div class="trend-icon">' +
									'<img class="trend-icon-img" src="../img/trend-icon.png">' +
								'</div>' +

								'<div class="text">' +
									'线路检测 LINE VILOCITY MEASUREMENT' +
								'</div>' +
							'</div>' +

							'<div class="content">' +
								'<div class="left-content">' +
									'<ul class="domains">' +
									'</ul>' +
								'</div>' +

								'<div class="right-content">' +
									'<div class="row row1">' +
										'<div class="title">' +
											'温馨提示：访问速度越小, 打开的速度越快' +
										'</div>' +

										'<div class="text">' +
											'访问速度越小, 打开的速度越快' +
										'</div>' +

										'<div class="text">' +
											'如果我们检测中心对您有帮助,' +
										'</div>' +

										'<div class="text">' +
											'请按“Ctrl+D”进行收藏' +
										'</div>' +
									'</div>' +

									'<div class="row row2">' +
										'<div class="title">' +
											'如果检测后还不能登录，请参考以下操作，' +
										'</div>' +

										'<div class="text">' +
											'1. 打开浏览器;' +
										'</div>' +

										'<div class="text">' +
											'2. 选择“工具”菜单;' +
										'</div>' +

										'<div class="text">' +
											'3. 点击“internet”选项;' +
										'</div>' +

										'<div class="text">' +
											'4. 选择“删除浏览记录”选项' +
										'</div>' +

										'<div class="text">' +
											'5. 点击“删除”按钮;' +
										'</div>' +

										'<div class="text">' +
											'6. 关闭IE浏览器，再重新打开浏览器即可;' +
										'</div>' +
									'</div>' +

									'<div class="row row3">' +
										'<div class="title">' +
											'推荐使用浏览器，享用更优质的服务体验' +
										'</div>' +

										'<ul>' +
											'<li data-value="chrome">' +
												'<img src="../img/chrome-light.png">' +
												'<span>Chrome</span>' +
											'</li>' +
											// '<li>' +
											// 	'<img src="../img/safari-light.png">' +
											// 	'<span>Safari</span>' +
											// '</li>' +
											'<li data-value="firefox">' +
												'<img src="../img/firefox-light.png">' +
												'<span>Firefox</span>' +
											'</li>' +
											'<li data-value="ie">' +
												'<img src="../img/ie-light.png">' +
												'<span>IE10.0+</span>' +
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
			temp +=	'<li>' +
						'<div class="speed">' +
							'<span class="speed-value">' +
								0 + 'ms' +
							'</span>' +

							'<img class="recommend" src="../img/recommend.png">' +
						'</div>' +

						'<div class="arrow">' +
							'<img class="trend-icon-img" src="../img/arrow-right.png">' +
						'</div>' +

						'<div class="site">' +
							data[i].DomainUrl +
						'</div>' +

						'<div class="go-to-button">' +
							'直接打开' +
						'</div>' +
					'</li>';
    	}

    	this.zone.find('.domains').html(temp);
    	this.bindButtonEvents();
    };

	RouteCheck.prototype.show = function () {
		this.zone.show();
	};

	RouteCheck.prototype.hide = function () {
		this.zone.hide();
	};

	RouteCheck.prototype.bindButtonEvents = function () {
		var url;
		var that = this;

		this.zone.delegate('.go-to-button', 'click', function () {
			url = $(this).prev('.site').text();
			window.open(url);
		});
	};

	RouteCheck.prototype.bindEvents = function () {
		var downLoadUl;
		var that  = this;

		this.zone = $('.route-check');

		downLoadUl = this.zone.find('.right-content .row3 ul');

		downLoadUl.delegate('li', 'click', function () {
			browserName = $(this).attr('data-value');

			if (browserName === 'ie') {
				window.open('https://support.microsoft.com/zh-cn/help/17621/internet-explorer-downloads');
			} else if (browserName === 'chrome') {
				window.open('https://www.google.com/intl/zh-CN/chrome/browser/desktop/index.html');
			} else if (browserName === 'safari') {

			} else if (browserName === 'firefox') {
				window.open('http://www.firefox.com.cn/download/');
			}
		});

		this.getRoutes();
	};

	window.RouteCheck = RouteCheck;
}());
