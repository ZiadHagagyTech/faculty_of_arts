
    // بيانات تسجيل الدخول الثابتة
    const validUsername = "admin";
    const validPassword = "12345";

    // الحصول على العناصر
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");

    // التعامل مع نموذج تسجيل الدخول
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // منع إعادة تحميل الصفحة

      // جلب القيم المدخلة
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      // التحقق من صحة البيانات
      if (username === validUsername && password === validPassword) {
        alert("تم تسجيل الدخول بنجاح!");
        // يمكنك هنا تحويل المستخدم إلى صفحة أخرى
        window.location.href = "./reports.html";
      } else {
        errorMessage.style.display = "block"; // عرض رسالة الخطأ
      }
    });



    document.getElementById('togglePassword').addEventListener('click', function () {
      const passwordInput = document.getElementById('password');
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        this.classList.remove('fa-eye');
        this.classList.add('fa-eye-slash');
      } else {
        passwordInput.type = 'password';
        this.classList.remove('fa-eye-slash');
        this.classList.add('fa-eye');
      }
    });




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