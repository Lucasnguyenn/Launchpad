import * as material from 'images/ecosystem/index';

function Galery() {
  return (
    <div className="w-full 2xl:w-[1440px] mx-auto h-full bg-[#000]">
      <div className="max-w-[1229px] mx-auto">
        <div className="font-syne font-bold text-[#fff] text-[4rem] text-center mb-[50px]">
          <h2>Some images gatherd here</h2>
        </div>
        <div className="flex justify-between flex-wrap">
          <img
            className="max-h-[143px] border-2 rounded-[5px]"
            src={material.r1_1}
            alt="r1"
          />
          <img
            className="max-h-[143px] border-2 rounded-[5px]"
            src={material.r1_2}
            alt="r1"
          />
          <img
            className="max-h-[143px] border-2 rounded-[5px]"
            src={material.r1_3}
            alt="r1"
          />
          <img
            className="max-h-[143px] border-2 rounded-[5px]"
            src={material.r1_4}
            alt="r1"
          />
          <img
            className="max-h-[143px] border-2 rounded-[5px]"
            src={material.r1_5}
            alt="r1"
          />
        </div>

        {/* galery r2 */}

        <div className="flex-wrap flex justify-between mt-[35px]">
          <img
            className="max-h-[143px] border-2 rounded-[5px]"
            src={material.r2_1}
            alt="r1"
          />
          <img
            className="max-h-[143px] border-2 rounded-[5px]"
            src={material.r2_2}
            alt="r1"
          />
          <img
            className="max-h-[143px] border-2 rounded-[5px]"
            src={material.r2_3}
            alt="r1"
          />
          <img
            className="max-h-[143px] border-2 rounded-[5px]"
            src={material.r2_4}
            alt="r1"
          />
          <img
            className="max-h-[143px] border-2 rounded-[5px]"
            src={material.r2_5}
            alt="r1"
          />
        </div>

        <div className="flex-wrap flex justify-between mt-[35px]">
          <img
            className="max-h-[143px] border-2 rounded-[5px]"
            src={material.r3_1}
            alt="r1"
          />
          <img
            className="max-h-[143px] border-2 rounded-[5px]"
            src={material.r3_2}
            alt="r1"
          />
          <img
            className="max-h-[143px] border-2 rounded-[5px]"
            src={material.r3_3}
            alt="r1"
          />
          <img
            className="max-h-[143px] border-2 rounded-[5px]"
            src={material.r3_4}
            alt="r1"
          />
          <img
            className="max-h-[143px] border-2 rounded-[5px]"
            src={material.r3_5}
            alt="r1"
          />
        </div>
        {/* 4 */}
        <div className="flex-wrap flex justify-between mt-[35px]">
          <img
            className="max-h-[143px] border-2 rounded-[5px]"
            src={material.r4_1}
            alt="r1"
          />
          <img
            className="max-h-[143px] border-2 rounded-[5px]"
            src={material.r4_2}
            alt="r1"
          />
          <img
            className="max-h-[143px] border-2 rounded-[5px]"
            src={material.r4_3}
            alt="r1"
          />
          <img
            className="max-h-[143px] border-2 rounded-[5px]"
            src={material.r4_4}
            alt="r1"
          />
          <img
            className="max-h-[143px] border-2 rounded-[5px]"
            src={material.r4_5}
            alt="r1"
          />
        </div>
        {/* 5 */}
        <div className="flex-wrap flex justify-between mt-[35px]">
          <img
            className="max-h-[143px] border-2 rounded-[5px]"
            src={material.r5_1}
            alt="r1"
          />
          <img
            className="max-h-[143px] border-2 rounded-[5px]"
            src={material.r5_2}
            alt="r1"
          />
          <img
            className="max-h-[143px] border-2 rounded-[5px]"
            src={material.r5_3}
            alt="r1"
          />
          <img
            className="max-h-[143px] border-2 rounded-[5px]"
            src={material.r5_4}
            alt="r1"
          />
          <img
            className="max-h-[143px] border-2 rounded-[5px]"
            src={material.r5_5}
            alt="r1"
          />
        </div>
      </div>
    </div>
  );
}

export default Galery;
