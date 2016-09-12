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
									'<ul>' +
										this.createCheckItem() +
										this.createCheckItem() +
										this.createCheckItem() +
										this.createCheckItem() +
										this.createCheckItem() +
										this.createCheckItem() +
										this.createCheckItem() +
										this.createCheckItem() +
										this.createCheckItem() +
										this.createCheckItem() +
										this.createCheckItem() +
										this.createCheckItem() +
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
											'<li>' +
												'<img src="../img/ie-light.png">' +
												'<span>IE9.0+</span>' +
											'</li>' +
											'<li>' +
												'<img src="../img/chrome-light.png">' +
												'<span>Chrome</span>' +
											'</li>' +
											'<li>' +
												'<img src="../img/safari-light.png">' +
												'<span>Safari</span>' +
											'</li>' +
											'<li>' +
												'<img src="../img/firefox-light.png">' +
												'<span>Firefox</span>' +
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

	RouteCheck.prototype.createCheckItem = function () {
		var temp = 	'';
		var data = {
			speed: 86,
			site: 'http://www.baidu.com'
		};

		temp +=	'<li>' +
					'<div class="speed">' +
						'<span class="speed-value">' +
							data.speed + 'ms' +
						'</span>' +

						'<img class="recommend" src="../img/recommend.png">' +
					'</div>' +

					

					'<div class="arrow">' +
						'<img class="trend-icon-img" src="../img/arrow-right.png">' +
					'</div>' +

					'<div class="site">' +
						data.site +
					'</div>' +

					'<div class="go-to-button">' +
						'直接打开' +
					'</div>' +
				'</li>';

		return temp;
	};

	RouteCheck.prototype.show = function () {
		this.zone.show();
	};

	RouteCheck.prototype.hide = function () {
		this.zone.hide();
	};

	RouteCheck.prototype.bindEvents = function () {
		this.zone = $('.route-check');
	};

	window.RouteCheck = RouteCheck;
}());
