const promise = new Promise((res, rej) => {
   setTimeout(res, 3000, "hello"); //when our code is Execute then it fuction called Automatically
  
});
const promise1 = new Promise((res, rej) => {
  setTimeout(res, 3000, "hello");
 
});
const promise2 = new Promise((res, rej) => {
  setTimeout(res, 3000, "hello");
  
});
const promise3 = new Promise((res, rej) => {
  setTimeout(res, 6000, "hello");
 
});
const fun = async () => {
  const seconds = new Date();
  console.log(seconds);

  const solve = await promise1.then((e) => e);
  const solve1 = await promise2.then((e) => e);
  const solve2 = await promise3.then((e) => e);
  const solve3 = await promise.then((e) => e);
  console.log(new Date());
  console.log(solve);
}; 
fun() 

