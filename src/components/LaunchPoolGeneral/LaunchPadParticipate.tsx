import { isEqual } from 'lodash';
import { memo } from 'react';
import { LaunchPadChart } from './LaunchPadChart';
import { LaunchPadForm } from './LaunchPadForm';

function LaunchPadParticipateComponent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* SEMI CIRCLE PROGRESS BAR */}
      <LaunchPadChart />

      <div className="md:hidden my-6 w-full h-[1px] bg-[#191919]" />

      <LaunchPadForm />
    </div>
  );
}

export const LaunchPadParticipate = memo(
  LaunchPadParticipateComponent,
  isEqual
);
