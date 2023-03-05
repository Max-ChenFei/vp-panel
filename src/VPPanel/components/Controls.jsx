import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Controls as RfControls } from 'reactflow';

/**
 * The float control panel with a zoom-in, zoom-out, fit-view and a lock/unlock button.
 * @returns {JSX.Element}
 */
export default function Controls({ className, position }) {
  return (
    <RfControls
      showInteractive={false}
      className={className}
      position={position}
    />
  );
}

Controls.propTypes = {
  className: PropTypes.string,
  position: PropTypes.oneOf([
    'top-left',
    'top-center',
    'top-right',
    'bottom-left',
    'bottom-center',
    'bottom-right',
  ]),
};

Controls.defaultProps = {
  className: undefined,
  position: 'bottom-left',
};
