import { Text } from 'components/Text';

interface ProjectItemType {
  data: {
    id: number;
    title: string;
    thumbnail: string;
    cap: string;
    tags: string[];
    content: string;
    raised: string;
    investors: number;
  };
}

export function ProjectItem({ data }: ProjectItemType) {
  const { id, title, thumbnail, cap, tags, content, raised, investors } = data;

  return (
    <div className="min-w-[300px] w-full h-[500px] p-[16px] sm:p-[20px] rounded-2xl border border-solid border-[--white-10] flex flex-col gap-[12px]">
      <div className="relative w-full">
        <img
          src={thumbnail}
          alt="thumbnail"
          className="w-full h-[228px] rounded-[20px] object-cover object-center"
        />

        <div className="absolute rounded-[10px] bg-[--background-dark] text-white top-5 left-5 p-2.5">
          <Text type="body2">{cap}</Text>
        </div>
      </div>

      <Text type="heading4-semi-bold" className="text-primary md:!text-[30px]">
        {title}
      </Text>

      <div className="flex flex-wrap gap-[10px]">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="rounded-[10px] p-[10px] text-white bg-[#3D3D3D]"
          >
            <Text type="body2">{tag}</Text>
          </div>
        ))}
      </div>

      <Text type="heading6-bold" className="!font-normal">
        {content}
      </Text>

      <div className="mt-auto w-full pt-[10px] border-t border-solid border-white flex justify-between">
        <Text type="body1" className="!font-light">
          {raised} raised
        </Text>
        <Text type="body1" className="!font-light">
          {investors} investors
        </Text>
      </div>
    </div>
  );
}
