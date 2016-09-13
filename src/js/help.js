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
                                    '<li data-value="aboutus"><span>关于我们</span><div></div></li>' +
                                    '<li data-value="contactus"><span>联系我们</span><div></div></li>' +
                                    '<li data-value="deposithelp"><span>存款帮助</span><div></div></li>' +
                                    '<li data-value="withdrawhelp"><span>取款帮助</span><div></div></li>' +
                                    '<li data-value="partner"><span>合作伙伴</span><div></div></li>' +
                                    '<li data-value="faq"><span>常见问题</span><div></div></li>' +
                                    '<li data-value="corporation"><span>市场合作</span><div></div></li>' +
                                    '<li data-value="newguide"><span>新人引导</span><div></div></li>' +
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

                                    '<div class="content-item deposithelp">' +
                                        '<p>您现在可以通过以下方式存款给伟易博：</p>' +

                                        '<div class="ul-title">一、线上快速支付 :</div>' +
                                        '<ul>' +
                                            '<li><p>1. 会员登入后点击 [线上存款]，选择 [线上快速支付]</p></li>' +
                                            '<li><p>2. 选择入款额度，并请确实填写 ”联络电话” ，如有任何问题，方便伟易博客服第一时间与您联系。</p></li>' +
                                            '<li><p>3. 选择”支付银行”。 支持借记卡：中国农业银行,中国工商银行,中国建设银行,招商银行,交通银行,中国银行,兴业银行，中国光大银行,深圳平安银行等。</p></li>' +
                                            '<li><p>4. 确认送出后，将请您确认您的支付订单无误，并建议您记录您的支付订单号后，确认送出，并耐心等待加载网络银行页面，传输中已将您账户数据加密，请耐心等待。</p></li>' +
                                            '<li><p>5. 进入网络银行页面，请确实填写您银行账号信息，支付成功，额度将在5分钟内系统处理完成，立即加入您的伟易博会员账户。</p></li>' +
                                        '</ul>' +

                                        '<div class="ul-title">二、银行入款 :</div>' +
                                        '<div class="ul-sub-title">[银行入款]是通过公司指定的银行卡号进行存款支付，可以使用网银转账，ATM存款，或者柜台汇款的方式支付，具体步骤如下：</div>' +
                                        '<ul>' +
                                            '<li><p>1. 会员登入后点击 [线上存款]，选择 [银行入款]</p></li>' +
                                            '<li><p>2. 请选择欲使用的银行。</p></li>' +
                                            '<li><p>3. 选择银行后，网页会显示可存入的银行账号。</p></li>' +
                                        '</ul>' +

                                        '<ul>' +
                                            '<li><p>(1).可直接点击网页上银行标志，自动为您带到银行首页，登入您个人网银，请将款项转入公司提供的入款账号。</p></li>' +
                                            '<li><p>(2).ATM自动柜员机 : 到实体自动柜员机以银行卡或是现金方式存入，没有开启网银功能与存现金的会员可用</p></li>' +
                                            '<li><p>(3).银行柜台转账 : 到银行柜台完成转账手续</p></li>' +
                                        '</ul>' +
                                         
                                        '<p>※银行入款注意事项※</p>' +
                                        '<p>亲切提醒您，银行入款银行随时更变，请于每次入款前，确认您可以使用的入款账号。如入款账号已过期，伟易博娱乐城恕不负责！望请见谅，感谢配合。请您存款时在金额后面加个尾数（例如：欲入10000元，请转10000.15元），方便快速到账，谢谢！</p>' +
                                         
                                        // 4. 核对提交数据/提交申请
                                        // 汇款完成请填写并提交相关数据，并备份您的[银行入款]订单号。 系统在收到款项后会进行比对，如存款金额、时间、划款银行等。处理时间通常为5-30分钟。(跨行转账时间可能会超过30分钟)
                                        // 5.请联系在线客服人员。
                                        //    请划款成功后，联系客服人员会与您核对存款数据，必要时需要您提供截图、转账数据等相关证明。
                                         
                                        // 存款需知:
                                        // 伟易博单笔最低存款为100人民币﹐[ 线上快速支付]单笔最高存款上限为40,000人民币，若存款超过40,000人民币，请分几次存款；[银行入款]款单笔最高存款上限1,000,000人民币。
                                        // 未开通网银的会员，请亲洽您的银行柜台办理。
                                        // 如有任何问题，请洽24小时线上客服。

                                    '</div>' +

                                    '<div class="content-item withdrawhelp">' +
                                    '</div>' +

                                    '<div class="content-item partner">' +
                                    '</div>' +

                                    '<div class="content-item faq">' +
                                    '</div>' +

                                    '<div class="content-item corporation">' +
                                    '</div>' +

                                    '<div class="content-item newguide">' +
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
        var name;
        var that = this;

        this.zone = $('.help-center');
        pageUl = this.zone.find('ul');
        stick = this.zone.find('.stick');

        pageUl.delegate('li','click',function() {
            index = $(this).index();
            stick.css('top',(index * 40 + 51) + 'px');
            name = $(this).attr('data-value');
            that.zone.find('.content-item').hide();
            that.zone.find('.' + name).show();
        });

		this.header.bindEvents();
		this.footer.bindEvents();
    };

	window.Help = new Help();
})();
