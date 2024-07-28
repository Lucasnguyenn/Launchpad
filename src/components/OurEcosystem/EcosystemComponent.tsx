import ecosystem1 from 'images/ecosystem/ecosystem1.png';

function EcosystemComponent() {
  return (
    <section className="max-w-[1305px] 2xl:max-w-full px-4 mx-auto 2xl:mx-[67px]">
      <h2 className="font-syne text-[#fff] text-[4rem] text-center font-bold mb-[3.375rem]">
        Ecosystem Components
      </h2>

      <div className="grid grid-cols-[minmax(max-content,_300px)] md:grid-cols-[minmax(max-content,_300px)_minmax(max-content,_300px)] lg:grid-cols-[minmax(max-content,_300px)_minmax(max-content,_300px)_minmax(max-content,_300px)_minmax(max-content,_300px)] items-center justify-center gap-[34px]">
        <div className="shadow-lg backdrop-blur-md bg-rectangleEcosytem group max-w-[300px] h-[418px] p-[1.625rem] rounded-[1.672rem] hover:bg-[#286276]/[.5] flex flex-col justify-between">
          <h3 className="min-h-[46px] flex items-center justify-center bg-[#1E657D] text-[1.045rem] font-semibold tracking-[-0.016rem] font-cabin rounded-[1.563rem] text-center group-hover:scale-105 ease-in-out duration-500">
            HUB GLOBAL LAUNCHPAD
          </h3>
          <p className="text-[#fff] font-anek text-[1.125rem] pt-[0.938rem]">
            A fundraising launchpad built on #Polygon for founders, VCs and
            individual Investors
          </p>
          <div className=" bg-[#1E657D] rounded-3xl pt-4 group-hover:scale-105 ease-in-out duration-500">
            <img className="rounded-3xl" src={ecosystem1} alt="ecosytem1" />
          </div>
        </div>

        <div className="shadow-lg backdrop-blur-md bg-rectangleEcosytem group max-w-[300px] h-[418px] p-[1.625rem] rounded-[1.672rem] hover:bg-bgMediaEcosytemHover flex flex-col justify-between">
          <h3 className="bg-bgMediaEcosytem w-fit mx-auto px-[1.672rem] py-[0.836rem] text-[1.045rem] font-semibold tracking-[-0.016rem] font-cabin rounded-[1.563rem] text-center group-hover:scale-105 ease-in-out duration-500">
            HUB NETWORK
          </h3>
          <p className="text-[#fff] font-anek text-[1.125rem] pt-[0.938rem]">
            Community of Startup Clubs Members at universities in Vietnam
          </p>
          <div className=" bg-[#6B2D4C] rounded-3xl pt-4 group-hover:scale-105 ease-in-out duration-500">
            <img className="rounded-3xl" src={ecosystem1} alt="ecosytem1" />
          </div>
        </div>

        <div className="shadow-lg backdrop-blur-md bg-rectangleEcosytem group max-w-[300px] h-[418px] p-[1.625rem] rounded-[1.672rem] hover:bg-[#65414D]/[.5] flex flex-col justify-between">
          <h3 className="w-fit mx-auto bg-[#D8658B] px-[1.672rem] py-[0.836rem] text-[1.045rem] font-semibold tracking-[-0.016rem] font-cabin rounded-[1.563rem] text-center group-hover:scale-105 ease-in-out duration-500">
            HUB MEDIA
          </h3>
          <p className="text-[#fff] font-anek text-[1.125rem] pt-[0.938rem]">
            A marketing agency to support startups with a range of campaigns
          </p>
          <div className=" bg-[#76354A] rounded-3xl pt-4 group-hover:scale-105 ease-in-out duration-500">
            <img className="rounded-3xl" src={ecosystem1} alt="ecosytem1" />
          </div>
        </div>

        <div className="shadow-lg backdrop-blur-md bg-rectangleEcosytem group max-w-[300px] h-[418px] p-[1.625rem] rounded-[1.672rem] hover:bg-[#286276]/[.5] flex flex-col justify-between">
          <h3 className="w-fit mx-auto bg-[#4AC] px-[1.672rem] py-[0.836rem] text-[1.045rem] font-semibold tracking-[-0.016rem] font-cabin rounded-[1.563rem] text-center group-hover:scale-105 ease-in-out duration-500">
            HUB ACADEMY
          </h3>
          <p className="text-[#fff] font-anek text-[1.125rem] pt-[0.938rem]">
            Provide incubation programs and support (non) web3 startups
          </p>
          <div className=" bg-[#364D55] rounded-3xl pt-4 group-hover:scale-105 ease-in-out duration-500">
            <img className="rounded-3xl" src={ecosystem1} alt="ecosytem1" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EcosystemComponent;
