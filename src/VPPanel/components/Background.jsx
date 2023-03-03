import React from 'react';
import { Background as RfBackground } from 'reactflow';

const BackgroundOption = {
  variant: 'dots',
  gap: 16,
  color: '#aaa',
};

export default function Background() {
  return (
    <RfBackground
      variant={BackgroundOption.variant}
      gap={BackgroundOption.gap}
      color={BackgroundOption.color}
    />
  );
}
