(function() {
    'use strict';
    // define width and height
    var width = 600,
        height = 400,
        paddleWidth = 20,
        paddleHeight = 120,
        ballSize = 15,
        difficulty = 3;

    // create SVG document and set its size
    var draw = SVG('pong').size(width, height);

    // draw background
    var background = draw.rect(width, height).fill('#d7e1eb');

    //404
    var pageNotFound = draw.text("4 0 4").font({
        size: 180,
        family: 'Menlo, sans-serif',
        anchor: 'end',
        fill: 'red'
    }).move(width / 2 + 201, height / 2 - 150);

    pageNotFound.animate(2000, '>', 1000).attr({fill: '#a52026'}).loop();


    // draw vertical line
    var line = draw.line(width / 2, 0, width / 2, height);
    line.stroke({width: 5, color: '#fff', dasharray: '5,5'});

    draw.text("We couldn't find the page...").font({
        size: 32,
        family: 'Menlo, sans-serif',
        anchor: 'end',
        fill: 'red'
    }).move(width / 2 + 200, height / 2 + 70);

    // create and position left paddle
    var paddleLeft = draw.rect(paddleWidth, paddleHeight);
    paddleLeft.x(0).cy(height / 2).fill('#00e3ff');

    // create and position right paddle
    var paddleRight = paddleLeft.clone();
    paddleRight.x(width - paddleWidth).fill('#a52026');

    // create ball
    var ball = draw.circle(ballSize);
    ball.center(width / 2, height / 2).fill('#7f7f7f');


    // define initial player score
    var playerLeft = 0,
        playerRight = 0;

    // create text for the score, set font properties
    var scoreLeft = draw.text(playerLeft + '').font({
        size: 32,
        family: 'Menlo, sans-serif',
        anchor: 'end',
        fill: '#fff'
    }).move(width / 2 - 10, 10);

    // cloning rocks!
    var scoreRight = scoreLeft.clone()
        .text(playerRight + '')
        .font('anchor', 'start')
        .x(width / 2 + 10);

    // random velocity for the ball at start
    var vx = 0,
        vy = 0;

    draw.on('click', function () {
        if (vx === 0 && vy === 0) {
            vx = Math.random() * 600 - 350;
            vy = Math.random() * 600 - 350;

            if (vx < 50 && vx >= 0) {
                vx += 50;
            }
            if (vx > -50 && vx < 0) {
                vx -= 50;
            }
        }
    });

    // update is called on every animation step
    function update(dt) {
        // move the ball by its velocity
        ball.dmove(vx * dt, vy * dt);

        var ballColor = new SVG.Color('#a52026');

        ballColor.morph('#00e3ff');

        ball.fill(ballColor.at(1 / width * ball.x()));

        // get position of ball
        var cx = ball.cx(),
            cy = ball.cy();

        // check if we hit top/bottom borders
        if ((vy < 0 && cy <= 0) || (vy > 0 && cy >= height)) {
            vy = -vy
        }

        // check if we hit left/right borders
        if ((vx < 0 && cx <= 0) || (vx > 0 && cx >= width)) {
            // when x-velocity is negative, its a point for player 2, else player 1
            if (vx < 0) {
                ++playerRight;
            }
            else {
                ++playerLeft;
            }

            scoreLeft.text(playerLeft + '');
            scoreRight.text(playerRight + '');

            boom();
            reset();
        }

        var paddleLeftY = paddleLeft.y(),
            paddleRightY = paddleRight.y();

        // check if we hit the paddle
        if ((vx < 0 && cx <= paddleWidth && cy > paddleLeftY && cy < paddleLeftY + paddleHeight) ||
            (vx > 0 && cx >= width - paddleWidth && cy > paddleRightY && cy < paddleRightY + paddleHeight)) {
            // depending on where the ball hit we adjust y velocity
            // for more realistic control we would need a bit more math here
            // just keep it simple
            vy = (cy - ((vx < 0 ? paddleLeftY : paddleRightY) + paddleHeight / 2)) * 7; // magic factor

            // make the ball faster on hit
            if (Math.abs(vx) < 150) {
                vx = -vx * 1.5;
            } else if (Math.abs(vx) < 250) {
                vx = -vx * 1.1;
            } else {
                vx = -vx * 1.05;
            }

            console.log(Math.abs(vx));

        }

        // move player paddle
        var playerPaddleY = paddleRight.y();

        if (playerPaddleY <= 0 && paddleDirection == -1) {
            paddleRight.cy(paddleHeight / 2)
        } else if (playerPaddleY >= height - paddleHeight && paddleDirection == 1) {
            paddleRight.y(height - paddleHeight)
        } else {
            paddleRight.dy(paddleDirection * paddleSpeed)
        }

        // get position of ball and paddle
        var paddleLeftCy = paddleLeft.cy();

        // move the left paddle in the direction of the ball
        var dy = Math.min(difficulty, Math.abs(cy - paddleLeftCy));
        paddleLeftCy += cy > paddleLeftCy ? dy : -dy;

        // constraint the move to the canvas area
        paddleLeft.cy(Math.max(paddleHeight / 2, Math.min(height - paddleHeight / 2, paddleLeftCy)));
    }

    var lastTime, animFrame;

    function callback(ms) {
        // we get passed a timestamp in milliseconds
        // we use it to determine how much time has passed since the last call

        if (lastTime) {
            update((ms - lastTime) / 1000); // call update and pass delta time in seconds
        }

        lastTime = ms;
        animFrame = requestAnimationFrame(callback);
    }

    callback();

    // define paddle direction and speed
    var paddleDirection = 0,  // -1 is up, 1 is down, 0 is still
        paddleSpeed = 5;      // pixels per frame refresh

    // detect if up and down arrows are prssed to change direction
    SVG.on(document, 'keydown', function (e) {
        paddleDirection = e.keyCode == 40 ? 1 : e.keyCode == 38 ? -1 : 0;
    });

    // make sure the direction is reset when the key is released
    SVG.on(document, 'keyup', function (e) {
        paddleDirection = 0;
    });

    function reset() {
        // reset speed values
        vx = 0;
        vy = 0;

        // position the ball back in the middle
        ball.animate(100).center(width / 2, height / 2);

        // reset the position of the paddles
        paddleLeft.animate(100).cy(height / 2);
        paddleRight.animate(100).cy(height / 2);
    }

    function boom() {
        // detect winning player
        var paddle = vx > width / 2 ? paddleLeft : paddleRight;

        // create the gradient
        var gradient = draw.gradient('radial', function (stop) {
            stop.at(0, paddle.attr('fill'), 1);
            stop.at(1, paddle.attr('fill'), 0);
        });

        // create circle to carry the gradient
        var blast = draw.circle(300);
        blast.center(ball.cx(), ball.cy()).fill(gradient);

        // animate to invisibility
        blast.animate(1000, '>').opacity(0).after(function () {
            blast.remove();
        });
    }

    function resetGame() {

        reset();

        playerRight = 0;
        playerLeft = 0;

        scoreLeft.text(playerLeft + '');
        scoreRight.text(playerRight + '');
    }
})();
