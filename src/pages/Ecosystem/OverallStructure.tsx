import { Text } from 'components/Text';
function OverallStructure(props) {
  return (
    <div className="mt-[40px] border border-solid rounded-[20px] border-[#FFFFFF1A] sm:p-[40px] p-[20px] bg-[#12121299]">
      <div className="flex flex-col gap-[20px] max-w-[1000px] mx-auto mb-[60px]">
        <Text
          type="heading2-bold"
          element="h2"
          className="text-[#369CC6] sm:text-center text-left"
        >
          Overall Structure
        </Text>
        <Text
          className="sm:text-[24px] text-[20px] sm:text-center text-left font-light text-[#FFFFFFB2]"
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
