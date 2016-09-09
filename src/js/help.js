(function () {
	'use strict';

	function Help () {
		this.init();
		this.bindEvents();
	}

	Help.prototype.init = function () {
		this.header   = new Header();
		this.footer   = new Footer();

		this.el  = 	this.header.getDom() +
    				'<div class="help-center">' + 
    					'<div class="wrapper">' +
                            '<div class="tree">' +
                                '<div class="title">澳门金沙娱乐</div>' +
                                '<ul>' + 
                                    '<li><span>关于我们</span><div></div></li>' +
                                    '<li><span>联系我们</span><div></div></li>' +
                                    '<li><span>存款帮助</span><div></div></li>' +
                                    '<li><span>取款帮助</span><div></div></li>' +
                                    '<li><span>合作伙伴</span><div></div></li>' +
                                    '<li><span>常见问题</span><div></div></li>' +
                                    '<li><span>市场合作</span><div></div></li>' +
                                    '<li><span>新人引导</span><div></div></li>' +
                                    
                                '</ul>' + 
                                '<div class="stick"></div>' +
                            '</div>' +

                            '<div class="container">' +
                                '<div class ="title">' +
                                     "关于我们" +
                                '</div>' +
                                '<hr class="line" />' +

                                '<div class="content">' +
                                    '<p class="content-item aboutus">' +
                                        '伟易博为菲律宾注册成立之博彩公司，并持有卡加延经济特区管理局Cagayan Special Economic Zone and Free Port (CSEZFP) 通过北卡加延博彩监督委员会North Cagayan Gaming and Amusement Corporation (NCGAC)颁布许可的合法博彩执照No.12-OCGO-013-1. 从2005年开始致力于网络博彩娱乐服务，现与bbin进行技术合作，共同打造高品质游戏平台。伟易博努力创新，追求完美，着眼于产品和服务的每个细节，公司拥有多样化的游戏项目（体育赛事、视讯直播、电子游艺、彩票游戏）和丰富经验的服务团队，为每一位客户提供实时、刺激、体贴的娱乐产品与高质量服务为首要宗旨。在日渐热络、成熟的网络博彩市场中，除了多样化的游戏外，网络安全最为客户注重，伟易博针对现阶段网络安全问题，成立了网络安全维护中心，彻底解决了网络安全的后顾之忧，诺顿分级评级核伟易博为最安全网站之一；' +
                                        '伟易博获得GEOTRUST国际认证，确保网站公平公正，所有会员数据均经过加密，保障玩家隐私。伟易博所有的游戏皆有共同的优点；无须耗时下载，操作接口简单明了、功能齐全、画面精致，游戏从每一局的开始至结束皆秉持着公平、公正、公开的原则。伟易博24小时不打烊，全天候处理客户出入款相关事宜；严格训练的客服团队，以专业、亲切的态度，尽速解决您于网站、游戏中遇到的种种问题，努力让客户皆有宾至如归的感觉。伟易博以业界前所未见的各种优惠方式回馈客户，绝对是您明智的选择！' +
                                    '</p>' +

                                     '<div class="content-item contactus">' +
                                        '<p>' +
                                            '伟易博娱乐城的客服中心全年无休，提供7*24小时的优质服务。如果您对本网站的使用有任何疑问，可以透过下列任一方式与客服人员联系，享受最实时的服务。在首页点击"在线客服"链接，即可进入在线客服系统与客服人员联系。' +
                                        '</p>' +
                                        '<p>' +
                                            '客服email：  cs@vebet.net' +
                                        '</p>' +
                                        '<p>' +
                                            '客服QQ：   87611136' +
                                        '</p>' +
                                        '<p>' +
                                            '客服电话： +639158888877  ； +85281701232 ；' +
                                        '</p>' +
                                        '<p>' +
                                            '代理合作：  email : ag@vebet.net         QQ：68405052    Skype：vebet88.com' +
                                        '</p>' +
                                     '</div>' +

                                     '<div class="deposit-help">' +
                                     '</div>' +

                                     '<div class="withdraw-help">' +
                                     '</div>' +
                                '</div>' +

                            '</div>' +
                            '<div class="clear"></div>' +

                        '</div>' +
                    '</div>' +

					this.footer.getDom();

		$('.app').append(this.el);
	};
	
    Help.prototype.getDom = function() {
        return this.el;
    };

    Help.prototype.show = function() {
        this.zone.show();
        this.zone.find('.tree').height(this.zone.find('.container').outerHeight());
    }

    Help.prototype.hide = function() {
        this.zone.hide();
    };

    Help.prototype.bindEvents = function() {
        var pageUl;
        var stick;
        var index;
        var that = this;

        this.zone = $('.help');
        pageUl = this.zone.find('ul');
        stick = this.zone.find('.stick');

        pageUl.delegate('li','click',function(){
            index = $(this).index();
            stick.css('top',(index * 40 + 51) + 'px');
        });

		this.header.bindEvents();
		this.footer.bindEvents();
    };

	window.Help = new Help();
})();
