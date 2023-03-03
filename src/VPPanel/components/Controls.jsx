import React from 'react';
import { Controls as RfControls } from 'reactflow';

/**
 * The controls panel with a zoom-in, zoom-out, fit-view and a lock/unlock button.
 * @returns {JSX.Element}
 */
export default function Controls() {
  return <RfControls showInteractive={false} />;
}
