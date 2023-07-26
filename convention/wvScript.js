
// code slide
const codeViewBtn = document.querySelectorAll('.code-view-btn');
codeViewBtn.forEach((btn)=> {
    btn?.addEventListener('click', function(){
        btn.classList.toggle("active")
        if(btn.classList.contains('active')){
            btn.nextElementSibling.classList.add('active')
        } else {
            btn.nextElementSibling.classList.remove('active')
        }
    })
})