import { IRoadMapModel } from '../model/roadmapModel';

interface InfoDataProps {
  hashtag: string;
  id: number;
  title: string;
  isSubtitle?: boolean;
  content?: string[];
  imageSrc?: any;
  isImg?: boolean;
  isul?: boolean;
  ulList?: string[];
  subTitleList?: {
    hashtag: string;
    id: number;
    title: string;
    isSubtitle?: boolean;
    content?: string[];
    isul?: boolean;
    ulList?: string[];
    isContentNext?: boolean;
    contentNext?: string[];

    isBoldHeader?: true;
    boldHeaderContent?: { title: string; value: string }[];
  }[];
  isContentNext?: boolean;
  contentNext?: string[];
}

export const InfoData: InfoDataProps[] = [
  {
    id: 1,
    hashtag: 'summary',
    title: 'Summary',
    isSubtitle: true,
    content: [''],
    subTitleList: [
      {
        hashtag: '001',
        id: 1,
        title: '',
        isSubtitle: true,
        content: [''],
        isBoldHeader: true,
        boldHeaderContent: [
          {
            title: '',
            value: '',
          },
          {
            title: '',
            value: '',
          },
          {
            title: '',
            value: '',
          },
        ],
        isContentNext: true,
        contentNext: [''],
      },
      {
        hashtag: '002',
        id: 2,
        title: '',
        isSubtitle: true,
        content: [''],
      },
      {
        hashtag: '003',
        id: 3,
        title: '',
        isSubtitle: true,
        content: [''],
        isul: true,
        ulList: [''],
      },
    ],
  },
  {
    id: 2,
    hashtag: 'allocation',
    title: 'Allocation and Distribution',
    content: [''],
    isul: true,
    ulList: [''],
  },
];

export const ourTeamData = [];

export const Q3Data = [];

export const Q4Data = [];

export const Q1Data = [];

export const officialLinkData = [];

export const dataFakeRoadmap: IRoadMapModel[] = [];

export const partnerData = [];

export const grantBy = [];

export const launchpadCapData = [
  {
    id: 0,
    title: 'Soft Cap',
    sub: '500.000 MATIC',
  },
  {
    id: 1,
    title: 'Hard Cap',
    sub: '1.000.000 MATIC',
  },
  {
    id: 2,
    title: 'Hard Cap per user',
    sub: '10.000 MATIC',
  },
  {
    id: 3,
    title: 'Price',
    sub: '1 MATIC/TREK',
  },
  {
    id: 4,
    title: 'Vesting',
    sub: '100% at TGE',
  },
  {
    id: 5,
    title: 'Minimum subscription',
    sub: '50 MATIC',
  },
];

export const tokenInfoData = [
  {
    id: 0,
    title: 'Token name',
    sub: 'TREK Exchange',
  },
  {
    id: 1,
    title: 'Token Symbol',
    sub: 'TREK',
  },
  {
    id: 2,
    title: 'Total Supply',
    sub: '100.000.000',
  },
];

export const tokenomicData = [
  {
    id: 0,
    title: 'Soft Cap',
    sub: '500.000 MATIC',
  },
  {
    id: 1,
    title: 'Hard Cap',
    sub: '1.000.000 MATIC',
  },
  {
    id: 2,
    title: 'Hard Cap per user',
    sub: '10.000 MATIC',
  },
  {
    id: 3,
    title: 'Price',
    sub: '1 MATIC/TREK',
  },
  {
    id: 4,
    title: 'Vesting',
    sub: '100% at TGE',
  },
  {
    id: 5,
    title: 'Minimum subscription',
    sub: '50 MATIC',
  },
];

export const faqData = [
  {
    id: 0,
    title: 'Which network is the token sale occurring on?',
    content: '',
  },
  {
    id: 1,
    title: 'Will this be a token Subscription Model?',
    content: '',
  },
  {
    id: 2,
    title: 'Does it have a Hard cap?',
    content: '',
  },
  {
    id: 3,
    title: 'Does it have a Hard cap per User?',
    content: '',
  },
  {
    id: 4,
    title: 'Where can I read more on Tokenomics?',
    content: '',
  },
];
