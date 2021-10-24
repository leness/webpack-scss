import { doSomething } from './module';
import style from './style.css';
import style2 from './style2.css';

console.log(style);

doSomething()

console.log("Hello World!");


for (let i = 0; i < 10; i++) {
    console.log('dfdf');
}

function createEl(style: string) {
    
    let el = document.createElement('div');
    el.textContent = ('Element from TS');
    el.className = style;
    document.body.appendChild(el);
}

createEl(style.style)
createEl(style2.style)

let b: string = 'dfs';

setTimeout(() => {
    let a = 'hgh';
    console.log(a+b);
}, 100)