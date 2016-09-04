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
									this.createZjgl() +
									//this.createJyjl() +
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

	PersonalCenter.prototype.createZjgl = function(){
		var temp = '';

		this.zjglTab = new Tab({
			id: 'zjgl-tab',
			titles: this.tabData['zjgl']
		});

		this.cz = new TopUp();

		temp +=	this.zjglTab.getDom() +
				'<div class="zjgl-content">' +
					this.cz.getDom() +
				'</div>';

		return temp;
	}

	PersonalCenter.prototype.createJyjl = function(){
		var temp = '';

		this.zjglTab = new Tab({
			id: 'jyjl-tab',
			titles: this.tabData['jyjl']
		});

		this.topupRecord = new TopupRecord();

		temp +=	this.zjglTab.getDom() +
				'<div class="zjgl-content">' +
					this.topupRecord.getDom() +
				'</div>';

		return temp;
	}

	PersonalCenter.prototype.createZhsz = function(){
		var temp = '';
		return temp;
	}

	PersonalCenter.prototype.createZnx = function(){
		var temp = '';
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

        this.zjglTab.bindEvents();
        this.cz.bindEvents();

        $('#zjgl-tab').delegate('li', 'click', function () {
        	index = $(this).index();
        	that.zone.find('.grzx-money-action').hide();

        	if (index === 0) {
        		that.cz.show();
        	} else if (index === 1) {
        		if (!that.zz) {
        			that.zz = new MoneyTransfer();
        			that.zone.find('.zjgl-content').append(that.zz.getDom());
        			that.zz.bindEvents();
        		}

        		that.zz.show();
        	} else if (index === 2) {
        		if (!that.tx) {
        			that.tx = new Withdraw();
        			that.zone.find('.zjgl-content').append(that.tx.getDom());
        			that.tx.bindEvents();
        		}

        		that.tx.show();
        	}
        })

        $('#jyjl-tab').delegate('li', 'click', function () {
        	index = $(this).index();
        	that.zone.find('.grzx-money-action').hide();

        	if (index === 0) {
        		that.topupRecord.show();
        	} else if (index === 1) {
        		if (!that.moneyTransferRecord) {
        			that.moneyTransferRecord = new MoneyTransferRecord();
        			that.zone.find('.jygl-content').append(that.moneyTransferRecord.getDom());
        			that.moneyTransferRecord.bindEvents();
        		}

        		that.moneyTransferRecord.show();
        	} else if (index === 2) {
        		if (!that.withDrawRecord) {
        			that.withDrawRecord = new WithdrawRecord();
        			that.zone.find('.jygl-content').append(that.withDrawRecord.getDom());
        			that.withDrawRecord.bindEvents();
        		}

        		that.withDrawRecord.show();
        	} else if (index === 3) {
        		if (!that.bettingRecord) {
        			that.bettingRecord = new BettingRecord();
        			that.zone.find('.jygl-content').append(that.bettingRecord.getDom());
        			that.bettingRecord.bindEvents();
        		}

        		that.bettingRecord.show();
        	} else if (index === 4) {
        		if (!that.dividendRecord) {
        			that.dividendRecord = new DividendRecord();
        			that.zone.find('.jygl-content').append(that.dividendRecord.getDom());
        			that.dividendRecord.bindEvents();
        		}

        		that.dividendRecord.show();
        	}
        })
	}

	window.PersonalCenter = PersonalCenter;
}());