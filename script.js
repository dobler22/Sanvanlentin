document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('responseMessage').textContent = "¡Yay! ¡Eres el/la mejor! 💖";
});

document.getElementById('noButton').addEventListener('click', function() {
    document.getElementById('responseMessage').textContent = "¡Oh no! 😢 Pero seguiré intentándolo...";
});