"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _lodash = require("lodash");

var _animations = _interopRequireDefault(require("../../themes/animations"));

var _common = require("../common");

var _header = _interopRequireDefault(require("../header"));

var _Drawer = _interopRequireDefault(require("./Drawer"));

var _Loading = _interopRequireDefault(require("./Loading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Li = (0, _styled["default"])('li', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return ['className', 'children', 'ref'].indexOf(prop) !== -1;
  }
})(function (_ref) {
  var style = _ref.style;
  return style;
});

var TreeNode =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TreeNode, _PureComponent);

  function TreeNode() {
    _classCallCheck(this, TreeNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(TreeNode).apply(this, arguments));
  }

  _createClass(TreeNode, [{
    key: "onClick",
    value: function onClick() {
      var _this$props = this.props,
          node = _this$props.node,
          onToggle = _this$props.onToggle;
      var toggled = node.toggled;

      if (onToggle) {
        onToggle(node, !toggled);
      }
    }
  }, {
    key: "handleCreateFile",
    value: function handleCreateFile() {
      var _this$props2 = this.props,
          node = _this$props2.node,
          handleCreateFile = _this$props2.handleCreateFile;

      if (handleCreateFile) {
        handleCreateFile(node);
      }
    }
  }, {
    key: "handleCreateFolder",
    value: function handleCreateFolder() {
      var _this$props3 = this.props,
          node = _this$props3.node,
          handleCreateFolder = _this$props3.handleCreateFolder;

      if (handleCreateFolder) {
        handleCreateFolder(node);
      }
    }
  }, {
    key: "handleDeleteFile",
    value: function handleDeleteFile() {
      var _this$props4 = this.props,
          node = _this$props4.node,
          handleDeleteFile = _this$props4.handleDeleteFile;

      if (handleDeleteFile) {
        handleDeleteFile(node);
      }
    }
  }, {
    key: "handleRename",
    value: function handleRename() {
      var _this$props5 = this.props,
          node = _this$props5.node,
          handleRename = _this$props5.handleRename;

      if (handleRename) {
        handleRename(node);
      }
    }
  }, {
    key: "handleUpload",
    value: function handleUpload() {
      var _this$props6 = this.props,
          node = _this$props6.node,
          handleUpload = _this$props6.handleUpload;

      if (handleUpload) {
        handleUpload(node);
      }
    }
  }, {
    key: "animations",
    value: function animations() {
      var _this$props7 = this.props,
          animations = _this$props7.animations,
          node = _this$props7.node;

      if (!animations) {
        return {
          toggle: _animations["default"].toggle(this.props, 0)
        };
      }

      var animation = Object.assign({}, animations, node.animations);
      return {
        toggle: animation.toggle(this.props),
        drawer: animation.drawer(this.props)
      };
    }
  }, {
    key: "decorators",
    value: function decorators() {
      var _this$props8 = this.props,
          decorators = _this$props8.decorators,
          node = _this$props8.node;
      var nodeDecorators = node.decorators || {};
      return Object.assign({}, decorators, nodeDecorators);
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(decorators) {
      var _this$props9 = this.props,
          animations = _this$props9.animations,
          propDecorators = _this$props9.decorators,
          node = _this$props9.node,
          style = _this$props9.style,
          onToggle = _this$props9.onToggle,
          handleCreateFile = _this$props9.handleCreateFile,
          handleCreateFolder = _this$props9.handleCreateFolder,
          handleDeleteFile = _this$props9.handleDeleteFile,
          handleRename = _this$props9.handleRename,
          handleUpload = _this$props9.handleUpload;

      if (node.loading) {
        return _react["default"].createElement(_Loading["default"], {
          decorators: decorators,
          style: style
        });
      }

      var children = node.children;

      if (!(0, _lodash.isArray)(children)) {
        children = children ? [children] : [];
      }

      return _react["default"].createElement(_common.Ul, {
        style: style.subtree
      }, children.map(function (child, index) {
        return _react["default"].createElement(TreeNode, _extends({
          onToggle: onToggle,
          handleCreateFile: handleCreateFile,
          handleCreateFolder: handleCreateFolder,
          handleDeleteFile: handleDeleteFile,
          handleRename: handleRename,
          handleUpload: handleUpload,
          animations: animations,
          style: style
        }, {
          decorators: propDecorators,
          key: child.id || index,
          node: child
        }));
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props10 = this.props,
          node = _this$props10.node,
          style = _this$props10.style;
      var decorators = this.decorators();
      var animations = this.animations();

      var restAnimationInfo = _extends({}, animations.drawer);

      return _react["default"].createElement(Li, {
        style: style.base
      }, _react["default"].createElement(_header["default"], _extends({
        decorators: decorators,
        animations: animations,
        node: node,
        style: style
      }, {
        handleUpload: function handleUpload() {
          return _this.handleUpload();
        },
        handleCreateFolder: function handleCreateFolder() {
          return _this.handleCreateFolder();
        },
        handleRename: function handleRename() {
          return _this.handleRename();
        },
        handleDeleteFile: function handleDeleteFile() {
          return _this.handleDeleteFile();
        },
        handleCreateFile: function handleCreateFile() {
          return _this.handleCreateFile();
        },
        onClick: function onClick() {
          return _this.onClick();
        }
      })), _react["default"].createElement(_Drawer["default"], {
        restAnimationInfo: _objectSpread({}, restAnimationInfo)
      }, node.toggled ? this.renderChildren(decorators, animations) : null));
    }
  }]);

  return TreeNode;
}(_react.PureComponent);

TreeNode.propTypes = {
  onToggle: _propTypes["default"].func,
  handleCreateFile: _propTypes["default"].func,
  handleCreateFolder: _propTypes["default"].func,
  handleDeleteFile: _propTypes["default"].func,
  handleRename: _propTypes["default"].func,
  handleUpload: _propTypes["default"].func,
  style: _propTypes["default"].object.isRequired,
  node: _propTypes["default"].object.isRequired,
  decorators: _propTypes["default"].object.isRequired,
  animations: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].bool]).isRequired
};
var _default = TreeNode;
exports["default"] = _default;