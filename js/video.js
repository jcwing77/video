/**
 *弹幕程序入口
 *
 */
document.body.onload = game;
// 创建一组变量保存对应数据

// 1.1 视频元素
var videoElement;
// 1.2 视频外div
var videoDiv;
// 1.3 二个画布
var canvas1; //弹幕
var canvas2; //视频
// 1.4 二个画笔
var ctx1;
var ctx2; 

// 1.5 画布宽度
var canvasWidth;
var canvasHeigh;
// 1.6 上一帧执行时间、二帧之间时间差
var lastTime;
var deltaTime;
// 1.7 创建变量保存弹幕文字类
var data;
// 1.8:创建变量保存 输入框元素
var msgInput;
// 游戏入口函数
function game(){
    // console.log(1);
    init();
    gameLoop();
 
}

// 初始化数据
function init(){
    // 2.1 初始化对应元素
    // 2.2 二帧之间时间差
    lastTime = Date.now();
    deltaTime = 0;
    // 2.3 视频元素以及外层div
    // 2.4 将视频追加div，div追加body
    // 2.5 添加二个属性 src 1.mp4
    //     div隐藏
    videoElement = document.createElement("video");
    videoElement.src = "res/1.mp4";
		
		// 新增
		videoElement.autoplay = true;
		videoElement.muted = true;

    videoDiv = document.createElement("div");
    videoDiv.setAttribute("style","display:none");
 
    videoDiv.appendChild(videoElement);
    document.body.appendChild(videoDiv);
    // 2.6 播放视频
    videoElement.play();
    // 2.7 获取画布，画笔，画布宽度
    canvas1 = document.getElementById("canvas1");
    canvas2 = document.getElementById("canvas2");
    ctx1 = canvas1.getContext("2d");
    ctx2 = canvas2.getContext("2d");
    canvasWidth = canvas1.width;
    canvasHeigh = canvas1.height;
//     console.log(ctx1);
//     console.log(ctx2);
//     console.log(canvasWidth +":"+canvasHeigh);
//     console.log(2);
    // 2.8初始化创建弹幕中文字对象
    // 2.9调用弹幕中文字对象初始化方法
    data = new dataObj();
    data.init();
    // 2.10获取输入框元素
    msgInput = document.getElementById("msg");
    // 2.11绑定事件keyup
     msgInput.addEventListener("keyup",inputDate,false);
}

// 使用定时器循环弹幕中的内容
function gameLoop(){
    // console.log(3);
    // 3.1 创建定时器循环执行gameLoop
    requestAnimationFrame(gameLoop);
    // 3.2 保存上一帧时间
    var now = Date.now();
    // 3.3 保存二帧之间时间差
    deltaTime = now - lastTime;
    lastTime = now;
    // 3.4 如果当前二帧之间时间差超过40等于40
    if(deltaTime >40) deltaTime = 40;
    // 3.5 在屏幕中间绘制视频元素 300-240
    var x= 800/2-320/2;
    var y =600/2-240/2;
    // 3.6:绘制图片
    ctx2.drawImage(videoElement,x,y);
    // 3.6.1：清除画布
    ctx1.clearRect(0,0,canvasWidth,canvasHeigh);
    // 3.7：绘制弹幕文字
    data.draw();
   
}
/**
 *处理弹幕中输入框事件
 *
 * @param {*} e
 */
function inputDate(e){
    // 4.1：获取当前用户输入键
    var code = e.keyCode;
    // 4.2：当前用户输入回车
    if(code ==13){
    // 4.3：获取当前用户输入内容
    var v = this.value;
    // console.log(4);
    // console.log(v);
    // 4.4：发送弹幕中数据对象
    data.addMes(v);
    // 4.5：清空
    this.value = "";
}
}
