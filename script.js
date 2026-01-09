// بيانات المنتجات
const products = [
    // خدمات الديسكورد
    {
        id: 101,
        name: 'Nitro شهر (رابط)',
        price: 200000,
        priceType: 'كردت',
        category: 'discord',
        image: 'https://steamshop.pk/media/catalog/product/cache/dbfbf6e494961de2042b723af340f669/d/i/discord-nitro.jpg',
        rating: 4.9,
        reviews: 520,
        description: 'اشتراك Nitro لمدة شهر برابط تفعيل مباشر'
    },
    {
        id: 102,
        name: 'Nitro شهر',
        price: 24,
        priceType: 'ريال',
        category: 'discord',
        image: 'https://steamshop.pk/media/catalog/product/cache/dbfbf6e494961de2042b723af340f669/d/i/discord-nitro.jpg',
        rating: 4.8,
        reviews: 380,
        description: 'اشتراك Discord Nitro لمدة شهر كامل'
    },
    {
        id: 103,
        name: 'Nitro سنة',
        price: 154,
        priceType: 'ريال',
        category: 'discord',
        image: 'https://steamshop.pk/media/catalog/product/cache/dbfbf6e494961de2042b723af340f669/d/i/discord-nitro.jpg',
        rating: 4.9,
        reviews: 640,
        description: 'اشتراك Discord Nitro لمدة سنة كاملة'
    },
    {
        id: 104,
        name: 'كردت مليون',
        price: 3,
        priceType: 'ريال',
        category: 'discord',
        image: 'https://avatars.githubusercontent.com/u/67172145?s=200&v=4',
        rating: 4.7,
        reviews: 450,
        description: 'مليون كردت ديسكورد بسعر منخفض'
    },

    // خدمات السيرفرات
    {
        id: 105,
        name: '14 بوست',
        price: 24,
        priceType: 'ريال',
        category: 'servers',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxTQm1WBSWHn0W9bIJ4TpO24_Awboo42KPvg&s' ,
        reviews: 310,
        description: '14 بوست للسيرفر مع جودة عالية'
    },
    {
        id: 106,
        name: 'تعديل السيرفر',
        price: 7,
        priceType: 'ريال / 3M كردت',
        category: 'servers',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAACUCAMAAADMOLmaAAAAYFBMVEX///8AAADw8PCTk5NdXV3e3t41NTXDw8NycnJ+fn6Li4vJycmdnZ17e3snJyfMzMwfHx/U1NQ/Pz/o6OgtLS1NTU1iYmL29vatra2zs7OEhIQMDAxpaWlEREQSEhJVVVVYf8YKAAAEuUlEQVR4nO1cbZeyIBAtzZfMSiXfWs3//y+fBLfNAJ0EZXyO99PGzsErwjAMM7PbbdiwYYM5EDt1l0ZqEzhBe28GNnaCYIqhMYL7fQEhmN8MMrzlAIYnKprFzrKIM/rcE4Bh0ArWkNHWjLp9cAAQPLaC99n58Li3Dz4CBI/QV/kSOYlPp5jIJ1pglmFe+HQF3qpCxlGBYf58+TE4w516bwrCLXUzJBeInqiG+rz3ZQPhME5neISpsgE9EXzKChfiZIZ5BWMYSnv83aTcpkkGhKePIXAXlFomDpuDSenkuVOm9MdFMG8VVooNsJ1qT9ohm4S+1f3099wDlBmqIaeMstfiYLMm4ofcGEO2z8d/DdeobeDH3BhDam2m7y2HtoU3BY0xPHP90Ynpc4LGGPqcdqHK4cAJGmNIR+z83nLmWiiMMaQjdnlvScU62xhDh67lN2uhpA28ylZhGF9HMWDbUMPj9hJw6M5XW5zcdIZWGo3jIrfKCzpmbqcRuz1QsDFPZ/hhOslwlXWYN0zgXF6vHtvz9ik/hAq2TQZjKLdtTr8ij8fvXyJTbXbbZmAmeo++6I/Qyp7OML+7l1Gkg94Cr+cliMR2kMpatsYx4iuw/J/XAPoSS9LwWW9HQv+QJI0v98GZZvicLRYhQ2P9HUOIoG6coQ+mS/f2hT9UE9ihV66z/sD20dvRXhZHttzjcYKdCWwIvNUowukx3tNMeEDchzt+C1iOoPxI+zmKwK1YMzLgCLbI49DvIWu3hKjy9aBqz6M/Wb8xjCE+bCmcts9alwoirUM4GnHofYm4ZZjo6pOa2RFIsYCxMVQHY6htHmpgaMVeD2HL0C08PSjclmHYb4wFRxc5wiZaXBtGDcRqYCCmbvagFhVJDRF8HlJhFDnP/YIA2fake53Dsug+HGQQmeOnIIADnk4Q5jyR3Ff1QJ0ggzdMM4F64CGXsrOd9cZg/DRqlUFV3Uu5XjbM0HsZxZUnsQMVGHrH8yiCwUVo9Tx8vpjidIYlTJUNWMjE7YvWQiNpOkPg3ajc+WVxm1Qimo3TGfowhnJN1n3iqLHtrHOB8fc9KgyvIDsnkXbo0f8/bDpuVheyJTh3KqyUuAhHUchXStOfBGzvEKwWY9rG2n90yLzOeu9TlMBUwduQsZXNT1tjDOmDex4jyQZs9va2Z+DTxZJxghtDKWz0Xxn/SiELaBu9GrvUr7FjkEsWuut1t4Radz2tlkP3tnotB/zWF34LFv8pQAv+TlKZ7EpiO42qA8wQv1cEv2cJv3cOv4dzBV7inWXK0+7CL2yw31bsVnDjwwHfrdkn1nLzuDFU6hNbFAH6SAwPezQL+ogg/FFV6CPTzEb3QRY4yzQwECFJKUKsB3qS4nMz5gc4ynQlkbpri3aGnNWGO32LGH/ojxgHRd3XX0TdSxTzf5y5oJ7ZOnv2B/oMGuUsJDZL5sxC0pLJ5c6ZyaWIRbLhlIA/oxB/Vib+zFb82cH4M6wlWer8roIm0383Q6a/YrUEVlNjzmoJyhUnWF2S+SpOrKBqB/rKJ8AQd5PVY/BX4NGCeasY6YHmSlCoq2nhr0iGv6ob/sp4XaCqGYCqC66gQuMKqlyuoFLohg0bNmjHP0SGiFBkboQUAAAAAElFTkSuQmCC',
        rating: 4.8,
        reviews: 280,
        description: 'خدمة تعديل السيرفر كاملة احترافية'
    },
    {
        id: 107,
        name: 'أعضاء (50 عضو)',
        price: 2,
        priceType: 'ريال / 350k كردت',
        category: 'servers',
        image: 'https://img.icons8.com/fluency/256/group.png',
        rating: 4.6,
        reviews: 390,
        description: 'إضافة 50 عضو للسيرفر بسهولة'
    },

    // خدمات شخصية
    {
        id: 108,
        name: 'يوزرات ديسكورد ثلاثي',
        price: 3,
        priceType: 'ريال / 345k كردت',
        category: 'personal',
        image: 'https://img.icons8.com/fluency/256/group.png',
        rating: 4.8,
        reviews: 520,
        description: 'يوزرات ديسكورد قصيرة 3 أحرف فقط'
    },
    {
        id: 109,
        name: 'تصاميم لوجو وبنر',
        price: 9,
        priceType: 'ريال / 6.5M كردت',
        category: 'personal',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt7WwrrPdyNTCkX67XGNBv_C3GtFAktxiYiA&s',
        rating: 4.9,
        reviews: 610,
        description: 'تصاميم لوجو وبنر احترافية عالية الجودة'
    },
    {
        id: 110,
        name: 'Affect 6$',
        price: 9,
        priceType: 'ريال / 3M كردت',
        category: 'personal',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSM8R0rxTkYoe16OUZJfWqnu_PSAtYdwnPXg&s',
        rating: 4.7,
        reviews: 340,
        description: 'افكت احترافي بقيمة 6 دولار'
    },
    {
        id: 111,
        name: 'دعم TikTok - مشاهدات',
        price: 2,
        priceType: 'ريال / 30k كردت (1000 مشاهدة)',
        category: 'personal',
        image: 'https://img.icons8.com/fluency/256/tiktok.png',
        rating: 4.8,
        reviews: 480,
        description: 'كل 1000 مشاهدة بسعر مخفض'
    },
    {
        id: 112,
        name: 'دعم TikTok - لايكات',
        price: 2,
        priceType: 'ريال / 30k كردت (25 لايك)',
        category: 'personal',
        image: 'https://img.icons8.com/fluency/256/tiktok.png',
        rating: 4.8,
        reviews: 420,
        description: 'كل 25 لايك بسعر موفر'
    },
    {
        id: 113,
        name: 'دعم TikTok - إكسبلورر',
        price: 2,
        priceType: 'ريال / 30k كردت (100 إكسبلورر)',
        category: 'personal',
        image: 'https://img.icons8.com/fluency/256/tiktok.png',
        rating: 4.7,
        reviews: 360,
        description: 'كل 100 إكسبلورر بسعر محدود'
    },
    {
        id: 114,
        name: 'بكج العالمي TikTok',
        price: 7,
        priceType: 'ريال',
        category: 'personal',
        image: 'https://img.icons8.com/fluency/256/tiktok.png',
        rating: 4.9,
        reviews: 580,
        description: '5000 مشاهدة + 65 لايك + 100 إكسبلورر - أفضل عرض'
    },

    // خدمات البرمجيات
    {
        id: 115,
        name: 'Ticket System',
        price: 150,
        priceType: 'k كردت',
        category: 'software',
        image: 'https://cdn-icons-png.flaticon.com/128/14890/14890116.png',
        rating: 4.8,
        reviews: 420,
        description: 'نظام تكاتة متقدم وموثوق موجود كثير'
    },
    {
        id: 116,
        name: 'All-in-One Bot',
        price: 300,
        priceType: 'k كردت',
        category: 'software',
        image: 'https://cdn-icons-png.flaticon.com/128/14890/14890116.png',
        rating: 4.9,
        reviews: 650,
        description: 'بوت شامل يحتوي على تكت وسيستم وغيف اوي وبرودكاست وأكثر'
    },
    {
        id: 117,
        name: 'Broadcast Bot',
        price: 150,
        priceType: 'k كردت',
        category: 'software',
        image: 'https://cdn-icons-png.flaticon.com/128/14890/14890116.png',
        rating: 4.7,
        reviews: 380,
        description: 'بوت برودكاست احترافي لإرسال الرسائل'
    },
    {
        id: 118,
        name: 'Auto Line Bot',
        price: 150,
        priceType: 'k كردت',
        category: 'software',
        image: 'https://cdn-icons-png.flaticon.com/128/14890/14890116.png',
        rating: 4.8,
        reviews: 340,
        description: 'بوت خط تلقائي ذكي وفعال'
    },
    {
        id: 119,
        name: 'Giveaway Bot',
        price: 100,
        priceType: 'k كردت',
        category: 'software',
        image: 'https://cdn-icons-png.flaticon.com/128/14890/14890116.png',
        rating: 4.7,
        reviews: 510,
        description: 'بوت غيفاوي قوي مع ميزات متقدمة'
    },
    {
        id: 120,
        name: 'Games Bot',
        price: 100,
        priceType: 'k كردت',
        category: 'software',
        image: 'https://cdn-icons-png.flaticon.com/128/14890/14890116.png',
        rating: 4.8,
        reviews: 590,
        description: 'بوت ألعاب متكامل (روليت، مافيا، أسرع وأكثر)'
    }
];

