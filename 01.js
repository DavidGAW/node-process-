//process 全局变量 process.stdin \process.stdout 应用他们
// 在控制台做个小demo 控制台字符动画

var arr =[];//每个成员作为一帧；

arr[arr.length]=`
╭~~~╮
(o^.^o)
`;
arr[arr.length]=`
╭~~~╮
(o@.@o) 
`;
arr[arr.length]=`
╭~~~╮
(o~.~o)
`;
arr[arr.length]=`
╭ ﹌╮
(o'.'o)
`;
var fps =5;
var current =0;
var render = () => {
    //将当前控制台清空（2种方法吧）
    //1、这种方法还是有点不太友好；
    // var height =process.stdout.getWindowSize()[1];
    // for(var i=0; i<height;i++){
    //     process.stdout.write('\r\n');
    // }
    // 2、这种不错  也不知道为啥
    process.stdout.write('\033[2J');
    process.stdout.write('\033[0f');

    //输出新内容
    if(current === arr.length){
        current=0;
    }
    process.stdout.write( arr[current++] );
};
setInterval(render,1000 / fps);
