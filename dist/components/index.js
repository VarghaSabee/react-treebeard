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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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
      handleUpload = _ref.handleUpload,
      style = _ref.style;
  return _react["default"].createElement(_common.Ul, {
    style: _objectSpread({}, _default2["default"].tree.base, style.tree.base)
  }, (0, _lodash.castArray)(data).map(function (node) {
    return _react["default"].createElement(_TreeNode["default"], _extends({
      decorators: decorators,
      node: node,
      onToggle: onToggle,
      handleCreateFile: handleCreateFile,
      handleCreateFolder: handleCreateFolder,
      handleDeleteFile: handleDeleteFile,
      handleRename: handleRename,
      handleUpload: handleUpload,
      animations: animations
    }, {
      key: node.id,
      style: _objectSpread({}, _default2["default"].tree.node, style.tree.node)
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