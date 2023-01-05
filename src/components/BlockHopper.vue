<template>
  <div id="canvas"></div>
</template>

<script lang="ts">
export default {
  name: "BlockHopper",
  mounted() {
    const canvasWidth = 600;
    const canvasHeight = 400;

    const gameCanvas = {
      canvas: document.createElement("canvas"),
      start: function () {
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;

        Object.assign(this, { context: this.canvas.getContext("2d") });
        document.getElementById("canvas")?.appendChild(this.canvas);
      },
    };

    gameCanvas.start();
  },
};
</script>

<style>
canvas {
  border: 2px solid black;
  background-color: #87ceeb;
}
</style>
