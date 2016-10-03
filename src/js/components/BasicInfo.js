$(function(){
	function BasicInfo(opt){
		this.opt = opt;
		this.initDom();
	}

	BasicInfo.prototype.initDom = function(){
		var temp;

		this.button = new Button({
			id: 'basic-info-button',
			name: '提交',
			width: 120,
			height: 42
		});

		this.realNameInput = new Input({
			id: 'real-name-input',
			width: 178,
			height: 30
		});

		temp = '<div class="basic-info zhsz-info-action">' +
					'<div class="wrapper">' +
						'<div class="row1">' +
							'<div class="text">真实姓名</div>' +
							this.realNameInput.getDom() +
						'</div>' +

						'<div class="row2">' +
							'<div class="text">性别</div>' +
  							'<input type="radio" name="sex" class="male" />' +
							'<label for="male">男</label>' +
	  						'<input type="radio" name="sex" class="female" />' +
							'<label for="male">女</label>' +						
						'</div>' +

						'<div class="row3">' +
							'<div class="text">生日</div>' +
							'<input class="birthday" type="text" />' +
						'</div>' + 

						'<div class="row4">' +
							'<div class="text">地址</div>' +

							'<div class="china-district" data-toggle="distpicker">' +
								'<select data-province="---- 选择省 ----"></select>' +
								'<select data-city="---- 选择市 ----"></select>' +
								'<select data-district="---- 选择区 ----"></select>' +
							'</div>' +
						'</div>' +

						'<div class="row5">' +
							'<div class="text">详细地址</div>' +
							'<textarea></textarea>' +
						'</div>' +

						'<div class="row6">' +
							this.button.getDom() +
						'</div>' +
				'</div>';

		this.el = temp;
	};

	BasicInfo.prototype.getDom = function() {
		return this.el;
	};

	BasicInfo.prototype.show = function() {
		this.zone.show();
	};

	BasicInfo.prototype.hide = function() {
		this.zone.hide();
	};

	BasicInfo.prototype.getInfo = function() {
		this.zone.hide();
	};

	BasicInfo.prototype.commit = function() {
		this.zone.hide();
	};

	BasicInfo.prototype.bindEvents = function(){
		var today = new Date();
		var that = this;

		this.zone = $('.basic-info');
		today = today.formatDate();

		this.zone.find('.birthday').datetimepicker({value: today + ' 00:00', lang: 'en'})
		this.realNameInput.bindEvents();
		// this.selectProvince.bindEvents();
		// this.selectCity.bindEvents();
		// this.selectCounty.bindEvents();
		this.button.bindEvents();
		this.zone.find('.china-district').distpicker();
	};


	window.BasicInfo = BasicInfo;


}());