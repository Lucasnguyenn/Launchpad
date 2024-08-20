export const navigatorItem = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Our ecosystem',
    link: '/ecosystems',
  },
  {
    label: 'Our Projects',
    link: '/projects',
  },
  {
    label: 'Launchpad',
    link: '/launchpad',
  },
];



export const breakpointItem = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
};

// Footer Information

export const shortcutItem = [
  { label: 'Event', link: '/network' },
  // { label: "Activities", link: "/network/actitvities" },
  { label: 'Courses', link: '/academy' },
  { label: 'News', link: '/news' },
];

export const helpfulLinkItem = [
  { label: 'About us', link: '#' },
  { label: 'Term & Condition', link: '#' },
  { label: 'Privacy Policy', link: '#' },
  { label: 'FAQs', link: '#' },
];

export const infoItem = {
  location: 'Tầng 3, Showtime D12 Giảng Võ, Quận Ba Đình, Vietnam',
  phone: '0977442363',
  email: 'Lucas@hubglobal.io',
};

export const daysInWeek = [
  'Chủ nhật',
  'Thứ 2',
  'Thứ 3',
  'Thứ 4',
  'Thứ 5',
  'Thứ 6',
  'Thứ 7',
];

export const genderOptions = [
  {
    label: 'Nam',
    value: 'male',
  },
  {
    label: 'Nữ',
    value: 'female',
  },
  {
    label: 'Khác',
    value: 'others',
  },
];

export const dailyLoginDate = [
  {
    date: 'T2',
    point: null,
    check: true,
  },
  {
    date: 'T3',
    point: null,
    check: true,
  },
  {
    date: 'T4',
    point: null,
    check: true,
  },
  {
    date: 'T5',
    point: null,
    check: true,
  },
  {
    date: 'T6',
    point: null,
    check: true,
  },
  {
    date: 'T7',
    point: null,
    check: true,
  },
  {
    date: 'CN',
    point: null,
    check: true,
  },
];

export const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export enum ActivityStatus {
  ALL = 'all' as any,
  PREPARE = 'prepare' as any,
  REGISTER = 'register' as any,
  ONGOING = 'ongoing' as any,
  END = 'end' as any,
}
