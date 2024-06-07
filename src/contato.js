document.addEventListener('DOMContentLoaded', function() {
    // Função para exibir o cardápio
    function displayMenu(imageData) {
        var img = document.getElementById('menuImage');
        if (img) {
            img.src = imageData;
        }
    }
    

    // Carrega o cardápio salvo no local storage ao carregar a página
    var savedMenu = localStorage.getItem('menuImage');
    if (savedMenu) {
        displayMenu(savedMenu);
    }

    // Formulário de login
    var loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            var password = document.getElementById('password').value;
            if (password === 'admin123') { // Senha definida aqui
                document.getElementById('menuForm').style.display = 'block';
                loginForm.style.display = 'none';
            } else {
                alert('Senha incorreta!');
            }
        });
    }

    // Formulário de upload do cardápio
    var menuForm = document.getElementById('menuForm');
    if (menuForm) {
        menuForm.addEventListener('submit', function(event) {
            event.preventDefault();
            var fileInput = document.getElementById('menuUpload');
            var file = fileInput.files[0];
            if (file) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    localStorage.setItem('menuImage', e.target.result);
                    alert('Cardápio atualizado com sucesso!');
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Botão para voltar ao início
    var backToHomeButton = document.getElementById('backToHome');
    if (backToHomeButton) {
        backToHomeButton.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }

    // Formulário de contato
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            var name = document.getElementById('name').value;
            var endereco = document.getElementById('endereco').value;
            var message = document.getElementById('message').value;

            var options = [];
            document.querySelectorAll('input[name="options"]:checked').forEach(function(checkbox) {
                var optionValue = checkbox.value;
                var quantityId = 'quantity' + checkbox.id.replace('option', '');
                var quantity = document.getElementById(quantityId).value || 1; // Default quantity to 1 if not specified
                options.push(`${optionValue} (Quantidade: ${quantity})`);
            });

            var url = `https://wa.me/+?text=Nome: ${encodeURIComponent(name)}%0AEndereço: ${encodeURIComponent(endereco)}%0AMensagem: ${encodeURIComponent(message)}%0AOpções: ${encodeURIComponent(options.join(', '))}`;

            window.open(url, '_blank');
        });
    }
});
