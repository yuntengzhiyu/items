

function move(obj, attr, target, speed , callback){
    var current = parseInt(getStyle(obj, attr));

    if(current > target)
        speed = -speed;
    clearInterval(obj.time);
    obj.time = setInterval(function(){


        var oldValue = parseInt(getStyle(obj, attr));
        var newValue = oldValue + speed ;
        if((speed < 0 && newValue < target) || (speed > 0 && newValue > target))
            newValue = target;
        obj.style[attr] = newValue + "px";
        if(newValue == target)
        {
            clearInterval(obj.time);
            callback && callback();
        }
    }, 20);

}


function getStyle(obj, name){
    return getComputedStyle(obj, null)[name];
}