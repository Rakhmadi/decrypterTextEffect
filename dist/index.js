"use strict";
/**
 *
 * @param id
 *
 * @param manyGenerate
 * @param time
 */
let decrypterTextEffect = (id, manyGenerate, time) => {
    var _a, _b;
    let elementText = document.getElementById(id);
    let textCollect = [];
    if (elementText) {
        let textContent = (_a = elementText.textContent) === null || _a === void 0 ? void 0 : _a.split('');
        for (let f = 0; f < manyGenerate; f++) {
            let valIndex = [];
            for (let s = 0; s < textContent.length; s++) {
                if (textContent[s] === " ") {
                    valIndex.push(" ");
                }
                else {
                    valIndex.push(randChar(1));
                }
            }
            textCollect.push(valIndex);
        }
        textCollect.push((_b = elementText.textContent) === null || _b === void 0 ? void 0 : _b.split(''));
        for (let x = 0; x < textCollect.length; x++) {
            setTimeout(() => {
                elementText.innerHTML = textCollect[x].join('');
            }, x * time);
        }
    }
};
let randChar = (length) => {
    let charStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charStrLengt = charStr.length;
    let result = '';
    for (let x = 0; x < length; x++) {
        result += charStr.charAt(Math.floor(Math.random() * charStrLengt));
    }
    return result;
};
