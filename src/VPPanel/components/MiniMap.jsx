import React from 'react';
import { MiniMap as RfMinimap } from 'reactflow';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

export default function MiniMap({ height, width, zoomable, pannable }) {
  return (
    <RfMinimap
      style={{
        height,
        width,
      }}
      zoomable={zoomable}
      pannable={pannable}
      ariaLabel="Mini Map"
    />
  );
}

MiniMap.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  zoomable: PropTypes.bool,
  pannable: PropTypes.bool,
};

MiniMap.defaultProps = {
  height: 120,
  width: 200,
  zoomable: true,
  pannable: true,
};
