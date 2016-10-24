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
						'<li class="stick"></li>' +
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
		var index;
		var stick;
		var that = this;

		this.zone = $('#' + this.id);
		stick     = this.zone.find('.stick');

		this.zone.find('li').click(function () {
			index = $(this).index();

			that.zone.find('li').removeClass('selected');
			$(this).addClass('selected');
			stick.css('left', 150 * index + 'px');
		});
	}

	window.Tab = Tab;
}());