import React, {Component, PropTypes} from 'react';
import EnhancedButton from 'material-ui/internal/EnhancedButton';
import KeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

const getStyles = (props, context) => {
  const {height, iconColor, iconSize} = props;
  const {tabs} = context.muiTheme;

  return {
    root: {
      padding: 0,
      border: 0,
      verticalAlign: 'top',
      flex: '0 0 56px',
    },
    button: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height,
    },
    icon: {
      color: iconColor || tabs.selectedTextColor,
      fontSize: iconSize || 24,
    },
  };
};

class ScrollButton extends Component {
  static propTypes = {
    /**
     * Which direction should the button indicate?
     */
    direction: PropTypes.oneOf(['left', 'right']),
    /**
     * Sets the height of the scroll button; calculated by the Tabs component as the largest of all tab items
     */
    height: PropTypes.string,
    /**
     * Color for button
     */
    iconColor: PropTypes.string,
    /**
     * size of icon
     */
    iconSize: PropTypes.number,
    /**
     * Callback to execute for button press
     */
    onTouchTap: PropTypes.func,
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
      iconColor, // eslint-disable-line no-unused-vars
      iconSize, // eslint-disable-line no-unused-vars
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
      return (
        <div style={styles.root} />
      );
    }
  }
}

export default ScrollButton;
