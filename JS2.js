const fun = async () => {
  const seconds = new Date();
  console.log(seconds);

  // First promise
  const solve1 = await new Promise((res, rej) => {
    setTimeout(res, 3000, "hello1");
  });
  console.log(new Date(), solve1);

  // Second promise starts only after the first one resolves
  const solve2 = await new Promise((res, rej) => {
    setTimeout(res, 3000, "hello2");
  });
  console.log(new Date(), solve2);

  // Third promise starts only after the second one resolves
  const solve3 = await new Promise((res, rej) => {
    setTimeout(res, 3000, "hello3");
  });
  console.log(new Date(), solve3);

  // Fourth promise starts only after the third one resolves
  const solve4 = await new Promise((res, rej) => {
    setTimeout(res, 3000, "hello4");
  });
  console.log(new Date(), solve4);
};

fun();
