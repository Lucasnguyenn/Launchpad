import iconDiscord from 'images/icon/icon-discord.svg';
import iconTelegram from 'images/icon/icon-telegram.svg';
import iconTwitter from 'images/icon/icon-twitter.svg';
import useSWR from 'swr';

export function getImageSocialLink(id: number) {
  if (id === 1) {
    return iconTwitter;
  }

  if (id === 2) {
    return iconDiscord;
  }

  return iconTelegram;
}

async function fetcher(url: string) {
  return fetch(url).then((res) => res.json());
}
export function useTokenomicData() {
  const data = useSWR(
    // 'https://gateway.simplymuch.vn/launchpad/api/projects/TREK/tokenomics',
    'http://194.163.190.102:7070/api/projects/TREK/tokenomics',
    fetcher
  );

  return {
    data: data.data,
  };
}
