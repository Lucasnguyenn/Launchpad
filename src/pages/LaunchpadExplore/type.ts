export interface ProjectResponseType {
  alias: string;
  chainId: number;
  code: string;
  createdAt: string;
  desc: any;
  endTime: string;
  hardCap: number;
  hardCapPerUser: number;
  id: number;
  initCap: number;
  minSubscription: number;
  name: string;
  price: number;
  softCap: number;
  startTime: string;
  status: string;
  tokenIssue: string;
  tokenIssueName: number;
  tokenIssueTotalSupply: number;
  tokenRaise: string;
  updatedAt: string;
  url: string;
  vestingPercent: number;
}

export interface ProjectResponse {
  project: ProjectResponseType;
  tokenomics: {
    id: number;
    projectId: number;
    stakeHolder: string;
    percent: number;
  }[];
  faqs: {
    id: number;
    projectId: number;
    question: string;
    answer: string;
    order: number;
  }[];
}
