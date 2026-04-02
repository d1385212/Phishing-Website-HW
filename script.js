document.addEventListener('DOMContentLoaded', () => {
    const queryForm = document.getElementById('queryForm');
    const step1Area = document.getElementById('step1-area');
    const step2Area = document.getElementById('step2-area');
    const step3Area = document.getElementById('step3-area');
    const userIdDisplay = document.getElementById('user-id-display');

    queryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const idValue = document.getElementById('idNumber').value;

        if(idValue.length !== 10) {
            alert('請輸入10碼完整身分證字號！');
            return;
        }

        const maskedId = idValue.substring(0, 6) + '****';
        userIdDisplay.textContent = maskedId;

        step1Area.classList.add('hidden');
        step2Area.classList.remove('hidden');
        window.scrollTo(0, 0);
    });

    document.getElementById('go-step3-btn').addEventListener('click', () => {
        step2Area.classList.add('hidden');
        step3Area.classList.remove('hidden');
        window.scrollTo(0, 0);
    });

    document.getElementById('back-to-step1').addEventListener('click', (e) => {
        e.preventDefault();
        step2Area.classList.add('hidden');
        step1Area.classList.remove('hidden');
    });

    document.getElementById('back-to-step2').addEventListener('click', (e) => {
        e.preventDefault();
        step3Area.classList.add('hidden');
        step2Area.classList.remove('hidden');
    });

    document.getElementById('confirm-pay-btn').addEventListener('click', () => {
        alert('繳費成功！(此為測試網頁)');
        location.reload(); 
    });

    const ccParts = document.querySelectorAll('.cc-part');
    ccParts.forEach((input, index) => {
        input.addEventListener('input', function() {
            if (this.value.length === 4 && index < ccParts.length - 1) {
                ccParts[index + 1].focus();
            }
        });
    });
});