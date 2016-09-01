(function () {
	function ClientDownload () {
		this.initDom();
	}
	
	ClientDownload.prototype.initDom = function () {
		var temp =	'<div class="page client-download">' +
						'<div class="wrapper">' +
							'我是Page内容' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	ClientDownload.prototype.getDom = function () {
		return this.el;
	};

	ClientDownload.prototype.show = function () {
	};

	ClientDownload.prototype.hide = function () {
	};

	ClientDownload.prototype.bindEvents = function () {
	};

	window.ClientDownload = ClientDownload;
}());
