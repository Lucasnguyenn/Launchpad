import right from 'images/explore/explore-right.png';
import global from 'images/explore/global.png';
import bgNumber from 'images/explore/overview.png';

export function Welcome() {
  return (
    <section className="relative max-w-[1202px] 2xl:max-w-full px-4 mx-auto 2xl:mx-[128px]">
      {/* hero */}
      <div className="min-h-[calc(100vh-107px)] mb-[40px] grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="order-2 xl:order-1 flex flex-col gap-[12px]">
          <img src={global} alt="global" />

          <div className="flex flex-col items-center justify-center gap-[32px] md:mx-[24px]">
            <p className="text-[24px] leading-[1.66] text-white font-anek font-semibold">
              A web3 fundraising platform on Polygon for start-ups in various
              industries
            </p>

            <button className="group box-shadow4 h-[60px] px-[20px] hover:bg-black transition-all">
              <p className="translate-y-[5px] text-[28px] leading-[31px] text-white group-hover:text-[#1FBEE5] font-anek transition-all">
                APPLY FOR LAUNCHPAD
              </p>
            </button>
          </div>
        </div>

        <div className="order-1 xl:order-2 w-full flex justify-center">
          <img
            src={right}
            alt="right"
            className="md:w-[613px] aspect-[796/681]"
          />
        </div>
      </div>

      {/* Overview Project */}
      <div className="relative mb-[52px] md:mb-[100px] overview flex flex-col gap-[12px] md:flex-row justify-center md:items-center md:gap-[346px] 2xl:min-h-[200px]">
        <div className="flex flex-col md:items-center gap-[4px] md:gap-[25px]">
          <h2 className="text-shadow-3 text-[35px] leading-[50px] text-white font-russo">
            Total projects
          </h2>
          <p className="text-[40px] leading-[55px] text-white font-anek font-bold">
            1.000.000
          </p>
        </div>

        <div className="flex flex-col md:items-center gap-[4px] md:gap-[25px]">
          <h2 className="text-shadow-3 text-[35px] leading-[50px] text-white font-russo">
            % Project launched
          </h2>
          <p className="text-[40px] leading-[55px] text-white font-anek font-bold">
            80%
          </p>
        </div>

        <img
          src={bgNumber}
          alt="bgNumber"
          className="absolute w-full hidden md:block -z-10"
        />
      </div>
    </section>
  );
}
