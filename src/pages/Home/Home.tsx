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
        <div className="w-full lg:w-auto absolute top-20 xl:top-auto xl:bottom-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-8">
          <Text
            element="h1"
            type="heading0-bold"
            className="!text-[60px] lg:!text-[72px] text-center text-white"
          >
            Go <span className="text-[64px] xl:text-8xl text-primary">HUB</span>
            <span className="hidden lg:inline-flex lg:mr-5">, </span>
            <br className="block lg:hidden" />
            Go{' '}
            <span className="text-[64px] xl:text-8xl text-primary">Global</span>
          </Text>
          <div className="px-8">
            <Text
              type="heading4-semi-bold"
              className="!text-[20px] lg:!text-[24px] text-white !font-medium text-center"
            >
              A fundraising platform for start-ups in various industries
            </Text>
          </div>
        </div>
      </div>

      {/* statistics */}
      <div className="w-full px-5 my-7 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-5">
        <div className="w-full sm:w-[240px] rounded-[20px] p-5 flex flex-col justify-center gap-12 bg-[--background-dark]">
          <Text type="heading1-bold" className="text-primary">
            $ 10M
          </Text>
          <Text type="heading5-bold" className="text-white">
            Raised Capital
          </Text>
        </div>
        <div className="w-full sm:w-[240px] rounded-[20px] p-5 flex flex-col justify-center gap-12 bg-[--background-dark]">
          <Text type="heading1-bold" className="text-primary">
            100
          </Text>
          <Text type="heading5-bold" className="text-white">
            Project lauched
          </Text>
        </div>
        <div className="w-full sm:w-[240px] rounded-[20px] p-5 flex flex-col justify-center gap-12 bg-[--background-dark]">
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
        <Text className="text-5xl text-primary font-medium text-center lg:text-start">Launchpad</Text>

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
