(function () {
	function LiveVideo () {
		this.initDom();
	}
	
	LiveVideo.prototype.initDom = function () {
		var temp =	'<div class="page live-video">' +
						'<div class="wrapper">' +
							'真人视讯' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	LiveVideo.prototype.getDom = function () {
		return this.el;
	};

	LiveVideo.prototype.show = function () {
		this.zone.show();
	};

	LiveVideo.prototype.hide = function () {
		this.zone.hide();
	};

	LiveVideo.prototype.bindEvents = function () {
		this.zone = $('.live-video');
	};

	window.LiveVideo = LiveVideo;
}());
