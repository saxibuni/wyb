(function () {
	function Loader (wrapper, options) {
		var opt = {
            lines: 12,
            length: 8,
            width: 2,
            radius: 8,
            corners: 1,
            rotate: 0,
            speed: 1,
            trail: 60,
            hwaccel: true,
            left: '50%',
            top: '55%',
            position: 'absolute',
            color: '#FFF'
        };

        $.extend(opt, options);
        this.wrapper = wrapper;
        this.spinner = new Spinner(opt);
	}

	Loader.prototype.play = function () {
		this.spinner.spin( this.wrapper );
	};

	Loader.prototype.stop = function () {
		this.spinner.stop();
	};

	window.Loader = Loader;
}());