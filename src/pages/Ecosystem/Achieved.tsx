import { Text } from 'components/Text';
import { achievedItem } from 'contants/dataEcosystem';

interface IAchievedItem {
  id: number;
  image: string;
  title: string;
  description: any;
}

const AchievedItem = ({ id, image, title, description }: IAchievedItem) => {
  return (
    <div
      className={`flex items-center max-lg:flex-col max-lg:gap-8 max-w-[1000px] m-auto justify-between mb-[60px] ${
        id % 2 === 0 ? '' : 'flex-row-reverse'
      }`}
    >
      <Text
        element="h2"
        className="text-[#369CC6] lg:hidden text-[40px] font-bold max-sm:!text-[24px]"
      >
        {title}
      </Text>
      <img src={image} alt="" className="sm:max-w-[300px] max-w-[200px]" />
      <div className="flex flex-col gap-4">
        <Text
          type="heading2-bold"
          element="h2"
          className="text-[#369CC6] max-lg:hidden"
        >
          {title}
        </Text>
        <ul className="flex flex-col gap-4 max-w-[550px] ml-4">
          {description.map((it: any, index: number) => {
            return (
              <li key={index} className="text-[20px] leading-8">
                • {it}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

function Achieved(props) {
  return (
    <div className="mt-[40px] border border-solid rounded-[20px] border-[#FFFFFF1A] lg:p-[40px]  p-[20px] bg-[#12121299]">
      <Text
        type="heading2-bold"
        element="h2"
        className="text-[#369CC6] text-center mb-[40px]"
      >
        What we achieved?
      </Text>

      {achievedItem.map((item, index: number) => {
        return <AchievedItem id={index} key={index} {...item} />;
      })}
    </div>
  );
}

export default Achieved;
