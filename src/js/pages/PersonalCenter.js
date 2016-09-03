$(function(){
	function PersonalCenter(){
		this.subWalletData = [
			{
				id: 0,
				walletType: 'PT',
				balance: '1,000.00'
			},{
				id: 1,
				walletType: 'SG',
				balance: '2,000.00'				
			},{
				id: 2,
				walletType: 'LT',
				balance: '3,000.00'				
			},{
				id: 3,
				walletType: 'PT',
				balance: '4,000.00'				
			},{
				id: 4,
				walletType: 'PT',
				balance: '4,000.00'				
			},{
				id: 5,
				walletType: 'PT',
				balance: '4,000.00'				
			},{
				id: 6,
				walletType: 'PT',
				balance: '4,000.00'				
			},{
				id: 7,
				walletType: 'PT',
				balance: '4,000.00'				
			}
		];
		this.subWallets = [];

		this.tabData = {
		    'zjgl': ['充值','转账','提现'],
		    'jyjl':['充值记录','转账记录','提款记录','投注记录','红利记录'],
		   	'zhtx':['基本信息','安全中心'],
		   	'zlx':['站内信','通知公告'],
		}

		this.initDom();
	};


	PersonalCenter.prototype.initDom = function(){
		var temp = '<div class="page personal-center">' +
						'<div class="wrapper">' +
							'<div class="left-container">' +
								'<div class="user-profiles">' +
									'<img src="../img/T0.png" class="user-img" />' +
									'<div class="user">' +
										'<span class="username">LORENZO</span>' +
										'<img src="../img/t01.png" />' +
										'<span class="vip">VIP3</span>' +
									'</div>' +	
									'<div class="psw-info">' +
										'<span class="psw-intro">安全等级</span>' +
										'<span class="psw-level-value">80%</span>' +
										'<div class="psw-level">' +
											'<div>' +
												'<div class="psw-line-value">' +
												'</div>' +
											'</div>' +
											'<span>提升</span>' +
											'<div class="menu-ico">' +
												'<img src="../img/a01-h.png" />' +
												'<img src="../img/a02-n.png" />' +
												'<img src="../img/a03-n.png" />' +
											'</div>' +	
										'</div>' +
									'</div>' +
								'</div>' +

								'<div class="tree">' +
									'<ul>' +
                                    	'<li><span>资金管理</span><div></div></li>' +
                                    	'<li><span>交易记录</span><div></div></li>' +
                                    	'<li><span>账户设置</span><div></div></li>' +
                                    	'<li><span>站内信</span><span class="letter-count">(2)</span><div></div></li>' +
									'</ul>' +
									'<div class="stick"></div>' +
								'</div>' +
							'</div>' +

							'<div class="right-container">' +
								'<div class="center-wallet">' +
									'<img src="../img/refresh-h.png" class="refresh" />' +
									'<span class="zxqb">中心钱包</span>' +
									'<span class="money money-type">¥</span><span class="money balance">10,000.00</span><span class="money-unit">CNY</span>' +
									'<hr class="line">' +
									'<a href="javascript:void(0);" class="button turn-into">转出</a>' +
									'<a href="javascript:void(0);" class="button turn-out">转入</a>' +									
								'</div>' +

								'<div class="nav-left"></div>' +
								'<div class="wallet-zone">' +
									this.createSubWallet() +
								'</div>' +
								'<div class="nav-right"></div>' +
								'<div class="clear"></div>' +

								'<div class="tab-container">' +
								'</div>' +
 							'</div>' +
							'<div class="clear"></div>' +
						'</div>' +
					'</div>';
		this.el = temp;
	};

	PersonalCenter.prototype.getDom = function(){
		return this.el;
	};

	PersonalCenter.prototype.createSubWallet = function(){
		var temp = '';
		var subWallet;

		for(var i = 0; i < this.subWalletData.length; i++){
			subWallet = new SubWallet(this.subWalletData[i]);
			this.subWallets.push(subWallet);
			if (i % 2 == 0) 
				temp += '<div class="wallet-group">';
			temp += 	subWallet.el;
			if (i % 2 != 0) 
				temp +='</div>';
		}

		return temp;
	}

	PersonalCenter.prototype.show = function(){
		this.zone.show();
	}

	PersonalCenter.prototype.hide = function(){
		this.zone.hide();
	}

	PersonalCenter.prototype.bindEvents = function(){
		var menuUl;
		var stick;
		var index;
		var walletzone;
		var that = this;

		this.zone = $('.personal-center');
		menuUl = this.zone.find('.tree > ul');
		walletzone = this.zone.find('.wallet-zone');
		stick = this.zone.find('.stick');

        menuUl.delegate('li','click',function(){
            index = $(this).index();
            stick.css('top',(index * 40) + 'px');
        });

        walletzone.delegate('.sub-wallet','mouseover',function(){
        	$(this).find('.transfer-layer').show();
        });
        walletzone.delegate('.sub-wallet','mouseout',function(){
        	$(this).find('.transfer-layer').hide();
        });

	}

	window.PersonalCenter = PersonalCenter;




}());