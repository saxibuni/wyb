(function () {
	function Select(opt) {
		this.opt  = opt;
		this.id   = opt.id;
		this.data = opt.data || [];
		this.initDom();
	}

	Select.prototype.initDom = function() {
		var temp =	'<select class="select' + (this.opt.className?(' ' +this.opt.className): '') + '"' + ((this.opt.id)?(' id="' + this.opt.id + '"'):'') + '>' +
						this.createOptions() +
					'</select>';

		this.el = temp;
	};

	Select.prototype.getDom = function() {
		return this.el;
	};

	Select.prototype.createOptions = function() {
		var i;
		var temp = '';

		for (i = 0; i < this.data.length; i++) {
			temp += '<option data-value="' + this.data[i].value + '">' + this.data[i].text + '</option>';
		}

		return temp;
	};

	Select.prototype.setOptions = function(temp) {
		this.zone.html(temp);
	};

	Select.prototype.getValue = function() {
		return this.zone.find('option:selected').attr('data-value');
	};

	Select.prototype.setValueById = function(Id) {
		this.zone.val(Id);
	};

	Select.prototype.setValueByName = function(name) {
		this.zone.find('option[text="' + name + '"]').attr("selected", true); 
	};

	Select.prototype.bindEvents = function() {
		var that = this;

		this.zone = $('#' + this.id);
		this.resetStyles();
	};

	Select.prototype.resetStyles = function() {
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

	window.Select = Select;
}());