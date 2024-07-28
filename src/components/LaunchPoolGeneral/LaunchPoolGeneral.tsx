import { isEqual } from 'lodash';
import { memo } from 'react';
import { LaunchPadHardCap } from './LaunchPadHardCap';
import { LaunchPadParticipate } from './LaunchPadParticipate';

function LaunchPoolGeneralComponent() {
  return (
    <section className="bg-gray5 rounded-2xl mb-2">

      <LaunchPadHardCap />

      <LaunchPadParticipate />
    </section>
  );
}

export const LaunchPoolGeneral = memo(LaunchPoolGeneralComponent, isEqual);