// صورة افتراضية عند فشل التحميل
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop';

let cart = [];
let currentFilter = '';
let currentSort = '';

// عرض المنتجات
function displayProducts(productsToShow = products) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    productsToShow.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        const priceDisplay = product.priceType ? `${product.price} ${product.priceType}` : `${product.price} ر.س`;
        const imgSrc = (product.image && product.image.trim()) ? product.image : DEFAULT_IMAGE;
        card.innerHTML = `
            <img src="${imgSrc}" onerror="this.onerror=null;this.src='${DEFAULT_IMAGE}';" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-category">${getCategoryName(product.category)}</p>
                <p class="product-price">${priceDisplay}</p>
                <p class="product-rating">★ ${product.rating} (${product.reviews} تقييم)</p>
                <button class="add-btn" onclick="addToCart({
                    id: ${product.id},
                    name: '${product.name}',
                    price: ${product.price},
                    priceType: '${product.priceType || 'ريال'}',
                    image: '${imgSrc}'
                })">إضافة للسلة</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// الحصول على اسم الفئة
function getCategoryName(category) {
    const categories = {
        'discord': 'خدمات الديسكورد',
        'servers': 'خدمات السيرفرات',
        'personal': 'خدمات شخصية',
        'software': 'خدمات البرمجيات'
    };
    return categories[category] || category;
}

// تصفية المنتجات حسب الفئة
function filterProducts(category) {
    currentFilter = category;
    currentSort = '';
    document.getElementById('sortSelect').value = '';
    
    const filtered = category ? products.filter(p => p.category === category) : products;
    displayProducts(filtered);
}

// إعادة تعيين التصفية
function resetFilters() {
    currentFilter = '';
    currentSort = '';
    document.getElementById('sortSelect').value = '';
    displayProducts(products);
}

// ترتيب المنتجات
function sortProducts() {
    const sortValue = document.getElementById('sortSelect').value;
    currentSort = sortValue;
    
    let sortedProducts = [...products];
    
    if (currentFilter) {
        sortedProducts = sortedProducts.filter(p => p.category === currentFilter);
    }

    switch(sortValue) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            sortedProducts.sort((a, b) => b.id - a.id);
            break;
        case 'popular':
            sortedProducts.sort((a, b) => b.rating - a.rating);
            break;
    }

    displayProducts(sortedProducts);
}

// إضافة المنتج للسلة
function addToCart(product) {
    // تأكد من وجود صورة صالحة
    product.image = (product.image && product.image.toString().trim()) ? product.image : DEFAULT_IMAGE;

    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCart();
    
    // عرض رسالة التأكيد
    showNotification(`تم إضافة ${product.name} للسلة!`);
}

// تحديث السلة
function updateCart() {
    updateCartCount();
    updateCartDisplay();
    saveCart();
}

// تحديث عدد المنتجات في السلة
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

// عرض المنتجات في السلة
function updateCartDisplay() {
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p style="text-align: center; padding: 2rem; color: #999;">السلة فارغة</p>';
        return;
    }

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        const cartImg = (item.image && item.image.toString().trim()) ? item.image : DEFAULT_IMAGE;
        itemDiv.innerHTML = `
            <img src="${cartImg}" onerror="this.onerror=null;this.src='${DEFAULT_IMAGE}';" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.price} ${item.priceType || 'ريال'}</div>
                <div class="cart-item-quantity">
                    <button onclick="decreaseQuantity(${item.id})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="increaseQuantity(${item.id})">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItemsDiv.appendChild(itemDiv);
    });

    updateCartTotal();
}

