    const start = document.querySelector('#start');
    const stop = document.querySelector('#stop');
    const reverse = document.querySelector('#rev');
    const restarts = document.querySelector('#restarts');
    const score = document.querySelector('#scr');
    const second = document.querySelector('#sec');
    const microSec = document.querySelector('#micsec');
    const container = document.querySelector('.btn__watch');
    const timing = document.querySelector('.timer__watch');
    // let tern[]={5,25,12,22,11};
    let tern = 0,
        term = 0;
    let sec = 00,
        micsec = 00,
        check = true;
    score.innerHTML = '00';
    second.innerHTML = "00";
    microSec.innerHTML = "00";
    let id;
    container.addEventListener('click', (e) => {

        if (e.target.innerHTML == 'start' && check) {
            check = false;
            id = setInterval(() => {
                microSec.innerHTML = micsec;
                micsec = micsec + 1;
                //changing second
                if (micsec >= 59) {
                    sec = sec + 1;
                    second.innerHTML = sec;
                    micsec = 0;
                }
            }, 10);
        }
        if (e.target.innerHTML == 'run' && !check) {

            term += micsec;
            // check = true;
            tern++;
            timing.innerHTML += micsec + " ";
        }

        if (e.target.innerHTML == 'reset') {
            clearInterval(id);
            check = true;
            term = 0;
            tern = 0;
            sec = 0;
            micsec = 0;
            second.innerHTML = "00";
            microSec.innerHTML = "00";
            timing.innerHTML = " ";
        }
        if (e.target.innerHTML == 'Playagain') {
            term = 0;
            tern = 0;
            sec = 0;
            micsec = 0;
            check = true;
            second.innerHTML = "00";
            microSec.innerHTML = "00";
            score.innerHTML = "00";
            start.style.display = "flex";
            stop.style.display = "flex";
            reverse.style.display = "flex";
            restarts.style.display = "none";
            timing.innerHTML = " ";
        }

        if (tern == 5) {
            clearInterval(id);
            score.innerHTML = term;
            term = 0;
            tern = 0;
            sec = 0;
            micsec = 0;
            start.style.display = "none";
            stop.style.display = "none";
            reverse.style.display = "none";
            restarts.style.display = "flex";
        }
    })