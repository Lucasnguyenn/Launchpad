import data from 'data.json';
import logoMatic from 'images/logo/logo-matic.svg';

import { isEqual } from 'lodash';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { getImageSocialLink } from './data';

function LaunchPadInfoComponent() {
  return (
    <section className="relative grid grid-cols-1 md:grid-cols-2 md:p-6 rounded-2xl mb-2 overflow-hidden bg-[#010001] md:bg-gray5">
      <div className="relative md:absolute inset-0 w-full h-[190px] md:h-full">

      </div>

      <div className=" w-full p-4 blur-image bottom-0 flex items-center gap-2 md:hidden">
        <img src={logoMatic} alt="IMG" className="w-12 h-12 rounded-full" />

        <div>
          <h4 className="text-[20px] font-semibold text-white">
            {data.info.title}
          </h4>
          <p className="text-sm font-normal text-gray">{data.info.symbol}</p>
        </div>
      </div>

      <article className="bg-transparentLight rounded-2xl p-5 md:p-6 z-10">
        <div className="flex justify-between">
          <div className="hidden md:flex flex-row items-center gap-2">
            <img src={logoMatic} alt="IMG" className="w-12 h-12 rounded-full" />

            <div>
              <h4 className="text-[20px] font-semibold text-white">
                {data.info.title}
              </h4>
              <p className="text-sm font-normal text-gray">
                {data.info.symbol}
              </p>
            </div>
          </div>

          <ul className="hidden md:flex items-center gap-6 self-center pl-10 border-l border-gray9">
            {data.info.socialLinkList.map((item) => {
              return (
                <li key={item.id}>
                  <Link to={item.path} target="_blank">
                    <img src={getImageSocialLink(item.id)} alt={item.title} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hidden md:block w-full h-[1px] bg-white opacity-10 my-6" />

        <p className="text-smtext-white">{data.info.description}</p>
      </article>
    </section>
  );
}

export const LaunchPadInfo = memo(LaunchPadInfoComponent, isEqual);
