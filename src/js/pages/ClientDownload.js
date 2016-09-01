(function () {
	function ClientDownload () {
		this.initDom();
	}
	
	ClientDownload.prototype.initDom = function () {
		var temp =	'<div class="page client-download">' +
						'<div class="wrapper">' +
							'客户端下载' +
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
		this.zone = $('.client-download');
	};

	window.ClientDownload = ClientDownload;
}());
