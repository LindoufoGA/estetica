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