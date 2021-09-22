const AuthService = {
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
  }
};

export default AuthService;
