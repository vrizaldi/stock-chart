"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactD3Tooltip = require("react-d3-tooltip");

var _reactD3Core = require("react-d3-core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChartWrapper = function (_React$Component) {
	_inherits(ChartWrapper, _React$Component);

	function ChartWrapper() {
		_classCallCheck(this, ChartWrapper);

		return _possibleConstructorReturn(this, (ChartWrapper.__proto__ || Object.getPrototypeOf(ChartWrapper)).call(this));
	}

	_createClass(ChartWrapper, [{
		key: "render",
		value: function render() {
			console.log("chart data:", this.props.charts);

			// settings
			var title = "Stock Chart";
			var padding = 100;
			var width = 900;
			var height = 500;
			var chartSeries = [{
				field: "close",
				name: "Close",
				color: "red"
			}];
			// accessor
			var x = function x(d) {
				return new Date(d.date);
			};
			var y = function y(d) {
				return d;
			};

			var yScale = "linear";
			var xScale = "time";

			var yDomain = [1000, 0];
			var xDomain = [new Date(this.props.charts[0].date), new Date()];
			var xRange = [0, width - 2 * padding];
			var yRange = [0, height - 1.75 * padding];

			return _react2.default.createElement(
				_reactD3Tooltip.LineTooltip,
				{
					width: width,
					height: height,
					data: this.props.charts,
					chartSeries: this.getChartSeries(),
					x: x,
					y: y,
					xScale: xScale,
					yScale: yScale,
					xDomain: xDomain,
					xRange: xRange,
					yDomain: yDomain,
					yRange: yRange
				},
				_react2.default.createElement(_reactD3Tooltip.SimpleTooltip, null)
			);
		}
	}, {
		key: "getChartSeries",
		value: function getChartSeries() {
			var _this2 = this;

			var sample = this.props.charts[0];
			// map the keys (company codes) into the chartSeries
			var chartSeries = [];
			Object.keys(sample).map(function (d) {
				if (d == "date") return;
				chartSeries.push({
					field: d,
					name: d,
					color: _this2.getRandColor(2)
				});
			});
			return chartSeries;
		}
	}, {
		key: "getRandColor",
		value: function getRandColor(brightness) {

			// Six levels of brightness from 0 to 5, 0 being the darkest
			var rgb = [Math.random() * 256, Math.random() * 256, Math.random() * 256];
			var mix = [brightness * 51, brightness * 51, brightness * 51]; //51 => 255/5
			var mixedrgb = [rgb[0] + mix[0], rgb[1] + mix[1], rgb[2] + mix[2]].map(function (x) {
				return Math.round(x / 2.0);
			});
			return "rgb(" + mixedrgb.join(",") + ")";
		}
	}]);

	return ChartWrapper;
}(_react2.default.Component);

exports.default = ChartWrapper;