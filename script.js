document.addEventListener('DOMContentLoaded', () => {
    const queryForm = document.getElementById('queryForm');
    const step1Area = document.getElementById('step1-area');
    const step2Area = document.getElementById('step2-area');
    const step3Area = document.getElementById('step3-area');
    const steps = document.querySelectorAll('.step');
    
    const userInfoDisplay = document.getElementById('user-info-display');
    const checkboxes = document.querySelectorAll('.ticket-cb');
    const totalAmountSpan = document.getElementById('total-amount');
    const finalAmountSpan = document.getElementById('final-amount');
    const goStep3Btn = document.getElementById('go-step3-btn');

    queryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const idValue = document.getElementById('idNumber').value;
        const dobValue = document.getElementById('dob').value;

        if(idValue.length !== 10) {
            alert('請輸入10碼完整身分證字號！');
            return;
        }

        const maskedId = idValue.substring(0, 6) + '****';
        userInfoDisplay.textContent = `${maskedId} ${dobValue}`;

        step1Area.classList.add('hidden');
        step2Area.classList.remove('hidden');
        
        updateProgress(1);
    });

    checkboxes.forEach(cb => {
        cb.addEventListener('change', () => {
            let total = 0;
            checkboxes.forEach(box => {
                if(box.checked) {
                    total += parseInt(box.value);
                }
            });
            
            totalAmountSpan.textContent = total;
            finalAmountSpan.textContent = total;

            if(total > 0) {
                goStep3Btn.classList.add('active');
                goStep3Btn.disabled = false;
            } else {
                goStep3Btn.classList.remove('active');
                goStep3Btn.disabled = true;
            }
        });
    });

    goStep3Btn.addEventListener('click', () => {
        step2Area.classList.add('hidden');
        step3Area.classList.remove('hidden');
        updateProgress(2);
    });

    document.getElementById('back-to-step1').addEventListener('click', (e) => {
        e.preventDefault();
        step2Area.classList.add('hidden');
        step1Area.classList.remove('hidden');
        updateProgress(0);
    });

    document.getElementById('back-to-step2').addEventListener('click', (e) => {
        e.preventDefault();
        step3Area.classList.add('hidden');
        step2Area.classList.remove('hidden');
        updateProgress(1);
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

    function updateProgress(activeIndex) {
        steps.forEach((step, index) => {
            if(index === activeIndex) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
    }
});