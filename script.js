document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('queryForm');

    form.addEventListener('submit', function(event) {
        // 阻止表單預設的跳轉/重新整理行為
        event.preventDefault();

        // 取得使用者輸入的值
        const idValue = document.getElementById('idNumber').value;
        const dobValue = document.getElementById('dob').value;
        const captchaValue = document.getElementById('captcha').value;

        // 簡易前端邏輯驗證
        if(idValue.length !== 10) {
            alert('請輸入完整且正確長度的身分證字號！');
            return;
        }

        if(captchaValue.toUpperCase() !== 'A2EL') {
            alert('驗證碼輸入錯誤，請重新輸入！');
            return;
        }

        // 模擬查詢成功的行為
        console.log('攔截到的表單資料：', { ID: idValue, DOB: dobValue });
        alert('前端驗證通過！按鈕事件觸發成功。(此為靜態網頁，不會發送真實請求)');
        
        // 實戰中，這裡可以寫 fetch() 將資料打到後端，
        // 或是用 JS 隱藏目前的 form，顯示下一階段的繳費畫面。
    });
});