"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _googleFinance = require("google-finance");

var _googleFinance2 = _interopRequireDefault(_googleFinance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChartManager = function () {
	function ChartManager() {
		_classCallCheck(this, ChartManager);

		this.charts = [];
		this.symbols = [];
		this.io = null;
	}

	_createClass(ChartManager, [{
		key: "init",
		value: function init(io) {
			this.io = io;
			this.charts = [];
			this.symbols = [];

			// default
			this.addChart("GOOGL");
			//		this.addChart("YHOO");
		}
	}, {
		key: "getCharts",
		value: function getCharts() {
			return this.charts;
		}
	}, {
		key: "addChart",
		value: function addChart(symbol) {
			var _this = this;

			symbol = symbol.toUpperCase();

			var now = new Date();
			_googleFinance2.default.historical({
				symbol: symbol,
				from: new Date(now - 31536000000) // a year earlier

			}, function (err, res) {
				if (err) return console.log("err", err);

				// if everything went perfectly,
				// update data and symbols
				console.log("Successfully updated the charts data for", symbol);

				// parse the data
				if (_this.charts.length == 0) {
					// map res into charts 
					_this.charts = res.map(function (d) {
						var pData = {
							date: d.date
						};
						pData[d.symbol] = d.close;
						return pData;
					});
				} else {
					res.map(function (d, i) {
						_this.charts[i][d.symbol] = d.close;
					});
				}
				_this.symbols.push(symbol);

				// broadcast update
				_this.io.sockets.emit("update", _this.charts);
			});
		}
	}, {
		key: "removeChart",
		value: function removeChart(symbol) {
			if (symbol == "date") return;

			// remove the series off the chart collection
			this.charts.map(function (d) {
				if (d.hasOwnProperty(symbol)) {
					delete d[symbol];
				}
			});

			console.log("Successfully removed " + symbol);
			this.io.sockets.emit("update", this.charts);
		}
	}]);

	return ChartManager;
}();

exports.default = new ChartManager();