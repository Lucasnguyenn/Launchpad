import { Helmet } from 'react-helmet';
import { ExploreProjects } from './ExploreProjects';
import { Partners } from './Partners';
import { Welcome } from './Welcome';

export function Launchpad() {
  return (
    <>
      <Helmet>
        <title>Hub Global</title>
      </Helmet>

      <Welcome />

      <ExploreProjects />

      <Partners />
    </>
  );
}
