
    function downloadCard() {
    let cardElement = document.getElementById('card');

    html2canvas(cardElement, {
        scale: 2,
        useCORS: true, // مهم جدًا للسماح بالتقاط الصور
        allowTaint: true
    }).then(function(canvas) {
        let link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpeg', 1.0);
        link.download = 'student_card.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}



window.onload = function() {
    // جلب البيانات المخزنة
    const studentName = localStorage.getItem('studentName') || "اسم الطالب";
    const studentYear = localStorage.getItem('studentYear') || "الفرقة";
    const specialization = localStorage.getItem('specialization') || "الشعبة";
    const academicYear = localStorage.getItem('academicYear') || "العام الجامعي";
    const studentPhoto = localStorage.getItem('studentPhoto');

    // تعيين البيانات في مكانها
    document.getElementById('student-name').textContent = studentName;
    document.getElementById('student-year').textContent = studentYear;
    document.getElementById('specialization').textContent = specialization;
    document.getElementById('academic-year').textContent = academicYear;

    // تعيين صورة الطالب لو متاحة
    if (studentPhoto) {
        document.getElementById('student-photo').src = studentPhoto;
    }
}

function downloadCard() {
    let cardElement = document.getElementById('card');
    let studentName = localStorage.getItem('studentName') || "student_card";

    html2canvas(cardElement, {
        scale: 2,
        useCORS: true,
        allowTaint: true
    }).then(function(canvas) {
        let link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpeg', 1.0);
        link.download = studentName.replace(/\s+/g, '_') + '.jpg'; // اسم الملف يكون اسم الطالب
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

    function redirectToPage() {
        window.location.href = "./index.html"; // استبدل بالرابط المطلوب

    }



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



    