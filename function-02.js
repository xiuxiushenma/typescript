// 1.函数的定义
function test(name) {
    console.log(name);
}
test('lmz');
//-------------这里有个问题：隐式的any，如果函数参数不设置类型，就是隐式的any---------------
// 注意隐式的any有两个不能用的设置： 设置了隐式的any会报错
//      如果设置："strict": true,   严格模式
//      或者设置："noImplicitAny"   禁止隐式的any  
function say(name) {
    console.log(name);
}
var test1 = function (name) { return name; };
// 4.3 没有返回值
var hello2 = function (name) {
    console.log('hello2', name);
    return undefined;
};
hello2('zfpx');
// 4.4 可选参数
// 在TS中函数的形参和实参必须一样，不一样就要配置可选参数,而且必须是最后一个参数
function test3(name, age) {
    return undefined;
}
// 4.5 默认参数
function ajax(url, method) {
    if (method === void 0) { method = 'GET'; }
    console.log(url, method);
}
ajax('/users');
