
// code slide
// const codeViewBtn = document.querySelectorAll('.code-view-btn');
// codeViewBtn.forEach((btn)=> {
//     btn?.addEventListener('click', function(){
//         btn.classList.toggle("active")
//         if(btn.classList.contains('active')){
//             btn.nextElementSibling.classList.add('active')
//         } else {
//             btn.nextElementSibling.classList.remove('active')
//         }
//     })
// })


const accrodion = document.querySelectorAll('.accordion .item');


accrodion.forEach((el)=> {
    el.addEventListener('click', function(){
        console.log('아코디언');
    })
})

