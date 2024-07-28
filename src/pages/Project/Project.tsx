import network from 'images/background/network.png';
import { ProjectItem } from './ProjectItem';
import { ProjectPagination } from './ProjectPagination';

export function Project() {
  return (
    <section className="relative">
      <img
        src={network}
        alt="network"
        className="absolute inset-0 -z-10 w-full max-h-[1024px]"
      />

      <div className="px-4 max-w-[1202px] w-full mx-auto">
        <h1 className="text-[48px] leading-[64px] explore-title text-center font-russo mb-[128px] mt-[54px]">
          PROJECTS
        </h1>

        <div className="mb-[83px] grid grid-cols-1 md:grid-cols-3 gap-x-[40px] gap-y-[71px]">
          <ProjectItem
            title="TREK EXCHANGE"
            sub="TREK Exchange is a decentralized exchange (DEX) aggregator. We provide our traders with superior token prices by analyzing rates across thousands of exchanges instantly."
            link="/hub-ido"
          />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>

        <ProjectPagination />
      </div>
    </section>
  );
}
