const gridFotos = document.querySelector('.grid-fotos');
    const imgSelecionada = document.querySelector('.img-selecionada');

    gridFotos.addEventListener('click', function(event) {
        const target = event.target;

        if (target.tagName.toLowerCase() === 'img') {
            // Aplica um efeito de "fade-out" antes de trocar a imagem
            imgSelecionada.style.opacity = 0;

            setTimeout(function() {
                imgSelecionada.src = target.src;  // Atualiza a imagem selecionada
                // Aplica um efeito de "fade-in" ao trocar a imagem
                imgSelecionada.style.opacity = 1;
            }, 200);  // Atraso para a transição suave
        }
    });

    // BANNER
    document.addEventListener("DOMContentLoaded", function() {
        const images = document.querySelectorAll('.img-intro');
        let currentImageIndex = 0;
  
        function showNextImage() {
          images[currentImageIndex].classList.remove('active');
          currentImageIndex = (currentImageIndex + 1) % images.length;
          images[currentImageIndex].classList.add('active');
        }
  
        setInterval(showNextImage, 5000); // Muda a cada 3 segundos (3000 milissegundos)
      });