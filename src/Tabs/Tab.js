import React, {Component, PropTypes} from 'react';
import EnhancedButton from 'material-ui/internal/EnhancedButton';
import SadFace from 'material-ui/svg-icons/social/sentiment-very-dissatisfied';


function getStyles(props, context) {
  const {
    icon,
    iconPlaceholder,
    isLargeView,
    isMultiLine,
    height,
    width,
    selectedTextColor,
    textColor,
    labelStyle,
  } = props;

  const {tabs} = context.muiTheme;

  const propsOrThemeSelectedTextColor = selectedTextColor || tabs.selectedTextColor;
  const propsOrThemeTextColor = textColor || tabs.textColor;

  const themeLabelStyle = {
    textOverflow: 'ellipsis',
    textTransform: 'uppercase',
    whiteSpace: 'normal',
    fontWeight: props.selected ? 500 : 300,
    fontSize: (isMultiLine && !icon) ? '12px' : '14px',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: (isMultiLine && !icon && !iconPlaceholder) ? 2 : 1,
    WebkitBoxOrient: 'vertical',
  };

  const label = Object.assign({}, themeLabelStyle, labelStyle);

  return {
    root: {
      color: props.selected ? propsOrThemeSelectedTextColor : propsOrThemeTextColor,
      minWidth: isLargeView ? '160px' : '72px',
      maxWidth: '264px',
      width,
      padding: 0,
      border: 0,
      verticalAlign: 'top',
    },
    button: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: isLargeView ? '24px' : '12px',
      paddingRight: isLargeView ? '24px' : '12px',
      height,
    },
    label,
  };
}

class Tab extends Component {
  static muiName = 'Tab';

  static propTypes = {
    /**
     * Override the inline-styles of the button element.
     */
    buttonStyle: PropTypes.object,
    /**
     * The css class name of the root element.
     */
    className: PropTypes.string,
    /**
     * @ignore
     */
    height: PropTypes.string,
    /**
     * Sets the icon of the tab, you can pass `FontIcon` or `SvgIcon` elements.
     */
    icon: PropTypes.node,
    /**
     * Adds an invisible icon for correct spacing
     */
    iconPlaceholder: PropTypes.bool,
    /**
     * Style object to apply to the icon element
     */
    iconStyle: PropTypes.object,
    /**
     * @ignore
     */
    index: PropTypes.any,
    /**
     * @ignore
     */
    isLargeView: PropTypes.bool,
    /**
     * Indicates that the tab should render with the mutliple lines of text styling.
     */
    isMultiLine: PropTypes.bool,
    /**
     * Sets the text value of the tab item to the string specified.
     */
    label: PropTypes.node,
    /**
     * Style object for label
     */
    labelStyle: PropTypes.object,
    /**
     * Fired when the active tab changes by touch or tap.
     * Use this event to specify any functionality when an active tab changes.
     * For example - we are using this to route to home when the third tab becomes active.
     * This function will always recieve the active tab as it\'s first argument.
     */
    onActive: PropTypes.func,
    /**
     * @ignore
     * This property is overriden by the Tabs component.
     */
    onTouchTap: PropTypes.func,
    /**
     * @ignore
     * Defines if the current tab is selected or not.
     * The Tabs component is responsible for setting this property.
     */
    selected: PropTypes.bool,
    /**
     * Selected text color override
     */
    selectedTextColor: PropTypes.string,
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    /**
     * Text color override
     */
    textColor: PropTypes.string,
    /**
     * @ignore
     * This property is overriden by the Tabs component.
     */
    width: PropTypes.string,
  };

  static defaultProps = {
    isLargeView: false,
    isMultiLine: false,
  }

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  getMeasurements = () => {
    if (this.buttonComponent.button instanceof Element) {
      const boundingClientRect = this.buttonComponent.button.getBoundingClientRect();
      return {
        top: boundingClientRect.top,
        bottom: boundingClientRect.bottom,
        left: boundingClientRect.left,
        right: boundingClientRect.right,
        height: boundingClientRect.height,
        width: boundingClientRect.width,
      };
    } else return {};
  }

  handleTouchTap = (event) => {
    if (this.props.onTouchTap) {
      this.onTouchTapTarget = event.currentTarget;
      this.props.onTouchTap(this);
    }
  };

  render() {
    const {
      icon,
      iconPlaceholder,
      iconStyle,
      index, // eslint-disable-line no-unused-vars
      onActive, // eslint-disable-line no-unused-vars
      onTouchTap, // eslint-disable-line no-unused-vars
      selected, // eslint-disable-line no-unused-vars
      label,
      buttonStyle,
      isLargeView, // eslint-disable-line no-unused-vars
      isMultiLine, // eslint-disable-line no-unused-vars
      style,
      labelStyle, // eslint-disable-line no-unused-vars
      textColor, // eslint-disable-line no-unused-vars
      selectedTextColor, // eslint-disable-line no-unused-vars
      ...other
    } = this.props;

    const styles = getStyles(this.props, this.context);

    const iconProps = {
      style: {
        fontSize: 24,
        color: styles.root.color,
        visibility: iconPlaceholder ? 'hidden' : null,
        paddingBottom: label ? '4px' : '0px',
        flexShrink: 0,
        ...iconStyle,
      },
    };

    // this is a terrible hack but i couldn't get destructuring to work properly
    iconProps.height = iconProps.height || '16px';
    iconProps.width = iconProps.width || '16px';

    let iconElement;

    if (icon && React.isValidElement(icon)) {
      // If it's svg icon set color via props
      if (icon.type.muiName !== 'FontIcon') {
        iconProps.color = styles.root.color;
      }
      iconElement = React.cloneElement(icon, iconProps);
    } else if (iconPlaceholder) {
      iconElement = React.cloneElement(<SadFace />, iconProps);
    }

    const rippleOpacity = 0.3;
    const rippleColor = this.context.muiTheme.tabs.selectedTextColor;

    return (
      <EnhancedButton
        {...other}
        style={Object.assign(styles.root, style)}
        focusRippleColor={rippleColor}
        touchRippleColor={rippleColor}
        focusRippleOpacity={rippleOpacity}
        touchRippleOpacity={rippleOpacity}
        onTouchTap={this.handleTouchTap}
        ref={(buttonComponent) => {
          this.buttonComponent = buttonComponent;
        }}
      >
        <div style={Object.assign(styles.button, buttonStyle)} >
          {iconElement}
          {label ? <span style={styles.label}>{label}</span> : null }
        </div>
      </EnhancedButton>
    );
  }
}

export default Tab;
