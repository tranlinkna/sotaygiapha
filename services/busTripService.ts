import api from './api';

const busTripService = {
  getBusTrips: async () => {
    const url = `/buses`;
    return api.callJson(url);
  },
};

export default busTripService;
