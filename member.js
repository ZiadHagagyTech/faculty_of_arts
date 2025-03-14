
 // جلب العناصر
const toggleBtn = document.getElementById('toggleBtn');
const navLinks = document.getElementById('navLinks');
const body = document.body;

// إضافة حدث النقر على زر التبديل
toggleBtn.addEventListener('click', () => {
    // تبديل عرض الروابط
    navLinks.classList.toggle('active');

    // إضافة أو إزالة فئة "menu-open" من الجسم
    body.classList.toggle('menu-open');
});



// تعطيل الزر الأيمن
document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    });

    // تعطيل اختصارات F12 و Ctrl+Shift+I و Ctrl+Shift+J و Ctrl+U
    document.addEventListener("keydown", function (e) {
        if (e.key === "F12" || 
            (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) || 
            (e.ctrlKey && e.key === "U")) {
            e.preventDefault();
        }
    });