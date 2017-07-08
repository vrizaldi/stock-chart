"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ChartWrapper = require("../components/ChartWrapper");

var _ChartWrapper2 = _interopRequireDefault(_ChartWrapper);

var _InputField = require("../components/InputField");

var _InputField2 = _interopRequireDefault(_InputField);

var _Button = require("../components/Button");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
	_inherits(Home, _React$Component);

	function Home() {
		_classCallCheck(this, Home);

		return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	}

	_createClass(Home, [{
		key: "add",
		value: function add() {
			var code = document.getElementById("adder").value;
			console.log("Adding " + code + "...");
			this.props.addCompany(code);
		}
	}, {
		key: "remove",
		value: function remove(code) {
			console.log("Removing " + code + "...");
			this.props.removeCompany(code);
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"p",
					null,
					"A chart of stock market, synchronous with every client."
				),
				_react2.default.createElement(_ChartWrapper2.default, { charts: this.props.charts }),

				// list the remove buttons
				Object.keys(this.props.charts[0]).map(function (d) {
					if (d != "date") {
						return _react2.default.createElement(_Button2.default, { className: "btn btn-outline-danger",
							label: d,
							value: d,
							action: _this2.remove.bind(_this2)
						});
					}
				}),
				_react2.default.createElement(
					_InputField2.default,
					{ id: "adder", label: "Add company:" },
					_react2.default.createElement(_Button2.default, { className: "btn btn-success",
						label: "+",
						action: this.add.bind(this) })
				)
			);
		}
	}]);

	return Home;
}(_react2.default.Component);

exports.default = Home;