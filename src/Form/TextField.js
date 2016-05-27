import React, { PropTypes } from 'react';
import radium from 'radium';
import themes from '../styles/themes';


const getStyles = (props, theme) => {
  const { palette, spacing } = theme;

  return {
    root: {
      boxSizing: 'border-box',
      fontSize: '1.15rem',
      width: '100%',
      color: palette.textColor,
      outline: 'none',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: palette.borderColor,
      ':focus': {
        boxShadow: `0 0 0 1px ${palette.primaryColor}`,
        borderColor: palette.primaryColor,
      },
      borderRadius: spacing.borderRadius,
      padding: spacing.padding,
      marginBottom: 15
    }
  };
};

const TextField = (props, context) => {
  const theme = context.theme || themes.getTheme();
  const styles = getStyles(props, theme);
  const {
    style,
    ...other
  } = props;

  const inlineStyle = [];
  inlineStyle.push(styles.root);

  if (style) {
    inlineStyle.push(style);
  }


  return (
    <input {...other} style={inlineStyle} placeholder={props.placeholder} />
  );
};

TextField.propTypes = {
  children: PropTypes.node,
  placeholder: PropTypes.string,
  style: PropTypes.object
};

TextField.contextTypes = {
  theme: PropTypes.object
};

export default radium(TextField);
