import axios from 'axios';

//TODO ref
// export const baseUrl = 'http://194.163.190.102:7070/api';
export const baseUrl = 'http://localhost:7070';

interface AffiliateType {
  projectId: string;
  refCode: string;
  userId: string;
}

export const YourReferral = {
  createAffiliate: function (address: string) {
    const options = {
      headers: { 'Content-Type': 'application/json' },
    };
    return axios.post<AffiliateType>(
      `${baseUrl}/api/user-projects`,
      {
        projectCode: 'TREK',
        userId: address,
      },
      options
    );
  },
};
