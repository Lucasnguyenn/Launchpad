import { Link } from 'react-router-dom';
import { officialLinkData } from './info-data';

export function OfficialLink() {
  return (
    <div className="px-4 md:px-10">
      <h3 className="text-[24px] leading-8 font-semibold mb-2">
        Official Links
      </h3>

      <ul className="flex flex-col md:flex-row md:items-center gap-2">
        {officialLinkData.map((item, idx) => {
          return (
            <li key={idx} className="w-fit">
              <Link
                to={item.to}
                className="flex items-center gap-1 px-[10px] py-[6px] rounded-lg bg-[#1C1C1C] opacity-90 hover:opacity-100"
                target="_blank"
              >
                <div className="w-4 h-4">
                  <img src={item.icon} alt="ICON" className="w-full h-full" />
                </div>

                <p className="text-sm text-gray1">{item.title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
