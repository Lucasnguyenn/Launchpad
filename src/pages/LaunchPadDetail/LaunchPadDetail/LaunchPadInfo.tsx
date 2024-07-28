import { Link } from 'react-router-dom';
import { tokenInfoData } from './info-data';

export function LaunchPadInfo() {
  return (
    <ul className="box-shadow9 px-[28px] py-[6px] pt-[39px]">
      {tokenInfoData.map((item, idx) => {
        return (
          <li
            key={idx}
            className={`flex justify-between items-center mb-[18px] ${
              idx === tokenInfoData.length - 1
                ? ''
                : 'border-b border-transparent14'
            }`}
          >
            <p className="text-transparent11 text-[18px] md:text-[25px] font-cabin">
              {item.title}
            </p>
            <Link
              to={'/'}
              target="_blank"
              className="text-transparent11 text-[18px] md:text-[25px] font-anek"
            >
              {item.sub}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
