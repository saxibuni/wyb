(function () {
	function LiveVideo () {
		this.initDom();
	}
	
	LiveVideo.prototype.initDom = function () {
		var temp =	'<div class="page home-page">' +
						'<div class="wrapper">' +
							'我是Page内容' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	LiveVideo.prototype.getDom = function () {
		return this.el;
	};

	LiveVideo.prototype.show = function () {
	};

	LiveVideo.prototype.hide = function () {
	};

	LiveVideo.prototype.bindEvents = function () {
	};

	window.LiveVideo = LiveVideo;
}());
