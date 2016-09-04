(function () {
	function LiveVideo () {
		this.initDom();
	}
	
	LiveVideo.prototype.initDom = function () {
		var temp =	'<div class="page live-video">' +
						'<div class="wrapper">' +
							'<div class="title">' +
							'</div>' +

							'<div class="content">' +
								'<table cellspacing="10" cellpadding="10">' +
									'<tbody>' +
										'<tr>' +
											'<td colspan="2">' +
												this.createItem() +
											'</td>' +
											'<td>' +
												this.createItem() +
											'</td>' +
											'<td>' +
												this.createItem() +
											'</td>' +
										'</tr>' +

										'<tr>' +
											'<td>' +
												this.createItem() +
											'</td>' +
											'<td>' +
												this.createItem() +
											'</td>' +
											'<td>' +
												this.createItem() +
											'</td>' +
											'<td>' +
												this.createItem() +
											'</td>' +
										'</tr>' +
									'</tbody>' +
								'</table>' +
							'</div>' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	LiveVideo.prototype.getDom = function () {
		return this.el;
	};

	LiveVideo.prototype.createItem = function () {
		var temp =	'<div class="item">' +
						'<div class="zone1">' +
							'<div class="logo">' +
								'<img src="../img/temp.svg">' +
							'</div>' +
						'</div>' +

						'<div class="zone2">' +
							'<p class="title">' +
								'AG国际厅，实时显示赢家排行胜率，百家乐，龙虎，轮盘...' +
							'</p>' +

							'<div class="quantity">' +
								'<img class="message-img" src="../img/zh-lang.png">' +
								'<span>2022</span>' +
							'</div>' +
						'</div>' +
					'</div>';

		return temp;
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
