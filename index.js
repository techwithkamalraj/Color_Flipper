

const randombgColor =(length)=>{
    let characters = '0123456789ABCDF';
    let result = '';

    for(let i = 0;i < length;i++){
        let random = Math.floor(Math.random() * characters.length);
        result += characters.charAt(random)
    }
    return result;
    
}
let btn = document.getElementById('btn');
let body = document.body;
btn.addEventListener('click',()=>{
    let hexCode = randombgColor(6);
    document.getElementById('bgcolor').innerText = `#${hexCode}`
    body.style.backgroundColor = `#${hexCode}`;
});

// console.log(randombgColor(6));

