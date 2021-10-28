// export function rect (x, y, callback){


export const rect = (x, y, callback) => {
  if (x <= 0 || y <= 0) {
    setTimeout(
      () => callback(new Error("Dimensions need to be positive"), null),
      2000
    );
  } else {
    setTimeout(() => {
      callback(null, {
        message: `Callback is executed rect.js line 11, ${x}, ${y}`,
        parameter: () => 2 * (x + y),
        area: () => x * y,
      });
    }, 2000);
  }
};

// const _rect = rect;
// export { _rect as rect };
