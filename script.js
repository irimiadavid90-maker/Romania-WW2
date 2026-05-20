document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    if (revealElements.length) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.02 }
        );

        revealElements.forEach((el) => observer.observe(el));
    }

    const radioBtn = document.getElementById('radio-btn');
    const audioPlayer = document.getElementById('audio-antonescu');

    if (radioBtn && audioPlayer) {
        radioBtn.addEventListener('click', () => {
            const isPlaying = !audioPlayer.paused;

            if (isPlaying) {
                audioPlayer.pause();
                radioBtn.classList.remove('playing');
            } else {
                audioPlayer.play();
                radioBtn.classList.add('playing');
            }
        });

        audioPlayer.addEventListener('ended', () => {
            radioBtn.classList.remove('playing');
        });
    }

    const langBtn = document.getElementById('lang-btn');
    const langDropdown = document.getElementById('lang-dropdown');

    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', (event) => {
            langDropdown.classList.toggle('show');
            event.stopPropagation();
        });

        document.addEventListener('click', (event) => {
            if (!langDropdown.contains(event.target)) {
                langDropdown.classList.remove('show');
            }
        });
    }
});

let slideIndex = 0;

function schimbaPoza(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length === 0) return;

    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    slides[slideIndex].classList.add('active');
}

const etapeTimelineRO = [
    {
        badge: 'Faza I',
        titlu: 'Ordinul „Treceți Prutul!”',
        descriere:
            'Generalul Ion Antonescu angajează România în război alături de Axă. Campania este percepută inițial ca un război legitim de eliberare.',
    },
    {
        badge: 'Faza II',
        titlu: 'Eliberarea Basarabiei',
        descriere:
            'După o lună de lupte grele, trupele române alungă forțele sovietice și restabilesc granița istorică pe râul Nistru.',
    },
    {
        badge: 'Faza III',
        titlu: 'Asediul Odessei',
        descriere:
            'Armata română obține o victorie cu un preț enorm (peste 90.000 de victime). Trupele continuă înaintarea dincolo de granița națională.',
    },
    {
        badge: 'Faza IV',
        titlu: 'Tragedia de la Stalingrad',
        descriere:
            'Subțiate și prost echipate pentru gerul cumplit, armatele române sunt decimate în încercuirea sovietică, pierzând peste 150.000 de oameni.',
    },
    {
        badge: 'Faza V',
        titlu: 'Retragerea generală',
        descriere:
            'Armata roșie intră în România. Situația devine critică, forțând ieșirea României din Axă pe 23 august 1944 pentru a evita distrugerea totală.',
    },
];

const etapeTimelineEN = [
    {
        badge: 'Phase I',
        titlu: 'The Order "Cross the Prut!"',
        descriere:
            'General Ion Antonescu commits Romania to the war alongside the Axis. The campaign is initially perceived as a legitimate war of liberation.',
    },
    {
        badge: 'Phase II',
        titlu: 'Liberation of Bessarabia',
        descriere:
            'After a month of heavy fighting, Romanian troops drive out Soviet forces and restore the historical border on the Dniester River.',
    },
    {
        badge: 'Phase III',
        titlu: 'Siege of Odessa',
        descriere:
            'The Romanian army achieves victory at an enormous cost (over 90,000 casualties). Troops continue their advance beyond the national border.',
    },
    {
        badge: 'Phase IV',
        titlu: 'Tragedy at Stalingrad',
        descriere:
            'Thinned out and poorly equipped for the bitter cold, Romanian armies are decimated in the Soviet encirclement, losing over 150,000 men.',
    },
    {
        badge: 'Phase V',
        titlu: 'General Retreat',
        descriere:
            'The Red Army enters Romania. The situation becomes critical, forcing Romania to exit the Axis on August 23, 1944, to avoid total destruction.',
    },
];

function afiseazaEtapa(index, elementClicat) {
    const panelBadge = document.getElementById('panel-badge');
    const panelTitle = document.getElementById('panel-title');
    const panelDesc = document.getElementById('panel-desc');

    if (!panelBadge || !panelTitle || !panelDesc) return;

    const isEnglish = window.location.pathname.includes('_en');
    const etapeCurente = isEnglish ? etapeTimelineEN : etapeTimelineRO;
    const etapa = etapeCurente[index];

    if (!etapa) return;

    panelBadge.textContent = etapa.badge;
    panelTitle.textContent = etapa.titlu;
    panelDesc.textContent = etapa.descriere;

    document.querySelectorAll('.v-timeline-item').forEach((el) => el.classList.remove('active'));
    if (elementClicat) elementClicat.classList.add('active');
}
