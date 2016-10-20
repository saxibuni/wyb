/**
 * Created by Annie on 2016/9/3.
 */
(function () {
    function Suspension(opt) {
        this.opt = opt;
        this.initDom();
    }

    Suspension.prototype.initDom = function() {
        var temp =  '<ul class="suspension">' +
                        '<li>' +
                            '<div class="icon qrcode-icon"></div>' +
                        '</li>' +
                        '<li>' +
                            '<div class="icon phone-icon"></div>' +
                            '<div class="slipper">客服电话 +639158888877</div>' +
                        '</li>' +
                        '<li>' +
                            '<div class="icon qq-icon"></div>' +
                            '<div class="slipper">客服QQ 87611136</div>' +
                        '</li>' +
                        '<li class="cs-online">' +
                            '<div class="icon wechat-icon"></div>' +
                            '<div class="slipper">24小时在线客服</div>' +
                        '</li>' +
                        // '<li>' +
                        //     '<div class="icon compass-icon"></div>' +
                        // '</li>' +
                        '<li class="to-top">' +
                            '<div class="icon top-icon"></div>' +
                        '</li>' +
                    '</ul>';

        this.el = temp;
    };

    Suspension.prototype.getDom = function() {
        return this.el;
    };

    Suspension.prototype.bindEvents = function() {
        this.zone = $('.suspension');

        this.zone.find('.cs-online').click(function () {
            window.open(app.liveCsUrl);
        });

        this.zone.find('.to-top').click(function () {
            $('body').animate({ scrollTop: 0 });
        });
    };

    window.Suspension = Suspension;

}());