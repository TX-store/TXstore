// بيانات المنتجات
const products = [
    // خدمات الديسكورد
    {
        id: 101,
        name: 'Nitro شهر (رابط)',
        price: 200000,
        priceType: 'كردت',
        category: 'discord',
        image: 'https://cdn.salla.sa/rKpdp/a5a0d542-f182-472b-a257-0a9c6aa2a983-500x500-3OTXyrL4b0JVNqSknTUL7Nfbh3fwpIkOFfZJM7Wr.jpg',
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
        image: 'https://cdn.salla.sa/rKpdp/a5a0d542-f182-472b-a257-0a9c6aa2a983-500x500-3OTXyrL4b0JVNqSknTUL7Nfbh3fwpIkOFfZJM7Wr.jpg',
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
        image: 'https://cdn.salla.sa/rKpdp/a5a0d542-f182-472b-a257-0a9c6aa2a983-500x500-3OTXyrL4b0JVNqSknTUL7Nfbh3fwpIkOFfZJM7Wr.jpg',
        rating: 4.9,
        reviews: 640,
        description: 'اشتراك Discord Nitro لمدة سنة كاملة'
    },
    {
        id: 104,
        name: 'كردت مليون',
        price: 2.5,
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
        image: 'https://postcdn.haraj.com.sa/userfiles30/2025-04-11/1080x1080_78D3B8DD-47A1-4874-80F4-E86ABEB2BE97.jpg-700.webp' ,
        reviews: 310,
        description: '14 بوست للسيرفر مع جودة عالية'
    },
    {
        id: 106,
        name: 'تعديل السيرفر',
        price: 7,
        priceType: 'ريال / 3M كردت',
        category: 'servers',
        image: 'https://cdn.discordapp.com/attachments/1396377051052769313/1460561408491130891/5_4_10001250_1.jpg?ex=69675d4f&is=69660bcf&hm=58688c455f30c87cab210b40e7fd1bdcbc6bcd61a3a226a9ee0b4aa11ab38211&',
        reviews: 280,
        description: 'خدمة تعديل السيرفر كاملة احترافية'
    },
    {
        id: 107,
        name: 'أعضاء (50 عضو)',
        price: 2,
        priceType: 'ريال / 350k كردت',
        category: 'servers',
        image: 'https://cdn.discordapp.com/attachments/1396377051052769313/1459512802241810554/5447b18f3ff226459b66481a3a684808.jpg?ex=6966d878&is=696586f8&hm=4d5b9852236692aaa59c76fa2c46d9be35e040947931aeec07f6a03ae1f8df55&',
        rating: 4.6,
        reviews: 390,
        description: 'إضافة 50 عضو للسيرفر بسهولة'
    },
    {
        id: 108,
        name: 'نسخ سيرفرات',
        price: 1,
        priceType: 'ريال / 35k كردت',
        category: 'servers',
        image: 'https://media.discordapp.net/attachments/1459228068043428037/1460129126026445040/096cd9e22f00103e.jpg?ex=6965cab7&is=69647937&hm=e97ceee8eb274b3844d4674f71906a0e7de58a88ebefc381cd9b5eb3af7fe42d&=&format=webp&width=1600&height=1568',
        reviews: 290,
        description: 'نسخ احترافية من السيرفرات الجاهزة'
    },

    // خدمات شخصية
    {
        id: 109,
        name: 'يوزرات ديسكورد ',
        price: 3,
        priceType: 'ريال / 345k كردت',
        category: 'personal',
        image: 'https://media.discordapp.net/attachments/1459228068043428037/1460129126987071538/37fbe79580634367.jpg?ex=6965cab7&is=69647937&hm=d8b3b8204e029f17f89aa64725a85fb64572e9e6e1535be319cfef700fda8d8a&=&format=webp&width=1600&height=1568',
        rating: 4.8,
        reviews: 520,
        description: 'يوزرات ديسكورد قصيرة 3 أحرف فقط'
    },
    {
        id: 110,
        name: 'تصاميم لوجو وبنر',
        price: 9,
        priceType: 'ريال / 6.5M كردت',
        category: 'personal',
        image: 'https://media.discordapp.net/attachments/1459228068043428037/1460129126571839674/e8506b05a509d583.jpg?ex=6965cab7&is=69647937&hm=19e1e97d08173ccc8f12bff224ed2f3933e18ef562153f973fd31b7d2014b542&=&format=webp&width=1600&height=1568',
        rating: 4.9,
        reviews: 610,
        description: 'تصاميم لوجو وبنر احترافية عالية الجودة'
    },
    {
        id: 111,
        name: 'effect 6$',
        price: 9,
        priceType: 'ريال / 3M كردت',
        category: 'personal',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSM8R0rxTkYoe16OUZJfWqnu_PSAtYdwnPXg&s',
        rating: 4.7,
        reviews: 340,
        description: 'افكت احترافي بقيمة 6 دولار'
    },
    {
        id: 112,
        name: 'دعم TikTok - مشاهدات',
        price: 2,
        priceType: 'ريال / 30k كردت (1000 مشاهدة)',
        category: 'personal',
        image: 'https://cdn.salla.sa/rKpdp/98c3d139-55de-4743-9cbf-418ee7704c95-500x500-C0CsJgVFR7zZth4lritXblvAhYSI0ZFctuht69kP.jpg',
        rating: 4.8,
        reviews: 480,
        description: 'كل 1000 مشاهدة بسعر مخفض'
    },
    {
        id: 113,
        name: 'دعم TikTok - لايكات',
        price: 2,
        priceType: 'ريال / 30k كردت (25 لايك)',
        category: 'personal',
        image: 'https://cdn.salla.sa/rKpdp/90e71cd0-6ee3-4fbd-90c6-793265d46c6c-500x500-XQQ3gZYI2NXh04CsGo3wXtiResp18wrWhLsSP7Wp.jpg',
        rating: 4.8,
        reviews: 420,
        description: 'كل 25 لايك بسعر موفر'
    },
    {
        id: 114,
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
        id: 115,
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
        id: 116,
        name: 'Ticket System',
        price: 150,
        priceType: 'k كردت',
        category: 'software',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUMjK12KrcUuLhexHkD7O8i08guO10e7F1wg&s',
        rating: 4.8,
        reviews: 420,
        description: 'نظام تكاتة متقدم وموثوق موجود كثير'
    },
    {
        id: 117,
        name: 'All-in-One Bot',
        price: 300,
        priceType: 'k كردت',
        category: 'software',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAACUCAMAAADf7/luAAAAY1BMVEX///8AAAC9vb3d3d2YmJiVlZVISEjh4eHZ2dkTExM6Ojr39/dlZWVoaGjw8PCpqalDQ0PNzc3n5+dWVlYyMjKfn58jIyMeHh6ysrJxcXGOjo5fX1/GxsYYGBgrKyuFhYV9fX2CW4ZaAAAEiElEQVR4nO2b6bqiMAxABRRZpOzIJvD+Tzk01WtZdT7CcmdyfuFcjcdC05AypxNBEARBEARBEARBEARB/BMwvzTY3hJf4BfV/XGvCn9vkQ8EmfIiC/aWmSMIlTfhgVXtTJHJ7L2FJklBMMrqLIKjdG+hKWyd6+lae6iJw6MOagADKRIUg+OjXqkqlzs/X5z5C3VXn2lcWQ603V19pkllOffIU8qQZpGYXcbORlPYD26Xw3HODx9HnftiFimhqqlirTp//shOBF5njfKOmqRayo5pubfOHP79x/N+8LovyC3wtPIDn/onBq9OoqPmJxmbD6p12PwkQab4kCk+ZIoPmeJzGFPmp/FllqQ1TebfEqf+6j02N0wUDJJw3btB30LRFFgrloUqoidntXZA+UA2fax0VxCIet6rfW0pfi3uuO7rlNui5YhUyzO4zVYylGD92EIULZ5QXSNZQWTE5q1oC+P98je3Nq6JOVtVs414Qwz4hPG2iIV5shhPziH+6b/ylpiOGhIiXlFDcsgU3zRYyRQx919Tl3OOxk1Z2f5dnZsXTHXdtBx5BzeNzhA9RRhaVy6fhqaxzqvAh15PBqh1Xi4kejxq+sJaXATmnZKib2pIP2O8hvMlmX6vSu/EXrgGaOacqSaPdzJWGJWVPG7anKmpjXz+e86dYH3T7lclw5XWTr7/+MJeuwMh1Ja4GnxVDF/g5Wos2vrN4OMN/HsYqxdR5XWvVW5axTw4DIizyJQv9g84LcMsZRc8Pmzj2zUMan9+MxjSmo+12PgvOsP+zlIan3TLSgAoS2AmDDO/z0e5em6TcutB/QI1SPF8B7y7M+3emd8wUcZ0ylSVzzhcCZfepy/yGYcrofNbtjWN5Rf9RJPLcvHOpq/bi89jmu1nClsPiVgGoXo1+xm15ALPx1GufHZ1Nyo2M7VvMJ15ZhAze5BQRTpt+JTSIFHchnN/C1OxMa5EWdyItWq49tci4zbx88GU7uK+nelJfuZotL9nd7tDRfevG5oG8noYjZUofiS9o1+Lbmh6uhbvER3f1ZOqraJfNG9pejqlBVepwmH1+SIO+epkFcMnPbY1PdmGmqqzfVvmt+8wRloaG5sugEzJlB/9r6beKqYelimUv5beYpmrmJoiOFQyi4L1dkvwTSWW9WaZ/rXpeLd6rofdjb20k2p435myMHLKQX1aOtGMQMfUW/w0EMsLfiXp3vx1Che06bilcWWcq1HGjjl/+cF16kH0IsfoTbNrS+DPzn3beY3NXS9uzq3Qfx5GcyYvAJj7fsDDY/bQP/RPa2WK6S4gdv/0yYfMbzfRqGfUTM+pvbrnRprde5r3LJ2bJ/v1+W1muI1XJZzKa1yDze+z7b8jYdvf7QSutSPxa3bOoJVqYj72ni4vS8aJMZY8CWgQKdN3igsiK/Mrzt8i+tWrPOIjkruDk6oD58OysAQmihWzSdWlpI3Yk/FWemrKx3lU6k2y2nNIyKrribbp3/n8/V/j4Cd9ibY2xvIc1N3otIv7eSnur/hPvgRBEARBEARBEARBEATxm/gD4nc82ufB1cMAAAAASUVORK5CYII=',
        rating: 4.9,
        reviews: 650,
        description: 'بوت شامل يحتوي على تكت وسيستم وغيف اوي وبرودكاست وأكثر'
    },
    {
        id: 118,
        name: 'Broadcast Bot',
        price: 150,
        priceType: 'k كردت',
        category: 'software',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAACUCAMAAADf7/luAAAAY1BMVEX///8AAAC9vb3d3d2YmJiVlZVISEjh4eHZ2dkTExM6Ojr39/dlZWVoaGjw8PCpqalDQ0PNzc3n5+dWVlYyMjKfn58jIyMeHh6ysrJxcXGOjo5fX1/GxsYYGBgrKyuFhYV9fX2CW4ZaAAAEiElEQVR4nO2b6bqiMAxABRRZpOzIJvD+Tzk01WtZdT7CcmdyfuFcjcdC05AypxNBEARBEARBEARBEARB/BMwvzTY3hJf4BfV/XGvCn9vkQ8EmfIiC/aWmSMIlTfhgVXtTJHJ7L2FJklBMMrqLIKjdG+hKWyd6+lae6iJw6MOagADKRIUg+OjXqkqlzs/X5z5C3VXn2lcWQ603V19pkllOffIU8qQZpGYXcbORlPYD26Xw3HODx9HnftiFimhqqlirTp//shOBF5njfKOmqRayo5pubfOHP79x/N+8LovyC3wtPIDn/onBq9OoqPmJxmbD6p12PwkQab4kCk+ZIoPmeJzGFPmp/FllqQ1TebfEqf+6j02N0wUDJJw3btB30LRFFgrloUqoidntXZA+UA2fax0VxCIet6rfW0pfi3uuO7rlNui5YhUyzO4zVYylGD92EIULZ5QXSNZQWTE5q1oC+P98je3Nq6JOVtVs414Qwz4hPG2iIV5shhPziH+6b/ylpiOGhIiXlFDcsgU3zRYyRQx919Tl3OOxk1Z2f5dnZsXTHXdtBx5BzeNzhA9RRhaVy6fhqaxzqvAh15PBqh1Xi4kejxq+sJaXATmnZKib2pIP2O8hvMlmX6vSu/EXrgGaOacqSaPdzJWGJWVPG7anKmpjXz+e86dYH3T7lclw5XWTr7/+MJeuwMh1Ja4GnxVDF/g5Wos2vrN4OMN/HsYqxdR5XWvVW5axTw4DIizyJQv9g84LcMsZRc8Pmzj2zUMan9+MxjSmo+12PgvOsP+zlIan3TLSgAoS2AmDDO/z0e5em6TcutB/QI1SPF8B7y7M+3emd8wUcZ0ylSVzzhcCZfepy/yGYcrofNbtjWN5Rf9RJPLcvHOpq/bi89jmu1nClsPiVgGoXo1+xm15ALPx1GufHZ1Nyo2M7VvMJ15ZhAze5BQRTpt+JTSIFHchnN/C1OxMa5EWdyItWq49tci4zbx88GU7uK+nelJfuZotL9nd7tDRfevG5oG8noYjZUofiS9o1+Lbmh6uhbvER3f1ZOqraJfNG9pejqlBVepwmH1+SIO+epkFcMnPbY1PdmGmqqzfVvmt+8wRloaG5sugEzJlB/9r6beKqYelimUv5beYpmrmJoiOFQyi4L1dkvwTSWW9WaZ/rXpeLd6rofdjb20k2p435myMHLKQX1aOtGMQMfUW/w0EMsLfiXp3vx1Che06bilcWWcq1HGjjl/+cF16kH0IsfoTbNrS+DPzn3beY3NXS9uzq3Qfx5GcyYvAJj7fsDDY/bQP/RPa2WK6S4gdv/0yYfMbzfRqGfUTM+pvbrnRprde5r3LJ2bJ/v1+W1muI1XJZzKa1yDze+z7b8jYdvf7QSutSPxa3bOoJVqYj72ni4vS8aJMZY8CWgQKdN3igsiK/Mrzt8i+tWrPOIjkruDk6oD58OysAQmihWzSdWlpI3Yk/FWemrKx3lU6k2y2nNIyKrribbp3/n8/V/j4Cd9ibY2xvIc1N3otIv7eSnur/hPvgRBEARBEARBEARBEATxm/gD4nc82ufB1cMAAAAASUVORK5CYII=',
        rating: 4.7,
        reviews: 380,
        description: 'بوت برودكاست احترافي لإرسال الرسائل'
    },
    {
        id: 119,
        name: 'Auto Line Bot',
        price: 150,
        priceType: 'k كردت',
        category: 'software',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAACUCAMAAADf7/luAAAAY1BMVEX///8AAAC9vb3d3d2YmJiVlZVISEjh4eHZ2dkTExM6Ojr39/dlZWVoaGjw8PCpqalDQ0PNzc3n5+dWVlYyMjKfn58jIyMeHh6ysrJxcXGOjo5fX1/GxsYYGBgrKyuFhYV9fX2CW4ZaAAAEiElEQVR4nO2b6bqiMAxABRRZpOzIJvD+Tzk01WtZdT7CcmdyfuFcjcdC05AypxNBEARBEARBEARBEARB/BMwvzTY3hJf4BfV/XGvCn9vkQ8EmfIiC/aWmSMIlTfhgVXtTJHJ7L2FJklBMMrqLIKjdG+hKWyd6+lae6iJw6MOagADKRIUg+OjXqkqlzs/X5z5C3VXn2lcWQ603V19pkllOffIU8qQZpGYXcbORlPYD26Xw3HODx9HnftiFimhqqlirTp//shOBF5njfKOmqRayo5pubfOHP79x/N+8LovyC3wtPIDn/onBq9OoqPmJxmbD6p12PwkQab4kCk+ZIoPmeJzGFPmp/FllqQ1TebfEqf+6j02N0wUDJJw3btB30LRFFgrloUqoidntXZA+UA2fax0VxCIet6rfW0pfi3uuO7rlNui5YhUyzO4zVYylGD92EIULZ5QXSNZQWTE5q1oC+P98je3Nq6JOVtVs414Qwz4hPG2iIV5shhPziH+6b/ylpiOGhIiXlFDcsgU3zRYyRQx919Tl3OOxk1Z2f5dnZsXTHXdtBx5BzeNzhA9RRhaVy6fhqaxzqvAh15PBqh1Xi4kejxq+sJaXATmnZKib2pIP2O8hvMlmX6vSu/EXrgGaOacqSaPdzJWGJWVPG7anKmpjXz+e86dYH3T7lclw5XWTr7/+MJeuwMh1Ja4GnxVDF/g5Wos2vrN4OMN/HsYqxdR5XWvVW5axTw4DIizyJQv9g84LcMsZRc8Pmzj2zUMan9+MxjSmo+12PgvOsP+zlIan3TLSgAoS2AmDDO/z0e5em6TcutB/QI1SPF8B7y7M+3emd8wUcZ0ylSVzzhcCZfepy/yGYcrofNbtjWN5Rf9RJPLcvHOpq/bi89jmu1nClsPiVgGoXo1+xm15ALPx1GufHZ1Nyo2M7VvMJ15ZhAze5BQRTpt+JTSIFHchnN/C1OxMa5EWdyItWq49tci4zbx88GU7uK+nelJfuZotL9nd7tDRfevG5oG8noYjZUofiS9o1+Lbmh6uhbvER3f1ZOqraJfNG9pejqlBVepwmH1+SIO+epkFcMnPbY1PdmGmqqzfVvmt+8wRloaG5sugEzJlB/9r6beKqYelimUv5beYpmrmJoiOFQyi4L1dkvwTSWW9WaZ/rXpeLd6rofdjb20k2p435myMHLKQX1aOtGMQMfUW/w0EMsLfiXp3vx1Che06bilcWWcq1HGjjl/+cF16kH0IsfoTbNrS+DPzn3beY3NXS9uzq3Qfx5GcyYvAJj7fsDDY/bQP/RPa2WK6S4gdv/0yYfMbzfRqGfUTM+pvbrnRprde5r3LJ2bJ/v1+W1muI1XJZzKa1yDze+z7b8jYdvf7QSutSPxa3bOoJVqYj72ni4vS8aJMZY8CWgQKdN3igsiK/Mrzt8i+tWrPOIjkruDk6oD58OysAQmihWzSdWlpI3Yk/FWemrKx3lU6k2y2nNIyKrribbp3/n8/V/j4Cd9ibY2xvIc1N3otIv7eSnur/hPvgRBEARBEARBEARBEATxm/gD4nc82ufB1cMAAAAASUVORK5CYII=',
        rating: 4.8,
        reviews: 340,
        description: 'بوت خط تلقائي ذكي وفعال'
    },
    {
        id: 120,
        name: 'Giveaway Bot',
        price: 100,
        priceType: 'k كردت',
        category: 'software',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAACUCAMAAADf7/luAAAAY1BMVEX///8AAAC9vb3d3d2YmJiVlZVISEjh4eHZ2dkTExM6Ojr39/dlZWVoaGjw8PCpqalDQ0PNzc3n5+dWVlYyMjKfn58jIyMeHh6ysrJxcXGOjo5fX1/GxsYYGBgrKyuFhYV9fX2CW4ZaAAAEiElEQVR4nO2b6bqiMAxABRRZpOzIJvD+Tzk01WtZdT7CcmdyfuFcjcdC05AypxNBEARBEARBEARBEARB/BMwvzTY3hJf4BfV/XGvCn9vkQ8EmfIiC/aWmSMIlTfhgVXtTJHJ7L2FJklBMMrqLIKjdG+hKWyd6+lae6iJw6MOagADKRIUg+OjXqkqlzs/X5z5C3VXn2lcWQ603V19pkllOffIU8qQZpGYXcbORlPYD26Xw3HODx9HnftiFimhqqlirTp//shOBF5njfKOmqRayo5pubfOHP79x/N+8LovyC3wtPIDn/onBq9OoqPmJxmbD6p12PwkQab4kCk+ZIoPmeJzGFPmp/FllqQ1TebfEqf+6j02N0wUDJJw3btB30LRFFgrloUqoidntXZA+UA2fax0VxCIet6rfW0pfi3uuO7rlNui5YhUyzO4zVYylGD92EIULZ5QXSNZQWTE5q1oC+P98je3Nq6JOVtVs414Qwz4hPG2iIV5shhPziH+6b/ylpiOGhIiXlFDcsgU3zRYyRQx919Tl3OOxk1Z2f5dnZsXTHXdtBx5BzeNzhA9RRhaVy6fhqaxzqvAh15PBqh1Xi4kejxq+sJaXATmnZKib2pIP2O8hvMlmX6vSu/EXrgGaOacqSaPdzJWGJWVPG7anKmpjXz+e86dYH3T7lclw5XWTr7/+MJeuwMh1Ja4GnxVDF/g5Wos2vrN4OMN/HsYqxdR5XWvVW5axTw4DIizyJQv9g84LcMsZRc8Pmzj2zUMan9+MxjSmo+12PgvOsP+zlIan3TLSgAoS2AmDDO/z0e5em6TcutB/QI1SPF8B7y7M+3emd8wUcZ0ylSVzzhcCZfepy/yGYcrofNbtjWN5Rf9RJPLcvHOpq/bi89jmu1nClsPiVgGoXo1+xm15ALPx1GufHZ1Nyo2M7VvMJ15ZhAze5BQRTpt+JTSIFHchnN/C1OxMa5EWdyItWq49tci4zbx88GU7uK+nelJfuZotL9nd7tDRfevG5oG8noYjZUofiS9o1+Lbmh6uhbvER3f1ZOqraJfNG9pejqlBVepwmH1+SIO+epkFcMnPbY1PdmGmqqzfVvmt+8wRloaG5sugEzJlB/9r6beKqYelimUv5beYpmrmJoiOFQyi4L1dkvwTSWW9WaZ/rXpeLd6rofdjb20k2p435myMHLKQX1aOtGMQMfUW/w0EMsLfiXp3vx1Che06bilcWWcq1HGjjl/+cF16kH0IsfoTbNrS+DPzn3beY3NXS9uzq3Qfx5GcyYvAJj7fsDDY/bQP/RPa2WK6S4gdv/0yYfMbzfRqGfUTM+pvbrnRprde5r3LJ2bJ/v1+W1muI1XJZzKa1yDze+z7b8jYdvf7QSutSPxa3bOoJVqYj72ni4vS8aJMZY8CWgQKdN3igsiK/Mrzt8i+tWrPOIjkruDk6oD58OysAQmihWzSdWlpI3Yk/FWemrKx3lU6k2y2nNIyKrribbp3/n8/V/j4Cd9ibY2xvIc1N3otIv7eSnur/hPvgRBEARBEARBEARBEATxm/gD4nc82ufB1cMAAAAASUVORK5CYII=',
        rating: 4.7,
        reviews: 510,
        description: 'بوت غيفاوي قوي مع ميزات متقدمة'
    },
    {
        id: 121,
        name: 'Games Bot',
        price: 100,
        priceType: 'k كردت',
        category: 'software',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAACUCAMAAADf7/luAAAAY1BMVEX///8AAAC9vb3d3d2YmJiVlZVISEjh4eHZ2dkTExM6Ojr39/dlZWVoaGjw8PCpqalDQ0PNzc3n5+dWVlYyMjKfn58jIyMeHh6ysrJxcXGOjo5fX1/GxsYYGBgrKyuFhYV9fX2CW4ZaAAAEiElEQVR4nO2b6bqiMAxABRRZpOzIJvD+Tzk01WtZdT7CcmdyfuFcjcdC05AypxNBEARBEARBEARBEARB/BMwvzTY3hJf4BfV/XGvCn9vkQ8EmfIiC/aWmSMIlTfhgVXtTJHJ7L2FJklBMMrqLIKjdG+hKWyd6+lae6iJw6MOagADKRIUg+OjXqkqlzs/X5z5C3VXn2lcWQ603V19pkllOffIU8qQZpGYXcbORlPYD26Xw3HODx9HnftiFimhqqlirTp//shOBF5njfKOmqRayo5pubfOHP79x/N+8LovyC3wtPIDn/onBq9OoqPmJxmbD6p12PwkQab4kCk+ZIoPmeJzGFPmp/FllqQ1TebfEqf+6j02N0wUDJJw3btB30LRFFgrloUqoidntXZA+UA2fax0VxCIet6rfW0pfi3uuO7rlNui5YhUyzO4zVYylGD92EIULZ5QXSNZQWTE5q1oC+P98je3Nq6JOVtVs414Qwz4hPG2iIV5shhPziH+6b/ylpiOGhIiXlFDcsgU3zRYyRQx919Tl3OOxk1Z2f5dnZsXTHXdtBx5BzeNzhA9RRhaVy6fhqaxzqvAh15PBqh1Xi4kejxq+sJaXATmnZKib2pIP2O8hvMlmX6vSu/EXrgGaOacqSaPdzJWGJWVPG7anKmpjXz+e86dYH3T7lclw5XWTr7/+MJeuwMh1Ja4GnxVDF/g5Wos2vrN4OMN/HsYqxdR5XWvVW5axTw4DIizyJQv9g84LcMsZRc8Pmzj2zUMan9+MxjSmo+12PgvOsP+zlIan3TLSgAoS2AmDDO/z0e5em6TcutB/QI1SPF8B7y7M+3emd8wUcZ0ylSVzzhcCZfepy/yGYcrofNbtjWN5Rf9RJPLcvHOpq/bi89jmu1nClsPiVgGoXo1+xm15ALPx1GufHZ1Nyo2M7VvMJ15ZhAze5BQRTpt+JTSIFHchnN/C1OxMa5EWdyItWq49tci4zbx88GU7uK+nelJfuZotL9nd7tDRfevG5oG8noYjZUofiS9o1+Lbmh6uhbvER3f1ZOqraJfNG9pejqlBVepwmH1+SIO+epkFcMnPbY1PdmGmqqzfVvmt+8wRloaG5sugEzJlB/9r6beKqYelimUv5beYpmrmJoiOFQyi4L1dkvwTSWW9WaZ/rXpeLd6rofdjb20k2p435myMHLKQX1aOtGMQMfUW/w0EMsLfiXp3vx1Che06bilcWWcq1HGjjl/+cF16kH0IsfoTbNrS+DPzn3beY3NXS9uzq3Qfx5GcyYvAJj7fsDDY/bQP/RPa2WK6S4gdv/0yYfMbzfRqGfUTM+pvbrnRprde5r3LJ2bJ/v1+W1muI1XJZzKa1yDze+z7b8jYdvf7QSutSPxa3bOoJVqYj72ni4vS8aJMZY8CWgQKdN3igsiK/Mrzt8i+tWrPOIjkruDk6oD58OysAQmihWzSdWlpI3Yk/FWemrKx3lU6k2y2nNIyKrribbp3/n8/V/j4Cd9ibY2xvIc1N3otIv7eSnur/hPvgRBEARBEARBEARBEATxm/gD4nc82ufB1cMAAAAASUVORK5CYII=',
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

// تأكد من وجود حقول افتراضية لكل منتج حتى تعمل صفحة التفاصيل والسلة بشكل موثوق
function normalizeProducts() {
    products.forEach(p => {
        if (!p.hasOwnProperty('description') || !p.description) p.description = 'لا يوجد وصف متاح لهذا المنتج.';
        if (!p.hasOwnProperty('rating') || typeof p.rating !== 'number') p.rating = 0;
        if (!p.hasOwnProperty('reviews') || typeof p.reviews !== 'number') p.reviews = 0;
        if (!p.hasOwnProperty('priceType') || !p.priceType) p.priceType = 'ريال';
        if (!p.hasOwnProperty('image') || !p.image || !p.image.toString().trim()) p.image = DEFAULT_IMAGE;
    });
}

// تشغيل التطبيع فورًا
normalizeProducts();

// عرض المنتجات
function displayProducts(productsToShow = products) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    productsToShow.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';

        const priceDisplay = product.priceType ? `${product.price} ${product.priceType}` : `${product.price} ر.س`;
        const imgSrc = (product.image && product.image.toString().trim()) ? product.image : DEFAULT_IMAGE;

        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = product.name;
        img.className = 'product-image';
        img.onerror = function() { this.onerror = null; this.src = DEFAULT_IMAGE; };

        const info = document.createElement('div');
        info.className = 'product-info';

        const h3 = document.createElement('h3');
        h3.className = 'product-name';
        h3.textContent = product.name;

        const cat = document.createElement('p');
        cat.className = 'product-category';
        cat.textContent = getCategoryName(product.category);

        const price = document.createElement('p');
        price.className = 'product-price';
        price.textContent = priceDisplay;

        const rating = document.createElement('p');
        rating.className = 'product-rating';
        rating.textContent = `★ ${product.rating} (${product.reviews} تقييم)`;

        const addBtn = document.createElement('button');
        addBtn.className = 'add-btn';
        addBtn.textContent = 'إضافة للسلة';
        addBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                priceType: product.priceType || 'ريال',
                image: imgSrc
            });
        });

        info.appendChild(h3);
        info.appendChild(cat);
        info.appendChild(price);
        info.appendChild(rating);
        info.appendChild(addBtn);

        card.appendChild(img);
        card.appendChild(info);
        grid.appendChild(card);

        // افتح صفحة تفاصيل المنتج عند النقر على البطاقة (ما عدا الأزرار)
        card.addEventListener('click', (e) => {
            if (e.target.closest('button')) return;
            window.location.href = `product.html?id=${product.id}`;
        });
    });
}

