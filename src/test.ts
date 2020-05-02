interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = (function(start: number) {}) as Counter
    counter.interval = 123
    counter.reset = function() {}
    return counter
  }
  
export { getCounter }
// 必须有import或许是export才认为是一个module
// 断言箭头在tsx文件或许是jsx文件中不能被识别
// 类型断言最好使用as