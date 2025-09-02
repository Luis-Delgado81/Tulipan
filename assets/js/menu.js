// ========== CARGAR HEADER Y FOOTER ==========
async function cargarElementos() {
  try {
      // Cargar el header
      const headerResponse = await fetch('header.html');
      const headerData = await headerResponse.text();
      document.getElementById('header').innerHTML = headerData;

      // Cargar el footer
      const footerResponse = await fetch('footer.html');
      const footerData = await footerResponse.text();
      document.getElementById('footer').innerHTML = footerData;

      // ¡IMPORTANTE! Inicializar el menú hamburguesa DESPUÉS de cargar el header
      inicializarMenuHamburguesa();

  } catch (error) {
      console.error('Error cargando elementos:', error);
  }
}

// ========== MENÚ HAMBURGUESA ==========
function inicializarMenuHamburguesa() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  // Verificar que los elementos existen antes de continuar
  if (!menuToggle || !navMenu) {
      console.error('No se encontraron los elementos del menú');
      return;
  }

  // Evento clic en hamburguesa
  menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      console.log('Menú toggled'); // Para debug
  });

  // Cerrar menú al hacer clic en un enlace (en móvil)
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          if (window.innerWidth <= 768) {
              menuToggle.classList.remove('active');
              navMenu.classList.remove('active');
          }
      });
  });

  // Cerrar menú al redimensionar ventana
  window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
          menuToggle.classList.remove('active');
          navMenu.classList.remove('active');
      }
  });

  console.log('Menú hamburguesa inicializado correctamente'); // Para debug
}

// ========== CARRUSEL ==========
function inicializarCarrusel() {
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  // Solo ejecutar si existen elementos del carrusel
  if (slides.length === 0 || !prevButton || !nextButton) {
      return; // No hay carrusel en esta página
  }

  let currentSlideIndex = 0;

  function showSlide(index) {
      slides.forEach(slide => {
          slide.classList.remove('active');
      });
      slides[index].classList.add('active');
  }

  function nextSlide() {
      currentSlideIndex++;
      if (currentSlideIndex >= slides.length) {
          currentSlideIndex = 0;
      }
      showSlide(currentSlideIndex);
  }

  function prevSlide() {
      currentSlideIndex--;
      if (currentSlideIndex < 0) {
          currentSlideIndex = slides.length - 1;
      }
      showSlide(currentSlideIndex);
  }

  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);

  // Carrusel automático cada 5 segundos
  setInterval(nextSlide, 5000);

  // Mostrar la primera diapositiva
  showSlide(currentSlideIndex);
}

// ========== INICIALIZACIÓN ==========
document.addEventListener('DOMContentLoaded', function() {
  // Cargar header y footer primero
  cargarElementos();
  
  // Inicializar carrusel (si existe en la página)
  inicializarCarrusel();
});