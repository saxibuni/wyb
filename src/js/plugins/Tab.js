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
			if (i === 0) {
				temp += '<li class="selected"><span>' + this.data[i] + '</span></li>';
			} else {
				temp += '<li><span>' + this.data[i] + '</span></li>';
			}
			
		}

		return temp;
	}

	Tab.prototype.getDom = function() {
		return this.el;
	}

	Tab.prototype.bindEvents = function() {
		var that = this;

		this.zone = $('#' + this.id);

		this.zone.find('li').click(function () {
			that.zone.find('li').removeClass('selected');
			$(this).addClass('selected');
		});
	}

	window.Tab = Tab;
}());