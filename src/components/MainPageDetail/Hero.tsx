import icPolygon from 'images/avatar/ic-polygon.png';
import bgPolygon from 'images/background/bg-polygon.png';
import icDiscord from 'images/icon/icon-discord.png';
import icTele from 'images/icon/icon-tele.png';
import icTwitter from 'images/icon/icon-twitter.png';
import { useProjectData } from 'pages/LaunchpadExplore/data';
import { formatDisplay } from 'util/format-number';

export function Hero() {
  const { data } = useProjectData();

  return (
    <section className="relative h-[calc(511px-120px)] flex flex-col-reverse justify-between w-full">
      <div className="hero-shadow absolute -top-[120px] inset-0 w-full h-[calc(100%+120px)] -z-10">
        <img
          src={bgPolygon}
          alt="global"
          className="absolute inset-0 w-full h-full shadow-[rgba(0,_0,_0,_0.25)_0px_4px_4px_0px] object-cover -z-30"
        />
      </div>

      {/* content */}
      <div className="relative max-w-[1202px] 2xl:max-w-full px-4 mx-auto 2xl:mx-[128px] z-10 grid grid-cols-1 md:grid-cols-2 items-end">
        <div className="flex flex-col gap-2">
          <img
            src={icPolygon}
            alt="global"
            className="w-[40px] aspect-square md:w-[90px]"
          />

          <p className="text-4xl font-[600] font-inter">TREK EXCHANGE</p>

          <div className="flex flex-col md:flex-row mt-4 gap-9">
            <button className="max-w-[217px] h-[66px] bg-[#141217] shadow-button-paper px-6 rounded-2xl">
              <p className="text-[28px] leading-10 font-varela">White paper</p>
            </button>

            <button className="max-w-[217px] h-[66px] bg-[#32565b] shadow-button-paper px-14 rounded-2xl">
              <p className="text-[28px] leading-10 font-varela">Website</p>
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap items-center justify-end md:items-end gap-[21px]">
          <div className="flex gap-[23px] items-center">
            <img
              src={icTwitter}
              alt="global"
              className="w-[60px] aspect-square"
            />
            <img
              src={icDiscord}
              alt="global"
              className="w-[60px] aspect-square"
            />
            <img src={icTele} alt="global" className="w-[60px] aspect-square" />
          </div>

          <div className="relative flex flex-col px-7 py-6 wrapper-raise min-w-[300px] gap-y-3">
            <p className="text-[40px] leading-[1.35] text-shadow-cap font-russo">
              Hard Cap
            </p>
            <div className="h-[1px] w-[80%] bg-[#D9D9D9]"></div>

            <div>
              <p className="text-[28px] leading-[1.2] font-cabin font-[300]">
                Total raise
              </p>
              <p className="text-[28px] leading-[1.2] font-cabin font-[300]">
                {formatDisplay(data?.project.hardCap || 0, {
                  decimalToShow: 2,
                })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* bottom hero */}
      <div className="bottom-hero absolute bottom-0 translate-y-[calc(239px-66px)] w-full h-[239px] -z-10" />
    </section>
  );
}
