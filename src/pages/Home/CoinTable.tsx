import { useEffect, useState } from 'react';

import { createColumnHelper } from '@tanstack/react-table';
import { Table } from 'components/Table/Table';
import { Text } from 'components/Text';

import { useMediaQuery } from 'usehooks-ts';

type Coin = {
  coin: {
    name: string;
    avatar: string;
  };
  chain: string;
  raise: string;
  status: string;
  ath: string;
};

const coins: Coin[] = [
  {
    coin: {
      name: 'GLAPART',
      avatar: 'images/homepage/coins/clapart.jpg',
    },
    chain: 'BNB Chain',
    raise: '$200K',
    status: 'Upcoming',
    ath: '...',
  },
  {
    coin: {
      name: 'DIGICASK',
      avatar: '/images/homepage/coins/digicask.jpg',
    },
    chain: 'BNB Chain',
    raise: '$1.5M',
    status: 'Completed',
    ath: '10X',
  },
  {
    coin: {
      name: 'REENTAL',
      avatar: '/images/homepage/coins/reental.png',
    },
    chain: 'Arbitrum',
    raise: '$1.5M',
    status: 'Completed',
    ath: '14X',
  },
  {
    coin: {
      name: 'LIBERIA',
      avatar: '/images/homepage/coins/liberia.png',
    },
    chain: 'Polygon',
    raise: '$1.5M',
    status: 'Completed',
    ath: '1.4X',
  },
  {
    coin: {
      name: 'ZAYA',
      avatar: '/images/homepage/coins/zaya.png',
    },
    chain: 'BNB Chain',
    raise: '2X',
    status: 'Completed',
    ath: '2X',
  },
];

const columnHelper = createColumnHelper<Coin>();

const columns = [
  columnHelper.accessor('coin', {
    header: '',
    cell: (row) => (
      <div className="flex items-center pl-5 sm:pl-10 gap-5 h-[50px]">
        <img
          src={row.getValue().avatar}
          alt="coin avatar"
          className="w-[50px] h-[50px] rounded-full object-cover object-center"
        />
        <Text type="heading5-bold" className="text-white">
          {row.getValue().name}
        </Text>
      </div>
    ),
  }),
  columnHelper.accessor('chain', {
    header: () => <Text type="heading5-bold">Chain</Text>,
    cell: (row) => (
      //   <div className='h-[50px] flex justify-center w-full'>
      <Text type="body1" className="text-white !text-[20px]">
        {row.getValue()}
      </Text>
      //   </div>
    ),
  }),
  columnHelper.accessor('raise', {
    header: () => <Text type="heading5-bold">Raise</Text>,
    cell: (row) => (
      <Text type="body1" className="text-white !text-[18px] sm:!text-[20px]">
        {row.getValue()}
      </Text>
    ),
  }),
  columnHelper.accessor('status', {
    header: () => <Text type="heading5-bold">Status</Text>,
    cell: (row) => (
      //   <div className='relative flex items-center justify-center w-full'>
      //     <span className="status rounded-[20px] flex items-center justify-center py-3 px-6">
      <Text type="body1" className="text-white !text-[20px]">
        {row.getValue()}
      </Text>
      //     </span>
      //   </div>
    ),
  }),
  columnHelper.accessor('ath', {
    header: () => <Text type="heading5-bold">ATH</Text>,
    cell: (row) => (
      <Text type="body1" className="text-white !text-[18px] sm:!text-[20px] sm:!font-extrabold">
        {row.getValue()}
      </Text>
    ),
  }),
];

const responsiveColumns = columns.filter(
  (column) => column.accessorKey !== 'chain' && column.accessorKey !== 'status'
);

export const CoinTable = () => {
  const [data, setData] = useState(coins);
  const isMobile = useMediaQuery('(max-width: 600px)');

  useEffect(() => {
    // fetch api here
    setData(coins);
  }, []);

  console.log(responsiveColumns);

  return (
    <div className="mt-7">
      {isMobile ? (
        <Table columns={responsiveColumns} defaultData={data} />
      ) : (
        <Table columns={columns} defaultData={data} />
      )}
    </div>
  );
};
