export const createApiCache = apiFnc => {
  let cacheData = null;
  return {
    get: async () => {
      if (!cacheData) {
        cacheData = await apiFnc();
        console.log(cacheData);
        return cacheData;
      } else {
        return cacheData;
      }
    },
    modifyCache(newCache = null) {
      cacheData = newCache;
    },
    syncGet: () => {
      return cacheData;
    }
  };
};
