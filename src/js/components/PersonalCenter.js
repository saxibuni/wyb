$(function(){
	function PersonalCenter(opt){
		this.mainWalletData  = {
			moneyType: '¥',
			balance: '100,000,000.00',
			moneyUnit: 'CNY'
		};

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
			},{
				id: 8,
				walletType: 'PT',
				balance: '4,000.00'				
			},{
				id: 9,
				walletType: 'PT',
				balance: '4,000.00'	
			},{
				id: 10,
				walletType: 'PT',
				balance: '4,000.00'	
			},{
				id: 11,
				walletType: 'PT',
				balance: '4,000.00'	
			},{
				id: 12,
				walletType: 'PT',
				balance: '4,000.00'	
			}
		];
		
		this.subWallets = [];

		this.tabData = {
		    'zjgl': ['充值','转账','提现'],
		    'jyjl':['充值记录','转账记录','提款记录','投注记录','红利记录'],
		   	'zhsz':['基本信息','安全中心'],
		   	'znx':['站内信','通知公告'],
		}

		IMDialog.call(this, opt || {});
		this.initDom();
	};

	PersonalCenter.prototype = new IMDialog();

	PersonalCenter.prototype.initDom = function(){
		var temp = '<div class="personal-center">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
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
										'<span class="money money-type">¥  </span><span class="money balance">100,000,000.00</span><span class="money-unit">  CNY</span>' +
										'<hr class="line">' +
										'<a href="javascript:void(0);" class="btn turn-into">转出</a>' +
										'<a href="javascript:void(0);" class="btn turn-out">转入</a>' +									
									'</div>' +

									'<div class="nav-left"><span><img src="../img/left-n.png" /></span></div>' +
									'<div class="wallet-zone">' +
										this.createSubWallet() +
									'</div>' +
									'<div class="nav-right"><span><img src="../img/right-n.png" /></span></div>' +
									'<div class="clear"></div>' +

									'<div class="tab-container">' +
										'<div class="tab-container-item zjgl-zone" menu-index="0">' +
											this.createZjgl() +	
										'</div>' +
										'<div class="tab-container-item jyjl-zone" menu-index="1">' +
											// this.createJyjl() +
										'</div>' +
										'<div class="tab-container-item zhsz-zone" menu-index="2">' +
											// this.createZhsz() +
										'</div>' +
										'<div class="tab-container-item znx-zone" menu-index="3">' +
											// this.createZnx() +
										'</div>' +
									'</div>' +
	 							'</div>' +

	 							'<div class="close">×</div>' +
								'<div class="clear"></div>' +
							'</div>' +
						'</div>' +
					'</div>' +
					'<div class="overlay overlay4"></div>';
		this.el = temp;
	};

	PersonalCenter.prototype.getDom = function(){
		return this.el;
	};

	PersonalCenter.prototype.show = function(route){
		var arr;

		if (route) {
			this.zone.find('.tab-container-item').hide();
			arr = route.split('/');

			if (arr[0] === 'zjgl') {
				this.zone.find('[menu-index="0"]').click();
			} else if (arr[0] === 'jyjl') {
				this.zone.find('[menu-index="1"]').click();
			} else if (arr[0] === 'zhsz') {
				this.zone.find('[menu-index="2"]').click();
			} else if (arr[0] === 'znx') {
				this.zone.find('[menu-index="3"]').click();
			}
 		}

		this.showOverlay();
	}

	PersonalCenter.prototype.hide = function(){
		this.hideOverlay();
	}

	PersonalCenter.prototype.createSubWallet = function(){
		var temp = '';
		var subWallet;
		var swipperWith;

		for(var i = 0; i < this.subWalletData.length; i++){
			subWallet = new SubWallet(this.subWalletData[i]);
			this.subWallets.push(subWallet);
			if (i % 2 == 0) 
				temp += '<div class="wallet-group">';
			temp += subWallet.el;
			if (i % 2 != 0) 
				temp += '</div>';
		}
		if (this.subWalletData.length % 2 != 0)  temp += '</div>';

		swipperWith = 122 *  Math.round(this.subWalletData.length / 2);
		temp = '<div class="swiper" style="width:' + swipperWith + 'px">' + temp;
		temp += '</div>';
		
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
		console.log(temp)
		return temp;
	}

	PersonalCenter.prototype.createJyjl = function(){
		var temp = '';

		this.jyjlTab = new Tab({
			id: 'jyjl-tab',
			titles: this.tabData['jyjl']
		});

		this.topupRecord = new TopupRecord();

		temp +=	this.jyjlTab.getDom() +
				'<div class="jyjl-content">' +
					this.topupRecord.getDom() +
				'</div>';

		return temp;
	}

	PersonalCenter.prototype.createZhsz = function(){
		var temp = '';
		this.zhszTab = new Tab({
			id: 'zhsz-tab',
			titles: this.tabData['zhsz']
		});

		this.basicInfo = new BasicInfo();

		temp += this.zhszTab.getDom() +
				'<div class="zhsz-content">' +
					this.basicInfo.getDom() +
				'</div>';

		return temp;
	}

	PersonalCenter.prototype.createZnx = function(){
		var temp = '';
		this.znxTab = new Tab({
			id: 'znx-tab',
			titles: this.tabData['znx']
		});

		this.stationLetter = new StationLetter();

		temp += this.znxTab.getDom() +
				'<div class="znx-content">' +
					this.stationLetter.getDom() +
				'</div>';	
		return temp;
	}

	PersonalCenter.prototype.bindEvents = function(){
		var menuUl;
		var stick;
		var index;
		var walletzone;
		var tabZone;
		var that = this;
		var pageIndex = 0;
		var pageCount = Math.round(this.subWalletData.length / 2) - 3;

		this.zone = $('.personal-center');
		menuUl = this.zone.find('.tree > ul');
		walletzone = this.zone.find('.wallet-zone');
		stick = this.zone.find('.stick');
		swiper = this.zone.find('.swiper');

		this.zone.delegate('.nav-left','click',function(){
			if (pageIndex == 0) return;
			pageIndex--;
			swiper.css('transform', 'translateX(' + (0 - 98 * pageIndex) + 'px)');
		});

		this.zone.delegate('.nav-right','click',function(){
			if (pageIndex == pageCount - 1) return;
			pageIndex++;
			swiper.css('transform', 'translateX(' + (0 - 98 * pageIndex) + 'px)')
		});

        walletzone.delegate('.sub-wallet','mouseover',function(){
        	$(this).find('.transfer-layer').show();
        });

        walletzone.delegate('.sub-wallet','mouseout',function(){
        	$(this).find('.transfer-layer').hide();
        });

        menuUl.delegate('li','click',function(){
            index = $(this).index();
            stick.css('top',(index * 32) + 'px');
            tabZone = that.zone.find('[menu-index="' + index +'"]');
            if (tabZone.html() == '') {	
	            if (index == 1){
	        		tabZone.html(that.createJyjl());
	        		that.jyjlTab.bindEvents();
	        		that.topupRecord.bindEvents();
	        	} 
	        	if (index == 2) {
	        		tabZone.html(that.createZhsz());
	        		that.zhszTab.bindEvents();
	        		that.basicInfo.bindEvents();
	        	}
	        	if (index == 3) {
	        		tabZone.html(that.createZnx());
	        		that.znxTab.bindEvents();
	        		that.stationLetter.bindEvents();
	        	}
            }
        	tabZone.siblings().hide();
            tabZone.show();

        });


        this.zjglTab.bindEvents();
        this.cz.bindEvents();

        $('.zjgl-zone').delegate('#zjgl-tab>li', 'click', function () {
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
        });

        $('.jyjl-zone').delegate('#jyjl-tab>li', 'click', function () {
        	index = $(this).index();
        	that.zone.find('.jyjl-money-action').hide();

        	if (index === 0) {
        		that.topupRecord.show();
        	} else if (index === 1) {
        		if (!that.moneyTransferRecord) {
        			that.moneyTransferRecord = new MoneyTransferRecord();
        			that.zone.find('.jyjl-content').append(that.moneyTransferRecord.getDom());
        			that.moneyTransferRecord.bindEvents();
        		}

        		that.moneyTransferRecord.show();
        	} else if (index === 2) {
        		if (!that.withDrawRecord) {
        			that.withDrawRecord = new WithdrawRecord();
        			that.zone.find('.jyjl-content').append(that.withDrawRecord.getDom());
        			that.withDrawRecord.bindEvents();
        		}

        		that.withDrawRecord.show();
        	} else if (index === 3) {
        		if (!that.bettingRecord) {
        			that.bettingRecord = new BettingRecord();
        			that.zone.find('.jyjl-content').append(that.bettingRecord.getDom());
        			that.bettingRecord.bindEvents();
        		}

        		that.bettingRecord.show();
        	} else if (index === 4) {
        		if (!that.dividendRecord) {
        			that.dividendRecord = new DividendRecord();
        			that.zone.find('.jyjl-content').append(that.dividendRecord.getDom());
        			that.dividendRecord.bindEvents();
        		}

        		that.dividendRecord.show();
        	}
        });

        $('.zhsz-zone').delegate('#zhsz-tab>li','click', function () {
        	index = $(this).index();
        	that.zone.find('.zhsz-info-action').hide();

        	if (index === 0) {
        		that.basicInfo.show();
        	}else if(index === 1){
        		if (!that.security) {
        			that.security = new SecurityCenter();
        			that.zone.find('.zhsz-content').append(that.security.getDom());
        			that.security.bindEvents();
        		}
        		that.security.show();
        	}
        });

        $('.znx-zone').delegate('#znx-tab>li','click', function() {
        	index = $(this).index();
        	that.zone.find('.znx-info-action').hide();

        	if (index === 0) {
        		that.stationLetter.show();
        	}else if(index === 1){
        		if (!that.announcement ) {
	        		that.announcement = new Announcement();
	        		that.zone.find('.znx-content').append(that.announcement.getDom());
	        		that.announcement.bindEvents();       			
        		}
        		that.announcement.show();
        	}
        });

        this.zone.find('.close').click(function () {
        	that.hide();
        });
	}

	window.PersonalCenter = PersonalCenter;
}());