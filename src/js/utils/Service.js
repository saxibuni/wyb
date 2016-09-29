(function () {
	function Service() {}

	Service.prototype.get = function(opt, callback) {
		var i = 0;
		var key;
		var url = opt.url;
		var params = {
            type: 'GET',
            dataType: 'json',
            timeout: app.timeout,
            xhrFields: {
            	withCredentials: true
            }
        };

        for (key in opt.data) {
        	if (i === 0) {
        		url += key + '=' + opt.data[key];
        		i++;
        	} else {
        		url += '&' + key + '=' + opt.data[key];
        	}
        }

        params.url = url;

        $.ajax(params).done(function (json) {
        	if (typeof callback === 'function') {
        		callback(json);
        	}
        }).fail(function (xhr, testStatus, error) {
            alert(error);
        });
	};

	Service.prototype.post = function(opt, callback) {
        $.ajax({
            type: 'POST',
            url: opt.url,
            dataType: 'json',
            timeout: this.timeout,
            data: opt.data,
            xhrFields: {
            	withCredentials: true
            }
        }).done(function (json) {
        	if (typeof callback === 'function') {
        		callback(json);
        	}
        }).fail(function (xhr, testStatus, error) {
            alert(error);
        });
	};

	Service.prototype.put = function(opt, callback) {
        $.ajax({
            type: 'PUT',
            url: opt.url,
            dataType: 'json',
            timeout: this.timeout,
            data: opt.data,
            xhrFields: {
            	withCredentials: true
            }
        }).done(function (json) {
        	if (typeof callback === 'function') {
        		callback(json);
        	}
        }).fail(function (xhr, testStatus, error) {
            alert(error);
        });
	};

	window.Service = new Service();
}());