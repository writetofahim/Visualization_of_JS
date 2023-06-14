const container = document.getElementById('container');
const array = [1, 2, 'Hello World', 4, 5];

array.forEach((element)=>{
    setTimeout(function(){
        console.log('hello')
    },5000)
})

function showContent(e){
        const div = document.createElement('div');
        div.classList.add('element');
        div.textContent = e;
        container.appendChild(div);
      
        // Add visual effect
        setTimeout(function() {
          div.style.backgroundColor = 'blue';
        }, 2000);
}
