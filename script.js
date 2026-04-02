document.addEventListener('DOMContentLoaded', () => {
    const queryForm = document.getElementById('queryForm');
    const step1Area = document.getElementById('step1-area');
    const step2Area = document.getElementById('step2-area');
    const steps = document.querySelectorAll('.step'); // 頂部進度條
    
    // 1. 處理查詢按鈕 (跳轉到步驟二)
    queryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // 簡單驗證後直接切換
        step1Area.classList.add('hidden');
        step2Area.classList.remove('hidden');
        
        // 更新頂部進度條狀態
        steps[0].classList.remove('active');
        steps[1].classList.add('active');
    });

    // 2. 處理回上一步按鈕
    document.getElementById('back-to-step1').addEventListener('click', () => {
        step2Area.classList.add('hidden');
        step1Area.classList.remove('hidden');
        
        steps[1].classList.remove('active');
        steps[0].classList.add('active');
    });

    // 3. 🎯 加分功能：動態計算勾選金額
    const checkboxes = document.querySelectorAll('.fine-checkbox');
    const totalDisplay = document.getElementById('total-amount');

    checkboxes.forEach(box => {
        box.addEventListener('change', () => {
            let total = 0;
            checkboxes.forEach(cb => {
                if(cb.checked) {
                    total += parseInt(cb.getAttribute('data-price'));
                }
            });
            totalDisplay.innerText = `$${total.toLocaleString()}`;
        });
    });
});