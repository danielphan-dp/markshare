// get from local storage
export const getFromLocalStorage = (key) => {
  const auth = localStorage.getItem(key);
  if (auth) {
    return JSON.parse(auth);
  }
  return null;
};

// save to local storage
export const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// remove from local storage
export const removeFromLocalStorage = () => {
  const auth = localStorage.getItem('auth');
  if (auth) {
    localStorage.removeItem('auth');
  }
};
