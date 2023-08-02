'use strict';

/**
 * UI Functions
 * @returns {Object}
 */
var UI = (function (window, document, $) {
    // datepicker

    var viewPassword = function () {
        $('.password-box button').click(function () {
            var $input = $(this).siblings('input');
            var inputType = $input.attr('type');

            if (inputType === 'password') {
                $input.attr('type', 'text');
            } else {
                $input.attr('type', 'password');
            }
        });
    };

    var labelCheckAll = function () {
        $('label.check-all').on('change', function () {
            var isTypeChecked = $(this).children('input').is(':checked');
            var $inputs = $(this).siblings().find('input').not('input:disabled');

            isTypeChecked ? $inputs.prop('checked', true) : $inputs.prop('checked', false);
        });
    };

    var inputCheckAll = function () {
        $('input.check-all').on('change', function () {
            var isTypeChecked = $(this).is(':checked');
            var $inputs = $(this).siblings('input').not('input:disabled');

            isTypeChecked ? $inputs.prop('checked', true) : $inputs.prop('checked', false);
        });
    };

    var syncLabelCheckAll = function () {
        var $inputs = $('label.check input').not('.check-all input').not('input:disabled');

        $inputs.on('change', function () {
            var $targets = $(this).parent().siblings('.check').not('.check-all').children('input').add($(this)).not('input:disabled');
            var checkNum = $targets.length;
            var checkedNum = $targets.filter('input:checked').length;
            var $checkAll = $(this).parent().siblings('.check-all').children('input');

            checkNum === checkedNum ? $checkAll.prop('checked', true) : $checkAll.prop('checked', false);
        });
    };

    var syncInputCheckAll = function () {
        const $inputs = $('input.check-all').siblings('input.check').not('input:disabled');

        $inputs.on('change', function () {
            var $targets = $(this).siblings('.check').add($(this)).not('.check-all').not('input:disabled');
            var checkNum = $targets.length;
            var checkedNum = $targets.filter('input:checked').length;
            var $checkAll = $(this).siblings('.check-all');

            checkNum === checkedNum ? $checkAll.prop('checked', true) : $checkAll.prop('checked', false);
        });
    };

    var rangeSlider = function () {
        $('.range-slider input').on('input', function (e) {
            var $rangeBar = $(this).siblings('.bar-box').children('.range-bar');
            var $valueSpan = $(this).siblings('.range-value');
            var value = e.target.value;

            $rangeBar.css('width', `${value}%`);
            $valueSpan.text(`${value}%`);
        });
    };
    var countCharacter = function () {
        $('.textarea-count').on('keyup', function (e) {
            var characterCount = e.target.value.length;
            var $current = $('.character .current');
            var $slash = $('.character .slash');
            var $max = $('.character .max');

            $current.text(characterCount);

            if (characterCount >= $max.text()) {
                $current.css('color', '#f00');
                $slash.css('color', '#f00');
                $max.css('color', '#f00');
            } else {
                $current.css('color', '#000');
                $slash.css('color', '#000');
                $max.css('color', '#000');
            }
        });
    };

    var putBirthOptions = function () {
        var currentYear = new Date().getFullYear();

        for (var i = 1900; i <= currentYear; i++) {
            $('.form-birth .yy').append(`<option value="${i}">${i}��</option>`);
        }

        for (var i = 1; i <= 12; i++) {
            var month = i >= 10 ? i : `0${i}`;
            $('.form-birth .mm').append(`<option value="${month}}">${month}��</option>`);
        }

        for (var i = 1; i <= 31; i++) {
            $('.form-birth .dd').append(`<option value="${i}">${i}��</option>`);
        }
    };

    var autoHyphen = function () {
        $('.tel-input').on('keyup', function (e) {
            var value = e.target.value;

            value = value
                .replace(/[^0-9]/g, '')
                .replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, '$1-$2-$3')
                .replace('--', '-');

            e.target.value = value;
        });
    };

    var openModal = function () {
        $('[data-modal="open"]').on('click', function () {
            $(this).siblings('.overlay').addClass('is-active');
            $(this).siblings('.modal').addClass('is-open');
            $('body').addClass('modal-open');

            $(document).on('click', function (e) {
                if ($('.overlay').is(e.target)) {
                    $('body').removeClass('modal-open');
                    $('.modal.is-open').removeClass('is-open');
                    $('.overlay.is-active').removeClass('is-active');
                    $(document).off('click');
                }

                if ($('.modal').not('.modal-container').is(e.target)) {
                    $('body').removeClass('modal-open');
                    $('.modal.is-open').removeClass('is-open');
                    $(document).off('click');
                }
            });
        });
    };

    var closeModal = function () {
        $('[data-modal="close"]').on('click', function () {
            $('body').removeClass('modal-open');
            $('.overlay.is-active').removeClass('is-active');
            $('.modal.is-open').removeClass('is-open');
            $(document).off('click');
        });
    };

    var responsiveModal = function () {
        var modalHeight = $('.modal-container').height();
        var winHeight = window.innerHeight;

        if (modalHeight > winHeight) {
            $('.modal.full').css('align-items', 'start');
        }
    };

    var clickPagination = function () {
        $('.pagination .item').on('click', function () {
            $('.pagination .item').not($(this)).removeClass('is-active');
            $(this).addClass('is-active');
        });
    };

    var clickBreadcrumb = function () {
        $('.breadcrumb .item').on('click', function () {
            $('.breadcrumb .item').not($(this)).removeClass('is-active');
            $(this).addClass('is-active');
        });
    };

    var clickTab = function () {
        $('.tab-wrap .item').on('click', function () {
            var tabId = $(this).attr('id');
            var $targetPanel = $('.tab-panel').filter(function () {
                return $(this).attr('aria-labelledby') === tabId;
            });
            var isTargetOpen = $targetPanel.hasClass('is-active');
            var $targetListWrap = $(this).parents('.tab-wrap');
            var $otherPanels = $targetListWrap.find('.tab-panel').not($targetPanel);

            if (!isTargetOpen) {
                $(this).siblings('.item').removeClass('is-active');
                $(this).addClass('is-active');
            }

            if ($targetListWrap.hasClass('slide')) {
                $otherPanels.stop().hide().removeClass('is-active');
                $targetPanel.stop().slideDown().addClass('is-active');
            } else {
                if (!isTargetOpen) {
                    $otherPanels.removeClass('is-active');
                    $targetPanel.toggleClass('is-active');
                }
            }
        });
    };

    var controlAccordion = function () {
        $('.accordion .item').on('click', function () {
            var isAccordionCollapse = $(this).parents('.accordion').hasClass('collapse');
            var targetContents = $(this).find('.contents');
            var $otherContents = $(this).siblings('.item').find('.contents');

            if (isAccordionCollapse) {
                $(this).toggleClass('is-active');
                $(targetContents).slideToggle();
            } else {
                $(this).siblings('.item').removeClass('is-active');
                $(this).toggleClass('is-active');
                $otherContents.slideUp('fast');
                targetContents.slideToggle();
            }
        });
    };

    // public
    return {
        /**
         * UI 珥덇린��
         */
        init: function () {
            datePicker();
            viewPassword();
            labelCheckAll();
            inputCheckAll();
            syncLabelCheckAll();
            syncInputCheckAll();
            rangeSlider();
            countCharacter();
            putBirthOptions();
            autoHyphen();
            openModal();
            closeModal();
            responsiveModal();
            clickPagination();
            clickBreadcrumb();
            clickTab();
            controlAccordion();
        },
    };
})(window, document, jQuery);
// dom ready init
$(UI.init);
