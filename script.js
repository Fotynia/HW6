
//   logArguments
// написати функцію-декоратор logArguments(fn), 
// яка приймає на вхід функцію і додає можливість 
// логувати всі аргументи, передані у функцію-аргумент.
// function logArguments(before, after, fn) => (...args) => after(f(...before(...args)))
//     const function = ('зірка', 'місяць') => {
//         console.dir({'зірка', 'місяць'});
//         return ['зірка', 'місяць'];    
//     };
//     const before = (...args) => {
//         console.log('before');
//         return args;
//         };
//     const after = res => {
//         console.log('after');
//         return res;
//     }
// const logArguments = log(before, after, func);
// const res = logArguments(s, o);
// console.dir({ res,
//     func: func.length,
//     logArguments: logArguments.length
// });


// validate
// Вам необхідно написати функцію-декоратор validate(fn, validator), 
// яка приймає на вхід функцію і додає можливість перевіряти аргументи,
//  передані у функцію fn, на відповідність заданому validator.
//  Якщо аргументи не проходять перевірку, то декоратор має викидати виняток.
// const validate = function(fn) {
//     return function(...validator) {
//    if (validator.length != fn.length) {
//     throw new Error( 'Надсилайте лише необхідну кількість параметрів');
//    }
//    const validArgs = validator.filter(validator => Number.isInteger(validator));
//     if (validArgs.length < fn.length) {
//       throw new TypeError('Аргумент не може бути нецілим числом');
//     }
//     return fn(...validator);
//   }
// }
//   let add = function(s,t) {
//     return s + t;
//   }
//   add = validate(add);


// retry
// Вам необхідно написати функцію-декоратор 
// retry(fn, maxAttempts), 
// яка приймає на вхід функцію і додає можливість 
// викликати функцію з максимальною кількістю спроб
// //  у разі помилки та повертає результат останнього виклику.
// function withRetry(fn, n) {
//     return function retry(arg) {
//         return new Promise((resolve, reject) => {
//             for (let i = 0; i < n; i++) {
//                 fn(arg)
//                     .then(resolve)
//                     .catch(() => {
//                         if (i === n - 1) {
//                             reject();
//                         }
//                     });
//             }
//         });
//     };
//     }