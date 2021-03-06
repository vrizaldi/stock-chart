"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _ChartActions = require("../actions/ChartActions");

var _Home = require("../pages/Home");

var _Home2 = _interopRequireDefault(_Home);

var _Login = require("../pages/Login");

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = (_dec = (0, _reactRedux.connect)(function (store) {
	return {
		status: store.chart.status,
		charts: store.chart.charts
	};
}), _dec(_class = function (_React$Component) {
	_inherits(Main, _React$Component);

	function Main() {
		_classCallCheck(this, Main);

		return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
	}

	_createClass(Main, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.props.dispatch((0, _ChartActions.connectToServer)());
		}
	}, {
		key: "addCompany",
		value: function addCompany(code) {
			this.props.dispatch((0, _ChartActions.addCompany)(code));
		}
	}, {
		key: "removeCompany",
		value: function removeCompany(code) {
			this.props.dispatch((0, _ChartActions.removeCompany)(code));
		}
	}, {
		key: "render",
		value: function render() {
			console.log("charts:", this.props.charts);
			var page = "";
			switch (this.props.status) {
				case "connecting":
					page = _react2.default.createElement(_Login2.default, null);
					break;
				case "connected":
					page = _react2.default.createElement(_Home2.default, { addCompany: this.addCompany.bind(this),
						removeCompany: this.removeCompany.bind(this),
						charts: this.props.charts });
					break;
			}
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"h1",
					null,
					"Stock Market Chart"
				),
				page
			);
		}
	}, {
		key: "changeText",
		value: function changeText() {
			this.props.dispatch(Actions.changeText("It works"));
		}
	}]);

	return Main;
}(_react2.default.Component)) || _class);
exports.default = Main;