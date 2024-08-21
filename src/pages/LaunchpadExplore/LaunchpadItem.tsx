import React from 'react';
import { Text } from 'components/Text';

interface ILaunchpadItem {
  background: string;
  logo: string;
  title: string;
  tags: any;
  total: string;
  symbol: string;
  price: string;
  time: string;
}

function LaunchpadItem({
  background,
  logo,
  title,
  tags,
  total,
  symbol,
  price,
  time,
}: ILaunchpadItem) {
  return (
    <div className="flex flex-col gap-[20px] w-[400px] m-auto p-[20px] bg-[#121212] rounded-[20px] cursor-pointer">
      <img src={background} alt="" />
      <div className="flex gap-4">
        <img className="w-20 h-20 rounded-[10px]" src={logo} alt="" />

        <div className="flex flex-col gap-2">
          <Text element="h2" className="text-[#369CC6] font-bold !text-[30px]">
            {title}
          </Text>
          <div className="flex gap-1">
            {tags.map((it: any, index: number) => {
              return (
                <div
                  key={index}
                  className="px-[14px] py-[6px] bg-[#369CC6] w-max rounded-[20px]"
                >
                  <Text element="span" className="text-white !text-[14px]">
                    {it}
                  </Text>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <Text element="span" className="text-white !text-[18px]">
            Total raise:
          </Text>
          <Text element="span" className="text-white !text-[22px] font-bold">
            {total}
          </Text>
        </div>

        <div className="flex justify-between">
          <Text element="span" className="text-white !text-[18px]">
            Symbol:
          </Text>
          <Text element="span" className="text-white !text-[18px]">
            {symbol}
          </Text>
        </div>

        <div className="flex justify-between">
          <Text element="span" className="text-white !text-[18px]">
            Price:
          </Text>
          <Text element="span" className="text-white !text-[18px]">
            {price}
          </Text>
        </div>

        <div className="flex justify-between">
          <Text element="span" className="text-white !text-[18px]">
            Starts:
          </Text>
          <Text element="span" className="text-white !text-[18px]">
            {time}
          </Text>
        </div>
      </div>
    </div>
  );
}

export default LaunchpadItem;
