function openModal(imageSrc) {
    var modal = document.getElementById('myModal');
    var modalImage = document.getElementById('modalImage');

    modal.style.display = 'block';
    modalImage.src = imageSrc;
    modal.onclick = function (event) {
        if (event.target === modal) {
            closeModal();
        }
    };
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}
document.addEventListener('keydown', function (event) {
    var modal = document.getElementById('myModal');
    if (event.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});