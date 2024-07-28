import projectItem from 'images/background/project-item.png';
import polyogon from 'images/details/polygon-rounded.png';
import iconBell from 'images/icon/icon-bell.png';
import iconHeart from 'images/icon/icon-heart.svg';
import { Link } from 'react-router-dom';

interface ProjectItemType {
  title?: string;
  sub?: string;
  link?: string;
}
const initSub =
  'Nền tảng cá nhân hóa lộ trình học dựa trên tương tác người dùng được tạo ra với mong muốn giúp người dùng gia tăng thêm kiến thức, khả năng tự học, tạo động lực học cho mỗi cá nhân.';
const initTitle = 'XPATH';

export function ProjectItem(props: ProjectItemType) {
  const { title = initTitle, sub = initSub, link } = props;

  return (
    <div className="relative group h-[478px] w-full container-hover rounded-[18px] flex flex-col justify-between">
      <img src={projectItem} alt="projectItem" className="absolute inset-0" />

      <div className="relative flex justify-end items-center gap-[9px] mt-[6px] px-[22px]">
        <div className="w-[40px] h-[36px] bg-[#58A1A0] rounded-[7px] box-shadow6 flex items-center justify-center">
          <img
            src={iconBell}
            alt="iconBell"
            className="w-[30px] aspect-[30/27]"
          />
        </div>

        <div className="w-[40px] h-[36px] bg-[#58A1A0] rounded-[7px] box-shadow6 flex items-center justify-center">
          <img
            src={iconHeart}
            alt="iconBell"
            className="w-[26px] aspect-[26/22]"
          />
        </div>
      </div>

      <div className="absolute bottom-0 animated-hover xpath w-full">
        <div className="group-hover:hidden pt-[13px] pl-[23px] pb-[15px] pr-[15px]">
          <div className="flex items-center gap-[8px] mb-[13px]">
            <img
              src={polyogon}
              alt="polyogon"
              className="w-[29px] aspect-square rounded-full box-shadow2"
            />
            <h2 className="text-[24px] text-white">{title}</h2>
          </div>
          <p className="text-[15px] font-anek text-white">{sub}</p>
        </div>

        <Link
          to={link ?? ''}
          className="hidden group-hover:flex absolute cursor-pointer inset-0 w-full h-full items-center justify-center"
        >
          <h4 className="text-[40px] text-white">SHOW MORE</h4>
        </Link>
      </div>
    </div>
  );
}
