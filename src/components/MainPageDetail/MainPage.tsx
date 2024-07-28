import { LaunchPoolAffilitate } from 'components/LaunchPoolAffilitate/LaunchPoolAffilitate';

import { isEqual } from 'lodash';
import { CommitStake } from 'pages/LaunchPadDetail/CommitStake';
import { LaunchPadDetail } from 'pages/LaunchPadDetail/LaunchPadDetail/LaunchPadDetail';
import { LaunchPadFAQ } from 'pages/LaunchPadDetail/LaunchPadDetail/LaunchpadFAQ';
import { LaunchpadTimeline } from 'pages/LaunchPadDetail/LaunchPadDetail/LaunchpadTimeline';
import { memo } from 'react';
import { Hero } from './Hero';
import { ProjectName } from './ProjectName';
import './main-page.scss';
import { useSearchParamsData } from './useSearchParams';

function MainPageDetailComponent() {
  useSearchParamsData();

  return (
    <main className="relative mx-auto mb-6 md:mb-[240px] overflow-x-hidden">
      <Hero />

      <ProjectName />

      <LaunchpadTimeline />

      <CommitStake />

      {/* affiliate Link */}
      <LaunchPoolAffilitate />

      <LaunchPadDetail />

      {/* faq */}
      <LaunchPadFAQ />
    </main>
  );
}

export const MainPageDetail = memo(MainPageDetailComponent, isEqual);
