import React from 'react';
import PropTypes from 'prop-types';

// Import the web component
import { Button as ButtonM } from '../../Button';
// import useCustomElement to bridge web components to React
import useCustomElement from 'use-custom-element';

function Button(props) {
  const [customElementProps, ref] = useCustomElement(props);

  // Return the web component
  return <my-button {...customElementProps} ref={ref} />;
}

Button.propTypes = {
   label: PropTypes.string
}

export default Button;
