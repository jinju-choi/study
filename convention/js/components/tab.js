/* 탭메뉴 */
class Tab {
    constructor(selector, option) {
        this.defaultOtp = {
            btns: 'ul',
            boxs: '.tab-contents-wrap .tab-content',
            activeClass: 'on',
        };
        const resultOtp = { ...this.defaultOtp, ...option };
        this.frame = document.querySelector(selector);
        this.btns = this.frame.querySelector(resultOtp.btns);
        this.boxs = this.frame.querySelectorAll(resultOtp.boxs);
        this.activeClass = resultOtp.activeClass;

        let spanEl = document.createElement('span');
        let spanText = document.createTextNode('선택됨');
        spanEl.classList.add('visually-hidden');
        spanEl.appendChild(spanText);
        this.addSelectedText(this.btns.querySelectorAll('li')[0].querySelector('a'));
        this.bindingEvent();
    }

    addSelectedText(target) {
        let spanEl = document.createElement('span');
        let spanText = document.createTextNode('선택됨');
        spanEl.classList.add('visually-hidden');
        spanEl.appendChild(spanText);
        target.append(spanEl);
    }

    bindingEvent() {
        this.btns.addEventListener('click', (e) => {
            const target = e.target.closest('li');
            let isOn = target.classList.contains(this.activeClass);
            if (isOn) return;
            const nodes = [...target.parentElement.children];
            const index = nodes.indexOf(target);
            this.activation(nodes, index);

            const textTarget = target.querySelector('a');
            this.removeSelectedText();
            this.addSelectedText(textTarget);
        });

        //탭 개수 파악 후 5개 이상일 경우 vertical-mode 클래스 추가
        const tabItemLength = document.querySelectorAll('.tabBoxLine > ul > li').length;
        tabItemLength >= 5 && this.btns.classList.add('vertical-mode');
    }

    removeSelectedText() {
        this.btns.querySelectorAll('.skip').forEach((node) => {
            node.remove();
        });
    }

    activation(items, index) {
        items.forEach((el) => el.classList.remove(this.activeClass));
        items[index].classList.add(this.activeClass);
        this.boxs.forEach((el) => el.classList.remove(this.activeClass));
        this.boxs[index]?.classList.add(this.activeClass);
    }
}
