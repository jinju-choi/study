document.addEventListener('DOMContentLoaded', () => {
    accordionSeveral();
    accordionBasic();
    accordionSlide()
    sortList();
    dropDownToggle();
})

// 공통 함수 - 아코디언 상태 변경
function toggleAccordion(target, skip) {
    if (target.classList.contains('active')) {
        target.classList.remove('active');
        skip.textContent = '열기';
    } else {
        target.classList.add('active');
        skip.textContent = '닫기';
    }
}

// 아코디언 초기화
function resetAccordion(accordionItems) {
    accordionItems.forEach((item) => {
        item.classList.remove('active');
        item.querySelector('.visually-hidden').textContent = '열기';
    });
}

// 아코디언 중복
function accordionSeveral() {
    const accordion = document.querySelectorAll('.accordion-several .title');

    if (accordion) {
        accordion.forEach((el) => {
            el.addEventListener('click', function (e) {
                const accordionItem = el.parentElement;
                const skipText = el.querySelector('.visually-hidden');
                toggleAccordion(accordionItem, skipText);
            });
        });
    }
}

// 아코디언 하나씩만
function accordionBasic() {
    const accordion = document.querySelectorAll('.accordion-basic .title');
    const accordionItems = document.querySelectorAll('.accordion-basic .item');

    if (accordion) {
        accordion.forEach((el) => {
            el.addEventListener('click', function (e) {
                const accordionItem = el.parentElement;
                const skipText = el.querySelector('.visually-hidden');
        
                // resetAccordion(accordionItems);
                accordionItems.forEach((item) => {
                    item.classList.remove('active');
                    item.querySelector('.visually-hidden').textContent = '열기';
                });
                // toggleAccordion(accordionItem, skipText);
                if (accordionItem.classList.contains('active')) {
                    accordionItem.classList.remove('active');
                    skipText.textContent = '열기';
                } else {
                    accordionItem.classList.add('active');
                    skipText.textContent = '닫기';
                }
            });
        });
    }
}

// 아코디언 슬라이드 다운
function accordionSlide() {
const accordion = document.querySelectorAll('.accordion-slide .title');

    if (accordion) {
        accordion.forEach((el) => {
            el.addEventListener('click', function (e) {
                const accordionItem = el.parentElement;
                const skipText = el.querySelector('.visually-hidden');
                const contents = el.nextElementSibling;

                slideToggle(contents, 500, 'active');
                toggleAccordion(accordionItem, skipText);
            });
        });
    }
}

// 팝업 열기
function openModal(name) {
    const modalTarget = document.querySelector(`#${name}`);
    modalTarget.classList.add('on');
    const modalCloseBtn = modalTarget.querySelector('.modal-close-btn');
    modalCloseBtn.focus();
}

function closeModal(name) {
    const modalTarget = document.querySelector(`#${name}`);
    modalTarget.classList.remove('on');
    const returnFocusEl = document.querySelector('.return-focus');
    if (returnFocusEl) {
        returnFocusEl.focus();
        // returnFocusEl.classList.remove('return-focus');
    }
}

function assignFocusReturnClass(modalBtnEl) {
    modalBtnEl.addEventListener('click', function () {
        const focusReturnEls = document.querySelectorAll('.return-focus');
        focusReturnEls.forEach((el) => {
            el.classList.remove('return-focus');
        });
        this.classList.add('return-focus');
    });
}

const modalBtnEls = document.querySelectorAll('.modal-open-btn');
modalBtnEls.forEach(assignFocusReturnClass);

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

// 리스트 정렬
function sortList() {
    const sortItems = document.querySelectorAll('.sort-item');
    
    function toggleSortDirection(target) {
        const isUp = target.classList.contains('up');
        target.classList.toggle('up', !isUp);
        target.classList.toggle('down', isUp);
    }
    
    function removeActiveClassFromOthers(clickedItem) {
        sortItems.forEach((item) => {
            if (item !== clickedItem) {
                item.classList.remove('active');
            }
        });
    }
    
    function updateAccessibilityText(item) {
        const targetSkips = item.querySelectorAll('.visually-hidden');
        targetSkips.forEach((targetSkip) => targetSkip.remove());
        accessibilityText(item);
    }
    
    sortItems.forEach((sortItem) => {
        sortItem.addEventListener('click', function () {
            removeActiveClassFromOthers(sortItem);
            sortItem.classList.add('active');
            toggleSortDirection(sortItem);
            updateAccessibilityText(sortItem);
        }, { capture: true });
    });
}

// 접근성 텍스트
function accessibilityText(targetEl) {
    let spanEl = document.createElement('span');
    let spanText = document.createTextNode('선택됨');
    spanEl.classList.add('visually-hidden');
    spanEl.appendChild(spanText);
    targetEl.append(spanEl);
}

// 드롭다운 토글

function dropDownToggle(){
    const dropDownToggleBtns = document.querySelectorAll('.dropdown-toggle');
    const dropDownToggleWraps = document.querySelectorAll('.dropdown-toggle-group');

    dropDownToggleBtns.forEach((dropDownToggleBtn) => {
        dropDownToggleBtn.addEventListener('click', function(){
            const dropDownWrap = dropDownToggleBtn.parentElement;
            dropDownWrap.classList.toggle('on');
        })
    })
    // 드롭다운 토글 그룹 외부 클릭 시 드롭다운 메뉴를 닫습니다
    document.addEventListener('mouseup', function(e){
        let target = e.target;
        if(!document.querySelector('.dropdown-toggle-group').contains(target)){
            dropDownToggleWraps.forEach((dropDownToggleWrap)=> {
                dropDownToggleWrap.classList.remove('on')
            })
        }
    })
}