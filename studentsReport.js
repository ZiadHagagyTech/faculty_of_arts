// إعداد Firebase
        const firebaseConfig = {
            apiKey: "AIzaSyACSaxwz6-ef5GygWAbDp0DJKEKe-fG49s",
            authDomain: "project-of-arts.firebaseapp.com",
            databaseURL: "https://project-of-arts-default-rtdb.firebaseio.com",
            projectId: "project-of-arts",
            storageBucket: "project-of-arts.firebasestorage.app",
            messagingSenderId: "779880030664",
            appId: "1:779880030664:web:8ec84af51d78d9a38ca0fd"
        };

        // تهيئة Firebase
        firebase.initializeApp(firebaseConfig);

        document.addEventListener("DOMContentLoaded", function () {
            const fetchBtn = document.getElementById("fetchData");
            const studentTable = document.getElementById("studentTable");
            const printBtn = document.getElementById("printData");
            const pdfBtn = document.getElementById("downloadPDF");
            const messageBox = document.getElementById("message");
            const studentCount = document.getElementById("studentCount");
            const searchInput = document.getElementById("searchInput"); // حقل البحث

            let studentsData = []; // تخزين البيانات هنا لاستخدامها في البحث

            printBtn.style.display = "none";
            pdfBtn.style.display = "none";
            searchInput.style.display = "none"; // تأكد من أن حقل البحث مخفي في البداية

            fetchBtn.addEventListener("click", function () {
                messageBox.innerHTML = "⏳ جاري جلب البيانات...";
                const dbRef = firebase.database().ref("students");

                dbRef.once("value")
                    .then(snapshot => {
                        if (snapshot.exists()) {
                            studentsData = Object.values(snapshot.val());
                            displayStudents(studentsData); // عرض جميع الطلاب بعد جلب البيانات
                            searchInput.style.display = "block"; // إظهار حقل البحث بعد عرض البيانات
                            messageBox.innerHTML = "✅ تم جلب البيانات بنجاح.";
                            printBtn.style.display = "inline-block";
                            pdfBtn.style.display = "inline-block";
                        } else {
                            studentTable.innerHTML = "";
                            studentCount.innerHTML = "📌 إجمالي عدد الطلاب المعروضين: <strong>0</strong>";
                            messageBox.innerHTML = "⚠️ لا توجد بيانات متاحة.";
                        }
                    })
                    .catch(error => {
                        console.error("❌ خطأ أثناء جلب البيانات:", error);
                        messageBox.innerHTML = "❌ حدث خطأ أثناء جلب البيانات.";
                    });
            });

            // دالة لعرض البيانات في الجدول
            function displayStudents(students) {
                if (students.length > 0) {
                    searchInput.style.display = "block"; // إظهار حقل البحث بعد عرض البيانات في الجدول
                }
                let tableHTML = `
                    <table>
                        <tr>
                            <th>م</th>
                            <th>الاسم</th>
                            <th>السنة</th>
                            <th>التخصص</th>
                            <th>السنة الأكاديمية</th>
                            <th>الصورة</th>
                        </tr>
                `;

                students.forEach((student, index) => {
                    tableHTML += `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${student.name || "غير متوفر"}</td>
                            <td>${student.year || "غير متوفر"}</td>
                            <td>${student.specialization || "غير متوفر"}</td>
                            <td>${student.academicYear || "غير متوفر"}</td>
                            <td><img src="${student.photo || 'default-avatar.png'}" alt="صورة الطالب" style="width: 50px; height: 50px; border-radius: 50%;"></td>
                        </tr>
                    `;
                });

                tableHTML += `</table>`;
                studentTable.innerHTML = tableHTML;
                studentCount.innerHTML = `📌 إجمالي عدد الطلاب المعروضين: <strong>${students.length}</strong>`;
            }

            searchInput.addEventListener("input", function () {
                const searchTerm = searchInput.value.toLowerCase();
                const filteredStudents = studentsData.filter(student => 
                    student.name && student.name.toLowerCase().includes(searchInput.value.toLowerCase())
                );
                displayStudents(filteredStudents);
            });

            printBtn.addEventListener("click", function () {
                window.print();
            });

            pdfBtn.addEventListener("click", function () {
                const element = document.getElementById("studentTable");
                html2pdf().from(element).save("تقرير_الطلاب.pdf");
            });
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