// إدارة وصول الأدمن من الصفحة الرئيسية
document.addEventListener('DOMContentLoaded', () => {
    const adminBtn = document.getElementById('adminBtn');
    const adminLogin = document.getElementById('adminLogin');
    const adminSubmit = document.getElementById('adminSubmit');
    const adminPassInput = document.getElementById('adminPassInput');

    if (adminBtn) {
        adminBtn.addEventListener('click', () => {
            if (adminLogin.style.display === 'none' || adminLogin.style.display === '') {
                adminLogin.style.display = 'inline-flex';
                adminPassInput.focus();
            } else {
                adminLogin.style.display = 'none';
            }
        });
    }

    if (adminSubmit) {
        adminSubmit.addEventListener('click', () => {
            const pwd = adminPassInput.value || '';
            const currentAdminPassword = getAdminPassword();
            if (pwd === currentAdminPassword) {
                incrementAdminVisitor();
                showWheelSelection();
            } else {
                alert('كلمة المرور غير صحيحة');
            }
        });
    }
});

// إظهار خيارات اختيار العجلة
function showWheelSelection() {
    const choice = confirm('اختر العجلة:\n\nOK = عجلة الحظ العادية\nCancel = عجلة الفخمين');
    if (choice) {
        window.location.href = 'wheel.html';
    } else {
        window.location.href = 'wheel2.html';
    }
}

