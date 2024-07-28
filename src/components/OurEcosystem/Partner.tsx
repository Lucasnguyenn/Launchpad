import fpt from 'images/footer/fpt.png';
import kyber from 'images/footer/kyber.png';
import rikkei from 'images/footer/rikkei.png';
import vina from 'images/footer/vina.png';

function Partner() {
  return (
    <section className="relative max-w-[1202px] 2xl:max-w-full px-4 mx-auto 2xl:mx-[128px]">
      <h2 className="font-syne font-bold text-[#fff] text-[4rem] mb-[42px] mt-[84px]">
        Our partners
      </h2>

      <div className="marquee gap-[82px] mb-[73px]">
        {[1, 2].map((item, idx) => {
          return (
            <div
              key={idx}
              className={`${
                idx === 1
                  ? 'flex flex-col md:marquee__content'
                  : 'hidden md:marquee__content'
              }  items-center gap-[82px]`}
            >
              <div className="w-[184px] aspect-[184/115]">
                <img src={rikkei} alt="rikkei" className="w-full h-full" />
              </div>
              <div className="w-[173px] aspect-[173/123]">
                <img src={fpt} alt="fpt" className="w-full h-full" />
              </div>
              <div className="w-[205px] aspect-[205/99]">
                <img src={kyber} alt="kyber" className="w-full h-full" />
              </div>
              <div className="w-[268px] aspect-[268/109]">
                <img src={vina} alt="vina" className="w-full h-full" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Partner;
