$(function(){
	function Pager(opt) {
		this.opt       = opt;
		this.id        = opt.id;
		this.pageIndex = 0;
		this.pageSize  = opt.pageSize || 10;
		this.callback  = opt.callback;

		this.initDom();
	}

	Pager.prototype.initDom = function() {
		var temp;

		temp = '<div id="' + this.id +'" class="pager">' +
					'<div class="left">' +
						'<span>目前加载</span>' +
						'<span class="total-count">0</span><span>条，</span>' +
						'<span>当前第</span>' +
						'<span class="current-page">1</span><span>页</span>' +
					'</div>' +

					'<div class="right">' +
						'<span class="prev"></span>' +
						'<div class="page-item"></div>' +
						'<span class="next"></span>' +
						'<span>共</span><span class="total-page">0</span><span>页</span>' +
					'</div>' +

				'</div>';		
		this.el = temp;
	}

	Pager.prototype.getDom = function(){
		return this.el;
	}

	Pager.prototype.getData = function(){
		this.callback(this.pageIndex);
	}

	Pager.prototype.setButtonStatus = function() {
		var temp = '';
		var i    = this.pageIndex;

		if (i % 4 == 0 && i != 0 && i < this.pageCount) {
			while(i < this.pageCount && i < this.pageIndex + 4) {
				temp += '<span page-index="' + (i + 1) +'">' + (i + 1) + '</span>';
				i++;
			}

			this.zone.find('.page-item').html(temp);
		}

		if (i % 4 == 3) {
			while(i - 3 <= this.pageIndex){
				temp += '<span page-index="' + (i - 2) +'">' + (i - 2) + '</span>';
				i++;
			}

			this.zone.find('.page-item').html(temp);
		}

		this.zone.find('.current-page').text(this.pageIndex + 1);
		this.zone.find('[page-index]').removeClass('selected');
		this.zone.find('[page-index=' + (this.pageIndex + 1) + ']').addClass('selected');
	};

	Pager.prototype.setTotal = function(total) {
		this.total     = total;
		this.pageCount = Math.ceil(total / this.pageSize);
		this.zone.find('.total-count').text(this.total);
		this.zone.find('.current-page').text(this.pageIndex + 1);
		this.zone.find('.total-page').text(this.pageCount);
		this.setPageItems();
	};

	Pager.prototype.setPageItems = function() {
		var i;
		var temp = '';

		for(i = 0; i < this.pageCount; i++) {
			if (i == 0) {
				temp += '<span page-index="1" class="selected">1</span>';
			} else if (i == 4) {
				break;
			} else {
				temp += '<span page-index="' + (i + 1) +'">' + (i + 1) + '</span>';
			}
		}

		this.zone.find('.page-item').html(temp);
	};

	Pager.prototype.bindEvents = function() {
		var that  = this;
		
		this.zone = $('#' + this.id);

		this.zone.delegate('.prev','click',function() {
			if (that.pageIndex != 0) {
				that.pageIndex--;
				that.getData();
				that.setButtonStatus();
			}
		});

		this.zone.delegate('.next','click',function() {
			if (that.pageIndex != that.pageCount - 1) {
				that.pageIndex++;
				that.getData();
				that.setButtonStatus();
			}
		});

		this.zone.delegate('[page-index]','click',function(){
			that.pageIndex = parseInt($(this).attr('page-index')) - 1;
			that.getData();
			that.setButtonStatus();
		});
	};

	window.Pager = Pager;

}());