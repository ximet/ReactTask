function saveCookie(key, value) {
    document.cookie = `${key}=${value}`;
}

function loadCookie(key) {
    let cookie = document.cookie;
    cookie = cookie.substring(cookie.indexOf('=') + 1);
    return cookie;
}

function saveToken(token) {
    saveCookie('token', token);
}

function loadToken() {
    return loadCookie('token');
}

export const COOKIE = {
    saveToken,
    loadToken
};
