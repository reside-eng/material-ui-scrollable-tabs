'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _EnhancedButton = require('material-ui/internal/EnhancedButton');

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

var _keyboardArrowLeft = require('material-ui/svg-icons/hardware/keyboard-arrow-left');

var _keyboardArrowLeft2 = _interopRequireDefault(_keyboardArrowLeft);

var _keyboardArrowRight = require('material-ui/svg-icons/hardware/keyboard-arrow-right');

var _keyboardArrowRight2 = _interopRequireDefault(_keyboardArrowRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getStyles = function getStyles(props, context) {
  var height = props.height,
      style = props.style,
      buttonStyle = props.buttonStyle,
      iconStyle = props.iconStyle;
  var tabs = context.muiTheme.tabs;


  var styleProps = style || {};
  var iconStyleProps = iconStyle || {};
  var buttonStyleProps = buttonStyle || {};

  return {
    root: (0, _extends3.default)({}, styleProps, {
      padding: styleProps.padding || 0,
      border: styleProps.border || 0,
      verticalAlign: styleProps.verticalAlign || 'top',
      flex: styleProps.flex || '0 0 56px'
    }),
    button: (0, _extends3.default)({}, buttonStyleProps, {
      display: buttonStyleProps.display || 'flex',
      flexDirection: buttonStyleProps.flexDirection || 'column',
      alignItems: buttonStyleProps.alignItems || 'center',
      justifyContent: buttonStyleProps.justifyContent || 'center',
      height: buttonStyleProps.height || height
    }),
    icon: (0, _extends3.default)({}, iconStyleProps, {
      color: iconStyleProps.color || tabs.selectedTextColor,
      fontSize: iconStyleProps.fontSize || 24
    })
  };
};

var ScrollButton = function (_Component) {
  (0, _inherits3.default)(ScrollButton, _Component);

  function ScrollButton() {
    (0, _classCallCheck3.default)(this, ScrollButton);
    return (0, _possibleConstructorReturn3.default)(this, (ScrollButton.__proto__ || (0, _getPrototypeOf2.default)(ScrollButton)).apply(this, arguments));
  }

  (0, _createClass3.default)(ScrollButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          direction = _props.direction,
          height = _props.height,
          onTouchTap = _props.onTouchTap,
          visible = _props.visible,
          placeholder = _props.placeholder,
          style = _props.style,
          iconStyle = _props.iconStyle,
          buttonStyle = _props.buttonStyle,
          other = (0, _objectWithoutProperties3.default)(_props, ['direction', 'height', 'onTouchTap', 'visible', 'placeholder', 'style', 'iconStyle', 'buttonStyle']);


      var styles = getStyles(this.props, this.context, this.state);

      var rippleOpacity = 0.3;
      var rippleColor = this.context.muiTheme.tabs.selectedTextColor;
      if (visible) {
        return _react2.default.createElement(
          _EnhancedButton2.default,
          (0, _extends3.default)({}, other, {
            style: styles.root,
            focusRippleColor: rippleColor,
            touchRippleColor: rippleColor,
            focusRippleOpacity: rippleOpacity,
            touchRippleOpacity: rippleOpacity,
            onTouchTap: onTouchTap
          }),
          _react2.default.createElement(
            'div',
            {
              style: styles.button
            },
            direction === 'left' ? _react2.default.createElement(_keyboardArrowLeft2.default, {
              style: styles.icon
            }) : _react2.default.createElement(_keyboardArrowRight2.default, {
              style: styles.icon
            })
          )
        );
      } else {
        return placeholder ? _react2.default.createElement('div', { style: styles.root }) : null;
      }
    }
  }]);
  return ScrollButton;
}(_react.Component);

ScrollButton.defaultProps = {
  direction: 'left',
  height: '48px',
  visible: false
};
ScrollButton.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
process.env.NODE_ENV !== "production" ? ScrollButton.propTypes = {
  /**
   * Style override object for button child
   */
  buttonStyle: _react.PropTypes.object,
  /**
   * Which direction should the button indicate?
   */
  direction: _react.PropTypes.oneOf(['left', 'right']),
  /**
   * Sets the height of the scroll button; calculated by the Tabs component as the largest of all tab items
   */
  height: _react.PropTypes.string,
  /**
   * Style override object for icon child
   */
  iconStyle: _react.PropTypes.object,
  /**
   * Callback to execute for button press
   */
  onTouchTap: _react.PropTypes.func,
  /**
   * Whether or not to add placeholder when invisible
   */
  placeholder: _react.PropTypes.bool,
  /**
   * Style override object for root
   */
  style: _react.PropTypes.object,
  /**
   * Should the button be present or just consume space
   */
  visible: _react.PropTypes.bool
} : void 0;
exports.default = ScrollButton;