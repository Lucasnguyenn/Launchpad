
import { useState } from 'react';
import './LaunchPadDetail.css';

export function ProjectDetail() {
  const [data, setData] = useState({
    isVisibleVision: true,
    isVisibleSuite: true,
    isVisibleRoadmap: true,
    isVisibleToken: true,
  });

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
       
    </div>
  );
}
