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
      className={`flex items-center max-w-[1000px] m-auto justify-between mb-[60px] ${
        id % 2 === 0 ? '' : 'flex-row-reverse'
      }`}
    >
      <img src={image} alt="" className="max-w-[300px]" />
      <div className="flex flex-col gap-4">
        <Text type="heading2-bold" element="h2" className="text-[#369CC6]">
          {title}
        </Text>
        <ul className="flex flex-col gap-4 w-[550px] ml-4">
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
    <div className="mt-[40px] border border-solid rounded-[20px] border-[#FFFFFF1A] p-[40px] bg-[#12121299]">
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
