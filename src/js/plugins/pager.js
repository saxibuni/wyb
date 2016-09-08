$(function(){
	function Pager(opt){
		this.id = opt.id;
		this.pageSize = 10;
		this.pageIndex = 0;
		this.callback = opt.callback;
		
		//取到数据后计算该值		
		this.pageCount = Math.ceil(opt.recordCount / this.pageSize);
	}

	function initDom = function() {
		var temp;
			temp = '<div id="' + this.id +'" class="pager">' + 
						'<div class="left">' +
							'<span>目前加载<span>' +
							'<span>10</span><span>条，</span>' +
							'<span>当前第</span>' +
							'<span>1</span><span>页</span>'
						'</div>' +

						'<div class="right">' +
							'<span class="prev"></sapn>' +
							'<div class="page-item">' +
								'<span page-index="1">1<span>' +
								'<span page-index="2">2<span>' +
								'<span page-index="3">3<span>' +
								'<span page-index="4">4<span>' +
							'</div>' +
							'<span class="next"></span>' +
							'<span>共</span><span class="total-page"></span><span>页</span>' +
						'</div>' +

					'</div>';		
		this.el = temp;
	}

	function getDom = function(){
		return this.el
	}

	Pager.prototype.getData = function(){
		this.callback(this.pageIndex);
	}

	Pager.prototype.setButtonStatus = function(){
		
	}

	Pager.prototype.setPageItems = function(){
		
	}

	Pager.prototype.bindEvents = function(){
		var that = this;
		this.zone = $('#' + this.id);

		this.zone.delegate('.prev','click',function(){
			if (that.pageIndex != 0) {
				that.pageIndex--;
				that.getData();
				that.setButtonStatus();
			}
		});

		this.zone.delegate('.next','click',function() {
			if (that.pageIndex != that.pageCount) {
				that.pageIndex++;
				that.getData();
				that.setButtonStatus();
			}
		});

		this.zone.delegate('[page-index]','click',function(){
			that.pageIndex = parseInt($(this).attr('page-index'));
			that.getData();
			that.setButtonStatus();
		});

	}



}());