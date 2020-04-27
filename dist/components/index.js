"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = require("lodash");

var _default2 = _interopRequireDefault(require("../themes/default"));

var _animations = _interopRequireDefault(require("../themes/animations"));

var _common = require("./common");

var _Decorators = _interopRequireDefault(require("./Decorators"));

var _TreeNode = _interopRequireDefault(require("./TreeNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TreeBeard = function TreeBeard(_ref) {
  var animations = _ref.animations,
      decorators = _ref.decorators,
      data = _ref.data,
      onToggle = _ref.onToggle,
      handleCreateFile = _ref.handleCreateFile,
      handleCreateFolder = _ref.handleCreateFolder,
      handleDeleteFile = _ref.handleDeleteFile,
      handleRename = _ref.handleRename,
      handleMoveTo = _ref.handleMoveTo,
      handleUpload = _ref.handleUpload,
      style = _ref.style;
  return /*#__PURE__*/_react["default"].createElement(_common.Ul, {
    style: _objectSpread({}, _default2["default"].tree.base, {}, style.tree.base)
  }, (0, _lodash.castArray)(data).map(function (node) {
    return /*#__PURE__*/_react["default"].createElement(_TreeNode["default"], _extends({
      decorators: decorators,
      node: node,
      onToggle: onToggle,
      handleCreateFile: handleCreateFile,
      handleCreateFolder: handleCreateFolder,
      handleDeleteFile: handleDeleteFile,
      handleRename: handleRename,
      handleMoveTo: handleMoveTo,
      handleUpload: handleUpload,
      animations: animations
    }, {
      key: node.id,
      style: _objectSpread({}, _default2["default"].tree.node, {}, style.tree.node)
    }));
  }));
};

TreeBeard.propTypes = {
  style: _propTypes["default"].object,
  data: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].array]).isRequired,
  animations: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].bool]),
  onToggle: _propTypes["default"].func,
  handleCreateFile: _propTypes["default"].func,
  handleCreateFolder: _propTypes["default"].func,
  handleDeleteFile: _propTypes["default"].func,
  handleRename: _propTypes["default"].func,
  handleMoveTo: _propTypes["default"].func,
  handleUpload: _propTypes["default"].func,
  decorators: _propTypes["default"].object
};
TreeBeard.defaultProps = {
  style: _default2["default"],
  animations: _animations["default"],
  decorators: _Decorators["default"]
};
var _default = TreeBeard;
exports["default"] = _default;