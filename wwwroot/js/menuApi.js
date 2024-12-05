async function carregarPratos() {
    try {
        const response = await fetch('http://localhost:5000/api/pratos'); // Substitua pelo endereço correto da sua API
        if (!response.ok) {
            throw new Error(`Erro na API: ${response.status}`);
        }

        const pratos = await response.json();
        const menu = document.getElementById('menu'); // Substitua pelo ID correto do elemento HTML onde o menu será exibido

        menu.innerHTML = ''; // Limpa o conteúdo existente

        pratos.forEach(prato => {
            menu.innerHTML += `
                <div class="prato">
                    <img src="${prato.imageUrl}" alt="${prato.name}" class="prato-imagem">
                    <h3>${prato.name}</h3>
                    <p>${prato.description}</p>
                    <span class="prato-preco">R$ ${prato.price.toFixed(2)}</span>
                </div>`;
        });
    } catch (error) {
        console.error('Erro ao carregar os pratos:', error);
    }
}

carregarPratos();
