import { Text } from 'components/Text';
interface IEcosystemItem {
  image: string;
  title: string;
  description: string;
}

function EcosystemItem({ image, title, description }: IEcosystemItem) {
  return (
    <div className="flex flex-col gap-[20px] lg:w-[480px] w-full h-full m-auto p-[20px] border border-solid border-[#FFFFFF1A] rounded-[20px] hover:bg-[#FFFFFF1A] cursor-pointer">
      <img src={image} alt="" />
      <div className="flex flex-col gap-[10px]">
        <Text
          type="heading3-bold"
          element="h2"
          className="text-[#369CC6] !text-[30px]"
        >
          {title}
        </Text>
        <Text className="text-[18px] font-normal leading-8">{description}</Text>
      </div>
    </div>
  );
}

export default EcosystemItem;
