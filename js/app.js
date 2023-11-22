var paragraph = document.getElementById('shufflee'); 

function shuffleText() {
    var characters = paragraph.textContent.split(' ');

    characters.sort(function() {
        return 0.5 - Math.random();
    });

    paragraph.textContent = characters.join(' ');
}


document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('mousemove', function (e) {
        const x = e.clientX / window.innerWidth * 100;
        const y = e.clientY / window.innerHeight * 100;
        console.log(x, y)
        console.log(document.body.style.backgroundPosition);
        document.body.style.background = `radial-gradient(circle at ${x}% ${y}%, #280071, #1f0000)`;
    });
});


setInterval(shuffleText, 50);