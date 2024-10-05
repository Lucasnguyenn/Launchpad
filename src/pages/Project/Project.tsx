import { Container } from 'components/Container';
import { Text } from 'components/Text';
import { SearchBar } from './SearchBar';
import Icon from 'components/Icon';
import { DropdownFilter } from './DropdownFilter';
import { ProjectItem } from './ProjectItem';

const sampleData = [
  {
    id: 0,
    title: 'hublock',
    thumbnail: 'images/project/banner.jpg',
    cap: '$150k Valuation Cap',
    tags: ['Web 2', 'logistic'],
    content:
      'HUBLOCK locker solution installed at: Apartments, offices, schools, public places... to send and receive goods at any time, reduce lastmile costs and increase security for goods',
    raised: '--',
    investors: '--',
  },
  {
    id: 1,
    title: 'Meta365',
    thumbnail: 'images/project/meta365.jpg',
    cap: '$10M Valuation Cap',
    tags: ['Web 3', 'RWA'],
    content:
      'Revolutionizing the real estate market by providing individual investors with a simple platform to build true passive income and long-term valu...',
    raised: '$350,000',
    investors: 20,
  },
  {
    id: 2,
    title: 'Lexi',
    thumbnail: '/images/project/lexi.png',
    cap: '$10M Valuation Cap',
    tags: ['Web 3', 'ESG'],
    content:
      'Wireless Building Automation: Cost-effective Energy Management & Decarbonization',
    raised: '$34,211',
    investors: 31,
  },
  {
    id: 3,
    title: 'Reental',
    thumbnail: 'images/project/reental.png',
    cap: '$42M Valuation Cap',
    tags: ['Web 3', 'Real Estate', 'Fintech'],
    content: 'Tokenizing the $300tn real estate market, one property at a time',
    raised: '$188,975',
    investors: 183,
  },
  {
    id: 4,
    title: 'FuelGems',
    thumbnail: 'images/project/fualgems.jpg',
    cap: '$13M Valuation Cap',
    tags: ['Energy', 'Web 3', 'Technology'],
    content:
      'Wireless Building Automation: Cost-effective Energy Management & Decarbonizationdấdsadadladakdaldasklaaa',
    raised: '$130,000',
    investors: 6,
  },
  {
    id: 5,
    title: 'ZayaAI',
    thumbnail: 'images/project/zayaai.jpg',
    cap: '$1M Valuation Cap',
    tags: ['Web 3', 'AI'],
    content:
      'Wireless Building Automation: Cost-effective Energy Management & Decarbonizationsdsdsdaldsakdldlasak',
    raised: '$130,000',
    investors: 6,
  },
  {
    id: 5,
    title: 'Coinpays',
    thumbnail: 'images/project/coinpays.jpg',
    cap: '$10M Valuation Cap',
    tags: ['Web 3', 'Payments'],
    content:
      'Wireless Building Automation: Cost-effective Energy Management & Decarbonization',
    raised: '$130,000',
    investors: 31,
  },
];

export function Project() {
  return (
    <section className="relative bg-[--background-main] w-full h-full pt-[60px]">
      <Container>
        {/* hero banner */}
        <div className="flex items-center justify-between py-[60px]">
          <div className="flex flex-col gap-6 mx-4 md:mx-0 w-full max-w-[525px]">
            <Text type="heading1-bold" className="text-primary">
              Empowering Your Investments
            </Text>

            <p className="text-white text-[18px] font-light">
              Explore vetted opportunities on Hub Global Launchpad, where every
              project undergoes rigorous due diligence to ensure the{' '}
              <span className="text-primary font-bold">
                highest level of trust and transparency.
              </span>
            </p>
          </div>

          <img
            src="/images//logo/hub-global-pixel.png"
            alt="logo"
            className="w-[300px] h-auto"
          />
        </div>

        {/* projects section */}
        <div className="w-full flex flex-col gap-8">
          {/* search & filter */}
          <div className="w-full flex items-center justify-between">
            <div className="w-2/5">
              <SearchBar />
            </div>

            <div className="flex gap-5">
              <div className="flex items-center justify-center bg-[--primary-blue] h-[42px] w-[46px]">
                <Icon name="filter-lines" className="text-white !text-4xl" />
              </div>
              <DropdownFilter />
            </div>
          </div>

          {/* projects list */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleData.map((project:any) => (
              <ProjectItem data={project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
