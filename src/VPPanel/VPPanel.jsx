/* eslint-disable react/prop-types */
import React, { useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge } from 'reactflow';
import { Controls, Background, MiniMap } from './components';
import types from './types';
import 'reactflow/dist/style.css';
import './VPPanel.css';
import panelConfig from './config';

export default function VPPanel({ nodesConfig, edgesConfig }) {
  const [nodes, , onNodesChange] = useNodesState(nodesConfig);
  const [edges, setEdges, onEdgesChange] = useEdgesState(edgesConfig);
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
    >
      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>
  );
}
