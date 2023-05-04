let play = 0;

let pp_btn = document.getElementById('play-btn');
let icon = document.getElementById('control-icon');

pp_btn.onclick = function(){
    if (play == 0) {
        icon.innerHTML = "pause"
        play = 1;
    }
    else if (play == 1) {
        icon.innerHTML = "play_arrow"
        play = 0;
    }
};