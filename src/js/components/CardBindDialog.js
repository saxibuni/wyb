$(function() {
	function CardBindDialog(opt) {
		IMDialog.call(this, opt || {});
		this.initDom();
	}

	CardBindDialog.prototype = new IMDialog();

	CardBindDialog.prototype.initDom = function() {
		this.selectBank = new Select({
			id: 'card-bind-bank',
			width: 450,
			height: 40,
			data:[
				{
					'text': '请选择您的开户银行',
					'value': '-1'
				}
			]
		});

		this.selectProvince = new Select({
			id: 'card-bind-province',
			width: 100,
			height: 36,
			data:[
				{
					'text': '省',
					'value': '-1'
				}
			]
		});

		this.selectCity = new Select({
			id: 'card-bind-city',
			width: 100,
			height: 36,
			data:[
				{
					'text': '市',
					'value': '-1'
				}
			]
		});

		this.moneyPwdInput = new Input({
			id: 'cbd-money-pwd-input',
			width: 450,
			height: 40,
			placeholder: '请输入您的资金密码',
			type: 'password'
		});

		this.branchBankInput = new Input({
			id: 'cbd-branch-bank-input',
			width: 450,
			height: 40,
			placeholder: '请选择您的开户银行',
		});

		this.cardNumberInput = new Input({
			id: 'cbd-card-number-input',
			width: 450,
			height: 40,
			placeholder: '请输入您的银行卡卡号',
		});

		this.cardOwnerInput = new Input({
			id: 'cbd-card-owner-input',
			width: 450,
			height: 40,
			placeholder: '请输入开户人姓名',
		});

		var temp = '<div class="card-bind-content">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="title">绑定银行卡</div>' +

								'<div class="row">' +
									this.selectBank.getDom() +
								'</div>' +

								'<div class="row">' +
									this.selectProvince.getDom() +
									this.selectCity.getDom() +
									'<span>* 请选择您的开户银行所在地</span>' +
								'</div>' +

								'<div class="row">' +
									this.moneyPwdInput.getDom() +
								'</div>' +

								'<div class="row">' +
									this.branchBankInput.getDom() +
								'</div>' +

								'<div class="row">' +
									this.cardNumberInput.getDom() +
								'</div>' +

								'<div class="row">' +
									this.cardOwnerInput.getDom() +
								'</div>' +

								'<div class="row">' +
									'<div class="button ok">' +
										'确定' +
									'</div>' +
									'<div class="button cancel">' +
										'取消' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>'+

					'<div class="overlay overlay8"></div>';

		this.el = temp;
	};

	CardBindDialog.prototype.getDom = function(){
		return this.el;
	};

	CardBindDialog.prototype.show = function(){
		this.showOverlay();

		if (!this.firstTime) {
			this.getBankList();
			this.getProvinceList();
		}
	};

	CardBindDialog.prototype.hide = function() {
		this.hideOverlay();
	};

	CardBindDialog.prototype.createBankUl = function(data) {
		var i;
		var temp = '';

		for (i = 0; i < data.length; i++) {
			temp += '<option data-value="' + data[i].Id + '">' +
						'<img src="' + app.imageServer + data[i].LogoImg + '" />' +
						'<span class="name">' + data[i].BankName + '</span>' +
					'</option>';
		}

		this.selectBank.setOptions(temp);
	};

	CardBindDialog.prototype.createProvinceUl = function(data) {
		var i;
		var temp = '';

		for (i = 0; i < data.length; i++) {
			temp += '<option data-value="' + data[i].Id + '">' +
						data[i].Name +
					'</option>';
		}

		this.selectProvince.setOptions(temp);
	};

	CardBindDialog.prototype.createCityUl = function(data) {
		var i;
		var temp = '';

		for (i = 0; i < data.length; i++) {
			temp += '<option data-value="' + data[i].Id + '">' +
						data[i].Name +
					'</option>';
		}

		this.selectCity.setOptions(temp);
	};

	CardBindDialog.prototype.getBankList = function() {
		var callback;
		var that    =  this;
		var opt     =  {
			url: app.urls.getBankList,
			data: {}
		};

		callback = function (data) {
			if (!data) {
				return;
			}

			that.createBankUl(data);
		};

		Service.get(opt, callback);
	};

	CardBindDialog.prototype.getProvinceList = function() {
		var callback;
		var that    =  this;
		var opt     =  {
			url: app.urls.getProvinceList,
			data: {}
		};

		callback = function (data) {
			if (!data) {
				return;
			}

			that.createProvinceUl(data);
		};

		Service.get(opt, callback);
	};

	CardBindDialog.prototype.getCityList = function(provinceId) {
		var callback;
		var that    =  this;
		var opt     =  {
			url: app.urls.getCityList,
			data: {
				provinceId: provinceId
			}
		};

		callback = function (data) {
			if (!data) {
				return;
			}

			that.createCityUl(data);
		};

		Service.get(opt, callback);
	};

	CardBindDialog.prototype.bindCard = function() {
		var callback;
		var opt;
		var that       = this;
		var bankId     = this.selectBank.getValue();
		var provinceId = this.selectProvince.getValue();
		var cityId     = this.selectCity.getValue();
		var moneyPwd   = this.moneyPwdInput.getValue();
		var branchBank = this.branchBankInput.getValue();
		var bankNumber = this.cardNumberInput.getValue();
		var owner      = this.cardOwnerInput.getValue();

		if (!(bankId && provinceId && cityId && moneyPwd && branchBank && bankNumber && owner)) {
			alert('请完成相关信息!');
			return;
		}

		opt = {
			url: app.urls.addUserBank,
			data: {
				BankId: bankId,
				Province: provinceId,
				City: cityId,
				BranchName: branchBank,
				AccountNo: bankNumber,
				WithdrawalPwd: moneyPwd,
				AccountName: owner
			}
		};

		callback = function (data) {
			if (data.StatusCode && data.StatusCode !== 0) {
				alert(data.Message);
				that.hide();
				return;
			}

			alert('绑定成功');
			that.hide();
			app.cardManagerDialog.refresh();
		};

		Service.post(opt, callback);
	};

	CardBindDialog.prototype.bindEvents = function(){
		var that = this;

		this.zone = $('.card-bind-content');

		this.zone.find('.ok').click(function() {
			that.bindCard();
		});

		this.zone.find('.cancel').click(function() {
			that.hide();
		});

		this.zone.find('#card-bind-province').change(function () {
			that.getCityList(that.selectProvince.getValue());
		});

		this.selectBank.bindEvents();
		this.selectProvince.bindEvents();
		this.selectCity.bindEvents();
		this.moneyPwdInput.bindEvents();
		this.branchBankInput.bindEvents();
		this.cardNumberInput.bindEvents();
		this.cardOwnerInput.bindEvents();
        this.bindOverlayEvents();
	};

	window.CardBindDialog = CardBindDialog;

}());