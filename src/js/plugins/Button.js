(function () {
	function Button(opt) {
		this.opt  = opt;
		this.id   = opt.id;
		this.initDom();
	}

	Button.prototype.initDom = function() {
		var temp = 	'<div class="button' + (this.opt.className? (' ' + this.opt.className):'') + '" id="' + this.id + '">' +
						(this.opt.search?'<span class="pc-serach-icon"></span>': '') +
						'<span>' +
							this.opt.name +
						'</span>' +
					'</div>';

		this.el = temp;
	};

	Button.prototype.getDom = function() {
		return this.el;
	};

	Button.prototype.bindEvents = function() {
		var that = this;

		this.zone = $('#' + this.id);
		this.resetStyles();
	};

	Button.prototype.resetStyles = function() {
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

	window.Button = Button;
}());