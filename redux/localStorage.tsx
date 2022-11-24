const loadState = (): UserCredentials | undefined => {
  if (typeof window !== 'undefined') {
    try {
      const serializedState = localStorage.getItem('userCredentials');
      if (serializedState === null) {
        return undefined;
      } else {
        return JSON.parse(serializedState);
      }
    } catch (err) {
      return undefined;
    }
  } else {
    return undefined;
  }
};

export default loadState;
