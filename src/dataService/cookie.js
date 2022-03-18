export const Cookie = {
    setToken,
    getToken,
};

function setToken(token) {
    setCookie('token', token);
}

function getToken(token) {
    return getCookie('token');
}

function setCookie(name, value) {
    document.cookie = `${name}=${value}; path=/; max-age=3600`;
}
  
function getCookie(name) {
    const cookies = document.cookie;
    const regExp = new RegExp(
        '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
    );
    const matches = cookies.match(regExp);

    return matches ? decodeURIComponent(matches[1]) : undefined;
}