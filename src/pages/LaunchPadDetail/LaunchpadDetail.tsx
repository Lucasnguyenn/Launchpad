import classNames from 'classnames';
import { Text } from 'components/Text';
import styles from './index.module.scss';
import { getDateTimeFromString } from 'util/utils';
import Timer from 'components/Timer/Timer';
import {
  tabLaunchpad,
  contentLaunchpad,
  saleDetail,
} from 'contants/dataLaunchpad';
import TimeLine from './TimeLine';
import CustomTabs from 'components/CustomTabs';
import { TabPanel } from '@headlessui/react';
import { useState } from 'react';
function LaunchpadDetail() {
  const deadline: any = new Date(2024, 8, 22, 8, 30);
  const { date, time } = getDateTimeFromString(deadline);
  const [selectedIndex, setSelectedIndex] = useState(0);

  console.log(contentLaunchpad[selectedIndex]?.contents);

  return (
    <div className={classNames(styles.background_image, 'py-[80px]')}>
      <div className="max-w-[1160px] m-auto py-4">
        <Text
          type="heading2-bold"
          element="h2"
          className="text-white text-center text-glow uppercase"
        >
          Launchpad
        </Text>

        <div className="flex justify-between items-center mt-[40px]">
          <div className="flex flex-col gap-8 w-1/2">
            <div className="flex gap-4">
              <img
                className="w-20 h-20 rounded-[10px]"
                src={'/images//launchpad/logo-zaya.png'}
                alt=""
              />

              <div className="flex flex-col gap-2">
                <Text
                  element="h2"
                  className="text-[#369CC6] font-bold !text-[30px]"
                >
                  ZAYA
                </Text>
                <div className="flex gap-1">
                  {/* {tags.map((it: any, index: number) => {
                  return ( */}
                  <div className="px-[14px] py-[6px] bg-[#369CC6] w-max rounded-[20px]">
                    <Text element="span" className="text-white !text-[14px]">
                      RWA
                    </Text>
                  </div>

                  <div className="px-[14px] py-[6px] bg-[#369CC6] w-max rounded-[20px]">
                    <Text element="span" className="text-white !text-[14px]">
                      DeSci
                    </Text>
                  </div>
                  {/* );
                })} */}
                </div>
              </div>
            </div>
            <Text className="text-[20px] font-light">
              Wireless Building Automation: Cost-effective Energy Management &
              Decarbonization
            </Text>
            <div className="flex gap-4">
              <img className="w-9 h-9" src={'/images//icon/Globe.png'} alt="" />
              <img className="w-9 h-9" src={'/images//icon/xcom.png'} alt="" />
              <img
                className="w-9 h-9"
                src={'/images//icon/discord.png'}
                alt=""
              />
              <img
                className="w-9 h-9"
                src={'/images//icon/twitter.png'}
                alt=""
              />
            </div>
          </div>
          <div className="w-1/2">
            <img
              className="w-full"
              src={'/images//launchpad/bg-zaya.png'}
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col gap-[40px] mt-[40px]">
          <div className="flex">
            <Text
              element="h2"
              className="text-[#369CC6] font-bold !text-[30px]"
            >
              Sale Detail
            </Text>
            &nbsp; &nbsp;
            <Text element="h2" className="font-bold !text-[30px]">
              (Upcoming)
            </Text>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Text element="h2" className="font-bold !text-[30px]">
              Start in:
            </Text>
            <Timer className="justify-center" date={date} time={time} />
          </div>

          <div className="grid grid-cols-3 gap-10 border-y-2 border-solid border-[#FFFFFF1A] py-[40px]">
            {saleDetail.map((item, index) => {
              return (
                <div key={index} className="flex flex-col gap-2">
                  <Text className="text-[#FFFFFFB2] font-medium text-center !text-[26px]">
                    {item?.name}
                  </Text>
                  <Text className="font-bold text-center !text-[40px]">
                    {item?.price}
                  </Text>
                </div>
              );
            })}
          </div>

          <TimeLine />

          <CustomTabs
            data={tabLaunchpad}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          >
            <ul>
              {contentLaunchpad[selectedIndex]?.contents.map(
                (content, index: number) => (
                  <li
                    key={content.id}
                    className={`relative ${
                      index % 2 !== 0 ? 'bg-inherit' : 'bg-[#121212B2]'
                    }  flex justify-between rounded-md px-4 py-6`}
                  >
                    <Text className="text-[20px]">{content.title}</Text>
                    <Text className="text-[20px]">{content.price}</Text>
                  </li>
                )
              )}
            </ul>
          </CustomTabs>
        </div>
      </div>
    </div>
  );
}

export default LaunchpadDetail;
