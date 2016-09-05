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

		this.selectProvince = new Select({
			id: 'basic-info-province',
			width: 100,
			height: 36,
			data:[
				{
					'text': '湖北省',
					'value': '0'	
				}
			]
		});

		this.selectCity = new Select({
			id: 'basic-info-city',
			width: 100,
			height: 36,
			data:[
				{
					'text': '武汉市',
					'value': '0'	
				}
			]
		});

		this.selectCounty = new Select({
			id: 'basic-info-county',
			width: 100,
			height: 36,
			data:[
				{
					'text': '武昌区',
					'value': '0'	
				}
			]
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
							this.selectProvince.getDom() +
							this.selectCity.getDom() +
							this.selectCounty.getDom() +
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
	}

	BasicInfo.prototype.getDom = function(){
		return this.el;
	}

	BasicInfo.prototype.show = function(){
		this.zone.show();
	}

	BasicInfo.prototype.hide = function() {
		this.zone.hide();
	}

	BasicInfo.prototype.bindEvents = function(){
		var today = new Date();
		var that = this;

		this.zone = $('.basic-info');
		today = today.formatDate();

		this.zone.find('.birthday').datetimepicker({value: today + ' 00:00', lang: 'en'})
		this.realNameInput.bindEvents();
		this.selectProvince.bindEvents();
		this.selectCity.bindEvents();
		this.selectCounty.bindEvents();
		this.button.bindEvents();

	}


	window.BasicInfo = BasicInfo;


}());