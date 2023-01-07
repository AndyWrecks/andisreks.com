<template>
  <div id="canvas"></div>
</template>

<script>
import { defineComponent } from "vue";

const canvasWidth = 600;
const canvasHeight = 400;
let fallSpeed = 0;
let isJumping = false;
let isFalling = true;
let jumpSpeed = 0;
let score = 0;
let gameStopped = false;

const gameCanvas = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = canvasWidth;
    this.canvas.height = canvasHeight;

    Object.assign(this, { context: this.canvas.getContext("2d") });
    document.getElementById("canvas")?.appendChild(this.canvas);
  },
};

const randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default defineComponent({
  name: "BlockHopper",
  methods: {
    initGameCanvas: () => {
      gameCanvas.start();
    },
    createScoreLabel: function (x, y) {
      this.score = 0;
      this.x = x;
      this.y = y;
      this.draw = function () {
        const ctx = gameCanvas.context;
        ctx.font = "25px Marker Felt";
        ctx.fillStyle = "black";
        ctx.fillText(this.text, this.x, this.y);
      };
    },
    createPlayer: function (width, height, x) {
      const playerYPosition = 200;

      this.width = width;
      this.height = height;
      this.x = x;
      this.y = playerYPosition;

      this.draw = function () {
        const ctx = gameCanvas.context;
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, this.width, this.height);
      };

      this.makeFall = function () {
        if (!isJumping) {
          isFalling = true;
          this.y += fallSpeed;
          fallSpeed += 1;
          this.stopPlayer();
        }
      };

      this.stopPlayer = function () {
        const ground = canvasHeight - this.height;

        if (this.y > ground) {
          isFalling = false;
          this.y = ground;
        }
      };

      this.jump = function () {
        if (isJumping) {
          this.y -= jumpSpeed;
          jumpSpeed += 1;
          fallSpeed = 0;

          if (this.y <= 0) {
            jumpSpeed = 0;
          }
        }
      };
    },

    createBlock: function () {
      let width = randomNumber(10, 50);
      let height = randomNumber(10, 200);
      let speed = randomNumber(2, 6);

      this.x = canvasWidth;
      this.y = canvasHeight - height;

      this.draw = function () {
        const ctx = gameCanvas.context;
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, width, height);
      };
      this.returnToAttackPosition = function () {
        if (this.x < 0) {
          width = randomNumber(10, 50);
          height = randomNumber(50, 200);
          speed = randomNumber(4, 6);
          this.y = canvasHeight - height;
          this.x = canvasWidth;
          score++;
        }
      };
      this.attackPlayer = function () {
        this.x -= speed;
        this.returnToAttackPosition();
      };
    },
    resetJump: function () {
      jumpSpeed = 0;
      isJumping = false;
    },
    startGame: function () {
      this.initGameCanvas();
      this.player = new this.createPlayer(30, 30, 10);
      this.block = new this.createBlock();
      this.scoreLabel = new this.createScoreLabel(10, 30);

      setInterval(this.updateCanvas, 20);

      const resetJump = this.resetJump;

      window.addEventListener("keydown", (event) => {
        if (event.defaultPrevented) {
          return;
        }

        if (event.code === "Space" && (!isJumping || !isFalling)) {
          isJumping = true;
          setTimeout(function () {
            resetJump();
          }, 300);
        }
      });
    },
    updateCanvas: function () {
      this.detectCollision();

      if (!gameStopped) {
        const ctx = gameCanvas.context;
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        this.player.makeFall();
        this.player.draw();
        this.player.jump();

        this.block.draw();
        this.block.attackPlayer();

        this.scoreLabel.text = `Score: ${score}`;
        this.scoreLabel.draw();
      }
    },
    detectCollision: function () {
      const playerLeft = this.player.x;
      const playerRight = this.player.x + this.player.width;
      const blockLeft = this.block.x;

      const playerBottom = this.player.y + this.player.height;
      const blockTop = this.block.y;

      if (
        playerRight > blockLeft &&
        playerLeft < blockLeft &&
        playerBottom > blockTop
      ) {
        gameStopped = true;
      }
    },
  },
  mounted() {
    this.startGame();
  },
});
</script>

<style>
canvas {
  border: 2px solid black;
  background-color: #87ceeb;
}
</style>
