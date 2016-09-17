(function () {
	function Notice (opt) {
		this.opt      = opt;
		this.date     = opt.date;
		this.content  = opt.content;
		this.hasBtn   = opt.hasBtn;
		this.initDom();
	}

	Notice.prototype.initDom = function () {
		var closeBtn='';
		var titleCls=" title-black";
		var moreCls=" more-grey";
		var backCls=" back-white";

		if(this.hasBtn){
			closeBtn='<img id="close-btn" src="../img/close-r.png">';
			titleCls="";
			moreCls="";
			backCls="";
		}

		var temp=	'<div class="notice'+backCls+'">'+
					   	'<div class="notice-right'+moreCls+'">'+
					     	'<span class="notice-date">'+this.date+'</span><span>更多公告</span>'+
					     	closeBtn +
					   	'</div>' +
					   	'<div class="notice-left">'+
					     	'<img src="../img/notice.png">'+
					       	'<span class="notice-title'+titleCls+'">[重要公告]</span>'+
					       	'<span class="notice-content">'+this.content+'</span>'+
					   	'</div>'+
					'</div>'
		this.el  = temp;
	};

	Notice.prototype.getDom = function () {
		return this.el;
	};
	Notice.prototype.hide = function () {
	  this.el="";
	};

	Notice.prototype.bindEvents = function (callback) {
		var that = this;

		this.closeBtn = $('#close-btn');
		this.closeBtn.mouseover(function(){
			that.closeBtn.attr("src","../img/close-r-h.png")
		})
		this.closeBtn.mouseout(function(){
			that.closeBtn.attr("src","../img/close-r.png")
		})
		this.closeBtn.click(function () {
			$(".notice").hide();
		});
	};

	window.Notice = Notice;
}());
