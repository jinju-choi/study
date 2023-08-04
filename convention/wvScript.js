
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => onScroll());
    // 아코디언
    const accordion = document.querySelectorAll('.accordion .title');
    if(accordion){
        accordion.forEach((el)=> {
            el.addEventListener('click', function(e){
                console.log('아코디언');
            })
        })
    }
})




// 프로그레스 바
const progressContainer = document.createElement('div');
const progressBar = document.createElement('div');
progressContainer.className = 'progress-container';
progressBar.className = 'progress-bar';

document.body.append(progressContainer)
progressContainer.append(progressBar)

const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    const scrollWidth = (scrollTop / height) * 100;
    progressBar.style.width = scrollWidth + "%";
}


// 네비게이션
const contentTitle = document.querySelectorAll('.content-title');
const navigationBox = document.querySelector('.navigation-list');

if(contentTitle){
    contentTitle.forEach((title)=> {
        const li = document.createElement('li');
        const a = document.createElement('a');
    
        a.setAttribute('href', "")
        li.append(a);
        a.append(title.textContent)
        navigationBox.append(li)

        navActive(title)
    })
}


function navActive(tit){
    const navItem = document.querySelectorAll('.navigation-list li')
    navItem.forEach((item)=> {
        item.addEventListener('click', function(e){
            e.preventDefault()
            if(item.textContent == tit.textContent) {
                let titleTop = tit.offsetTop;
                window.scrollTo({top:titleTop - 30, behavior:'smooth'});
            }

            navItem.forEach((el)=> {
                el.classList.remove('active')
            })
            item.classList.add('active')
        })
    })
}