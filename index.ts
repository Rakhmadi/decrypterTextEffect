/**
 * 
 * @param id 
 * 
 * @param manyGenerate
 * @param time 
 */
let decrypterTextEffect = (id:string,manyGenerate:number,time:number)=>{
    let elementText:HTMLElement | null = document.getElementById(id)
    let textCollect:Array<any> = []
    if (elementText) {
        let textContent:Array<string> | undefined = elementText.textContent?.split('')

        for (let f = 0; f < manyGenerate; f++) {
            let valIndex:Array<string> = []
            for(let s = 0 ; s < textContent!.length ; s++ ){
                if(textContent![s] === " "){
                    valIndex.push(" ")
                }else{
                    valIndex.push(randChar(1))
                }
            }
            textCollect.push(valIndex)
        }
        textCollect.push(elementText.textContent?.split(''))
        
        for(let x = 0 ; x < textCollect.length ; x++){
             setTimeout(() => {
                 elementText!.innerHTML = textCollect[x].join('')
              }, x * time); 
        }
    }
}

let randChar = (length:number)=>{
    let charStr:string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charStrLengt:number = charStr.length;
    let result:string = '';
    for (let x = 0; x < length ; x++) {
        result+=charStr.charAt(Math.floor(Math.random() * charStrLengt))
    }
    return result
}

