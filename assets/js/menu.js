// Cargar el header
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  });

// Cargar el footer
fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });

  //Carrusel
  document.addEventListener('DOMContentLoaded', () => {
    // 1. Selecciona los elementos necesarios del carrusel
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
  
    // 2. Variable para saber qué diapositiva se está mostrando
    let currentSlideIndex = 0;
  
    // 3. Función para mostrar la diapositiva correcta
    // Esta función es la que interactúa directamente con tu CSS.
    // Al añadir o quitar la clase 'active', tu CSS hace que la diapositiva aparezca o desaparezca.
    function showSlide(index) {
      // Oculta todas las diapositivas quitando la clase 'active'
      slides.forEach(slide => {
        slide.classList.remove('active');
      });
      // Muestra solo la diapositiva deseada añadiendo la clase 'active'
      slides[index].classList.add('active');
    }
  
    // 4. Función para avanzar a la siguiente diapositiva
    function nextSlide() {
      currentSlideIndex++;
      if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0; // Vuelve al inicio
      }
      showSlide(currentSlideIndex);
    }
  
    // 5. Función para retroceder a la diapositiva anterior
    function prevSlide() {
      currentSlideIndex--;
      if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1; // Va a la última
      }
      showSlide(currentSlideIndex);
    }
  
    // 6. Añade los "escuchadores" de clics a los botones
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
  
    // --- Opcional: Carrusel Automático ---
    // Si quieres que el carrusel se mueva solo cada 5 segundos,
    // quita el comentario de la siguiente línea.
    setInterval(nextSlide, 5000);
  
    // Muestra la primera diapositiva para empezar
    showSlide(currentSlideIndex);
  });