// زيادة الكمية
function increaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += 1;
        updateCart();
    }
}

// تقليل الكمية
function decreaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            removeFromCart(productId);
        }
        updateCart();
    }
}

// إزالة المنتج من السلة
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    showNotification('تم حذف المنتج من السلة');
}

// تحديث الإجمالي
function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cartTotal').textContent = total + ' ر.س';
}

// تبديل عرض السلة
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    sidebar.classList.toggle('active');
}

// الذهاب للدفع
function goToCheckout() {
    if (cart.length === 0) {
        showNotification('السلة فارغة!', 'error');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const orderSummary = cart.map(item => `${item.name} × ${item.quantity}`).join('\n');
    
    alert(`طلبك:\n${orderSummary}\n\nالإجمالي: ${total} ر.س\n\nشكراً لاختيارك TXstore!`);
    
    // تفريغ السلة وتحديث التخزين المحلي قبل التحويل
    cart = [];
    updateCart();
    toggleCart();

    // إعادة توجيه المستخدم إلى قناة ديسكورد المطلوبة
    window.location.href = 'https://discord.com/channels/1392667216776003765/1392667218252271801';
}

// إرسال نموذج الاتصال
function submitForm(event) {
    event.preventDefault();
    showNotification('شكراً! تم استقبال رسالتك بنجاح', 'success');
    event.target.reset();
}

// عرض الإشعارات
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 20px;
        background-color: ${type === 'success' ? '#2ECC71' : '#E74C3C'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// حفظ السلة في التخزين المحلي
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// استعادة السلة من التخزين المحلي
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

// إضافة أنماط الحركة
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(-100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(-100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// تحميل البيانات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    loadCart();

    // إغلاق السلة عند النقر خارجها
    document.addEventListener('click', (e) => {
        const sidebar = document.getElementById('cartSidebar');
        const cartBtn = document.querySelector('.cart-btn');
        
        if (!sidebar.contains(e.target) && !cartBtn.contains(e.target) && sidebar.classList.contains('active')) {
            // لا تغلق إذا كان النقر على الزر
        }
    });

    // تنعيم الانتقال للأقسام
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

// وظيفة البحث
function searchProducts() {
    const searchTerm = document.querySelector('.search-btn').parentElement.querySelector('input')?.value || '';
    if (searchTerm.trim()) {
        const results = products.filter(p => 
            p.name.includes(searchTerm) || p.description.includes(searchTerm)
        );
        displayProducts(results);
    }
}

// دالة مساعدة للحصول على حالة الطقس (اختيارية للمتجر)
function getWeatherGreeting() {
    const hours = new Date().getHours();
    if (hours < 12) {
        return 'صباح الخير!';
    } else if (hours < 18) {
        return 'مساء الخير!';
    } else {
        return 'مساء السعادة!';
    }
}

console.log('%cمرحباً في TXstore', 'color: #FF6B6B; font-size: 20px; font-weight: bold');
console.log('%cنسعد برؤيتك معنا!', 'color: #4A90E2; font-size: 14px');
