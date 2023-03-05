const panelConfig = {
  view: {
    zoomSize: [0.5, 2.0],
    snapToGrid: true,
    snapGridSize: [25, 25],
    onlyRenderVisibleElements: true,
  },
  select: {
    marqueeSelectionIfFullShapeIn: true,
  },
  connection: {
    portDetectionRadius: 10,
    type: 'bezier', // 'smoothstep', 'step', 'straight', 'bezier'
  },
  background: {
    type: 'dots',
    gap: 16,
    dotSize: 1,
    crossSize: 6,
    lineWidth: 1,
    color: '#000000',
    className: undefined,
  },
  control: {
    className: undefined,
    position: 'bottom-left',
  },
};
export default panelConfig;
