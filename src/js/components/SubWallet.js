$(function(){
	function SubWallet(opt){
		this.opt = opt || {};
		this.id = opt.id;
		this.initDom();
	}

	SubWallet.prototype.initDom = function(){
		var temp = '<div class="sub-wallet" id="' + this.opt.id + '">' +
						'<img src="../img/refresh-h.png" class="refresh" />' +
						'<span>' + this.opt.walletType + '</span>' +
						'<hr class="line">' +
						'<span class="balance">' + this.opt.balance + '</span>' +
						'<div class="transfer-layer">' +
							'<a href="javascript:void(0);" class="button turn-into">转出</a>' +
							'<a href="javascript:void(0);" class="button turn-out">转入</a>' +									
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