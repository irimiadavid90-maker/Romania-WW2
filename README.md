# România în al doilea război mondial — Platformă educațională interactivă

<div align="center">
  <p align="center">
    <strong>Un instrument digital modern, bilingv și imersiv, conceput pentru studierea istoriei naționale (perioada 1940–1947) de către elevii de liceu și pasionații de istorie.</strong>
  </p>
</div>

\---

## Cuprins

1. [Despre Proiect și Motivație](#despre-proiect-și-motivație)
2. [Problema Adresată și Soluția Propusă](#problema-adresată-și-soluția-propusă)
3. [Analiza Detaliată a Modulelor](#analiza-detaliată-a-modulelor)
4. [Arhitectura Tehnică și Implementare](#arhitectura-tehnică-și-implementare)
5. [Structura Proiectului (Folder Tree)](#structura-proiectului-folder-tree)
6. [Calitatea Codului și Optimizări ES6+](#calitatea-codului-și-optimizări-es6)
7. [Ghid de Rulare Locală](#ghid-de-rulare-locală)
8. [Surse, Credite și Drepturi de Autor](#surse-credite-și-drepturi-de-autor)

\---

## Despre proiect și motivație

Platforma „România în al doilea război mondial” s-a născut din dorința de a transforma studiul istoriei dintr-un proces bazat pe memorare mecanică într-o experiență vizuală, interactivă și logică. Proiectul acoperă perioada critică de la pierderile teritoriale din 1940, trecând prin dictatura antonesciană și luptele de pe Frontul de Est, până la actul de la 23 august 1944 și abdicarea forțată a Regelui Mihai I din 1947.

## Problema adresată și soluția propusă

* **Problema:** Elevii rețin cu dificultate cronologiile, granițele mobile și contextul deciziilor politice din manualele clasice. Clipurile multimedia istorice sunt fragmentate pe platforme diverse, fără un fir narativ pedagogic.
* **Soluția:** O aplicație web unificată care combină hărți interactive (geografie istorică), linii temporale dinamice (cronologie), materiale multimedia controlate nativ (audio/video de epocă) și un modul adaptiv de testare cu rol corectiv-educativ.

\---

## Analiza detaliată a modulelor

### 1\. Modulul cartografic interactiv (pierderi.html)

* **Funcționalitate:** Reprezentarea vizuală a evenimentelor din vara anului 1940 (Ultimatumul Sovietic, Dictatul de la Viena, Tratatul de la Craiova).
* **Implementare:** Harta istorică include puncte de interes dinamice poziționate precis prin coordonate CSS relative. La interacțiune, utilizatorului îi sunt redate ferestre text (tooltips) cu date statistice referitoare la populația și suprafețele teritoriale pierdute.

### 2\. Modulul biografic „Ion Antonescu” (antonescu.html)

* **Funcționalitate:** Analiza neutră și documentată a regimului de dictatură militară.
* **Element special:** Integrarea unui player audio nativ, stilizat prin CSS, pentru redarea discursului din 6 octombrie 1940, oferind o conexiune directă cu documentele de arhivă ale epocii.

### 3\. Cronologia dinamică a frontului de est (frontul-est.html)

* **Funcționalitate:** Urmărirea secvențială a campaniei militare dintre anii 1941 și 1944.
* **Elemente UI/UX:** Un sistem de tip linie temporală (Timeline) interactiv cu animații declanșate la derulare și un carusel personalizat de imagini de arhivă, dotat cu descrieri istoriografice detaliate.

### 4\. Modulul „Regele Mihai I și lovitura de stat” (mihai.html)

* **Funcționalitate:** Prezentarea evenimentelor cruciale de la 23 august 1944.
* **Element special:** Integrarea asincronă a clipurilor video de arhivă (via YouTube API), optimizate pentru a nu bloca încărcarea inițială a resurselor paginii.

### 5\. Sistemul de evaluare adaptiv (quiz.html)

* **Funcționalitate:** Chestionar interactiv care îmbină testarea cu procesul de învățare.
* **Algoritm:** În cazul unui răspuns greșit, aplicația oferă imediat o casetă explicativă dinamică, prezentând argumentul istoric corect conform cerințelor pedagogice moderne.
* **Panou de Administrare:** Modul securizat la nivel local, dedicat profesorilor, care permite extinderea, modificarea sau ștergerea întrebărilor din baza de date în timp real prin manipulare dinamică DOM.

\---

## Arhitectura Tehnică și Implementare

* **Semantic HTML5:** Structură curată bazată pe tag-uri semantice (article, section, nav, header, footer), esențiale pentru accesibilitate, structură clară și indexare.
* **Advanced CSS3 Properties:**

  * Sistem bazat pe variabile CSS (Custom Properties) pentru un management facil al paletei cromatice și tematicii vizuale.
  * Layout-uri hibride flexibile realizate prin combinația dintre CSS Grid (pentru structura macro a paginii) și Flexbox (pentru componentele interne).
  * Suport complet pentru design adaptabil (Responsiveness) prin Media Queries.
* **Vanilla JavaScript (ES6+):**

  * **Intersection Observer API:** Folosit pentru implementarea conceptului de afișare progresivă la derulare (reveal-on-scroll), eliminând complet evenimentele de tip window.onscroll care penalizează performanța procesorului.
  * **State Management:** Gestionarea stării quiz-ului și a elementelor din panoul de administrare direct în memorie, cu randare reactivă în DOM.

\---

## Structura Proiectului (Folder Tree)

```text
├── .gitignore               # Fișier configurare pentru ignorare elemente OS/IDE
├── README.md                # Documentația tehnică principală a proiectului
├── style.css                # Stilurile globale, variabilele CSS și designul responsiv
├── script.js                # Logica centralizată a aplicației (Interacțiuni, UI, Quiz)
│
├── \\\[Varianta în Limba Română]
├── base.html                # Pagina principală (Dashboard)
├── pierderi.html            # Modulul hărții interactive
├── antonescu.html           # Pagina documentară Ion Antonescu
├── frontul-est.html         # Cronologia campaniei din Est
├── mihai.html               # Pagina dedicată Regelui Mihai I
├── quiz.html                # Modulul de evaluare și panoul admin
├── 404.html                 # Pagina de eroare personalizată
│
├── \\\[Varianta în Limba Engleză - i18n]
├── base\\\_en.html
├── pierderi\\\_en.html
├── antonescu\\\_en.html
├── frontul-est\\\_en.html
├── mihai\\\_en.html
├── quiz\\\_en.html
└── 404\\\_en.html


└── 404\\\_en.html
```

\---

## Calitatea codului și optimizări ES6+

În etapa de refactoring, codul JavaScript (`script.js`) a fost reorganizat și optimizat pentru lizibilitate, reutilizare și performanță, urmând practici moderne ES6+.

### Denumiri descriptive și claritate logică

Variabilele și funcțiile folosesc denumiri explicite și auto-descriptive în limba română, eliminând abrevierile ambigue și crescând lizibilitatea codului.

Exemple:

* `afiseazaExplicatieQuiz()`
* `actualizeazaCronologie()`
* `deschideModalEveniment()`

Acest stil facilitează:

* mentenanța proiectului;
* înțelegerea rapidă a logicii aplicației;
* extinderea ulterioară a funcționalităților.

### Principiul DRY (Don't Repeat Yourself)

Componentele repetitive au fost abstractizate în funcții reutilizabile pentru a reduce duplicarea logicii și a simplifica mentenanța.

Au fost reutilizate:

* sistemele de navigare;
* ferestrele modale;
* actualizarea elementelor dinamice din DOM;
* componentele interactive ale quiz-ului.

### Optimizări de performanță

Pentru îmbunătățirea experienței utilizatorului și reducerea costurilor de randare:

* animațiile la scroll utilizează `Intersection Observer API`;
* încărcarea materialelor multimedia este asincronă;
* manipulările DOM sunt grupate și optimizate;
* evenimentele globale costisitoare (`window.onscroll`) au fost eliminate.

### Compatibilitate și Design responsiv

Interfața este optimizată pentru:

* desktop;
* tabletă;
* dispozitive mobile.

Layout-ul utilizează:

* CSS Grid;
* Flexbox;
* Media Queries.

\---

## Ghid de rulare Locală

Proiectul este o aplicație complet client-side și nu necesită:

* compilare;
* backend;
* baze de date;
* dependențe externe.

### 1\. Clonarea repository-ului

```bash
git clone https://github.com/utilizatorul-tau/nume-repository.git
```

### 2\. Accesarea folder-ului proiectului

```bash
cd nume-repository
```

### 3\. Rularea aplicației

Deschide fișierul `base.html` într-un browser modern:

* Google Chrome
* Mozilla Firefox
* Microsoft Edge
* Safari

\---

## Resurse bibliografice, credite și proprietate intelectuală

Platforma a fost realizată cu respectarea normelor academice și a principiilor privind utilizarea responsabilă a resurselor digitale în scop educațional.

### Documentare istoriografică

Conținutul istoric a fost verificat și sintetizat utilizând:

* manuale aprobate de Ministerul Educației;
* lucrări de specialitate;
* arhive digitale istorice;
* materiale documentare acreditate.

### Materiale audio

Înregistrările audio istorice provin din arhive publice și sunt redate prin intermediul API-ului HTML5 Audio.

### Materiale video

Secvențele video sunt integrate prin YouTube Embedded Player API, utilizând încărcare asincronă pentru optimizarea performanței.

### Resurse vizuale și cartografice

Elementele grafice și hărțile istorice provin din:

* Wikimedia Commons;
* arhive digitale cu acces liber;
* colecții muzeale digitalizate.



\---

Date de identificare:

Numele și prenumele: Irimia David-Mihai

Clasa a X-a 

Colegiul Național „Ienăchiță Văcărescu” Târgoviște

\---



