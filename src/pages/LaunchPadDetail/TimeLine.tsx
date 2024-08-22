import React, { useRef } from 'react';
import Slider from 'react-slick';
import { Text } from 'components/Text';
import classNames from 'classnames';
import styles from './index.module.scss';
import { Container } from 'components/Container';
import { breakpointItem } from 'contants/common';
import { SliderProps, Timeline } from 'contants/dataLaunchpad';
import Carousel from 'components/Carousel/Carousel';
const TimeLineSlider: React.FC<SliderProps> = ({ id, date, text }) => {
  return (
    <div className="h-[300px] flex flex-col justify-between px-[20px] border-x border-solid border-white">
      <div>
        <Text className=" text-white !text-[100px]">{id}</Text>
        <Text className=" text-white">{date}</Text>
      </div>
      <ul>
        {text.map((item: any, index: number) => {
          return (
            <li key={index} className="font-semibold">
              • {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
function TimeLine() {
  const refExpert = useRef<Slider>(null);

  return (
    <div className={classNames(styles.bg_image_timeline)}>
      <Container className="flex flex-col lg:gap-14 gap-10 py-[80px]">
        <div className="flex flex-col lg:gap-14 gap-10">
          <Text
            element="h2"
            className="font-bold !text-[40px] text-[#369CC6] text-center"
          >
            Timeline
          </Text>
          <Carousel
            ref={refExpert}
            actionPosition="default"
            settings={{
              slidesToShow: 5.25,
              slidesToScroll: 5,
              responsive: [
                {
                  breakpoint: breakpointItem.lg,
                  settings: {
                    slidesToScroll: 4,
                    slidesToShow: 4.25,
                  },
                },
                {
                  breakpoint: breakpointItem.md,
                  settings: {
                    slidesToScroll: 3,
                    slidesToShow: 3.25,
                  },
                },
                {
                  breakpoint: breakpointItem.sm,
                  settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2.25,
                  },
                },
              ],
            }}
          >
            {Timeline?.map((item: any, index: number) => {
              return <TimeLineSlider key={index} {...item} />;
            })}
          </Carousel>
        </div>
      </Container>
    </div>
  );
}

export default TimeLine;
