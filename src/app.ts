import "@fortawesome/fontawesome-free/css/all.css";
import { format } from 'date-fns';
import { ca } from 'date-fns/locale';

const btn_fletxaAmunt = document.getElementById("fletxa-amunt") as HTMLButtonElement;

const footer_data = document.getElementById('data-avui');


function activaScroll(btn_amunt) {
  if (btn_amunt) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        btn_amunt.style.display = "block";
      } else {
        btn_amunt.style.display = "none";
      }
    });

    // Acció cap amunt!!
    btn_amunt.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
}

function mostraData(contenidor) {
  if (contenidor) {
    const avui = new Date();
    const dataFormatejada = format(avui, "d 'de' MMMM 'de' yyyy", { locale: ca });
    contenidor.textContent = dataFormatejada;
  }
}

// Invoquem les funcions!
activaScroll(btn_fletxaAmunt);
mostraData(footer_data)