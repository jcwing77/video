/** 
 * 弹幕中的文字
*/
// 1:创建弹幕文字类
var dataObj = function(){
console.log(1);
// 1.1创建数组保存多个弹幕中文字
this.rows = [];
// 1.2创建数组保存多个弹幕中文字 X
this.x = [];
// 1.3创建数组保存多个弹幕中文字 y
this.y = [];
// 1.4创建数组保存多个弹幕中文字速度
this.spd = [];
}
// 2：添加初始化方法
dataObj.prototype.init =function(){
    console.log(2);
    // 2.1:初始化二个数值
    // this.rows.push("111");
    // this.rows.push("22");

    // 2.2：循环遍历数组中的元素
    for(var i=0;i<this.rows.length;i++){
    // 2.3：初始值计算x
    this.x[i] =canvasWidth;
    // 2.4：初始值计算y
    this.y[i] = Math.random()*canvasHeigh;
    // 2.5：初始值计算spd
    this.spd[i] = Math.random()*0.017+0.003;
}
console.log(this.x);
console.log(this.y);
console.log(this.spd);
}
// 3：添加绘制方法
dataObj.prototype.draw =function(){
    // console.log(3);
    
    // 3.1：保存画笔状态值
    ctx1.save();
    // 3.2：设置弹幕中文字大小
    ctx1.font = "39px SimHei"
    // 3.3：设置字体颜色
    ctx1.fillStyle = "red";
    // 3.4：循环获取数组中每个弹幕中文字
    for(var i=0; i<this.rows.length;i++){
        var msg =this.rows[i];
    // 3.5：绘制文字
    ctx1.fillText(msg,this.x[i],this.y[i]);
    // 3.6：修改文字x值
    this.x[i] -= this.spd[i] * 20 * deltaTime;
}
    // 3.9：恢复
    ctx1.restore();
}
// 4:添加新弹幕文字
dataObj.prototype.addMes = function(msg){
    // 1:将新文字添加数组
    this.rows.push(msg);
    // 2：初始x
    // 3：初始y
    // 4：初始速度
    for(var i=0;i<this.rows.length;i++){
        // 2.3：初始值计算x
        this.x[i] =canvasWidth;
        // 2.4：初始值计算y
        this.y[i] = Math.random()*canvasHeigh;
        // 2.5：初始值计算spd
        this.spd[i] = Math.random()*0.017+0.003;
    }
}