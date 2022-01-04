var plus = (function(){
    counter = 16;
    
    return function(){
        ++counter;
        document.getElementById("body").style.fontSize = counter + "px";
    }
})();

var minus = (function(){''
    
    return function(){
        --counter;
        document.getElementById("body").style.fontSize = counter + "px";
    }
})();