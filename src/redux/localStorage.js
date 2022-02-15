export const loadState = () => {
  try {
    const serialState = localStorage.getItem('userCredentials');
    if (serialState === null) {
      return undefined;
    }
    return JSON.parse(serialState);
  } catch (err) {
    return undefined;
  }
};
