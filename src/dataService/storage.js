export const Storage = {
    setTheme,
    getTheme,
    setReview
};

function setTheme(theme) {
    return setItem('theme', theme);
}

function getTheme() {
    return getItem('theme');
}

function setReview(review) {
    const reviews = getItem('reviews') || [];
    reviews.push(review);
  
    setItem('reviews', reviews);
}

function setItem(name, item) {
    return localStorage.setItem(name, JSON.stringify(item));
}

function getItem(name) {
    return JSON.parse(localStorage.getItem(name));
}