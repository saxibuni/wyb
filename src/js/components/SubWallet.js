$(function(){
	function SubWallet(opt){
		this.opt = opt || {};
		this.id = opt.id;
		this.initDom();
	}

	SubWallet.prototype.initDom = function(){
		var temp = '<div class="sub-wallet wallet" data-platform="' + this.opt.platform + '">' +
						'<div class="row1">' +
							'<span class="balance">' + this.opt.balance + '</span>' +
							'<span class="pc-icon refresh-icon refresh"></span>' +
							'<span class="clear"></span>' +
						'</div>' +

						'<div class="row2">' +
							'<span class="platform">' + this.opt.walletType + '</span>' +
							'<a class="btn-transfer">转账</a>' +
							'<span class="clear"></span>' +
						'</div>' +
					'</div>';
		this.el = temp;
	}

	SubWallet.prototype.getDom = function(){
		return this.el;
	}

	SubWallet.prototype.bindEvents = function(){
		//转入转出时间注册
	}

	window.SubWallet = SubWallet;

}());