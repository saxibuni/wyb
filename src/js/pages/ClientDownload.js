(function () {
	function ClientDownload () {
		this.initDom();
	}
	
	ClientDownload.prototype.initDom = function () {
		var temp =	'<div class="page client-download">' +
						'<div class="wrapper">' +
							'<div class="title">' +
								'<div class="img img1">' +
									'<img class="normal" src="../img/pt-normal.png">' +
									'<img class="down" src="../img/pt-down.png">' +
									'<span>真人、老虎机</span>' +
								'</div>' +

								'<div class="img img2">' +
									'<img class="normal" src="../img/bbin-normal.png">' +
									'<img class="down" src="../img/bbin-down.png">' +
									'<span>真人、老虎机</span>' +
								'</div>' +

								'<div class="img img3">' +
									'<img class="normal" src="../img/ag-normal.png">' +
									'<img class="down" src="../img/ag-down.png">' +
									'<span>真人、老虎机</span>' +
								'</div>' +

								'<div class="img img4">' +
									'<img class="normal" src="../img/mg-normal.png">' +
									'<img class="down" src="../img/mg-down.png">' +
									'<span>真人、老虎机</span>' +
								'</div>' +
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
		this.zone.show();
	};

	ClientDownload.prototype.hide = function () {
		this.zone.hide();
	};

	ClientDownload.prototype.bindEvents = function () {
		var that = this;
		var titleImgs;

		this.zone = $('.client-download');
		titleImgs = this.zone.find('.title .img');

		titleImgs.click(function () {
			titleImgs.removeClass('selected');
			$(this).addClass('selected');
		});
	};

	window.ClientDownload = ClientDownload;
}());
