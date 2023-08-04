class slideToggle {
    constructor(selector, targetItem,) {
        this.target = selector
        this.duration = duration
        this.targetItem = targetItem
        this.speedAnimation = 600;
    }

    slideUp () {
        this.target.style.transitionProperty = 'height, margin, padding';
        this.target.style.transitionDuration = duration + 'ms';
        this.target.style.boxSizing = 'border-box';
        this.target.style.height = this.target.offsetHeight + 'px';
        this.target.offsetHeight;
        this.target.style.overflow = 'hidden';
        this.target.style.height = 0;
        this.target.style.paddingTop = 0;
        this.target.style.paddingBottom = 0;
        this.target.style.marginTop = 0;
        this.target.style.marginBottom = 0;
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
        }, this.duration);
    }
    slideDown (){
        this.target.style.removeProperty('display');
        let display = window.getComputedStyle(target).display;
    
        if (display === 'none') display = 'block';
        this.target.style.display = display;
        let height = this.target.offsetHeight;
        this.target.style.overflow = 'hidden';
        this.target.style.height = 0;
        this.target.style.paddingTop = 0;
        this.target.style.paddingBottom = 0;
        this.target.style.marginTop = 0;
        this.target.style.marginBottom = 0;
        this.target.offsetHeight;
        this.target.style.boxSizing = 'border-box';
        this.target.style.transitionProperty = 'height, margin, padding';
        this.target.style.transitionDuration = duration + 'ms';
        this.target.style.height = height + 'px';
        this.target.style.removeProperty('padding-top');
        this.target.style.removeProperty('padding-bottom');
        this.target.style.removeProperty('margin-top');
        this.target.style.removeProperty('margin-bottom');
        window.setTimeout(() => {
            this.target.style.removeProperty('height');
            this.target.style.removeProperty('overflow');
            this.target.style.removeProperty('transition-duration');
            this.target.style.removeProperty('transition-property');
        }, this.duration);
    }
    slideToggle () {
        if (window.getComputedStyle(this.target).display === 'none') {
            return slideDown(this.target, this.duration);
        } else {
            return slideUp(this.target, this.duration);
        }
    };
    
    slideBtnClick (cl, sl) {
        document.querySelector(cl).addEventListener('click', () => 
        sl(targetItem, this.speedAnimation)
    )};

    bindingEvent() {
        slideBtnClick ('.searchDetailBtn', slideToggle);
    }
}

// // 슬라이드 업, 다운
// let slideUp = (target, duration = 500) => {
//     target.style.transitionProperty = 'height, margin, padding';
//     target.style.transitionDuration = duration + 'ms';
//     target.style.boxSizing = 'border-box';
//     target.style.height = target.offsetHeight + 'px';
//     target.offsetHeight;
//     target.style.overflow = 'hidden';
//     target.style.height = 0;
//     target.style.paddingTop = 0;
//     target.style.paddingBottom = 0;
//     target.style.marginTop = 0;
//     target.style.marginBottom = 0;
//     window.setTimeout(() => {
//         target.style.display = 'none';
//         target.style.removeProperty('height');
//         target.style.removeProperty('padding-top');
//         target.style.removeProperty('padding-bottom');
//         target.style.removeProperty('margin-top');
//         target.style.removeProperty('margin-bottom');
//         target.style.removeProperty('overflow');
//         target.style.removeProperty('transition-duration');
//         target.style.removeProperty('transition-property');
//         //alert("!");
//     }, duration);
// };
// let slideDown = (target, duration = 500) => {
//     target.style.removeProperty('display');
//     let display = window.getComputedStyle(target).display;

//     if (display === 'none') display = 'block';
//     target.style.display = display;
//     let height = target.offsetHeight;
//     target.style.overflow = 'hidden';
//     target.style.height = 0;
//     target.style.paddingTop = 0;
//     target.style.paddingBottom = 0;
//     target.style.marginTop = 0;
//     target.style.marginBottom = 0;
//     target.offsetHeight;
//     target.style.boxSizing = 'border-box';
//     target.style.transitionProperty = 'height, margin, padding';
//     target.style.transitionDuration = duration + 'ms';
//     target.style.height = height + 'px';
//     target.style.removeProperty('padding-top');
//     target.style.removeProperty('padding-bottom');
//     target.style.removeProperty('margin-top');
//     target.style.removeProperty('margin-bottom');
//     window.setTimeout(() => {
//         target.style.removeProperty('height');
//         target.style.removeProperty('overflow');
//         target.style.removeProperty('transition-duration');
//         target.style.removeProperty('transition-property');
//     }, duration);
// };
// let slideToggle = (target, duration = 500) => {
//     if (window.getComputedStyle(target).display === 'none') {
//         return slideDown(target, duration);
//     } else {
//         return slideUp(target, duration);
//     }
// };

// let speedAnimation = 600;


// let targetItem = document.querySelector('.searchDetailCont');

// let slideBtnClick = (cl, sl) => document.querySelector(cl).addEventListener('click', () => sl(targetItem, speedAnimation));

// slideBtnClick('.searchDetailBtn', slideToggle);