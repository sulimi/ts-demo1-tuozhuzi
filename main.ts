//当js写
var div: HTMLDivElement = document.createElement('div');
//js也是可以这么写的：加内联
div.style.border = '1px solid red';
div.style.height = '100px';
div.style.width = '100px';
div.id = 'demo';
document.body.appendChild(div);


var x: boolean = false;
var position: [number, number] = [0, 0];//初始化鼠标坐标


div.onmousedown = (e: MouseEvent) => {
    x = true;
    position = [e.clientX, e.clientY];//鼠标按下坐标
}
document.onmouseover = function (e) {
    if (x === true) {
        var  deltaX = e.clientX - position[0];//鼠标移动距离
        var  deltaY = e.clientY - position[1];
        var top = parseInt(div.style.top!) || 0;
        var left = parseInt(div.style.left!) || 0;
        var resultX = left + deltaX;
        var resultY = top + deltaY;

        if (resultX < 0) {
            resultX = 0;
        }else if (resultX > window.innerWidth - div.offsetWidth) {
            resultX = window.innerWidth - div.offsetWidth;
        }
        if (resultY < 0) {
            resultY = 0;
        }else if (resultY > window.innerHeight - div.offsetHeight) {
            resultY = window.innerHeight - div.offsetHeight;
        }

        div.style.top = resultY + 'px';
        div.style.left = resultX + 'px';
        position = [e.clientX, e.clientY];
    }
}
document.onmouseup = (e) => {
    x = false;
}
