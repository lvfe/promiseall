// function MinCoinChange(coins) {
//   var coins = coins;
//   //MinCoinChange接收Coin类的参数，代表问题中的面额。对于美国的硬币系统而言，他们是[1,5,10,25]。我们可以传入任何参数
//   var cache = {};
//   //cache用来缓存计算结果，避免重复计算

//   this.makechange = function (amount) {
//     //递归函数，解决找零问题
//     var me = this;
//     if (!amount) {
//       return [];
//     } //若amount不为正，返回空函数
//     if (cache[amount]) {
//       return cache[amount];
//     } //检查cache缓存，如果结果已经计算过，那么就直接返回结果，否则继续计算

//     var min = []; //min用来存储amount的找零结果

//     for (var i = 0; i < coins.length; i++) {
//       var coin = coins[i]; //依次尝试每种面额
//       var newAmount = amount - coin; //计算新的找零面额

//       if (newAmount >= 0) {
//         var newMin = me.makechange(newAmount); //计算新的找零面额的找零方案
//       }

//       if (
//         newAmount >= 0 &&
//         (newMin.length < min.length - 1 || !min.length) &&
//         (newMin.length || !newAmount)
//       ) {
//         //依次判断newAmount是否有效，新的最小硬币数是否是最优解，与此同时newMin和newAmout的值是否是合理的值，如果以上判断都成立，意味着有一个更优的答案，比方说找零一个五美分，可以给五个一美分，也可以给一个五美分，而一个五美分是最优解。
//         min = newMin.concat(coin);
//         console.log("new Min" + min + "for" + amount);
//       }
//     }
//     return (cache[amount] = min);
//   };
// }
// var minCoinChange = new MinCoinChange([1, 5, 10, 25]);
// let rest = minCoinChange.makechange(36);
// console.log(rest);

// function add(...args) {
//   var a = [...args];
//   var _add = function (...internalArgs) {
//     if (internalArgs.length == 0) {
//       return a.reduce((sum, i) => sum + i, 0);
//     } else {
//       a = [...a, ...internalArgs];
//       return _add; //递归调用
//     }
//   };
//   return _add;
// }

// console.log("add", add(2)(1)(3)());
// console.log("add", add(1, 2, 3)(4)());
// function add1(args) {
//   var sum = args;
//   var _add = function (initargs) {
//     if (initargs == undefined) return sum;
//     sum = sum + initargs;
//     return _add;
//   };
//   _add.toString = function () {
//     return sum;
//   };
//   return _add;
// }
// console.log("add1", add1(2)(1)(3)());

// new Array(10).fill(1).forEach((_, index) => {
//   setTimeout(() => {
//     console.log(index);
//   }, 1000 * index);
// });

// var a = [];
// new Array(11).fill(1).forEach((_, index) => {
//   a.push(
//     new Promise((resolve) => {
//       setTimeout(() => {
//         console.log(index);
//         return resolve(index);
//       }, 1000 * index);
//     })
//   );
// });

// Promise.all(a).then((res) => {
//   console.log(res);
// });

var sleep = (index) =>
  new Promise((res) => {
    setTimeout(res, 1000 * index);
  });
new Array(10).fill().forEach((...args) => {
  // const [, index] = args;
  // console.log([...arguments]);
  // (async function () {
  //   {
  //     await sleep(index);
  //     console.log(index);
  //   }
  // })();
});
// (async function () {
//   {
//     await sleep();
//     console.log(i);
//   }
// })();
// const rxjs = require("rxjs");
// const op = require("rxjs/operators");
// // console.log(op);
// const { of, pipe, interval } = rxjs;
// const { retry, retryWhen, timeout, map, catchError } = op;
// let i = 0;
// let subscription = interval(1000)
//   .pipe(
//     map((_) => {
//       console.log(i++);
//       throw new Error();
//     }),
//     retry(10),
//     catchError(() => {
//       console.log(i);
//       subscription.unsubscribe();
//     })
//   )
//   .subscribe();

// function add(a, b) {
//   console.log(Array.prototype.slice.call(arguments));
//   console.log([...arguments]);
// }
// console.log(add(5, 6));
function all() {
  let promis = [];
  let a = (i) => {
    return new Promise((res, rej) => {
      res(i);
    });
  };

  promis = new Array(3).fill(1).map((...args) => {
    const [, index] = args;
    return a(index);
  });
  let count = [];
  return new Promise((res) => {
    for (let i = 0; i < promis.length; i++) {
      promis[i].then((res1) => {
        count.push(res1);
        if (count.length == promis.length) {
          res(count);
        }
      });
    }
  });
}
all().then((res) => console.log(res));
module.exports = all;