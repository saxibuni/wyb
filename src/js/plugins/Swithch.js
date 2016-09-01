(function () {
	function Switch (opt) {
		this.opt = opt;
		this.id  = opt.id;
		this.initDom();
	}
	
	Switch.prototype.initDom = function () {
		var temp =	'<div class="switch" id="' + this.id + '">' +
						'<div class="switch-ball">' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	Switch.prototype.getDom = function () {
		return this.el;
	};

	Switch.prototype.bindEvents = function (callback) {
		var that = this;

		this.zone = $('#' + this.id);

		this.zone.click(function () {
			that.zone.toggleClass('switch-selected');

			if (typeof callback === 'function') {
				callback();
			}
		});
	};

	window.Switch = Switch;
}());
