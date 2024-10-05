import { Container } from 'components/Container';
import { Tab, TabButton } from 'components/SimpleTab';
import { Text } from 'components/Text';
import React, { useState } from 'react';

import { useLocation } from 'react-router-dom';

const tabItems: TabButton[] = [
  {
    label: 'Project Overview',
    value: 'overview',
  },
  {
    label: 'Update and Review',
    value: 'update',
  },
  {
    label: 'Token Launch',
    value: 'launch',
  },
];

const LaunchpadDetail = () => {
  const location = useLocation();
  const [tab, setTab] = useState<TabButton>(tabItems[0]);

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

      
        {/* Tabs */}
        <Tab
          list={tabItems}
          onChange={setTab}
          value={tab.value}
          className="py-10 mt-10"
        />

        {/* Tab items */}
        {tab.value === 'overview' && (
         <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-6'>
            <Text type='heading4-semi-bold' className='text-primary'>Problem</Text>
            <img src='/images/pitchdeck/problem-1.jpg' alt='intro 3' className='w-full h-auto rounded-[20px]' />
            <img src='/images/pitchdeck/problem-2.jpg' alt='intro 3' className='w-full h-auto rounded-[20px]' />
          </div>
          <div className='flex flex-col gap-6'>
            <Text type='heading4-semi-bold' className='text-primary'>Solution</Text>
            <img src='/images/pitchdeck/solution-3.jpg' alt='intro 3' className='w-full h-auto rounded-[20px]' />
            <img src='/images/pitchdeck/solution-4.jpg' alt='intro 3' className='w-full h-auto rounded-[20px]' />
            <img src='/images/pitchdeck/solution-5.jpg' alt='intro 3' className='w-full h-auto rounded-[20px]' />
            <img src='/images/pitchdeck/solution-6.jpg' alt='intro 3' className='w-full h-auto rounded-[20px]' />
            <img src='/images/pitchdeck/solution-7.jpg' alt='intro 3' className='w-full h-auto rounded-[20px]' />
          </div>
          <div className='flex flex-col gap-6'>
            <Text type='heading4-semi-bold' className='text-primary'>More info</Text>
            <img src='/images/pitchdeck/moreinfo-1.jpg' alt='intro 1' className='w-full h-auto rounded-[20px]' />
            <img src='/images/pitchdeck/moreinfo-2.jpg' alt='intro 2' className='w-full h-auto rounded-[20px]' />
          </div>
       </div>
        )}

        {tab.value === 'update' && (
          <div className="sm:w-4/5 h-[500px] flex mx-auto">
            <div className="h-full flex flex-col items-end justify-between pr-5 border-r border-r-white border-solid">
              <div className="flex flex-col items-end text-end text-nowrap">
                <Text type="heading3-bold" className="text-primary">
                Quarter 2
                </Text>
                <Text type="heading5-medium" className="text-primary">
                  2024
                </Text>
              </div>

              <div className="flex flex-col items-end text-end text-nowrap">
                <Text type="heading3-bold" className="text-primary">
                Quarter 3
                </Text>
                <Text type="heading5-medium" className="text-primary">
                  2024
                </Text>
              </div>
            </div>

            <div className="h-full flex flex-col justify-between ml-5">
              <div className="px-5 py-4 border border-solid border-[#989898] rounded-xl">
                <Text type="body1" className="mt-5">
                  R&D and completion of smart lockers using palm biometric technology
                </Text>
              </div>

              <div>
              <Text type="body1" className="mt-5">
                Pilot locker installation at Vinata Tower apartment building, Hanoi University of Science and Technology and Royal City
              </Text>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default LaunchpadDetail;
