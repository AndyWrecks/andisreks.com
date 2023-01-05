<template>
  <div id="canvas"></div>
</template>

<script>
import { defineComponent } from "vue";

const canvasWidth = 600;
const canvasHeight = 400;
let fallSpeed = 0;
let isJumping = false;
let jumpSpeed = 0;

const gameCanvas = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = canvasWidth;
    this.canvas.height = canvasHeight;

    Object.assign(this, { context: this.canvas.getContext("2d") });
    document.getElementById("canvas")?.appendChild(this.canvas);
  },
};

export default defineComponent({
  name: "BlockHopper",
  methods: {
    initGameCanvas: () => {
      gameCanvas.start();
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
          this.y += fallSpeed;
          fallSpeed += 0.1;
          this.stopPlayer();
        }
      };

      this.stopPlayer = function () {
        const ground = canvasHeight - this.height;

        if (this.y > ground) {
          this.y = ground;
        }
      };

      this.jump = function () {
        if (isJumping) {
          this.y -= jumpSpeed;
          jumpSpeed += 0.3;
        }
      };
    },
    resetJump: function () {
      jumpSpeed = 0;
      isJumping = false;
    },
    startGame: function () {
      this.initGameCanvas();
      this.player = new this.createPlayer(30, 30, 10);
      setInterval(this.updateCanvas, 20);
      const resetJump = this.resetJump;

      window.addEventListener("keydown", (event) => {
        if (event.defaultPrevented) {
          return;
        }

        if (event.code === "Space") {
          isJumping = true;
          setTimeout(function () {
            resetJump();
          }, 1000);
        }
      });
    },
    updateCanvas: function () {
      const ctx = gameCanvas.context;
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      this.player.makeFall();
      this.player.draw();
      this.player.jump();
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
