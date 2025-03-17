const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const modeSwitchMobile = document.getElementById('mode-switch-mobile');
const modeSwitchDesktop = document.getElementById('mode-switch-desktop');
const modeIconMobile = document.getElementById('mode-icon-mobile');
const modeIconDesktop = document.getElementById('mode-icon-desktop');
const body = document.getElementById('body');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu-open');
    mobileMenu.classList.toggle('menu-closed');
    menuBtn.classList.toggle('open');
    document.body.classList.toggle('overflow-hidden'); // Prevent body from scrolling when menu is open
});

// Close menu when clicking a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('menu-closed');
        mobileMenu.classList.remove('menu-open');
        menuBtn.classList.remove('open');
        document.body.classList.remove('overflow-hidden');
    });
});

const toggleMode = () => {
    const heading = document.querySelector('.md\\:w-1\\/2.space-y-4.md\\:-mt-32.md\\:mb-0.text-center.md\\:text-left h1');
    const paragraph = document.querySelector('.md\\:w-1\\/2.space-y-4.md\\:-mt-32.md\\:mb-0.text-center.md\\:text-left p');

    if (body.classList.contains('bg-black')) {
        body.classList.remove('bg-black', 'text-white');
        body.classList.add('bg-white', 'text-red-700');
        body.style.backgroundImage = "url('./gambar/bg003.png')";
        modeIconMobile.src = 'gambar/sharinggan (2).png';
        modeIconDesktop.src = 'gambar/sharinggan (1).png';
        // Change text to Korean
        heading.innerHTML = '<span class="font-size: 38px font-bold text-white song-myung-regular">저는 무함마드입니다.</span><br><span class="text-2xl md:text-4xl">한 인간으로서...</span>';
        paragraph.innerHTML = '<span class="text-lg md:text-2xl song-myung-regular">어둠 속에서 나는 창조하고, 희생을 통해 나 자신을 연마합니다. 디자인은 눈에 보이는 것이 아니라, 그림자 속에서 느껴지는 것입니다.</span>';
        heading.style.whiteSpace = "nowrap";

    } else {
        body.classList.remove('bg-white', 'text-red-700');
        body.classList.add('bg-black', 'text-white');
        body.style.backgroundImage = "url('gambar/bg02.jpg')";
        modeIconMobile.src = 'gambar/sharinggan (1).png';
        modeIconDesktop.src = 'gambar/sharinggan (2).png';
        // Change text back to English
        heading.innerHTML = 'I\'M <span class="text-red-600">MUHAMMAD</span><br> A Human Being...';
        paragraph.textContent = 'In darkness, I create. Through sacrifice, I refine. Design is not what is seen, but what is felt in the shadows';
    }
};

modeSwitchMobile.addEventListener('click', toggleMode);
modeSwitchDesktop.addEventListener('click', toggleMode);
