const promise = new Promise((res, rej) => {
  let id = setTimeout(res, 3000, "hello");
  clearTimeout(id);
});
const promise1 = new Promise((res, rej) => {
  let id =  setTimeout(res, 3000, "hello");
  clearTimeout(id);
});
const promise2 = new Promise((res, rej) => {
  let id = setTimeout(res, 3000, "hello");
  clearTimeout(id);
});
const promise3 = new Promise((res, rej) => {
  let id = setTimeout(res, 3000, "hello");
  clearTimeout(id);
});
const fun = async () => {
  const seconds = new Date();
  console.log(seconds);

  const solve = await promise1.then((e) => e);
  const solve1 = await promise2.then((e) => e);
  const solve2 = await promise3.then((e) => e);
  const solve3 = await promise.then((e) => e);
  setTimes(() => new Date());
  console.log(times);
  console.log(solve);
}; 
fun() 

