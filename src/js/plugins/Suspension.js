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
                        '</li>' +
                        '<li>' +
                            '<div class="icon qq-icon"></div>' +
                        '</li>' +
                        '<li>' +
                            '<div class="icon wechat-icon"></div>' +
                        '</li>' +
                        '<li>' +
                            '<div class="icon compass-icon"></div>' +
                        '</li>' +
                        '<li>' +
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

        this.zone.find('.online-kf .tab-text').click(function () {
            window.open(app.liveCsUrl);
        });
    };

    window.Suspension = Suspension;

}());