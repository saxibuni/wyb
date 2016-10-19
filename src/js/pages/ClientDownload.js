(function () {
	function ClientDownload () {
		this.initDom();
	}
	
	ClientDownload.prototype.initDom = function () {
		var temp =	'<div class="page client-download">' +
						'<div class="wrapper">' +
							'<div class="title">' +
								'<ul class="title-ul">' +
									'<li class="pt-li selected" data-type="PT">' +
										'<span class="img pt-img"></span>' +
										'<span class="name">真人、老虎机</span>' +
									'</li>'+
									'<li class="bbin-li" data-type="BBIN">' +
										'<span class="img bbin-img"></span>' +
										'<span class="name">真人、老虎机</span>' +
									'</li>'+
									'<li class="mg-li" data-type="MG">' +
										'<span class="img mg-img"></span>' +
										'<span class="name">真人、老虎机</span>' +
									'</li>'+
									'<li class="ag-li" data-type="AG">' +
										'<span class="img ag-img"></span>' +
										'<span class="name">真人、老虎机</span>' +
									'</li>'+
									'<li class="ttg-li" data-type="TTG">' +
										'<span class="img ttg-img"></span>' +
										'<span class="name">真人、老虎机</span>' +
									'</li>'+
									'<li class="mt-li" data-type="MT">' +
										'<span class="img mt-img"></span>' +
										'<span class="name">真人、老虎机</span>' +
									'</li>'+
								'</ul>' +
							'</div>' +

							'<div class="content">' +
								'<div class="content-up">' +
									'<div class="left">' +
										'<img src="../img/download-computer.png">' +
									'</div>' +
									'<div class="right">' +
										'<div class="right-wrapper">' +
											'<div class="text">' +
												'<span class="version">版本号：</span>' +
												'<span class="version-value">2.1.5.2</span>' +
											'</div>' +
											'<div class="text">' +
												'<span class="version">系统：</span>' +
												'<span class="version-value">WIN XP/2000/2003/7X/8X</span>' +
											'</div>' +
											'<div class="button">' +
												'<img class="down" src="../img/windows.png">' +
												'<span>桌面版下载</span>' +
											'</div>' +
										'</div>' +
									'</div>' +
								'</div>' +

								'<div class="content-down">' +
									'<div class="zone1">' +
										'<img src="../img/download-mobile.png">' +
									'</div>' +

									'<div class="zone2">' +
										'<div class="zone-wrapper">' +
											'<img src="../img/qrcode.png">' +
											'<div class="button">' +
												'<img class="down" src="../img/android.png">' +
												'<span>Android下载</span>' +
											'</div>' +
										'</div>' +
									'</div>' +

									'<div class="zone3">' +
										'<div class="zone-wrapper">' +
											'<img src="../img/qrcode.png">' +
											'<div class="button">' +
												'<img class="down" src="../img/apple.png">' +
												'<span>IOS下载</span>' +
											'</div>' +
										'</div>' +
									'</div>' +

									'<div class="zone4">' +
										'<div class="zone-wrapper">' +
											'<img src="../img/qrcode.png">' +
											'<div class="button">' +
												'<img class="down" src="../img/windows.png">' +
												'<span>windows下载</span>' +
											'</div>' +
										'</div>' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	ClientDownload.prototype.getDom = function () {
		return this.el;
	};

	ClientDownload.prototype.show = function () {
		this.zone.fadeIn(500);
	};

	ClientDownload.prototype.hide = function () {
		this.zone.fadeOut(500);
	};

	ClientDownload.prototype.bindEvents = function () {
		var that = this;
		var titleUl;

		this.zone = $('.client-download');
		titleUl = this.zone.find('.title-ul');

		titleUl.delegate('li', 'click', function () {
			titleUl.find('li').removeClass('selected');
			$(this).addClass('selected');
		});
	};

	window.ClientDownload = ClientDownload;
}());
