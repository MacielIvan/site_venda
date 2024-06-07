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
            if (password === '1') { // Senha definida aqui
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
                    console.log(localStorage)
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
});


///Enviar pedido pelo Whatsapp

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var endereco =document.getElementById('endereco').value
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    var whatsappUrl = `https://wa.me/5524981463685?text=Olá, meu nome é ${encodeURIComponent(name)} ${encodeURIComponent(message)} Segue me endereço ${encodeURIComponent(endereco)}`;
    
    window.open(whatsappUrl, '_blank');
});
