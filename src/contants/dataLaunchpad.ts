export const launchpadItem = [
    {
      background: '/src/images/launchpad/bg-zaya.png',
      logo: '/src/images/launchpad/logo-zaya.png',
      title: 'ZAYA',
      tags: [
        'RWA',
        'DeSci',
      ],
      total: '200,000 USDT',
      symbol:'ZAYA',
      price: '0.2 USDT',
      time:'August 15, 2024 - 10:00 (UTC)'
    },
    {
        background: '/src/images/launchpad/bg-reposwap.png',
        logo: '/src/images/launchpad/logo-reposwap.png',
        title: 'Reposwap',
        tags: [
          'DEX',
        ],
        total: '100,000 USDT',
        symbol:'REPX',
        price: '0.01 USDT',
        time:'September 9, 2024 - 10:00 (UTC)'
      },
      {
        background: '/src/images/launchpad/bg-atr.png',
        logo: '/src/images/launchpad/logo-atr.png',
        title: 'CLAPART',
        tags: [
          'NFT',
          'SocialFi',
        ],
        total: '200,000 USDT',
        symbol:'CLP',
        price: '0.07 USDT',
        time:'September 4, 2024 - 10:00 (UTC)'
      },
      {
        background: '/src/images/launchpad/bg-cask.png',
        logo: '/src/images/launchpad/logo-cask.png',
        title: 'DIGICASK',
        tags: [
          'RWA',
        ],
        total: 'TBA',
        symbol:'DCASK',
        price: 'TBA',
        time:'TBA'
      },
      {
        background: '/src/images/launchpad/bg-utopia.png',
        logo: '/src/images/launchpad/logo-utopia.png',
        title: 'U-topia',
        tags: [
          'MediaFi',
          'Energy',
        ],
        total: '200,000 USDT',
        symbol:'U',
        price: '0.065 USDT',
        time:'August 15, 2024 - 10:00 (UTC)'
      },
      {
        background: '/src/images/launchpad/bg-libera.png',
        logo: '/src/images/launchpad/logo-libera.png',
        title: 'Libera',
        tags: [
          'AI',
        ],
        total: '30,000 USDT',
        symbol:'LIBE',
        price: '0.005 USDT',
        time:'August 15, 2024 - 10:00 (UTC)'
      },
      {
        background: '/src/images/launchpad/bg-reental.png',
        logo: '/src/images/launchpad/logo-reental.png',
        title: 'Reental',
        tags: [
          'RWA',
        ],
        total: '750,000 USDT',
        symbol:'RNT',
        price: '0.15 USDT',
        time:'TBA'
      },
      {
        background: '/src/images/launchpad/bg-nomoex.png',
        logo: '/src/images/launchpad/logo-nomoex.png',
        title: 'ZAYA',
        tags: [
          'CEX',
          'Payment',
        ],
        total: '150,000 USDT',
        symbol:'NOMOX',
        price: '0.08 USDT',
        time:'August 26, 2024 - 10:00 (UTC)'
      },
      {
        background: '/src/images/launchpad/bg-coinpays.png',
        logo: '/src/images/launchpad/logo-coinpays.png',
        title: 'Coinpays',
        tags: [
          'RWA',
          'DeSci',
        ],
        total: '200,000 USDT',
        symbol:'CPY',
        price: '0.1 USDT',
        time:'August 19, 2024 - 10:00 (UTC)'
      },
   
  ];


  export const saleDetail = [
    {
      name: 'Soft Cap',
      price:'50.000 USDT'
    },
    {
      name: 'Hard Cap',
      price:'200.000 USDT'
    },
    {
      name: 'Amount for sale',
      price:'100.000.000 ZAYA'
    },
    {
      name: 'Minimum commit',
      price:'100 USDT'
    },
    {
      name: 'Maximum commit',
      price:'10.000 USDT'
    },
    {
      name: 'Price',
      price:'0.2 USDT'
    },
  ]


  export interface SliderProps {
    id:string
    date:string;
    text:any;
   }  
   export const Timeline:SliderProps[] = [
      {
       id:"01",
       date:"Nov 21, 2024 12:00PM UTC",
       text:["Whitelist Round"],
      },
      {
       id:"02",
       date:"Nov 22, 2024 12:00PM UTC",
       text:["Public Round"],
      },
      {
       id:"03",
       date:"Nov 23, 2024 12:00PM UTC",
       text:["Complete"],
      },
      {
        id:"04",
        date:"Nov 24, 2024 12:00PM UTC",
        text:["Public Round"],
       },
       {
        id:"05",
        date:"Nov 25, 2024 12:00PM UTC",
        text:["Complete"],
       },
    ];


  export const tabLaunchpad = [
      {
        id:1,
        name: 'Launchpad info',
      },
      {
        id:2,
        name: 'Token info',
      },
    ];

  export const contentLaunchpad = [
    {
      contents: [
        {
          id: 1,
          title: 'Number of registration',
        price:'1.000.000 Matic'
        },
        {
          id: 2,
          title: "Vesting",
          price: '10.000 Matic'
        },
        {
          id: 3,
          title: "TGE",
          price: '1.000.000 Matic'
        },
        {
          id: 4,
          title: "Subcription Rate",
          price: '1 USDT = 5 ZAYA'
        },
      ],
    },
    {
      contents: [
        {
          id: 1,
          title: 'Token name',
          price:'Zaya token'
        },
        {
          id: 2,
          title: "Token Symbol",
          price: '10.000 Matic'
        },
        {
          id: 3,
          title: "Token Decimals",
          price: '1.000.000 Matic'
        },
        {
          id: 4,
          title: "Total Supply",
          price: '10.000 Matic'
        },
        {
          id: 5,
          title: "Network",
          price: '1.000.000 Matic'
        },
      ],
    },
    ];