// دوال إدارة كلمة المرور الديناميكية للأدمن
function getAdminPassword() {
    let adminData = localStorage.getItem('adminData');
    if (!adminData) {
        adminData = { visitors: 0, password: 'TX0' };
        localStorage.setItem('adminData', JSON.stringify(adminData));
    } else {
        adminData = JSON.parse(adminData);
    }
    return adminData.password || 'TX0';
}

function incrementAdminVisitor() {
    let adminData = JSON.parse(localStorage.getItem('adminData')) || { visitors: 0, password: 'TX0' };
    adminData.visitors += 1;
    adminData.password = 'TX' + adminData.visitors;
    localStorage.setItem('adminData', JSON.stringify(adminData));
}

function resetAdminPassword() {
    let adminData = JSON.parse(localStorage.getItem('adminData')) || { visitors: 0, password: 'TX0' };
    adminData.password = 'TX' + adminData.visitors;
    localStorage.setItem('adminData', JSON.stringify(adminData));
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
    const cartCountEl = document.getElementById('cartCount');
    if (cartCountEl) cartCountEl.textContent = count;
}

// عرض المنتجات في السلة
function updateCartDisplay() {
    const cartItemsDiv = document.getElementById('cartItems');
    if (!cartItemsDiv) return; // الصفحة الحالية لا تعرض لوحة السلة
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
    const cartTotalEl = document.getElementById('cartTotal');
    if (cartTotalEl) cartTotalEl.textContent = total + ' ر.س';
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
    
    // حفظ الطلب مؤقتًا في localStorage لعرضه في صفحة التقييم
    const pending = {
        orderSummary,
        total,
        timestamp: Date.now()
    };
    localStorage.setItem('pendingOrder', JSON.stringify(pending));

    // تفريغ السلة وتحديث التخزين المحلي ثم الانتقال لصفحة التقييم
    cart = [];
    updateCart();
    toggleCart();

    window.location.href = 'rating.html';
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
