/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const ConditionalRenderer = ({
  validator,
  children,
}) => (
  <>
    {validator && children}
  </>
);

ConditionalRenderer.propTypes = {
  validator: PropTypes.node,
  children: PropTypes.node.isRequired,
};

export default ConditionalRenderer;
