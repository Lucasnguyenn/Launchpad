import earth from 'images/background/earth.png';
import iconShare from 'images/icon/icon-share.svg';

export function HeroEcosystem() {
  return (
    <section className="relative min-h-[calc(989px-120px)] mt-[76px] mb-[120px]">
      <div className="max-w-[1202px] 2xl:max-w-full px-4 mx-auto 2xl:mx-[141px]">
        <div className="h-full w-full flex items-center gap-[16px] mb-[120px]">
          <h1 className="font-inter text-[4.717rem] font-bold text-[#fff]">
            HUB
          </h1>

          <div className="relative overflow-hidden max-h-[113.21px]">
            <ul className="animate-text-slide">
              <li className="font-inter text-[4.717rem] font-bold bg-bgMedia text-linear1 w-fit">
                NETWORK
              </li>
              <li className="font-inter text-[4.717rem] font-bold text-[#D8658B]">
                MEDIA
              </li>
              <li className="font-inter text-[4.717rem] font-bold text-[#44AACC]">
                ACADEMY
              </li>
              <li className="font-inter text-[4.717rem] font-bold text-[#1E657D]">
                GLOBAL LAUNCHPAD
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="font-syne text-5xl mb-[38px]">Who we are</h2>

          <p className="font-anek font-normal text-xl mb-[43px]">
            <span className="text-[#559D9C]">UniHUB Ecosystem</span> {''}
            is a comprehensive startup support ecosystem that helps incubate and
            support Start-ups and SMEs in the early stages.
            <br />
            <br />
            We believe that finding potential projects must start from the
            conception moment. This will be the most effective way to find
            future unicorns especially web3 projects.
          </p>

          <button className="h-[58px] flex items-center gap-[12px] rounded-[24px] pl-[18px] pr-[29px] box-shadow14 border-t border-solid border-white">
            <img src={iconShare} alt="iconShare" />
            <span className="text-[20px] font-anek font-[500] translate-y-[4px]">
              Take a look
            </span>
          </button>
        </div>
      </div>

      {/* earth */}
      <div className="hidden md:block absolute bottom-0 right-0">
        <img src={earth} alt="earth" />
      </div>
    </section>
  );
}
