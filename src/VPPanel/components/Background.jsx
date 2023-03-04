import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Background as RfBackground } from 'reactflow';

export default function Background({
  type,
  gap,
  dotSize,
  crossSize,
  lineWidth,
  color,
  className,
}) {
  const size = type === 'cross' ? crossSize : dotSize;
  return (
    type !== 'none' && (
      <RfBackground
        variant={type}
        gap={gap}
        size={size}
        lineWidth={lineWidth}
        color={color}
        className={className}
      />
    )
  );
}

Background.propTypes = {
  type: PropTypes.oneOf(['none', 'dots', 'cross', 'lines']),
  gap: PropTypes.number,
  dotSize: PropTypes.number,
  crossSize: PropTypes.number,
  lineWidth: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
};

Background.defaultProps = {
  type: 'dots',
  gap: 16,
  dotSize: 1,
  crossSize: 6,
  lineWidth: 1,
  color: '#8188a',
  className: undefined,
};
