define(["showHideDiv", "loadHtmlContent"], function (showHide, loadHtml) {

    var mainTopSection = document.getElementById('main-top-section');

    var dataUrl = 'assets/html-includes/donation.html';

    function initDonationSection() {
        var mainTopSection = document.getElementById('main-top-section');
        var donateButton = document.getElementById('donate-botton');
        var donationAddress = document.getElementById('donation-address');
        var donateFormContainer = document.getElementById('donate-form-container');
        var customAmount = document.getElementById('customAmount');
        var donateForm = document.forms['_xclick'];
        var donateLaterLink = document.getElementById('donate-later-link');
        var checkedInd = 2;

        function showDotationForm() {
            showHide.showHideMethod(donateFormContainer, mainTopSection);
        }

        //uncheck selected radio buttons if custom amount was choosen
        function donateFormOnClick(){
            customAmount.value = '';
        }
        function onCustomAmountFocus() {
            for (var i = 0; i < donateForm.length; i++) {
                if (donateForm[i].type === 'radio') {
                    donateForm[i].onclick = donateFormOnClick;
                }
                if (donateForm[i].type === 'radio' && donateForm[i].checked === true) {
                    checkedInd = i;
                    donateForm[i].checked = false;
                }
            }
        }

        function onCustomAmountBlur() {
            var value = customAmount.value;
            if (value === '') {
                donateForm[checkedInd].checked = true;
            }
        }

        function donateLater() {
            showHide.showHideMethod(donationAddress, mainTopSection);
        }

        donateButton.addEventListener('click', showDotationForm, false);
        customAmount.addEventListener('focus', onCustomAmountFocus, false);
        customAmount.addEventListener('blur', onCustomAmountBlur, false);
        donateLaterLink.addEventListener('click', donateLater, false);

    }

    loadHtml.loadHtmlContent(dataUrl, mainTopSection, initDonationSection);

    console.log('donation module was loaded');
});
