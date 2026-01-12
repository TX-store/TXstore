// تحميل الفائزين عند فتح الصفحة
document.addEventListener('DOMContentLoaded', () => {
    displayWinners();
    updateStats();
});

// عرض جميع الفائزين
function displayWinners() {
    const winners = getWinners();
    const tableBody = document.getElementById('winnersTableBody');
    const emptyState = document.getElementById('emptyState');

    tableBody.innerHTML = '';

    if (winners.length === 0) {
        emptyState.style.display = 'block';
        return;
    }

    emptyState.style.display = 'none';

    // ترتيب الفائزين من الأحدث للأقدم
    const sortedWinners = [...winners].reverse();

    sortedWinners.forEach((winner, index) => {
        const row = document.createElement('tr');
        const date = new Date(winner.time);
        const formattedDate = formatDate(date);
        const formattedTime = formatTime(date);

        // تحديد نوع العجلة
        const wheelType = winner.wheel === 'فخمين' ? 'عجلة الفخمين' : 'عجلة الحظ';
        const wheelBadgeClass = winner.wheel === 'فخمين' ? 'vip' : 'normal';

        row.innerHTML = `
            <td class="rank">#${index + 1}</td>
            <td class="prize-name">${winner.prize}</td>
            <td><span class="wheel-badge ${wheelBadgeClass}">${wheelType}</span></td>
            <td class="date-time">
                <div><i class="fas fa-calendar"></i> ${formattedDate}</div>
                <div><i class="fas fa-clock"></i> ${formattedTime}</div>
            </td>
            <td>
                <button class="btn" style="padding: 5px 10px; font-size: 0.9rem;" onclick="showDetails('${winner.value}', '${formattedDate}', '${formattedTime}')">
                    <i class="fas fa-info-circle"></i> التفاصيل
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// تحديث الإحصائيات
function updateStats() {
    const winners = getWinners();
    
    // إجمالي الفائزين
    document.getElementById('totalWinners').textContent = winners.length;

    // عجلة الحظ العادية
    const normalCount = winners.filter(w => w.wheel !== 'فخمين').length;
    document.getElementById('normalWheelCount').textContent = normalCount;

    // عجلة الفخمين
    const vipCount = winners.filter(w => w.wheel === 'فخمين').length;
    document.getElementById('vipWheelCount').textContent = vipCount;

    // آخر فائز
    if (winners.length > 0) {
        const lastWinner = winners[winners.length - 1];
        const lastDate = new Date(lastWinner.time);
        const timeDiff = getTimeDifference(lastDate);
        document.getElementById('lastWinnerTime').textContent = timeDiff;
    } else {
        document.getElementById('lastWinnerTime').textContent = '-';
    }
}

// الحصول على الفائزين من localStorage
function getWinners() {
    const winners = localStorage.getItem('wheelWinners');
    return winners ? JSON.parse(winners) : [];
}

// تنسيق التاريخ
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('ar-EG', options);
}

// تنسيق الوقت
function formatTime(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// حساب الفرق الزمني
function getTimeDifference(date) {
    const now = new Date();
    const diff = now - date;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `منذ ${days} يوم`;
    if (hours > 0) return `منذ ${hours} ساعة`;
    if (minutes > 0) return `منذ ${minutes} دقيقة`;
    return `منذ ${seconds} ثانية`;
}

// تصفية الفائزين
function filterWinners() {
    const wheelFilter = document.getElementById('wheelFilter').value;
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const winners = getWinners();
    const tableBody = document.getElementById('winnersTableBody');
    const emptyState = document.getElementById('emptyState');

    tableBody.innerHTML = '';

    let filtered = winners.filter(winner => {
        const matchesWheel = !wheelFilter || 
            (wheelFilter === 'normal' && winner.wheel !== 'فخمين') ||
            (wheelFilter === 'فخمين' && winner.wheel === 'فخمين');
        
        const matchesSearch = !searchInput || winner.prize.toLowerCase().includes(searchInput);
        
        return matchesWheel && matchesSearch;
    });

    if (filtered.length === 0) {
        emptyState.style.display = 'block';
        return;
    }

    emptyState.style.display = 'none';

    // ترتيب من الأحدث للأقدم
    const sortedWinners = [...filtered].reverse();

    sortedWinners.forEach((winner, index) => {
        const row = document.createElement('tr');
        const date = new Date(winner.time);
        const formattedDate = formatDate(date);
        const formattedTime = formatTime(date);

        const wheelType = winner.wheel === 'فخمين' ? 'عجلة الفخمين' : 'عجلة الحظ';
        const wheelBadgeClass = winner.wheel === 'فخمين' ? 'vip' : 'normal';

        row.innerHTML = `
            <td class="rank">#${index + 1}</td>
            <td class="prize-name">${winner.prize}</td>
            <td><span class="wheel-badge ${wheelBadgeClass}">${wheelType}</span></td>
            <td class="date-time">
                <div><i class="fas fa-calendar"></i> ${formattedDate}</div>
                <div><i class="fas fa-clock"></i> ${formattedTime}</div>
            </td>
            <td>
                <button class="btn" style="padding: 5px 10px; font-size: 0.9rem;" onclick="showDetails('${winner.value}', '${formattedDate}', '${formattedTime}')">
                    <i class="fas fa-info-circle"></i> التفاصيل
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// عرض تفاصيل الفائز
function showDetails(prizeValue, date, time) {
    alert(`
تفاصيل الجائزة:
━━━━━━━━━━━━━━━━━━
الكود: ${prizeValue}
التاريخ: ${date}
الوقت: ${time}
━━━━━━━━━━━━━━━━━━
    `);
}

// تصدير البيانات إلى CSV
function exportToCSV() {
    const winners = getWinners();
    
    if (winners.length === 0) {
        alert('لا توجد بيانات للتصدير');
        return;
    }

    // إنشاء رأس CSV
    let csv = 'الترتيب,الجائزة,العجلة,التاريخ,الوقت,الكود\n';

    const sortedWinners = [...winners].reverse();
    
    sortedWinners.forEach((winner, index) => {
        const date = new Date(winner.time);
        const formattedDate = formatDate(date);
        const formattedTime = formatTime(date);
        const wheelType = winner.wheel === 'فخمين' ? 'عجلة الفخمين' : 'عجلة الحظ';

        csv += `${index + 1},"${winner.prize}","${wheelType}","${formattedDate}","${formattedTime}","${winner.value}"\n`;
    });

    // إنشاء ملف وتحميله
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `سجل_الفائزين_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// مسح جميع البيانات
function clearAllWinners() {
    if (confirm('هل أنت متأكد من رغبتك في مسح جميع بيانات الفائزين؟\n\nهذا الإجراء غير قابل للتراجع!')) {
        localStorage.removeItem('wheelWinners');
        displayWinners();
        updateStats();
        alert('تم مسح جميع البيانات بنجاح');
    }
}
