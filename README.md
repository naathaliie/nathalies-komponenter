# Carousel komponenten:

En carousel-komponent som tar emot ett object och visar upp antingen:

- titel och info
- titel, info och bild

Komponenten har tre färgval:

- - color-primary
- - color-background-hover
- - color-hover

Props?

- object{}
  Exempelobject finner du i src/Components/Carousel/carouselTypes

Bild?

- Den relativa sökvägen skall ses som att den är från index.html eller vara null
  Exempelbilder till myObj (src/Components/Carousel/carouselTypes) finner du i src/assets/img

Dependency?

-uuid -> npm instal -D react-uuid
-React icons -> npm i react-icons

---

# Button komponenten:

En enkel knapp som kan ta emot en onClick-funktion samt innehålla:

- btnName = vad som skall stå på knappen
- iconLeft= icon som lägger sig till vänster
- iconRight= icon som lägger sig till höger

Exempel på en onClick-funktion som du kan använda finner du src/Components/Button/ButtonOnClick

Dependency
-React icons -> npm i react-icons

---

## Information if you want to use all the icons intended for this Navbar

- You need to install a patch which is

* - npm install react-icons

# then import from the following link

- import { FaBars, FaTimes } from "react-icons/fa";

* if you want to check more icons, go to =>
  https://react-icons-v2.vercel.app/

---

Todo component 

* A checkbox list showing your todos 
* A progress bar to illustrate your progress 
* Confetti when a box is checked for an extra motivational boost. 
