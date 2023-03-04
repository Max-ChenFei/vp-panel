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
};
export default panelConfig;
