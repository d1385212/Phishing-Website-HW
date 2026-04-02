document.addEventListener('DOMContentLoaded', () => {
    const queryForm = document.getElementById('queryForm');
    const step1Area = document.getElementById('step1-area');
    const step2Area = document.getElementById('step2-area');
    const step3Area = document.getElementById('step3-area');
    
    const step2UserIdDisplay = document.getElementById('step2-user-id');
    const step3UserIdDisplay = document.getElementById('step3-user-id');

    queryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const idValue = document.getElementById('idNumber').value;

        if(idValue.length !== 10) {
            alert('請輸入10碼完整身分證字號！');
            return;
        }

        const maskedId = idValue.substring(0, 6) + '****';
        step2UserIdDisplay.textContent = maskedId;
        step3UserIdDisplay.textContent = maskedId;

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
});