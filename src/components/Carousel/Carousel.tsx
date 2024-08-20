/* eslint-disable react/display-name */
import { FC, forwardRef, useEffect, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import styles from './index.module.scss';
import classNames from 'classnames';
import Icon from '../Icon';
import { breakpointItem } from 'contants/common';

interface CarouselProps {
  children: any;
  settings?: Settings;
  action?: any;
  className?: string;
  actionPosition?: 'default' | 'center' | 'left';
  themeColor?: 'green' | 'red';
  dots?: boolean;
}

export const SliderArrow: FC<any> = ({
  currentSlide,
  slideCount,
  children,
  ...props
}) => (
  <div {...props} className={classNames(props.className, styles.arrows)}>
    {children}
  </div>
);

const Carousel = forwardRef<Slider, CarouselProps>(
  (
    {
      children,
      className,
      dots = true,
      actionPosition = 'bottom',
      settings = {},
      themeColor = 'default',
      action,
    },
    ref
  ) => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const [showSlide, setShowSlide] = useState(settings.slidesToShow || 1);

    const defaultSettings: Settings = {
      infinite: false,
      arrows: false,
      speed: 500,
      slidesToScroll: 3,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: breakpointItem.lg,
          settings: {
            slidesToScroll: 2,
            slidesToShow: 2,
          },
        },
        {
          breakpoint: breakpointItem.md,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1.6,
          },
        },
        {
          breakpoint: breakpointItem.sm,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1,
          },
        },
      ],
      beforeChange: (currentSlider, nextSlide) => {
        setCurrentSlider(
          Math.ceil(nextSlide / (settings?.slidesToScroll || 3))
        );
      },
      ...settings,
    };

    useEffect(() => {
      const width = window?.innerWidth;
      const val = defaultSettings.responsive?.find(
        (item) => item.breakpoint > width
      );

      setShowSlide(
        (val?.settings as Settings)?.slidesToShow ||
          defaultSettings.slidesToShow ||
          1
      );

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const gridCols = classNames('grid', {
      'grid-cols-1': Math.floor(showSlide) === 1,
      'grid-cols-2': Math.floor(showSlide) === 2,
      'grid-cols-3': Math.floor(showSlide) === 3,
      'grid-cols-4': Math.floor(showSlide) === 4,
      'grid-cols-5': Math.floor(showSlide) === 5,
    });

    return (
      <div className={classNames(styles.carousel_wrapper, className)}>
        {Array.isArray(children) && children.length > showSlide ? (
          <>
            <Slider
              ref={ref}
              className={styles.carousel}
              {...defaultSettings}
              nextArrow={
                <SliderArrow>
                  <Icon color="white" size={32} name="chevron-right" />
                </SliderArrow>
              }
              prevArrow={
                <SliderArrow>
                  <Icon color="white" size={32} name="chevron-left" />
                </SliderArrow>
              }
            >
              {children}
            </Slider>
            <div
              className={classNames(
                styles[`position_${actionPosition}`],
                'flex w-full items-center mt-9 justify-between',
                {
                  [styles.hide]: !dots,
                }
              )}
            >
              <div className={styles.dots_wrapper}>
                {Array.isArray(children) &&
                  [
                    ...Array(
                      Math.ceil(
                        children.length / (settings?.slidesToScroll || 3)
                      )
                    ),
                  ].map((_, index: number) => (
                    <div
                      onClick={() => {
                        (
                          ref as React.MutableRefObject<Slider>
                        )?.current?.slickGoTo(
                          index * (settings?.slidesToScroll || 3)
                        );
                      }}
                      key={index}
                      className={classNames(styles.dot, styles[themeColor], {
                        [styles.active]: currentSlider === index,
                      })}
                    ></div>
                  ))}
              </div>
              {action}
            </div>
          </>
        ) : (
          <div className={gridCols}>{children}</div>
        )}
      </div>
    );
  }
);

export default Carousel;
