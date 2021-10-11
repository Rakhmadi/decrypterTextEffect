
let decrypterTextEffect = (id:string,loop:number,time:number)=>{
    let elementText:HTMLElement = document.getElementById(id)
    if (elementText) {
        
    }
}

let randChar = (length:number)=>{
    let charStr:string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+-=?/';
    let charStrLengt:number = charStr.length;
    let result:string = '';
    for (let x = 0; x < length ; x++) {
        result+=charStr.charAt(Math.floor(Math.random() * charStrLengt))
    }
    return result
}