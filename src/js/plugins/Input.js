(function () {
	function Input(opt) {
		this.opt  = opt;
		this.id   = opt.id;
		this.initDom();
	}

	Input.prototype.initDom = function() {
		var temp =	'<div class="input" id="' + this.id + '">' +
						'<input type="' + (this.opt.type?this.opt.type: 'text') + '" placeholder="' + (this.opt.placeholder? this.opt.placeholder: '') + '">' +
						'<img class="pass" src="../img/pass.png">' +
						'<img class="warning" src="../img/warning.png">' +
						'<div class="clear"></div>' +
					'</div>';

		this.el = temp;
	};

	Input.prototype.getDom = function() {
		return this.el;
	};

	Input.prototype.getValue = function() {
		return this.zone.children('input').val();
	};

	Input.prototype.setValue = function(value) {
		this.zone.children('input').val(value);
	};

	Input.prototype.bindEvents = function() {
		var that = this;

		this.zone = $('#' + this.id);
		this.resetStyles();
	};

	Input.prototype.resetStyles = function() {
		if (this.opt.height) {
			this.zone.css({
				'height': this.opt.height + 'px',
				'line-height': this.opt.height + 'px'
			});
		}

		if (this.opt.width) {
			this.zone.css('width', this.opt.width + 'px');			
		}

		if (this.opt.backgroundColor) {
			this.zone.css('background-color', this.opt.backgroundColor);			
		}

		if (this.opt.color) {
			this.zone.css('color', this.opt.color);			
		}

		if (this.opt.fontSize) {
			this.zone.css('font-size', this.opt.fontSize);
		}
	};

	window.Input = Input;
}());