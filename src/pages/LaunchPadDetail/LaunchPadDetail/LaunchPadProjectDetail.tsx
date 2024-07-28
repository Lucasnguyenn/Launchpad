import iconDropdown from 'images/icon/dropdown.svg';
import iconIn from 'images/official-link/icon-in.svg';
import iconX from 'images/official-link/icon-x-large.svg';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { grantBy, ourTeamData, partnerData } from './info-data';
export function Ourteam() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="md:mb-10">
      <div className="mb-4 md:mb-2 flex items-center justify-between">
        <h3 className="text-xl font-medium">Team</h3>

        <button
          onClick={() => {
            setIsVisible((v) => !v);
          }}
          className={`w-6 h-6 block md:hidden transition-all ${
            isVisible ? 'rotate-180' : ''
          }`}
        >
          <img src={iconDropdown} alt="dropdown" className="w-full h-full" />
        </button>
      </div>

      {/* mobile */}
      {isVisible && (
        <div className="md:hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4 mb-4 md:mb-0">
          {ourTeamData.map((item, idx) => {
            return (
              <div
                key={`${item.position_name}-${idx}`}
                className="flex flex-col gap-4 border border-[#2B2B2B] p-6 rounded-2xl"
              >
                <div>
                  <p className="text-[20px] md:text-[18px] leading-5 mb-[8px]">
                    {item.name}
                  </p>

                  <p className="text-base md:text-sm text-yellow px-[8px] rounded-full md:rounded-xl border border-yellow w-fit">
                    {item.position_name}
                  </p>
                </div>

                <div className="w-full h-[1px] bg-darkGray" />

                <div className="flex items-center gap-4">
                  <Link target="_blank" to={item.linkedin}>
                    <img src={iconIn} alt="iconIn" />
                  </Link>

                  <Link target="_blank" to={item.twitter}>
                    <img src={iconX} alt="iconX" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4">
        {ourTeamData.map((item, idx) => {
          return (
            <div
              key={`${item.position_name}-${idx}`}
              className="flex flex-col gap-4 border border-[#2B2B2B] p-6 rounded-2xl"
            >
              <div>
                <p className="text-[20px] md:text-[18px] leading-5 mb-[8px]">
                  {item.name}
                </p>

                <p className="text-base md:text-sm text-yellow px-[8px] rounded-full md:rounded-xl border border-yellow w-fit">
                  {item.position_name}
                </p>
              </div>

              <div className="w-full h-[1px] bg-darkGray" />

              <div className="flex items-center gap-4">
                <Link target="_blank" to={item.linkedin}>
                  <img src={iconIn} alt="iconIn" />
                </Link>

                <Link target="_blank" to={item.twitter}>
                  <img src={iconX} alt="iconX" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Partner() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div className="mb-4 md:mb-2 flex items-center justify-between">
        <h3 className="text-xl font-medium ">Partner & Backer</h3>

        <button
          onClick={() => {
            setIsVisible((v) => !v);
          }}
          className={`w-6 h-6 block md:hidden transition-all ${
            isVisible ? 'rotate-180' : ''
          }`}
        >
          <img src={iconDropdown} alt="dropdown" className="w-full h-full" />
        </button>
      </div>

      {isVisible && (
        <ul className="md:hidden grid grid-cols-2 md:grid-cols-5 items-center gap-2 mb-4 md:mb-0">
          {partnerData.map((item, idx) => {
            return (
              <li
                key={idx}
                className={`h-[144px] rounded-2xl bg-gray9 flex justify-center items-center`}
              >
                <img
                  src={item}
                  alt="IMG"
                  className={` ${idx === 6 ? 'h-[26px]' : ''}`}
                />
              </li>
            );
          })}
        </ul>
      )}

      <ul className="hidden md:grid grid-cols-2 md:grid-cols-5 items-center gap-2 mb-10">
        {partnerData.map((item, idx) => {
          return (
            <li
              key={idx}
              className={`h-[144px] rounded-2xl bg-gray9 flex justify-center items-center`}
            >
              <img
                src={item}
                alt="IMG"
                className={` ${idx === 6 ? 'h-[26px]' : ''}`}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export function GrantBy() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div className="mb-4 md:mb-2 flex items-center justify-between">
        <h3 className="text-xl font-medium ">Granted By</h3>

        <button
          onClick={() => {
            setIsVisible((v) => !v);
          }}
          className={`w-6 h-6 block md:hidden transition-all ${
            isVisible ? 'rotate-180' : ''
          }`}
        >
          <img src={iconDropdown} alt="dropdown" className="w-full h-full" />
        </button>
      </div>

      {isVisible && (
        <ul className="md:hidden grid grid-cols-1 items-center gap-10 mb-10">
          {grantBy.map((item, idx) => {
            return (
              <li
                key={idx}
                // className={`h-[145px] rounded-2xl bg-gray9 granted-by flex justify-center items-center`}
              >
                <img
                  src={item}
                  alt="IMG"
                  className={` ${idx === 6 ? 'h-[26px]' : ''}`}
                />
              </li>
            );
          })}
        </ul>
      )}

      <ul className="hidden md:grid grid-cols-2 items-center gap-10 mb-10">
        {grantBy.map((item, idx) => {
          return (
            <li
              key={idx}
              // className={`h-[145px] rounded-2xl bg-gray9 granted-by flex justify-center items-center`}
            >
              <img
                src={item}
                alt="IMG"
                className={` ${idx === 6 ? 'h-[26px]' : ''}`}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

const listAdvisors = [
  {
    id: 1,
    name: 'Loi Luu',
    title: 'Founder of Kyber Network',
  },
  {
    id: 2,
    name: 'Tuan Tran, PhD',
    title:
      'Mathematician and blockchain researcher with 10+ years in global finance, chief economist positions at MELD LAB and IDG Capital Blockchain.',
  },
];

export function Advisors() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="mb-4 md:mb-10">
      <div className="mb-4 md:mb-2 flex items-center justify-between">
        <h3 className="text-xl font-medium ">Angel Investor & Advisor</h3>
        <button
          onClick={() => {
            setIsVisible((v) => !v);
          }}
          className={`w-6 h-6 block md:hidden transition-all ${
            isVisible ? 'rotate-180' : ''
          }`}
        >
          <img src={iconDropdown} alt="dropdown" className="w-full h-full" />
        </button>
      </div>
      {isVisible ? (
        <ul className="flex flex-col md:flex-row justify-between gap-4">
          {listAdvisors.map((item) => (
            <li
              key={item.id}
              className="flex flex-col basis-1/2 border border-solid border-darkGray rounded-2xl  pt-6 pb-4"
            >
              <div className="px-6 flex-1">
                <p className="text-lg pb-2">{item.name}</p>
                <p className="text-pink text-sm pb-4">{item.title}</p>
              </div>
              {/* <div className="w-full h-[1px] bg-darkGray" />
              <div className="flex items-center gap-x-4 mx-6 mt-4">
                <img src={iconIn} alt="iconIn" />

                <img src={iconX} alt="iconX" />
              </div> */}
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}
