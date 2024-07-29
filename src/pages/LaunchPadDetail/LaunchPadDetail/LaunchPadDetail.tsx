import { Tab } from '@headlessui/react';
import { LaunchPadHardCap } from 'components/LaunchPoolGeneral/LaunchPadHardCap';
import { LaunchPadForm } from 'components/LaunchPoolGeneral/LaunchPadForm';
import linearActive from 'images/background/linear-active.png';
import { isEqual } from 'lodash';
import { memo } from 'react';
import { Tokenomics } from '../LaunchPadInfo/Tokenomics';
import { TabProjectDetail } from '../TabProjectDetail';
import { LaunchPadInfo } from './LaunchPadInfo';

const data = [
  { id: 0, title: 'Launchpad' },
  { id: 1, title: 'Token info' },
  { id: 2, title: 'Project details' },
  { id: 3, title: 'Tokenomics' },
];

function LaunchPadDetailComponent() {
  return (
    <>
      <section className="relative max-w-[1202px] 2xl:max-w-full px-4 mx-auto 2xl:mx-[128px] py-[138px]">
        <Tab.Group>
          <Tab.List className="w-full overflow-x-auto overflow-y-hidden mx-auto flex items-center md:justify-center mb-[60px] gap-[40px] border-b-[3px] pb-[16px] border-[#1B6679] max-w-[969px]">
            {data.map((item, idx) => {
              return (
                <Tab
                  key={idx}
                  className={({ selected }) =>
                    `relative text-[20px] ${selected ? 'drop-shadow' : ''}`
                  }
                >
                  {({ selected }) => {
                    return (
                      <>
                        <span className="whitespace-nowrap">{item.title}</span>

                        {selected && (
                          <img
                            src={linearActive}
                            alt="linear-active"
                            className="absolute -bottom-[31px]"
                          />
                        )}
                      </>
                    );
                  }}
                </Tab>
              );
            })}
          </Tab.List>

          <Tab.Panels className="outline-none max-w-[1072px] px-[20px] w-full mx-auto">
            {/* <Tab.Panel>
              <LaunchPadForm />
            </Tab.Panel> */}
            <Tab.Panel>
              <LaunchPadHardCap />
            </Tab.Panel>

            <Tab.Panel className="text-white">
              <LaunchPadInfo />
            </Tab.Panel>

            <Tab.Panel className="text-white">
              <TabProjectDetail />
            </Tab.Panel>

            <Tab.Panel className="text-white outline-none">
              <Tokenomics />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </section>

      {/* <OfficialLink /> */}
    </>
  );
}

export const LaunchPadDetail = memo(LaunchPadDetailComponent, isEqual);
