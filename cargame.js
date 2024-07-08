document.addEventListener('DOMContentLoaded', () => {
    const car = document.getElementById('car');
    const accelerateBtn = document.getElementById('accelerateBtn');
    const stopBtn = document.getElementById('stopBtn');
    const forwardBtn = document.getElementById('forwardBtn');
    const backwardBtn = document.getElementById('backwardBtn');

    let speed = 0;
    let position = 275; 
    let moving = false;

    function updateCarPosition() {
        car.style.left = `${position}px`;
    }

    function accelerate() {
        if (!moving) {
            moving = setInterval(() => {
                position += speed;
                updateCarPosition();
            }, 100);
        }
    }

    function stop() {
        if (moving) {
            clearInterval(moving);
            moving = false;
        }
    }

    function moveForward() {
        speed = 5;
        accelerate();
    }

    function moveBackward() {
        speed = -5;
        accelerate();
    }

    accelerateBtn.addEventListener('click', () => {
        if (speed === 0) {
            speed = 5;
        } else {
            speed += 5;
        }
        accelerate();
    });

    stopBtn.addEventListener('click', stop);

    forwardBtn.addEventListener('click', moveForward);

    backwardBtn.addEventListener('click', moveBackward);
});
