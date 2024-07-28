import {
  BarControllerChartOptions,
  BarElement,
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  CoreChartOptions,
  DatasetChartOptions,
  ElementChartOptions,
  Legend,
  LinearScale,
  PluginChartOptions,
  ScaleChartOptions,
  Title,
  Tooltip,
} from 'chart.js';
import { _DeepPartialObject } from 'chart.js/dist/types/utils';
import { Bar } from 'react-chartjs-2';
import { formatDisplay } from 'util/format-number';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options: _DeepPartialObject<
  CoreChartOptions<'bar'> &
    ElementChartOptions<'bar'> &
    PluginChartOptions<'bar'> &
    DatasetChartOptions<'bar'> &
    ScaleChartOptions<any> &
    BarControllerChartOptions
> = {
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          const label = context.dataset.label || '';
          const formattedValue = context.formattedValue || '';

          return `${label}: ${formattedValue}`;
        },
      },
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
      ticks: {
        min: 0,
        stepSize: 10000000,
        max: 30000000,
        callback: function (value) {
          return formatDisplay(value, { decimalToShow: 0 });
        },
      },
      grid: {
        display: true,
        drawOnChartArea: true,
        drawTicks: true,
        color: 'rgba(255, 255, 255, 0.20)',
      },
    },
  },
};

const fillgap = Array(8).fill('');

const labels = ['0', ...fillgap, '1', ...fillgap, '2', ...fillgap, '3'];

export const data: ChartData<'bar', number[], string> = {
  labels,
  datasets: [
    {
      label: 'Public Round',
      data: [
        3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000,
        3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000,
        3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000,
        3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000,
        3000000, 3000000, 3000000, 3000000, 3000000,
      ],
      backgroundColor: '#FF8956',
    },
    {
      label: 'Liquidity',
      data: [
        1200000, 1200000, 1200000, 1200000, 1200000, 1200000, 1200000, 1200000,
        1200000, 1200000, 1200000, 1200000, 1200000, 1200000, 1200000, 1200000,
        1200000, 1200000, 1200000, 1200000, 1200000, 1200000, 1200000, 1200000,
        1200000, 1200000, 1200000, 1200000, 1200000, 1200000, 1200000, 1200000,
        1200000, 1200000, 1200000, 1200000, 1200000,
      ],
      backgroundColor: '#FF65B8',
    },
    {
      label: 'Investor',
      data: [
        0, 0, 0, 0, 0, 0, 0, 250000, 500000, 750000, 1000000, 1250000, 1500000,
        1750000, 2000000, 2250000, 2500000, 2750000, 3000000, 3000000, 3000000,
        3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000,
        3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000,
      ],
      backgroundColor: '#FFE249',
    },
    {
      label: 'Community Fund*',
      data: [
        973500, 1252275, 1531050, 1809825, 2088600, 2367375, 2646150, 2924925,
        3203700, 3482475, 3761250, 4040025, 4318800, 4597575, 4876350, 5155125,
        5433900, 5712675, 5991450, 6270225, 6549000, 6827775, 7106550, 7385325,
        7664100, 7942875, 8221650, 8500425, 8779200, 9057975, 9336750, 9615525,
        9894300, 10173075, 10451850, 10730625, 11009400,
      ],
      backgroundColor: '#82EFFF',
    },
    {
      label: 'Team',
      data: [
        0, 0, 0, 0, 0, 0, 0, 50000, 100000, 150000, 200000, 250000, 300000,
        425000, 550000, 675000, 800000, 925000, 1050000, 1125000, 1200000,
        1275000, 1350000, 1425000, 1500000, 1575000, 1650000, 1725000, 1800000,
        1875000, 1950000, 2025000, 2100000, 2175000, 2250000, 2325000, 2400000,
      ],
      backgroundColor: '#B7FF5C',
    },
  ],
};

export function StackedChart() {
  return (
    <div>
      <h3 className="text-xl font-medium mb-8">Token Vesting Schedule</h3>

      <div className="md:px-[60px] relative">
        <Bar options={options} data={data} />

        <div className="flex items-center gap-1 justify-end">
          <p className="text-right">Year Post TGE</p>
        </div>
      </div>
    </div>
  );
}
