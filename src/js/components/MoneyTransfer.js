(function () {
	function MoneyTransfer(opt) {
		this.opt  = opt;
		this.initDom();
	}

	MoneyTransfer.prototype.initDom = function() {
		var temp = 	'';

		this.el = temp;
	}

	MoneyTransfer.prototype.getDom = function() {
		return this.el;
	}

	MoneyTransfer.prototype.bindEvents = function() {
		this.zone = $('.top-up');
	}

	window.MoneyTransfer = MoneyTransfer;
}());