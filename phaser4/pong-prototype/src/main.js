let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);
let paddle1;
let paddle2;
let cursors;
let paddleSpeed = 300;
let wKey;
let sKey;
let ball;
let ballSpeed = 200;
let ballDirection = {x: 1, y: 1};

function preload() {
    this.load.image('paddle', 'assets/player-bar.png');
    this.load.image('ball', 'assets/ball.png');
}

function create() {
    // Initialize physics first
    this.physics.world.setBounds(0, 0, config.width, config.height);

    const centerX = config.width / 2;
    const centerY = config.height / 2;

    paddle1 = create_paddle(this, 0, centerY);
    paddle2 = create_paddle(this, config.width - 5, centerY);

    cursors = this.input.keyboard.createCursorKeys();

    wKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

    ball = this.physics.add.sprite(centerX, centerY, 'ball');
    ball.setCollideWorldBounds(true);
    ball.setBounce(1, 1);
    ball.body.onWorldBounds = true;

    ball.setVelocity(ballSpeed * ballDirection.x, ballSpeed * ballDirection.y);

    this.physics.add.collider(ball, paddle1, hitPaddle, null, this);
    this.physics.add.collider(ball, paddle2, hitPaddle, null, this);

    this.physics.world.on('worldbounds', function(body) {
        if (body.gameObject === ball) {
            // Optional: Add sound or visual effect here
        }
    });
}

function update() {
    control_paddle(paddle2, cursors.up, cursors.down);
    control_paddle(paddle1, wKey, sKey);
}

function create_paddle(scene, x, y) {
    // Create sprite first
    let paddle = scene.add.sprite(x, y, 'paddle');

    // Then enable physics
    scene.physics.add.existing(paddle);

    // Configure physics body
    paddle.body.setCollideWorldBounds(true);
    paddle.body.setImmovable(true);

    // Set anchor point
    paddle.setOrigin(0.5, 0.5);

    return paddle;
}

function control_paddle(paddle, upKey, downKey) {
    // Reset velocity each frame
    paddle.body.setVelocity(0);
    // Move up
    if (upKey.isDown) {
        paddle.body.setVelocityY(-paddleSpeed);
    }    // Move down
    else if (downKey.isDown) {
        paddle.body.setVelocityY(paddleSpeed);
    }
}

function hitPaddle(ball, paddle) {
    // Calculate bounce angle based on where the ball hits the paddle
    const hitPoint = (ball.y - paddle.y) / (paddle.height / 2);
    const bounceAngle = hitPoint * Math.PI / 3; // Max 60 degree angle

    // Calculate new direction
    const direction = ball.x < config.width / 2 ? 1 : -1;
    // Set new velocity
    ball.setVelocity(
        Math.cos(bounceAngle) * ballSpeed * direction,
        Math.sin(bounceAngle) * ballSpeed
    );
    ballSpeed += 50;
}