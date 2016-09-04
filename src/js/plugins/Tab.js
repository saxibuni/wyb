$(function(){
	function Tab(opt) {
		this.opt  = opt;
		this.id   = opt.id;
		this.data = opt.titles;
		this.initDom();
	}

	Tab.prototype.initDom = function() {
		var temp = 	'<ul class="tab" id="' + this.id + '">' +
						this.createTitle() +
					'</ul>';

		this.el = temp;
	}

	Tab.prototype.createTitle = function() {
		var i;
		var temp = '';

		for (i = 0; i < this.data.length; i++) {
			temp += '<li><span>' + this.data[i] + '</span></li>';
		}

		return temp;
	}

	Tab.prototype.getDom = function() {
		return this.el;
	}

	Tab.prototype.bindEvents = function() {
		this.zone = $('#' + this.id);
	}

	window.Tab = Tab;
}());