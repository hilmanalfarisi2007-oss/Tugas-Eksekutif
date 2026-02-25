// Menambahkan efek transparansi pada navbar saat di-scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow');
    } else {
        nav.classList.remove('shadow');
    }
});

// Pesan sambutan di Console (Biar kelihatan pro saat diperiksa kodenya)
console.log("Website Portofolio Calon Eksekutif Hima Komputer siap!");