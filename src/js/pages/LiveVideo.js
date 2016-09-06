(function () {
	function LiveVideo () {
		this.initDom();
	}
	
	LiveVideo.prototype.initDom = function () {
		var temp =	'<div class="page live-video">' +
						'<div class="wrapper">' +
							'<div class="title">' +
								'<img class="message-img" width="1024" height="435" src="../img/banner1.png">' +
							'</div>' +

							'<div class="content">' +
								'<table cellspacing="10" cellpadding="10">' +
									'<tbody>' +
										'<tr>' +
											'<td colspan="2">' +
												this.createItem({
													width: '486px',
													height: '220px',
													className: 'first-item',
													img: 's00-h'
												}) +
											'</td>' +
											'<td>' +
												this.createItem({
													img: 's01-h'
												}) +
											'</td>' +
											'<td>' +
												this.createItem({
													img: 's02-h'
												}) +
											'</td>' +
										'</tr>' +

										'<tr>' +
											'<td>' +
												this.createItem({
													img: 's03-h'
												}) +
											'</td>' +
											'<td>' +
												this.createItem({
													img: 's04-h'
												}) +
											'</td>' +
											'<td>' +
												this.createItem({
													img: 's04-h'
												}) +
											'</td>' +
											'<td>' +
												this.createItem({
													img: 's04-h'
												}) +
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

	LiveVideo.prototype.createItem = function (opt) {
		var temp =	'<div class="item' + ((opt&&opt.className)?' ' + opt.className: '') + '">' +
						'<div class="zone1">' +
							'<div class="logo"' + (opt&&opt.width&&opt.height?(' style="width:' + opt.width + ';height:' + opt.height + '"'): '') + '>' +
								'<img src="../img/' + opt.img + '.jpg"' + (opt?(' style="width:' + opt.width + ';height:' + opt.height + '"'): '') + '>' +
							'</div>' +
						'</div>' +

						'<div class="zone2">' +
							'<p class="title">' +
								'AG国际厅，实时显示赢家排行胜率，百家乐，龙虎，轮盘...' +
							'</p>' +

							'<div class="quantity">' +
								'<img class="message-img" src="../img/eye.png">' +
								'<span>2022</span>' +
							'</div>' +
						'</div>' +

						'<div class="item-overlay">' +
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
