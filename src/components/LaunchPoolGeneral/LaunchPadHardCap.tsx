import { launchpadCapData } from 'pages/LaunchPadDetail/LaunchPadDetail/info-data';
import { Link } from 'react-router-dom';

export function LaunchPadHardCap() {
  return (
    <ul className="box-shadow10 px-[28px] pt-[39px] py-[6px]">
      {launchpadCapData.map((item, idx) => {
        return (
          <li
            key={idx}
            className={`flex justify-between items-center mb-[18px] ${
              idx === launchpadCapData.length - 1
                ? ''
                : 'border-b border-transparent14'
            }`}
          >
            <p className="text-transparent11 text-[18px] md:text-[25px] font-bold font-cabin">
              {item.title}
            </p>
            <Link
              to={'/'}
              target="_blank"
              className="text-transparent11 font-anek text-[18px] md:text-[25px]"
            >
              {item.sub}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
