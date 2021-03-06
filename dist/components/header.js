"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _shallowequal = _interopRequireDefault(require("shallowequal"));

var _deepEqual = _interopRequireDefault(require("deep-equal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var NodeHeader = /*#__PURE__*/function (_Component) {
  _inherits(NodeHeader, _Component);

  var _super = _createSuper(NodeHeader);

  function NodeHeader() {
    _classCallCheck(this, NodeHeader);

    return _super.apply(this, arguments);
  }

  _createClass(NodeHeader, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var props = this.props;
      var nextPropKeys = Object.keys(nextProps);

      for (var i = 0; i < nextPropKeys.length; i++) {
        var key = nextPropKeys[i];

        if (key === 'animations') {
          continue;
        }

        var isEqual = (0, _shallowequal["default"])(props[key], nextProps[key]);

        if (!isEqual) {
          return true;
        }
      }

      return !(0, _deepEqual["default"])(props.animations, nextProps.animations, {
        strict: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          animations = _this$props.animations,
          decorators = _this$props.decorators,
          node = _this$props.node,
          onClick = _this$props.onClick,
          handleCreateFile = _this$props.handleCreateFile,
          handleCreateFolder = _this$props.handleCreateFolder,
          handleDeleteFile = _this$props.handleDeleteFile,
          handleRename = _this$props.handleRename,
          handleMoveTo = _this$props.handleMoveTo,
          handleUpload = _this$props.handleUpload,
          style = _this$props.style;
      var active = node.active,
          children = node.children;
      var terminal = !children;
      var styles;

      if (active) {
        styles = Object.assign(style, {
          container: _objectSpread({}, style.link, {}, style.activeLink)
        });
      } else {
        styles = style;
      }

      return /*#__PURE__*/_react["default"].createElement(decorators.Container, _extends({
        animations: animations,
        decorators: decorators,
        node: node,
        onClick: onClick,
        handleCreateFile: handleCreateFile,
        handleCreateFolder: handleCreateFolder,
        handleDeleteFile: handleDeleteFile,
        handleRename: handleRename,
        handleMoveTo: handleMoveTo,
        handleUpload: handleUpload,
        terminal: terminal
      }, {
        style: styles
      }));
    }
  }]);

  return NodeHeader;
}(_react.Component);

NodeHeader.propTypes = {
  style: _propTypes["default"].object.isRequired,
  decorators: _propTypes["default"].object.isRequired,
  animations: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].bool]).isRequired,
  node: _propTypes["default"].object.isRequired,
  onClick: _propTypes["default"].func,
  handleCreateFile: _propTypes["default"].func,
  handleCreateFolder: _propTypes["default"].func,
  handleDeleteFile: _propTypes["default"].func,
  handleRename: _propTypes["default"].func,
  handleMoveTo: _propTypes["default"].func,
  handleUpload: _propTypes["default"].func
};
var _default = NodeHeader;
exports["default"] = _default;