import React, {Component, PropTypes} from 'react';
import EnhancedButton from 'material-ui/internal/EnhancedButton';
import KeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

const getStyles = (props, context) => {
  const {height, style, buttonStyle, iconStyle} = props;
  const {tabs} = context.muiTheme;

  const styleProps = style || {};
  const iconStyleProps = iconStyle || {};
  const buttonStyleProps = buttonStyle || {};

  return {
    root: {
      ...styleProps,
      padding: styleProps.padding || 0,
      border: styleProps.border || 0,
      verticalAlign: styleProps.verticalAlign || 'top',
      flex: styleProps.flex || '0 0 56px',
    },
    button: {
      ...buttonStyleProps,
      display: buttonStyleProps.display || 'flex',
      flexDirection: buttonStyleProps.flexDirection || 'column',
      alignItems: buttonStyleProps.alignItems || 'center',
      justifyContent: buttonStyleProps.justifyContent || 'center',
      height: buttonStyleProps.height || height,
    },
    icon: {
      ...iconStyleProps,
      color: iconStyleProps.color || tabs.selectedTextColor,
      fontSize: iconStyleProps.fontSize || 24,
    },
  };
};

class ScrollButton extends Component {
  static propTypes = {
    /**
     * Style override object for button child
     */
    buttonStyle: PropTypes.object,
    /**
     * Which direction should the button indicate?
     */
    direction: PropTypes.oneOf(['left', 'right']),
    /**
     * Sets the height of the scroll button; calculated by the Tabs component as the largest of all tab items
     */
    height: PropTypes.string,
    /**
     * Style override object for icon child
     */
    iconStyle: PropTypes.object,
    /**
     * Callback to execute for button press
     */
    onTouchTap: PropTypes.func,
    /**
     * Whether or not to add placeholder when invisible
     */
    placeholder: PropTypes.bool,
    /**
     * Style override object for root
     */
    style: PropTypes.object,
    /**
     * Should the button be present or just consume space
     */
    visible: PropTypes.bool,
  }

  static defaultProps = {
    direction: 'left',
    height: '48px',
    visible: false,
  }

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  render() {
    const {
      direction,
      height, // eslint-disable-line no-unused-vars
      onTouchTap,
      visible,
      placeholder, // eslint-disable-line no-unused-vars
      style, // eslint-disable-line no-unused-vars
      iconStyle, // eslint-disable-line no-unused-vars
      buttonStyle, // eslint-disable-line no-unused-vars
      ...other
    } = this.props;

    const styles = getStyles(this.props, this.context, this.state);

    const rippleOpacity = 0.3;
    const rippleColor = this.context.muiTheme.tabs.selectedTextColor;
    if (visible) {
      return (
        <EnhancedButton
          {...other}
          style={styles.root}
          focusRippleColor={rippleColor}
          touchRippleColor={rippleColor}
          focusRippleOpacity={rippleOpacity}
          touchRippleOpacity={rippleOpacity}
          onTouchTap={onTouchTap}
        >
          <div
            style={styles.button}
          >
            {(direction === 'left') ?
              <KeyboardArrowLeft
                style={styles.icon}
              /> :
              <KeyboardArrowRight
                style={styles.icon}
              />
            }
          </div>
        </EnhancedButton>
      );
    } else {
      return placeholder ?
      (
        <div style={styles.root} />
      ) :
      null;
    }
  }
}

export default ScrollButton;
