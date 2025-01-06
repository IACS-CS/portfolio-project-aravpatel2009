
const transliterations = [
    "अरव पटेल", "আরভ পটেল", "ਅਰਵ ਪਟੇਲ", "અરવ પટેલ", "அரவ் பட்டேல்",
    "అరవ్ పటేల్", "അരവ് പട്ടേൽ", "ಅರವ್ ಪಟೇಲ್", "阿拉夫·帕特尔", "阿拉夫·帕特爾",
    "アラフ・パテル", "아라브 파텔", "أراف باتيل", "آراو پاتل", "ארב פאטל",
    "Арав Патель", "Αραβ Πατέλ", "አራቭ ፓቴል", "อาราฟ พาเทล", "Arav Patel",
    "Alawa Pakela", "Арав Патель", "ཨ་རབ་ པ་ཏེལ།", "အာရဗ် ပတေးလ်", "អារ៉ាវ៉ ផាតែល",
    "Arav Patel", "Alava Pateli", "ᎠᎳᏫ ᏆᏖᎵ", "ʼarav pa’tel", "Arawe Patel"
];

const colors = [
    "#FF6347", "#FFD700", "#32CD32", "#1E90FF", "#FF1493", "#8A2BE2", "#FF8C00", "#20B2AA",
    "#DC143C", "#FF4500", "#DA70D6", "#ADFF2F", "#FF6347", "#8B4513", "#98FB98", "#D2691E",
    "#CD5C5C", "#F0E68C", "#8B0000", "#483D8B", "#2E8B57", "#5F9EA0", "#D3D3D3", "#A52A2A", "#800080",
    "#808000", "#0000FF", "#FF00FF", "#008000", "#A9A9A9"
];

function createPopUpName() {
    const container = document.getElementById('name-container');

    transliterations.forEach((text, index) => {
        const name = document.createElement('div');
        name.className = 'name';
        name.textContent = text;

        // Set a random position within the container
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const color = colors[index % colors.length];

        name.style.left = `${randomX}vw`;
        name.style.top = `${randomY}vh`;
        name.style.color = color;

        // Assign a random delay to stagger the animations
        name.style.animationDelay = `${Math.random() * 5}s`;

        container.appendChild(name);
    });
}

createPopUpName();
