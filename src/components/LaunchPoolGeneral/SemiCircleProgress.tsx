import AnimatedNumber from 'components/AnimatedNumber/AnimatedNumber';
import { useMemo } from 'react';
import { formatDisplay } from 'util/format-number';

interface SemiCircleProps {
  strokeWidth?: number;
  diameter?: number;
  percentage: number;
}

export default function SemiCircleProgress({
  strokeWidth = 40,
  diameter = 354,
  percentage,
}: SemiCircleProps) {
  const coordinateForCircle = diameter / 2;
  const radius = (diameter - 2 * strokeWidth) / 2;
  const radius1 = radius + (strokeWidth / 2 - 1);
  const radius2 = radius - (strokeWidth / 2 - 1);

  const circumference = Math.PI * radius;
  const circumference1 = Math.PI * radius1;
  const circumference2 = Math.PI * radius2;

  const percentageValue = useMemo(() => {
    if (percentage < 0) {
      return 0;
    }

    return percentage >= 100 ? 100 : percentage;
  }, [percentage]);

  const semiCirclePercentage = -percentageValue * (circumference / 100);

  return (
    <div className="relative">
      <svg
        width={diameter}
        height={diameter / 2}
        style={{ overflow: 'hidden' }}
      >
        <defs>
          <linearGradient id="circle-gradient">
            <stop offset="4.58%" stopColor="#FFE249"></stop>
            <stop offset="19.82%" stopColor="#B7FF5C"></stop>
            <stop offset="38.23%" stopColor="#82EFFF"></stop>
          </linearGradient>
        </defs>

        <circle
          cx={coordinateForCircle}
          cy={coordinateForCircle}
          r={radius}
          fill="none"
          stroke="#242424"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          style={{
            strokeDashoffset: circumference || 0,
          }}
        />

        <circle
          cx={coordinateForCircle}
          cy={coordinateForCircle}
          r={radius}
          fill="none"
          stroke="url(#circle-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          style={{
            strokeDashoffset: semiCirclePercentage || 0,
            transition:
              'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s',
          }}
        />

        <circle
          cx={coordinateForCircle}
          cy={coordinateForCircle}
          r={radius1}
          fill="none"
          stroke="#fff"
          strokeWidth={2}
          strokeDasharray={circumference1}
          style={{
            strokeDashoffset: circumference1 || 0,
          }}
        />
        <circle
          cx={coordinateForCircle}
          cy={coordinateForCircle}
          r={radius2}
          fill="none"
          stroke="#fff"
          strokeWidth={2}
          strokeDasharray={circumference2}
          style={{
            strokeDashoffset: circumference2 || 0,
          }}
        />

        <line
          x1={coordinateForCircle - radius1}
          y1={diameter / 2}
          x2={coordinateForCircle - radius1 - 2 + strokeWidth}
          y2={diameter / 2}
          stroke="#fff"
          strokeWidth={4}
        />

        <line
          x1={coordinateForCircle + radius2}
          y1={diameter / 2}
          x2={coordinateForCircle + radius2 - 2 + strokeWidth}
          y2={diameter / 2}
          stroke="#fff"
          strokeWidth={4}
        />
      </svg>

      {/* <div className="absolute bottom-2 right-1/2 translate-x-[50%] translate-y-[50%]">
        <AnimatedNumber
          animateToNumber={`${formatDisplay(percentage, {
            decimalToShow: 2,
            minimumDecimalToShow: 2,
          })}%`}
          fontStyle={undefined}
          configs={undefined}
        />
      </div> */}
    </div>
  );
}
