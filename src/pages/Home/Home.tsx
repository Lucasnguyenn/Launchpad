import React from 'react';

import { Text } from 'components/Text';
import { Container } from 'components/Container';
import { CoinTable } from './CoinTable';
import { Button } from 'components/Button';

const HomePage = () => {
  return (
    <section
      id="home_page_section"
      className="min-h-[110vh] w-full h-full bg-[--background-main] pb-10"
    >
      {/* hero banner */}
      <div className="relative bg-hero-1 h-screen w-full bg-center bg-no-repeat bg-cover">
        <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-8">
          <Text type="heading0-bold" className="text-white">
            Go <span className="text-8xl text-primary">HUB</span>, Go{' '}
            <span className="text-8xl text-primary">Global</span>
          </Text>
          <Text type="heading4-semi-bold" className="text-white !font-medium">
            A fundraising platform for start-ups in various industries
          </Text>
        </div>
      </div>

      {/* statistics */}
      <div className="w-full my-7 flex justify-center gap-5">
        <div className="w-[240px] rounded-[20px] p-5 flex flex-col justify-center gap-12 bg-[--background-dark]">
          <Text type="heading1-bold" className="text-primary">
            $ 10M
          </Text>
          <Text type="heading5-bold" className="text-white">
            Raised Capital
          </Text>
        </div>
        <div className="w-[240px] rounded-[20px] p-5 flex flex-col justify-center gap-12 bg-[--background-dark]">
          <Text type="heading1-bold" className="text-primary">
            100
          </Text>
          <Text type="heading5-bold" className="text-white">
            Project lauched
          </Text>
        </div>
        <div className="w-[240px] rounded-[20px] p-5 flex flex-col justify-center gap-12 bg-[--background-dark]">
          <Text type="heading1-bold" className="text-primary">
            1000
          </Text>
          <Text type="heading5-bold" className="text-white">
            Participants
          </Text>
        </div>
      </div>

      {/* table */}
      <Container className="flex flex-col">
        <Text className="text-5xl text-primary font-medium">Launchpad</Text>

        <CoinTable />

        <div className="w-full flex justify-end mt-5">
          <Button type="primary" size="large">
            All projects
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default HomePage;
