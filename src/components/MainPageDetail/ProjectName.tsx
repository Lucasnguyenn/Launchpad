import polyogon from 'images/details/polygon-rounded.png';

export function ProjectName() {
  return (
    <section className="px-4 max-w-[1202px] 2xl:max-w-full mx-auto 2xl:mx-[128px] flex flex-col-reverse md:flex-row items-center justify-between gap-[60px] mt-[45px] mb-[30px]">
      <div>
        <h2 className="font-russo text-[40px] leading-[54px] text-white explore-title mb-[41px]">
          General Info
        </h2>
        <p className="text-[26px] leading-[1.38] font-anek text-white max-w-[689px] w-full">
          TREK Exchange is a decentralized exchange (DEX) aggregator. We provide
          our traders with superior token prices by analyzing rates across
          thousands of exchanges instantly.
        </p>
      </div>

      <div className="w-[442px] aspect-[442/372] translate-x-[60px] flex-shrink-0 flex justify-center items-center">
        <img
          src={polyogon}
          alt="polyogon"
          className="w-[290px] aspect-square rounded-full box-shadow2"
        />
      </div>
    </section>
  );
}
