/* eslint-disable react/prop-types */
import React, { useCallback } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  useKeyPress,
} from 'reactflow';
import { Controls, Background, MiniMap } from './components';
import types from './types';
import 'reactflow/dist/style.css';
import './VPPanel.css';
import panelConfig from './config';
import useDidMountEffect from './hooks';

function selectionKeyBinding(setNodes) {
  const selectAllKeyPress = useKeyPress('Control+a');
  const deselectAllKeyPress = useKeyPress('Escape');
  const selectAllNodes = (sure) => {
    setNodes((nds) => nds.map((n) => ({ ...n, selected: sure })));
  };

  useDidMountEffect(() => {
    selectAllNodes(true);
  }, [selectAllKeyPress]);

  useDidMountEffect(() => {
    selectAllNodes(false);
  }, [deselectAllKeyPress]);
}

export default function VPPanel({ nodesConfig, edgesConfig }) {
  const [nodes, setNodes, onNodesChange] = useNodesState(nodesConfig);
  const [edges, setEdges, onEdgesChange] = useEdgesState(edgesConfig);

  selectionKeyBinding(setNodes);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  // we are using a bit of a shortcut here to adjust the edge type
  // this could also be done with a custom edge for example
  const edgesWithUpdatedTypes = edges.map((edge) => {
    if (edge.sourceHandle) {
      const edgeType = nodes.find((node) => node.type === 'custom').data
        .selects[edge.sourceHandle];
      // eslint-disable-next-line no-param-reassign
      edge.type = edgeType;
    }
    return edge;
  });
  const proOptions = { hideAttribution: false };
  const bgConfig = panelConfig.background;
  const controlConfig = panelConfig.control;
  const minimapConfig = panelConfig.minimap;
  return (
    <ReactFlow
      nodeTypes={types.nodeTypes}
      nodes={nodes}
      edges={edgesWithUpdatedTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      proOptions={proOptions}
      edgesFocusable={false}
      zoomOnDoubleClick={false}
      minZoom={panelConfig.view.zoomSize[0]}
      maxZoom={panelConfig.view.zoomSize[1]}
      snapToGrid={panelConfig.view.snapToGrid}
      snapGrid={panelConfig.view.snapGridSize}
      onlyRenderVisibleElements={panelConfig.view.onlyRenderVisibleElements}
      selectionMode={
        panelConfig.select.marqueeSelectionIfFullShapeIn ? 'full' : 'partial'
      }
      connection={panelConfig.connection.type}
      connectionRadius={panelConfig.connection.portDetectionRadius}
      selectionOnDrag
      selectionKeyCode={null}
      multiSelectionKeyCode="Shift"
      panOnDrag={[2]} // 2 = right moues button
    >
      <MiniMap
        wight={minimapConfig.width}
        height={minimapConfig.height}
        zoomable={minimapConfig.zoomable}
        pannable={minimapConfig.pannable}
      />
      <Controls
        className={controlConfig.className}
        position={controlConfig.position}
      />
      <Background
        type={bgConfig.type}
        gap={bgConfig.gap}
        dotSize={bgConfig.dotSize}
        crossSize={bgConfig.crossSize}
        lineWidth={bgConfig.lineWidth}
        color={bgConfig.color}
        className={bgConfig.className}
      />
    </ReactFlow>
  );
}
