import { Container } from 'components/Container';
import { Text } from 'components/Text';
import React from 'react';

import { useLocation } from 'react-router-dom';

const LaunchpadDetail = () => {
  const location = useLocation();

  return (
    <section className="relative bg-[--background-main] w-full h-full pt-[60px]">
      <Container className="mt-20">
        <div className="flex items-center justify-between">
          <div className="w-full max-w-[560px]">
            <div className="flex items-center gap-4">
              <img
                src="/images/logo/meta365.png"
                alt="coin logo"
                className="w-[94px] h-auto"
              />
              <Text type="heading2-bold" className="text-primary !font-medium">
                Meta365
              </Text>
              <div className="rounded-[10px] p-[10px] text-white bg-[#3D3D3D]">
                <Text type="body2">Web 3</Text>
              </div>
              <div className="rounded-[10px] p-[10px] text-white bg-[#3D3D3D]">
                <Text type="body2">RWA</Text>
              </div>
            </div>

            <Text type="body1" className="text-white mt-4">
              Revolutionizing the real estate market by providing individual
              investors with a simple platform to build true passive income and
              long-term value growth
            </Text>
          </div>

          <div className="flex items-center gap-5">
            <img src="/images/icon/Globe.png" alt="x" className="w-10 h-auto" />
            <img
              src="/images/icon/discord.png"
              alt="x"
              className="w-10 h-auto"
            />
            <img src="/images/icon/xcom.png" alt="x" className="w-8 h-auto" />
          </div>
        </div>

        <div className="flex items-center justify-between mt-10">
          <img
            src="/images/project/meta365.jpg"
            alt="project"
            className="rounded-[20px] w-full max-w-[640px] h-auto"
          />

          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-end text-end">
              <Text type="heading2-bold" className="text-primary">
                $ 450,000
              </Text>
              <Text type="body1" className="text-white">
                Fund Raised
              </Text>
            </div>
            <div className="flex flex-col items-end text-end">
              <Text type="heading2-bold" className="text-primary">
                13
              </Text>
              <Text type="body1" className="text-white">
                Investors
              </Text>
            </div>
            <div className="flex flex-col items-end text-end">
              <Text type="heading2-bold" className="text-primary">
                $ 10M
              </Text>
              <Text type="body1" className="text-white">
                Valuation Gap
              </Text>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className='flex flex-col gap-6'>
            <Text type='heading4-semi-bold' className='text-primary'>Introduction</Text>
            <img src='/images/project/meta365intro1.jpg' alt='intro 1' className='w-full h-auto rounded-[20px]' />
            <img src='/images/project/meta365intro2.jpg' alt='intro 2' className='w-full h-auto rounded-[20px]' />
            <Text type='heading4-semi-bold' className='text-primary'>Introduction</Text>
            <img src='/images/project/meta365intro3.jpg' alt='intro 3' className='w-full h-auto rounded-[20px]' />
        </div>
      </Container>
    </section>
  );
};

export default LaunchpadDetail;
