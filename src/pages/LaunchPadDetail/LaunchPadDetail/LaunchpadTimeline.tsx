import cx from 'classnames';
import dayjs from 'dayjs';
import iconTimeline from 'images/details/icon-timeline.png';
import { useProjectData } from 'pages/LaunchpadExplore/data';
import { useMemo } from 'react';

export function LaunchpadTimeline() {
  const { data } = useProjectData();

  const timeData = useMemo(() => {
    if (!data?.project) {
      return {
        startTime: '',
        endTime: '',
      };
    }

    return {
      startTime: dayjs(data.project.startTime).format('MMMM DD, YYYY HH:mmA'),
      endTime: dayjs(data.project.endTime).format('MMMM DD, YYYY HH:mmA'),
    };
  }, [data?.project]);

  return (
    <section className="relative px-4 max-w-[1202px] 2xl:max-w-full mx-auto 2xl:mx-[128px] pt-[70px] mb-[160px]">
      <h2 className="font-russo text-[40px] leading-[54px] text-white explore-title mb-[41px]">
        TIMELINE
      </h2>

      <div className="relative grid grid-cols-1 md:grid-cols-4 items-center gap-4 md:gap-0 w-[calc(100%+40px)]">
        <div className="flex flex-col items-start md:items-center gap-[8px] md:gap-[24px]">
          <p className="text-[28px] text-shadow-2 whitespace-nowrap">
            START TIME
          </p>
          <div className="hidden w-full relative md:flex items-center justify-center">
            <img
              src={iconTimeline}
              alt="iconTimeline"
              className="w-[103px] aspect-square"
            />

            <div
              className={cx(
                `absolute h-[3px] bg-[#99E5FF] -z-10 w-1/2 translate-x-1/2`
              )}
            />
          </div>
          <p className="text-[18px] whitespace-nowrap">
            {timeData.startTime} UTC
          </p>
        </div>

        {/* endtime */}
        <div className="flex flex-col items-start md:items-center gap-[8px] md:gap-[24px]">
          <p className="text-[28px] text-shadow-2 whitespace-nowrap">
            END TIME
          </p>
          <div className="hidden w-full relative md:flex items-center justify-center">
            <img
              src={iconTimeline}
              alt="iconTimeline"
              className="w-[103px] aspect-square"
            />

            <div className={cx(`absolute h-[3px] bg-[#99E5FF] -z-10 w-full`)} />

            <div className={cx(`absolute h-[3px] bg-[#99E5FF] -z-10 w-full`)} />
          </div>
          <p className="text-[18px] whitespace-nowrap">
            {timeData.endTime} UTC
          </p>
        </div>

        {/* CALCULATING */}
        <div className="flex flex-col items-start md:items-center gap-[8px] md:gap-[24px]">
          <p className="text-[28px] text-shadow-2 whitespace-nowrap">
            CALCULATING
          </p>
          <div className="hidden w-full relative md:flex items-center justify-center">
            <img
              src={iconTimeline}
              alt="iconTimeline"
              className="w-[103px] aspect-square"
            />

            <div className={cx(`absolute h-[3px] bg-[#99E5FF] -z-10 w-full`)} />
          </div>
          <p className="text-[18px] whitespace-nowrap">
            {timeData.endTime} UTC
          </p>
        </div>

        {/* TOKEN */}
        <div className="flex flex-col items-start md:items-center gap-[8px] md:gap-[24px]">
          <p className="text-[28px] text-shadow-2 whitespace-nowrap">
            TOKEN DISTRIBUTOR
          </p>
          <div className="hidden w-full relative md:flex items-center justify-center">
            <img
              src={iconTimeline}
              alt="iconTimeline"
              className="w-[103px] aspect-square"
            />

            <div
              className={cx(
                `absolute h-[3px] bg-[#99E5FF] -z-10 w-1/2 -translate-x-1/2`
              )}
            />
          </div>

          <p className="text-[18px] whitespace-nowrap">
            {timeData.endTime} UTC
          </p>
        </div>
      </div>
    </section>
  );
}
