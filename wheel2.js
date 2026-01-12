// جوائز عجلة الفخمين (جوائز فاخرة وحصرية)
const prizes = [
    { name: '🏆500K  ', value: 'diamond_legend', color: '#1e3a5f' },
    { name: '🏆350K  ', value: 'kings_crown', color: '#c41e3a' },
    { name: '🏆95K  ', value: 'gold_award', color: '#ffd700' },
    { name: '🏆15K', value: 'shining_star', color: '#ff1493' },
    { name: '🏆10K ', value: 'treasure_wealth', color: '#ff6347' },
    { name: '🏆5K ', value: 'special_light', color: '#ffb347' },
    { name: '🏆1K ', value: 'exclusive_show', color: '#9370db' },
    { name: '🏆اعلان مجاني  ', value: 'royal_festival', color: '#dc143c' },
    { name: '🏆 حظ اوفر ', value: 'vip_pass', color: '#00b894' },
    { name: '🏆 اعادة العجلة', value: 'legendary_trophy', color: '#8b0000' }
];

let isSpinning = false;
let selectedPrize = null;

// إنشاء العجلة بـ SVG
function createWheel() {
    const wheel = document.getElementById('wheel');
    const segmentAngle = 360 / prizes.length;
    
    prizes.forEach((prize, index) => {
        const angle = (index * segmentAngle) * (Math.PI / 180);
        const nextAngle = ((index + 1) * segmentAngle) * (Math.PI / 180);
        
        // حساب نقاط القطاع
        const radius = 150;
        const startX = 150 + radius * Math.cos(angle - Math.PI / 2);
        const startY = 150 + radius * Math.sin(angle - Math.PI / 2);
        const endX = 150 + radius * Math.cos(nextAngle - Math.PI / 2);
        const endY = 150 + radius * Math.sin(nextAngle - Math.PI / 2);
        
        // إنشاء القطاع (Path)
        const largeArc = segmentAngle > 180 ? 1 : 0;
        const pathData = `
            M 150 150
            L ${startX} ${startY}
            A ${radius} ${radius} 0 ${largeArc} 1 ${endX} ${endY}
            Z
        `;
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', pathData);
        path.setAttribute('fill', prize.color);
        path.setAttribute('stroke', '#ffd700');
        path.setAttribute('stroke-width', '3');
        
        wheel.appendChild(path);
        
        // إضافة النص
        const textAngle = angle + (nextAngle - angle) / 2;
        const textRadius = 100;
        const textX = 150 + textRadius * Math.cos(textAngle - Math.PI / 2);
        const textY = 150 + textRadius * Math.sin(textAngle - Math.PI / 2);
        
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', textX);
        text.setAttribute('y', textY);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('dominant-baseline', 'middle');
        text.setAttribute('fill', 'white');
        text.setAttribute('font-size', '12');
        text.setAttribute('font-weight', 'bold');
        text.setAttribute('transform', `rotate(${(textAngle * 180 / Math.PI)}, ${textX}, ${textY})`);
        text.textContent = prize.name.substring(0, 8);
        
        wheel.appendChild(text);
    });
}

// دالة الدوران
function spinWheel() {
    if (isSpinning) return;
    
    const spinBtn = document.getElementById('spinBtn');
    spinBtn.disabled = true;
    isSpinning = true;
    
    const wheel = document.getElementById('wheel');
    
    // رقم عشوائي للدوران (يجب أن يكون بين 0 و 360)
    const randomDegree = Math.floor(Math.random() * 360);
    const spinDegrees = 360 * 5 + randomDegree; // 5 دورات كاملة + زاوية عشوائية
    
    // تطبيق التدوير
    wheel.style.transform = `rotate(${spinDegrees}deg)`;
    wheel.style.transition = 'transform 4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    // بعد انتهاء الدوران
    setTimeout(() => {
        wheel.style.transition = 'none';
        wheel.style.transform = `rotate(${randomDegree}deg)`;
        isSpinning = false;
        
        // تحديد الجائزة الفائزة
        const segmentIndex = Math.floor((360 - randomDegree) / (360 / prizes.length)) % prizes.length;
        selectedPrize = prizes[segmentIndex];
        
        // عرض نافذة الفوز
        showWinnerModal();
        
        spinBtn.disabled = false;
    }, 4000);
}

// عرض نافذة الفوز
function showWinnerModal() {
    const modal = document.getElementById('winnerModal');
    const prizeDisplay = document.getElementById('prizeDisplay');
    const winnerIcon = document.getElementById('winnerIcon');
    
    prizeDisplay.textContent = selectedPrize.name;
    prizeDisplay.style.backgroundColor = selectedPrize.color;
    
    // تغيير الأيقونة حسب الجائزة
    const iconMap = {
        'diamond_legend': '💎',
        'kings_crown': '👑',
        'gold_award': '🏆',
        'shining_star': '✨',
        'treasure_wealth': '💰',
        'special_light': '🌟',
        'exclusive_show': '🎭',
        'royal_festival': '🎪',
        'vip_pass': '🎟️',
        'legendary_trophy': '🏅'
    };
    
    winnerIcon.textContent = iconMap[selectedPrize.value] || '👑';
    
    modal.classList.add('active');
    
    // Countdown للعودة
    let countdown = 20;
    const countdownEl = document.getElementById('countdown');
    
    const countdownInterval = setInterval(() => {
        countdown--;
        countdownEl.textContent = countdown;
        
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            goToHome();
        }
    }, 1000);
    
    // حفظ الجائزة في localStorage
    saveWinnerData();
}

// حفظ بيانات الفائز
function saveWinnerData() {
    const winnerData = {
        prize: selectedPrize.name,
        time: new Date().toISOString(),
        value: selectedPrize.value,
        wheel: 'فخمين'
    };
    
    let winners = JSON.parse(localStorage.getItem('wheelWinners')) || [];
    winners.push(winnerData);
    localStorage.setItem('wheelWinners', JSON.stringify(winners));
}

// الذهاب للصفحة الرئيسية
function goToHome() {
    window.location.href = 'index.html';
}

// إنشاء العجلة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    createWheel();
});
