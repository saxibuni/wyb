(function () {
	function Footer () {
		this.initDom();
	}
	
	Footer.prototype.initDom = function () {
		var temp =	'<div class="footer">' +
						'<div class="wrapper">' +
							'<div class="footer-left">' +
								'<div class="row1">' +
									'<ul>' +
										'<li><span>关于我们</span></li>' +
										'<li><span>联系我们</span></li>' +
										'<li><span>存取款帮助</span></li>' +
										'<li><span>常见问题</span></li>' +
										'<li><span>合作伙伴</span></li>' +
										'<li data-value="routeCheck"><span>线路检测</span></li>' +
									'</ul>' +
								'</div>' +
								'<div class="row2">' +
									'<span class="span1">Copyright © 2006 - 2016</span><span class="span2"> VEB Entertainment (伟易博) All Rights Reserved</span>' +
								'</div>' +
								'<div class="row3">' +
									'<ul>' +
										'<li>' +
											'<img class="copyright-img li1" width="76" height="28" src="../img/copyrights1.png">' +
										'</li>' +
										'<li><span class="divider"></span></li>' +
										'<li>' +
											'<img class="copyright-img li2" width="45" height="18" src="../img/copyrights2.png">' +
										'</li>' +
										'<li>' +
											'<img class="copyright-img li3" width="60" height="18" src="../img/copyrights3.png">' +
										'</li>' +
										'<li>' +
											'<img class="copyright-img li4" width="18" height="18" src="../img/copyrights4.png">' +
										'</li>' +
										'<li>' +
											'<img class="copyright-img li5" width="24" height="18" src="../img/copyrights5.png">' +
										'</li>' +
										'<li>' +
											'<img class="copyright-img li6" width="29" height="18" src="../img/copyrights6.png">' +
										'</li>' +
										'<li>' +
											'<img class="copyright-img li7" width="41" height="18" src="../img/copyrights7.png">' +
										'</li>' +
										'<li>' +
											'<img class="copyright-img li8" width="14" height="18" src="../img/copyrights8.png">' +
										'</li>' +
									'</ul>' +
								'</div>' +
							'</div>' +

							'<div class="footer-middle">' +
							'</div>' +
							
							'<div class="footer-right">' +
								'<div class="row1">' +
									'<div class="title">' +
										'推荐浏览器' +
									'</div>' +

									'<ul>' +
										'<li>' +
											'<img src="../img/ie-gray.png">' +
											'<span>IE9.0+</span>' +
										'</li>' +
										'<li>' +
											'<img src="../img/chrome-gray.png">' +
											'<span>Chrome</span>' +
										'</li>' +
										'<li>' +
											'<img src="../img/safari-gray.png">' +
											'<span>Safari</span>' +
										'</li>' +
										'<li>' +
											'<img src="../img/firefox-gray.png">' +
											'<span>Firefox</span>' +
										'</li>' +
									'</ul>' +
								'</div>' +
								'<div class="row2">' +
									'<div class="title">' +
										'最佳分辨率' +
									'</div>' +

									'<div class="resolution">' +
										'<img src="../img/resolution.png">' +
										'<span>1366 × 768</span>' +
										'<span>1920 × 1080</span>' +
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

	Footer.prototype.bindEvents = function () {
		var featureUl;
		var pageName;
		var that = this;

		this.zone = $('.footer');

		featureUl = this.zone.find('.footer-left .row1');

		featureUl.delegate('li', 'click', function () {
			pageName = $(this).attr('data-value');
			app.goTo(pageName);
		});

	};

	window.Footer = Footer;
}());
