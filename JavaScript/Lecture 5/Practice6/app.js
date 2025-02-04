let str = ["hi","hello","bye","!"];

function conCate(str){
    let fullstr = "";
    for(let i=0;i<str.length;i++){
        fullstr += str[i];
    }
    return fullstr;
}

console.log(conCate(str));