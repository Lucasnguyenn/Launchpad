import { Container } from 'components/Container';
import { Text } from 'components/Text';
import EcosystemItem from './EcosystemItem';
import OverallStructure from './OverallStructure';
import classNames from 'classnames';
import styles from './index.module.scss';
import Achieved from './Achieved';
import Carousel from 'components/Carousel/Carousel';
import { useRef } from 'react';
import Slider from 'react-slick';
import { ecosystemItem, partners } from 'contants/dataEcosystem';
import { breakpointItem } from 'contants/common';

function Ecosystem() {
  const ref = useRef<Slider>(null);
  return (
    <div className={classNames(styles.background_image, 'py-[80px]')}>
      <Container>
        <Text
          type="heading2-bold"
          element="h2"
          className="text-[#369CC6] text-center"
        >
          Ecosystem Components
        </Text>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:w-[1000px] mx-auto gap-[50px] mt-[40px]">
          {ecosystemItem.map((item: any, index: number) => (
            <EcosystemItem key={index} {...item} />
          ))}
        </div>

        <OverallStructure />
        <Achieved />

        <div className={classNames(`relative mt-10`)}>
          <Text
            type="heading2-bold"
            element="h2"
            className="text-[#369CC6] text-center"
          >
            Our Partners
          </Text>
          <div className="mt-10">
            <Carousel
              ref={ref}
              dots={false}
              settings={{
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: false,
                autoplay: true,
                autoplaySpeed: 4000,
                responsive: [
                  {
                    breakpoint: breakpointItem.md,
                    settings: {
                      slidesToScroll: 4,
                      slidesToShow: 4,
                    },
                  },
                  {
                    breakpoint: breakpointItem.sm,
                    settings: {
                      slidesToScroll: 2,
                      slidesToShow: 2,
                    },
                  },
                ],
              }}
            >
              {partners.map((item, index) => {
                return (
                  <div className="h-full !flex items-center">
                    <img
                      className="!w-[200px]"
                      key={index}
                      src={item.image}
                      alt=""
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Ecosystem;
