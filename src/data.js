const products = {
    watch: [
        { sries: 5, name: "ساعت هوشمند اپل سری 5", src: '/img/cart/1.png', price: '22500000', color: ['bg-blue-600', 'bg-red-600', 'bg-gray-600', 'bg-green-600'] },
        { sries: 7, name: "ساعت هوشمند اپل سری 7", src: '/img/cart/2.webp', price: '31320000', color: ['bg-orange-600', 'bg-blue-600', 'bg-red-600', 'bg-green-600'] },
        { sries: 4, name: "ساعت هوشمند اپل سری 4", src: '/img/cart/3.webp', price: '21600000', color: ['bg-orange-600', , 'bg-gray-600', 'bg-blue-600', 'bg-red-600'] },
        { sries: 6, name: "ساعت هوشمند اپل سری 6", src: '/img/cart/1.png', price: '34000000', color: ['bg-blue-600', 'bg-gray-600', 'bg-green-600'] },
        { sries: 8, name: "ساعت هوشمند اپل سری 8", src: '/img/cart/2.webp', price: '44000000', color: ['bg-orange-600', 'bg-blue-600', 'bg-red-600', 'bg-gray-600', 'bg-green-600'] },
        { sries: 4, name: "ساعت هوشمند اپل سری 4", src: '/img/cart/3.webp', price: '21600000', color: ['bg-red-600', 'bg-gray-600', 'bg-green-600'] },
        { sries: 9, name: "ساعت هوشمند اپل سری 9", src: '/img/cart/2.webp', price: '75000000', color: ['bg-orange-600', 'bg-blue-600', 'bg-red-600', 'bg-green-600'] },
        { sries: 2, name: "ساعت هوشمند اپل سری 2", src: '/img/cart/1.png', price: '8000000', color: ['bg-orange-600', 'bg-blue-600', 'bg-gray-600'] },
    ],
    juc: [

        { id: 1, brand: 'gosonic', grop: 'juc', groop: 'آبمیوه گیری', url: 'juicer-gosonic504', name: 'آبمیوه‌گیری دیجیتال گوسونیک مدل 504', src1: '/img/wysi/a-go-504.jpg', src2: ['/img/wysi/a-go-504-1.jpg', '/img/wysi/a-go-504-2.jpg'], price: 2750000, free: 10, detailes: 'آبمیوه‌گیری ۴کاره دیجیتال گوسونیک مدل GSJ_504 با قدرت موتور عالی و ظاهر بسیار زیبا', color: ['blue', 'gray', 'green', 'orange', 'purple'] },

        { id: 2, brand: 'bosch', grop: 'juc', groop: 'آبمیوه گیری', url: 'juicer-bosch1288', name: 'آبمیوه‌گیری‌بوش(bosch) چهار کاره مدل 1288 ', src1: '/img/wysi/a-bo-1288.jpg', src2: ['/img/wysi/a-bo-1288-1.jpg', '/img/wysi/a-bo-1288-2.jpg', '/img/wysi/a-bo-1288-3.jpg'], price: 2200000, free: 0, detailes: 'آبمیوه‌گیری‌بوش(Bosch )چهار کاره مدل 1288', color: ['blue', 'gray', 'green', 'orange', 'purple'] },


        { id: 3, brand: 'gosonic', grop: 'juc', groop: 'آبمیوه گیری', url: 'juicer-gosonic724', name: 'آبیموه‌گیری گوسونیک مدلGSJ_724', src1: '/img/wysi/a-go-724.jpg', src2: ['/img/wysi/a-go-724-1.jpg', '/img/wysi/a-go-724-2.jpg', '/img/wysi/a-go-724-3.jpg'], price: 2480000, free: 8, detailes: 'آبمیوه گیر 4 کاره گوسونیک مدل GSJ-724 ا Juicer Gosonic 724', color: ['blue', 'green', 'orange', 'purple'] },


        { id: 4, brand: 'unic', grop: 'juc', groop: 'آبمیوه گیری', url: 'juicer-unic4', name: 'آبمیوه گیری 4 کاره یونیک(Unique)', src1: '/img/wysi/a-un.jpg', src2: [''], price: 2500000, free: 0, detailes: 'آبمیوه گیری 4 کاره یونیک(Unique)۱۲۰۰وات مدل:UN643', color: ['blue', 'gray', 'green', 'orange'] },


        { id: 5, brand: 'gosonic', grop: 'juc', groop: 'آبمیوه گیری', url: 'juicer-gosonic732', name: 'آبمیوه گیری چند کاره گوسونیک مدل GSJ-732', src1: '/img/wysi/a-go-732.png', src2: ['/img/wysi/a-go-732-1.png'], price: 2750000, free: 10, detailes: 'آبمیوه گیری چهار کاره گوسونیک مدل GSJ-732', color: ['blue', 'gray', 'green', 'orange', 'purple'] },


        { id: 6, brand: 'foma', grop: 'juc', groop: 'آبمیوه گیری', url: 'juicer-foma1991', name: 'آبمیوه گیری 4 کاره فوما مدل FU-1991', src1: '/img/wysi/a-fo-1991.jpg', src2: ['/img/wysi/a-fo-1991-1.jpg', '/img/wysi/a-fo-1991-2.jpg'], price: 1950000, free: 15, detailes: 'آبمیوه گیری 4 کاره فوما مدل FU-1991', color: ['blue', 'gray', 'green', 'orange', 'purple'] },

    ],
    oto: [
        { id: 7, brand: 'gosonic', grop: 'oto', groop: 'اتو', url: 'iron-gosonic300', name: 'اتو بخار گوسونیک GOSONIC مدل GSI-300', src1: '/img/wysi/o-go-300.jpg', src2: ['/img/wysi/o-go-300-1.jpg'], price: 860000, free: 0, detailes: 'اتو بخار 2600 وات برند گوسونیک مدل Gosonic GSI-300', color: ['blue', 'green', 'orange', 'purple'] },


        { id: 8, brand: 'gosonic', grop: 'oto', groop: 'اتو', url: 'iron-gosonic295', name: 'اتو بخار گوسونیک مدل GSI-295', src1: '/img/wysi/o-go-295.jpg', src2: ['/img/wysi/o-go-295.jpg'], price: 750000, free: 0, detailes: 'اتو بخار گوسونیک مدل GSI-295 \n GOSONIC Gsi-295 steam iron', color: ['blue', 'gray', 'green', 'orange', 'purple'] },
    ],

    tee: [

        { id: 9, brand: 'krkmaz', grop: 'tee', groop: 'چایی ساز', url: 'teamaker-krkmaz', name: 'کتری و قوری کرکماز(KORKMAZ) گرانیت', src1: '/img/wysi/ch-krk.jpg', src2: ['/img/wysi/ch-krk-1.jpg', '/img/wysi/ch-krk-2.jpg'], price: 1100000, free: 10, detailes: '​​​​ست کتری و قوری گرانیتی کرکماز(KORKMAZ)ترکیه', color: ['blue', 'gray', , 'orange', 'purple'] },


        { id: 10, brand: 'rohmi', grop: 'tee', groop: 'چایی ساز', url: 'teamaker-rohmi769', name: 'چای ساز روهمی گوسونیک مدل GST-769', src1: '/img/wysi/ch-ro749.jpg', src2: ['/img/wysi/ch-ro749-1.jpg', '/img/wysi/ch-ro-749-2.jpg'], price: 2500000, free: 0, detailes: 'چای ساز برقی روهمی برند گوسونیک مدل Gosonic GST-769', color: ['blue', 'gray', 'green', 'orange', 'purple'] },


        { id: 11, brand: 'nova', grop: 'tee', groop: 'قهوه ساز', url: 'teamaker-nova158', name: 'اسپرسوساز نوا مدل 158 تمام استیل', src1: '/img/wysi/ch-nd-158.jpg', src2: ['/img/wysi/ch-nd-158-1.jpg', '/img/wysi/ch-nd-158-2.jpg', '/img/wysi/ch-nd-158-3.jpg'], price: 3420000, free: 40, detailes: 'اسپرسوساز ندوا مدل 158 تمام استیل 3دکمه 20بار آماده', color: ['blue', 'gray', 'green', 'purple'] },
    ]
}






















export default products

const numbers = [];

products.watch.map(item => { numbers.push(item.price) })

numbers.sort((a, b) => a - b);

// console.log(numbers);