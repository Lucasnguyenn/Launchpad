import iconSort from 'images/icon/icon-sort.svg';
import { useProjectData } from 'pages/LaunchpadExplore/data';
import { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useProjectStore from 'store/project-store';
import { formatDisplay } from 'util/format-number';
import { ProjectResponseType } from './type';

export default function ProjectListTable() {
  const navigation = useNavigate();
  const { data } = useProjectData();
  const setProject = useProjectStore((state) => state.setProject);

  const onChooseProject = useCallback(
    (data: ProjectResponseType) => {
      setProject(data);
      navigation('/hub-ido');
    },
    [navigation, setProject]
  );

  if (!data) {
    return <></>;
  }

  return (
    <div className="overflow-scroll-scrollbar mb-[60px]">
      {/* table */}
      {/* header */}
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="py-[12px]">
              <p className="text-left px-2 text-[20px] leading-[24px] text-white whitespace-nowrap">
                Name
              </p>
            </th>

            <th className="py-[12px]">
              <div className="flex items-center justify-between border-r-[1px]">
                <p className="px-2 text-[20px] leading-[24px] text-white whitespace-nowrap">
                  Network
                </p>

                <button className="px-[6px]">
                  <img src={iconSort} alt="iconSort" />
                </button>
              </div>
            </th>

            <th className="py-[12px]">
              <div className="flex items-center justify-between border-r-[1px]">
                <p className="px-2 text-[20px] leading-[24px] text-white whitespace-nowrap">
                  Initial cap
                </p>

                <button className="px-[6px]">
                  <img src={iconSort} alt="iconSort" />
                </button>
              </div>
            </th>

            <th className="py-[12px]">
              <div className="flex items-center justify-between border-r-[1px]">
                <p className="px-2 text-[20px] leading-[24px] text-white whitespace-nowrap">
                  Status
                </p>

                <button className="px-[6px]">
                  <img src={iconSort} alt="iconSort" />
                </button>
              </div>
            </th>

            <th className="py-[12px]">
              <p className="text-left px-2 text-[20px] leading-[24px] text-white whitespace-nowrap">
                Links
              </p>
            </th>
            <th className="py-[12px]">
              <p className="text-left px-2 text-[20px] leading-[24px] text-white whitespace-nowrap">
                Count down
              </p>
            </th>
            <th className="py-[12px]">
              <p className="text-left px-2 text-[20px] leading-[24px] text-white whitespace-nowrap">
                Sale end in
              </p>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            onClick={() => onChooseProject(data.project)}
            className="table-row-item cursor-pointer after:block"
          >
            <td className="py-[20px]">
              <p className="px-4 whitespace-nowrap text-[20px] text-white">
                {data?.project?.tokenIssueName}
              </p>
            </td>
            <td className="py-[20px]">
              <p className="px-2 whitespace-nowrap text-[20px] text-white">
                Polygon
              </p>
            </td>
            <td className="py-[20px]">
              <p className="px-2 whitespace-nowrap text-[20px] text-white">
                ${formatDisplay(data?.project?.initCap, { decimalToShow: 2 })}
              </p>
            </td>

            <td className="py-[20px]">
              <p className="text-[20px] text-white  text-center px-2 whitespace-nowrap up-coming">
                {data?.project?.status}
              </p>
            </td>
            <td className="py-[20px]">
              <Link
                target="_blank"
                to={data?.project?.url}
                className="underline px-2 whitespace-nowrap text-[20px] text-white"
              >
                {data?.project?.url}
              </Link>
            </td>
            <td className="py-[20px]">
              <p className="truncate px-2 whitespace-nowrap text-[20px] text-white">
                {data?.project?.endTime}
              </p>
            </td>
            <td className="py-[20px]">
              <p className="truncate px-2 whitespace-nowrap text-[20px] text-white">
                {data?.project?.endTime}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
