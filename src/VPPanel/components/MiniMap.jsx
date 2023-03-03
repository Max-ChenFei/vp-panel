import React from 'react';
import { MiniMap as RfMinimap } from 'reactflow';

const minimapStyle = {
  height: 120,
};

export default function MiniMap() {
  return <RfMinimap style={minimapStyle} zoomable pannable />;
}
