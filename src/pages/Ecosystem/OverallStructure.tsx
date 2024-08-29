import { Text } from 'components/Text';
function OverallStructure(props) {
  return (
    <div className="mt-[40px] border border-solid rounded-[20px] border-[#FFFFFF1A] p-[40px] bg-[#12121299]">
      <div className="flex flex-col gap-[20px] max-w-[1000px] mx-auto mb-[60px]">
        <Text
          type="heading2-bold"
          element="h2"
          className="text-[#369CC6] text-center"
        >
          Overall Structure
        </Text>
        <Text
          className="text-[24px] text-center font-light text-[#FFFFFFB2]"
          element="p"
        >
          In early stage, the Start-Ups are supported by HUB Network, Hub Media,
          Hub Academy. Then, the Launchpad will support potential project to
          raise capital towards higher milestones
        </Text>
      </div>
      <img
        className="m-auto"
        src="/images//ecosystem/overStructure.png"
        alt=""
      />
    </div>
  );
}

export default OverallStructure;
