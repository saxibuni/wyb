(function () {
	function EEntertainment () {
		this.initDom();
	}

	EEntertainment.prototype.initDom = function () {
		this.notice=new Notice({date:'1026-09-05',content:'这是一个测试公告',hasBtn:false});
		var noticeDom=this.notice.getDom();
		var temp =	'<div class="page e-entertainment">' +
						'<div class="wrapper">' +
							'电子游艺' +
						'</div>' +
					'</div>';

		this.el  = noticeDom+temp;
	};

	EEntertainment.prototype.getDom = function () {
		return this.el;
	};

	EEntertainment.prototype.show = function () {
		this.zone.show();
	};

	EEntertainment.prototype.hide = function () {
		this.zone.hide();
	};

	EEntertainment.prototype.bindEvents = function () {
		this.zone = $('.e-entertainment');
		this.notice.bindEvents();
	};

	window.EEntertainment = EEntertainment;
}());
