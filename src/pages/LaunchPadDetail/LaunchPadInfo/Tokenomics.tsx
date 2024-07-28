import { useProjectData } from 'pages/LaunchpadExplore/data';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';

export function Tokenomics() {
  const { data: projectData } = useProjectData();
  const data = projectData?.project;

  const tokenomicData = useMemo(() => {
    if (!data) {
      return [];
    }

    return [
      {
        id: 0,
        title: 'Public sale',
        sub: `10%`,
      },
      {
        id: 1,
        title: 'Private sale',
        sub: `5%`,
      },
      {
        id: 2,
        title: 'Community',
        sub: `40%`,
      },
      {
        id: 3,
        title: 'Team',
        sub: `25%`,
      },
      {
        id: 4,
        title: 'Advisors',
        sub: `5%`,
      },
      {
        id: 5,
        title: 'Treasury',
        sub: `15%`,
      },
    ];
  }, [data]);

  return (
    <ul className="box-shadow10 px-[28px] pt-[39px] py-[6px]">
      {tokenomicData.map((item, idx) => {
        return (
          <li
            key={idx}
            className="flex justify-between items-center border-b border-transparent14 mb-[18px]"
          >
            <p className="text-transparent11 text-[18px] md:text-[25px] font-bold font-cabin">
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
