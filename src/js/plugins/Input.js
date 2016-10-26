(function () {
	function Input(opt) {
		this.opt    = opt;
		this.id     = opt.id;
		this.pass = false;

		this.initDom();
	}

	Input.prototype.initDom = function() {
		var temp =	'<div class="input" id="' + this.id + '">' +
						'<input value="" type="' + (this.opt.type?this.opt.type: 'text') + '" placeholder="' + (this.opt.placeholder? this.opt.placeholder: '') + '">' +
						'<span class="warning-icon"></span>' +
						'<div class="clear"></div>' +
					'</div>';

		this.el = temp;
	};

	Input.prototype.getDom = function() {
		return this.el;
	};

	Input.prototype.isPass = function() {
		return this.pass;
	};

	Input.prototype.getValue = function() {
		return this.zone.children('input').val();
	};

	Input.prototype.setValue = function(value) {
		this.zone.children('input').val(value);
	};

	Input.prototype.showPass = function() {
		//this.zone.children('.pass').show();
		this.zone.children('.warning-icon').hide();
		this.pass = true;
	};

	Input.prototype.showWarning = function() {
		this.zone.children('.warning-icon').show();
		//this.zone.children('.pass').hide();
		this.pass = false;
	};

	Input.prototype.hideWarning = function() {
		this.zone.children('.warning-icon').hide();
		this.pass = true;
	};

	Input.prototype.setPass = function(val) {
		this.pass = val;
	};

	Input.prototype.checkInput = function() {
		var value = this.getValue();

		if (!value.match(this.opt.reg)) {
			this.showWarning();
		} else {
			this.hideWarning();
		}
	};

	Input.prototype.bindEvents = function(callback) {
		var value;
		var that = this;

		this.zone = $('#' + this.id);

		this.zone.children('input').bind('input', function () {
			that.checkInput();

			if (typeof callback === 'function') {
				callback();
			}
		});

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