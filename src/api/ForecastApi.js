const ForecastApi = {
  fetchAccessToken: async () => {
    const url = '/auth/get-token';

    return await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        mode: 'cors'
      })
    });
  },

  fetchLocationSearch: async (url, accessToken) => {
    return await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
  }
};

export default ForecastApi;
