

export const listenPort = (() => {
  if (process.env.NODE_ENV === "local") {
    return 18090;
  };
  return 28090;
})();