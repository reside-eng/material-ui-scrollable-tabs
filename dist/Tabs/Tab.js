'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _EnhancedButton = require('material-ui/internal/EnhancedButton');

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

var _sentimentVeryDissatisfied = require('material-ui/svg-icons/social/sentiment-very-dissatisfied');

var _sentimentVeryDissatisfied2 = _interopRequireDefault(_sentimentVeryDissatisfied);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var icon = props.icon,
      iconPlaceholder = props.iconPlaceholder,
      isLargeView = props.isLargeView,
      isMultiLine = props.isMultiLine,
      height = props.height,
      width = props.width,
      selectedTextColor = props.selectedTextColor,
      textColor = props.textColor,
      labelStyle = props.labelStyle;
  var tabs = context.muiTheme.tabs;


  var propsOrThemeSelectedTextColor = selectedTextColor || tabs.selectedTextColor;
  var propsOrThemeTextColor = textColor || tabs.textColor;

  var themeLabelStyle = {
    textOverflow: 'ellipsis',
    textTransform: 'uppercase',
    whiteSpace: 'normal',
    fontWeight: props.selected ? 500 : 300,
    fontSize: isMultiLine && !icon ? '12px' : '14px',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: isMultiLine && !icon && !iconPlaceholder ? 2 : 1,
    WebkitBoxOrient: 'vertical'
  };

  var label = (0, _simpleAssign2.default)({}, themeLabelStyle, labelStyle);

  return {
    root: {
      color: props.selected ? propsOrThemeSelectedTextColor : propsOrThemeTextColor,
      minWidth: isLargeView ? '160px' : '72px',
      maxWidth: '264px',
      width: width,
      padding: 0,
      border: 0,
      verticalAlign: 'top'
    },
    button: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: isLargeView ? '24px' : '12px',
      paddingRight: isLargeView ? '24px' : '12px',
      height: height
    },
    label: label
  };
}

var Tab = function (_Component) {
  (0, _inherits3.default)(Tab, _Component);

  function Tab() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tab.__proto__ || (0, _getPrototypeOf2.default)(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.getMeasurements = function () {
      if (_this.buttonComponent.button instanceof Element) {
        var boundingClientRect = _this.buttonComponent.button.getBoundingClientRect();
        return {
          top: boundingClientRect.top,
          bottom: boundingClientRect.bottom,
          left: boundingClientRect.left,
          right: boundingClientRect.right,
          height: boundingClientRect.height,
          width: boundingClientRect.width
        };
      } else return {};
    }, _this.handleTouchTap = function (event) {
      if (_this.props.onTouchTap) {
        _this.onTouchTapTarget = event.currentTarget;
        _this.props.onTouchTap(_this);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Tab, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          icon = _props.icon,
          iconPlaceholder = _props.iconPlaceholder,
          iconStyle = _props.iconStyle,
          index = _props.index,
          onActive = _props.onActive,
          onTouchTap = _props.onTouchTap,
          selected = _props.selected,
          label = _props.label,
          buttonStyle = _props.buttonStyle,
          isLargeView = _props.isLargeView,
          isMultiLine = _props.isMultiLine,
          style = _props.style,
          labelStyle = _props.labelStyle,
          textColor = _props.textColor,
          selectedTextColor = _props.selectedTextColor,
          other = (0, _objectWithoutProperties3.default)(_props, ['icon', 'iconPlaceholder', 'iconStyle', 'index', 'onActive', 'onTouchTap', 'selected', 'label', 'buttonStyle', 'isLargeView', 'isMultiLine', 'style', 'labelStyle', 'textColor', 'selectedTextColor']);


      var styles = getStyles(this.props, this.context);

      var iconProps = {
        style: (0, _extends3.default)({
          fontSize: 24,
          color: styles.root.color,
          visibility: iconPlaceholder ? 'hidden' : null,
          paddingBottom: label ? '4px' : '0px',
          flexShrink: 0
        }, iconStyle)
      };

      // this is a terrible hack but i couldn't get destructuring to work properly
      iconProps.height = iconProps.height || '16px';
      iconProps.width = iconProps.width || '16px';

      var iconElement = void 0;

      if (icon && _react2.default.isValidElement(icon)) {
        // If it's svg icon set color via props
        if (icon.type.muiName !== 'FontIcon') {
          iconProps.color = styles.root.color;
        }
        iconElement = _react2.default.cloneElement(icon, iconProps);
      } else if (iconPlaceholder) {
        iconElement = _react2.default.cloneElement(_react2.default.createElement(_sentimentVeryDissatisfied2.default, null), iconProps);
      }

      var rippleOpacity = 0.3;
      var rippleColor = this.context.muiTheme.tabs.selectedTextColor;

      return _react2.default.createElement(
        _EnhancedButton2.default,
        (0, _extends3.default)({}, other, {
          style: (0, _simpleAssign2.default)(styles.root, style),
          focusRippleColor: rippleColor,
          touchRippleColor: rippleColor,
          focusRippleOpacity: rippleOpacity,
          touchRippleOpacity: rippleOpacity,
          onTouchTap: this.handleTouchTap,
          ref: function ref(buttonComponent) {
            _this2.buttonComponent = buttonComponent;
          }
        }),
        _react2.default.createElement(
          'div',
          { style: (0, _simpleAssign2.default)(styles.button, buttonStyle) },
          iconElement,
          label ? _react2.default.createElement(
            'span',
            { style: styles.label },
            label
          ) : null
        )
      );
    }
  }]);
  return Tab;
}(_react.Component);

Tab.muiName = 'Tab';
Tab.defaultProps = {
  isLargeView: false,
  isMultiLine: false
};
Tab.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
process.env.NODE_ENV !== "production" ? Tab.propTypes = {
  /**
   * Override the inline-styles of the button element.
   */
  buttonStyle: _react.PropTypes.object,
  /**
   * The css class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * @ignore
   */
  height: _react.PropTypes.string,
  /**
   * Sets the icon of the tab, you can pass `FontIcon` or `SvgIcon` elements.
   */
  icon: _react.PropTypes.node,
  /**
   * Adds an invisible icon for correct spacing
   */
  iconPlaceholder: _react.PropTypes.bool,
  /**
   * Style object to apply to the icon element
   */
  iconStyle: _react.PropTypes.object,
  /**
   * @ignore
   */
  index: _react.PropTypes.any,
  /**
   * @ignore
   */
  isLargeView: _react.PropTypes.bool,
  /**
   * Indicates that the tab should render with the mutliple lines of text styling.
   */
  isMultiLine: _react.PropTypes.bool,
  /**
   * Sets the text value of the tab item to the string specified.
   */
  label: _react.PropTypes.node,
  /**
   * Style object for label
   */
  labelStyle: _react.PropTypes.object,
  /**
   * Fired when the active tab changes by touch or tap.
   * Use this event to specify any functionality when an active tab changes.
   * For example - we are using this to route to home when the third tab becomes active.
   * This function will always recieve the active tab as it\'s first argument.
   */
  onActive: _react.PropTypes.func,
  /**
   * @ignore
   * This property is overriden by the Tabs component.
   */
  onTouchTap: _react.PropTypes.func,
  /**
   * @ignore
   * Defines if the current tab is selected or not.
   * The Tabs component is responsible for setting this property.
   */
  selected: _react.PropTypes.bool,
  /**
   * Selected text color override
   */
  selectedTextColor: _react.PropTypes.string,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object,
  /**
   * Text color override
   */
  textColor: _react.PropTypes.string,
  /**
   * @ignore
   * This property is overriden by the Tabs component.
   */
  width: _react.PropTypes.string
} : void 0;
exports.default = Tab;