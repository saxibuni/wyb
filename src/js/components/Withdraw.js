(function () {
	function Withdraw(opt) {
		this.opt  = opt;
		this.initDom();
	}

	Withdraw.prototype.initDom = function() {
		var temp = 	'';

		this.el = temp;
	}

	Withdraw.prototype.getDom = function() {
		return this.el;
	}

	Withdraw.prototype.bindEvents = function() {
		this.zone = $('.top-up');
	}

	window.Withdraw = Withdraw;
}());