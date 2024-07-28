import * as material from 'images/ecosystem/index';

function OveralStructure() {
  return (
    <div className="w-full 2xl:w-[1440px] h-full bg-[#000] pt-28 mx-auto">
      <div>
        <div className="font-syne text-[#fff] text-[4rem] font-bold px-[1rem]">
          Overall Structure
        </div>
        <div className="font-anek text-[1.875rem] text-justify px-[1rem] pt-[3rem]">
          In early stage, the Start-Ups are supported by HUB Network, Hub Media,
          Hub Academy. Then, the Launchpad will support potential project to
          raise capital towards higher milestones
        </div>
      </div>
      <div className="flex px-[1rem] min-[1920px]:px-[2rem] h-[500px] mx-auto justify-between mt-5">
        <div className="flex items-center">
          <figure className="relative max-w-[200px]">
            <img
              className="h-auto max-w-[200px]"
              src={material.overallstructure}
              alt="overallstructure"
            />
            <figcaption className="text-center text-[1.875rem] font-cabin font-semibold absolute m-auto text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              HUB NETWORK
            </figcaption>
          </figure>
        </div>
        <img src={material.right} alt="right" className="max-w-[35px]" />
        <div className="flex flex-col items-center justify-between">
          <figure className="relative max-w-[200px]">
            <img
              className="h-auto max-w-[200px]"
              src={material.overallstructure}
              alt="overallstructure"
            />
            <figcaption className="text-center text-[1.875rem] font-cabin font-semibold absolute m-auto text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              Hub Media
            </figcaption>
          </figure>
          <img className="max-w-[57px]" src={material.bottom} alt="bottom" />
          <div className="px-[3rem] py-[2.3rem] bg-rectangleEcosytem rounded-xl font-cabin text-[1.875rem] max-w-[200px]">
            Startups
          </div>
          <img className="max-w-[57px]" src={material.top} alt="top" />
          <figure className="relative max-w-[200px]">
            <img
              className="h-auto max-w-[200px]"
              src={material.overallstructure}
              alt="overallstructure"
            />
            <figcaption className="text-center text-[1.875rem] font-cabin font-semibold absolute m-auto text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              Hub Academy
            </figcaption>
          </figure>
        </div>
        <img
          src={material.right_mul}
          alt="right-button"
          className="max-w-[150px]"
        />
        <div className="flex items-center">
          <div className="px-[3rem] py-[0.9rem] bg-rectangleEcosytem rounded-xl font-cabin text-[1.875rem] max-w-[200px] text-center">
            Best Startups
          </div>
        </div>
        <img
          src={material.right_mul_2}
          alt="right-icon"
          className="max-w-[80px]"
        />
        <div className="flex flex-col justify-center">
          <figure className="relative w-[300px]">
            <img
              className="h-[119px] w-[300px]"
              src={material.overallstructure}
              alt="overallstructure"
            />
            <figcaption className="text-center text-[1.875rem] font-cabin font-semibold absolute m-auto text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              Hub Global Launchpad
            </figcaption>
          </figure>
          <div className="px-[3rem] py-[2.3rem] bg-rectangleEcosytem rounded-xl font-cabin text-[1.875rem] max-w-[300px] text-center mt-6">
            VCs & Big Corps
          </div>
        </div>
      </div>
    </div>
  );
}

export default OveralStructure;
