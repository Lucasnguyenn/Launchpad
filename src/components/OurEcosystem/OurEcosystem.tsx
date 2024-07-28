import EcosystemComponent from './EcosystemComponent';
import Galery from './Galery';
import { HeroEcosystem } from './HeroEcosystem';
import OveralStructure from './OveralStructure';
import Partner from './Partner';
import WhatWeAchived from './WhatWeAchieved';
import './ecosystem.scss';

function OurEcosystem() {
  return (
    <main>
      <HeroEcosystem />

      <EcosystemComponent />

      <OveralStructure />

      <div className="achived_page">
        <WhatWeAchived />
      </div>
      <Galery />
      <Partner />
    </main>
  );
}

export default OurEcosystem;
