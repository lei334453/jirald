/**
 *
 * @param {*} func 防抖 最后执行
 * @param {*} delay
 * @returns
 */
// const debounce = (func, delay) => {
//     let timeout;
//     return (...param) => {
//         if (timeout) {
//             clearTimeout(timeout);
//         }
//         timeout = setTimeout(function() {
//             func(...param);
//         }, delay);
//     }
// }
// const log = debounce(() => log('CALL'), 5000)
// log()
// log()
// log()
import { useState, useEffect } from "react";
export const useDebounce = (value, delay) => {
  const [debounce, setDebounceValue] = useState(value);
  useEffect(() => {
    //value 变化设置一个定时器
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    //每次在上一个useeffect处理完以后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounce;
};
