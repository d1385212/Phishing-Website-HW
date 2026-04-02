document.addEventListener('DOMContentLoaded', () => {
    const queryForm = document.getElementById('queryForm');
    const step1Area = document.getElementById('step1-area');
    const step2Area = document.getElementById('step2-area');
    const steps = document.querySelectorAll('.step');
    const userInfoDisplay = document.getElementById('user-info-display');

    queryForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const idValue = document.getElementById('idNumber').value;
        const dobValue = document.getElementById('dob').value;

        if(idValue.length !== 10) {
            alert('請輸入10碼完整身分證字號！');
            return;
        }

        const maskedId = idValue.substring(0, 6) + '****';
        const displayString = `${maskedId} ${dobValue}`;

        userInfoDisplay.textContent = displayString;

        step1Area.classList.add('hidden');
        step2Area.classList.remove('hidden');
        
        if(steps.length > 0) {
            steps[0].classList.remove('active');
            steps[1].classList.add('active');
            steps[1].style.backgroundColor = '#0078d7';
            steps[1].style.color = 'white';
        }
    });

    document.getElementById('back-to-step1').addEventListener('click', (e) => {
        e.preventDefault();
        
        step2Area.classList.add('hidden');
        step1Area.classList.remove('hidden');
        
        if(steps.length > 0) {
            steps[1].classList.remove('active');
            steps[1].style.backgroundColor = '';
            steps[1].style.color = '';
            steps[0].classList.add('active');
        }
    });
});