import { Container } from 'components/Container';
import { Text } from 'components/Text';
import { SearchBar } from './SearchBar';
import Icon from 'components/Icon';
import { DropdownFilter } from './DropdownFilter';
import { ProjectItem } from './ProjectItem';

const sampleData = [
  {
    id: 1,
    title: 'Reental',
    thumbnail: '/images//project/reental.png',
    cap: '$42M Valuation Cap',
    tags: ['Web 3', 'Real Estate', 'Fintech'],
    content: 'Tokenizing the $300tn real estate market, one property at a time',
    raised: '$188,975',
    investors: 183,
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {sampleData.map((project) => (
              <ProjectItem data={project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
