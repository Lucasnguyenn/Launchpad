import {
  ArcElement,
  ChartData,
  Chart as ChartJS,
  CoreChartOptions,
  DatasetChartOptions,
  DoughnutControllerChartOptions,
  ElementChartOptions,
  Legend,
  PluginChartOptions,
  Tooltip,
} from 'chart.js';
import { _DeepPartialObject } from 'chart.js/dist/types/utils';
import { NoteChart } from 'components/NoteChart/NoteChart';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data: ChartData<'doughnut', any[], any> = {
  labels: [],
  datasets: [
    {
      data: [
        { id: 'Community Fund*', value: 59 },
        { id: 'Team', value: 17 },
        { id: 'Investor', value: 10 },
        { id: 'Public Round', value: 10 },
        { id: 'Liquidity', value: 4 },
      ],
      backgroundColor: ['#82EFFF', '#B7FF5C', '#FFE249', '#FF8956', '#FF65B8'],
      borderWidth: 2,
      borderColor: '#0D0D0D',
    },
  ],
};
const options: _DeepPartialObject<
  CoreChartOptions<'doughnut'> &
    ElementChartOptions<'doughnut'> &
    PluginChartOptions<'doughnut'> &
    DatasetChartOptions<'doughnut'> &
    DoughnutControllerChartOptions
> = {
  plugins: {
    tooltip: {
      callbacks: {
        label: (context) => {
          const titleId = (context.raw as { id: string }).id;
          const formattedValue = context.formattedValue || '';

          return `${titleId}: ${formattedValue}%`;
        },
      },
    },
  },
};

function NoteChartItem({
  item,
  color = '#82EFFF',
}: {
  item: { id: string; value: number };
  color?: string;
}) {
  return (
    <div className="flex flex-row items-center gap-3">
      <div className="flex-shrink-0">
        <NoteChart color={color} />
      </div>

      <div className="flex flex-col gap-[6px]">
        <p className={`text-sm`} style={{ color: color }}>
          {item.id}
        </p>
        <p>{item.value}%</p>
      </div>
    </div>
  );
}

export function DoughnutChart() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around gap-10">
      <div className="w-full md:w-[320px] md:h-[320px] flex justify-center">
        <Doughnut data={data} options={options} />
      </div>

      <div className="self-start md:self-center grid grid-cols-2 gap-x-3 lg:gap-x-[64px] gap-y-[32px]">
        {data.datasets[0].data.map((item, idx) => {
          return (
            <NoteChartItem
              key={idx}
              item={item}
              color={data.datasets[0].backgroundColor?.[idx]}
            />
          );
        })}
      </div>
    </div>
  );
}
