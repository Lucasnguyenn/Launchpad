import { Spring, animated } from '@react-spring/web';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useInView } from 'react-intersection-observer';
import './animated-number.scss';

const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// utils
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const usePrevious = (value: any) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  if (typeof ref.current === 'undefined') {
    return '0';
  }

  return ref.current;
};

// lib
const AnimatedNumberComponent = ({ animateToNumber, fontStyle, configs }) => {
  const keyCount = useRef(0);
  const numberDivRef = useRef(null);

  const [numberHeight, setNumberHeight] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  const prevNumber = usePrevious(animateToNumber);
  const animateToNumberString = animateToNumber;
  const prevNumberString = prevNumber;

  const [animateToNumbersArr, prevNumberersArr] = useMemo(() => {
    const tmpAnimateToNumbersArr = Array.from(
      animateToNumberString,
      (x: any) => {
        if (x === ',') {
          return x;
        }

        if (x === '.') {
          return x;
        }

        if (x === '%') {
          return x;
        }

        return Number(x);
      }
    );

    const tmpPrevNumberersArr = Array.from(prevNumberString, (x) => {
      if (x === ',') {
        return x;
      }

      if (x === '.') {
        return x;
      }

      if (x === '%') {
        return x;
      }

      return Number(x);
    });

    if (tmpAnimateToNumbersArr.length !== tmpPrevNumberersArr.length) {
      return [tmpAnimateToNumbersArr, tmpAnimateToNumbersArr];
    }

    return [tmpAnimateToNumbersArr, tmpPrevNumberersArr];
  }, [animateToNumberString, prevNumberString]);

  const animations = useMemo(
    () =>
      animateToNumbersArr.map((__, index) => {
        if (typeof prevNumberersArr[index] !== 'number') {
          return 0;
        }

        const animationHeight =
          -1 * (numberHeight * Number(prevNumberersArr[index]));
        return animationHeight;
      }),
    [animateToNumbersArr, numberHeight, prevNumberersArr]
  );

  const animations1 = useMemo(
    () =>
      animateToNumbersArr.map((__, index) => {
        if (typeof prevNumberersArr[index] !== 'number') {
          return 0;
        }

        const animationHeight =
          -1 * (numberHeight * Number(animateToNumbersArr[index]));
        return animationHeight;
      }),
    [animateToNumbersArr, prevNumberersArr, numberHeight]
  );

  const setConfig = useCallback((configs, number, index) => {
    if (typeof configs === 'function') {
      return configs(number, index);
    }
    return configs
      ? configs[getRandomIntInclusive(0, configs.length - 1)]
      : undefined;
  }, []);

  useEffect(() => {
    const height = (numberDivRef.current as any).getClientRects()?.[0]?.height;
    if (height) {
      setNumberHeight(height);
    }
  }, [animateToNumber, fontStyle]);

  return (
    <>
      {numberHeight !== 0 && (
        <div ref={ref} className="animated-container flex">
          {inView && animateToNumber < 0 && <div style={fontStyle}>-</div>}
          {inView &&
            animateToNumbersArr.map((n, index) => {
              if (typeof n === 'string') {
                return (
                  <div key={index} style={{ ...fontStyle }} className="credit">
                    {n}
                  </div>
                );
              }

              return (
                <div
                  key={index}
                  style={{
                    height: numberHeight,
                    overflow: 'hidden',
                  }}
                >
                  <Spring
                    key={`${keyCount.current++}`}
                    from={{
                      transform: `translateY(${animations[index]}px)`,
                    }}
                    to={{
                      transform: `translateY(${animations1[index]})`,
                    }}
                    config={setConfig(configs, n, index)}
                  >
                    {(props) =>
                      NUMBERS.map((number, i) => (
                        <animated.div
                          key={i}
                          style={{ ...fontStyle, ...props }}
                          className="credit"
                        >
                          {number}
                        </animated.div>
                      ))
                    }
                  </Spring>
                </div>
              );
            })}
        </div>
      )}

      <div
        ref={numberDivRef}
        style={{ position: 'absolute', top: -9999, ...fontStyle }}
        className="credit"
      >
        {0}
      </div>
    </>
  );
};

const AnimatedNumber = React.memo(
  AnimatedNumberComponent,
  (prevProps, nextProps) => {
    return (
      prevProps.animateToNumber === nextProps.animateToNumber &&
      prevProps.fontStyle === nextProps.fontStyle
    );
  }
);

export default AnimatedNumber;
