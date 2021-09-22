const ApiService = {
  getAccessToken: async function (cookies) {
    let resultToken = '';
    if (!cookies.token) {
      const getTokenResult = await fetch(`/auth/get-token`, {
        method: 'POST',
        body: JSON.stringify({
          mode: 'corse'
        })
      });

      const tokenData = await getTokenResult.json();

      resultToken = tokenData.access_token;

      console.log('get-token');
    } else {
      resultToken = cookies.token;
    }

    return resultToken;
  },
  getLocationSearch: async function (url, accessToken) {
    const fetchResponse = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    const responseData = await fetchResponse.json();

    return responseData;
  }
};

export default ApiService;
