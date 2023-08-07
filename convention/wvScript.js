document.addEventListener('DOMContentLoaded', () => {
    accordionSeveral();
    accordionBasic();
    accordionSlide()
})

// 아코디언 중복
function accordionSeveral () {
    const accordion = document.querySelectorAll('.accordion-several .title');
    
    if(accordion){
        accordion.forEach((el)=> {
            el.addEventListener('click', function(e){
                const accordionItem = el.parentElement;
                const skipText = el.querySelector('.visually-hidden');
                
                classCheck(accordionItem, skipText);
            })
        })
    }
    
}

// 아코디언 하나씩만
function accordionBasic() {
    const accordion = document.querySelectorAll('.accordion-basic .title');
    const accordionLi = document.querySelectorAll('.accordion-basic .item');
    
    if(accordion){
        accordion.forEach((el)=> {
            el.addEventListener('click', function(e){
                const accordionItem = el.parentElement;
                const skipText = el.querySelector('.visually-hidden');

                
                if(!accordionItem.classList.contains('active')){
                    accordionLi.forEach((el)=> {
                        el.classList.remove('active');
                        el.querySelector('.visually-hidden').textContent = '열기'
                    })
                }
                classCheck(accordionItem, skipText);
            })
        })
    }
    
}

// 아코디언 슬라이드 다운
function accordionSlide() {
    const accordion = document.querySelectorAll('.accordion-slide .title');
    const accordionLi = document.querySelectorAll('.accordion-slide .item');
    
    if(accordion){
        accordion.forEach((el)=> {
            el.addEventListener('click', function(e){
                const accordionItem = el.parentElement;
                const skipText = el.querySelector('.visually-hidden');
                const contents = el.nextElementSibling;
                
                slideToggle(contents, 500, 'active');
                classCheck(accordionItem, skipText);
            })
        })
    }
    
}

let classCheck = (target, skip) => {
    if(target.classList.contains('active')){
        target.classList.remove('active');
        skip.textContent = '열기'
    } else {
        target.classList.add('active');
        skip.textContent = '닫기'
    }
}


// 팝업 열기
function modalOpen(name) {
    const modalName = `#${name}`;
    const modalTarget = document.querySelector(modalName);
    modalTarget.classList.add('on');
    const modalCloseBtn = modalTarget.querySelector('.modal-close-btn');
    modalCloseBtn.focus(); // 팝업 닫기 버튼으로 포커스 이동
}

// 팝업 닫기
function modalClose(name) {
    const modalName = `#${name}`;
    const modalTarget = document.querySelector(modalName);
    modalTarget.classList.remove('on');
    document.querySelector('.return-focus')?.focus(); // 팝업 열기 버튼으로 포커스 복귀
}

// 팝업 포커스 복귀 클래스 삽입
const modalBtnEls = document.querySelectorAll('.modal-open-btn');
modalBtnEls.forEach((modalBtnEl) => {
    modalBtnEl.addEventListener('click', function () {
        document.querySelectorAll('.return-focus').forEach((focusEl) => {
            focusEl.classList.remove('return-focus');
        });
        this.classList.add('return-focus');
    });
});


// 슬라이드 업, 다운
let slideUp = (target, duration = 500) => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        //alert("!");
    }, duration);
};
let slideDown = (target, duration = 500) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;

    if (display === 'none') display = 'block';
    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
};

function slideToggle (target, duration, classList) {
    if (window.getComputedStyle(target).display === 'none' && !target.classList.contains(classList)) {
        return slideDown(target, duration);
    } else {
        return slideUp(target, duration);
    }
};

