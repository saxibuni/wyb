(function () {
	function TopupRecord () {
		this.initDom();
	}
	
	TopupRecord.prototype.initDom = function () {
		var temp = 	'<div class="topup-record">' +
						'<div class="bar-zone">' +
						'</div>' +

						'<div class="table-zone">' +
						'</div>' +
					'</div>';

		this.el  = temp;
	};

	TopupRecord.prototype.getDom = function () {
		return this.el;
	};

	TopupRecord.prototype.bindEvents = function () {
		var that = this;
		this.zone
	};

	window.TopupRecord = TopupRecord;
}());
