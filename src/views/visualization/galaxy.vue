<template>
  <div class="galaxy">
    <canvas ref="canvasRef" width="300" height="300"></canvas>
    <img style="display: none" id="sun" src="./images/canvas_sun.png" alt="" />
    <img style="display: none" id="earth" src="./images/canvas_earth.png" alt="" />
    <img style="display: none" id="moon" src="./images/canvas_moon.png" alt="" />
  </div>
</template>

<script setup lang="ts" name="point">
const canvasRef = ref<HTMLCanvasElement | null>(null)
let ctx = ref()
let sun = ref()
let earth = ref()
let moon = ref()

const InitCanvas = () => {
  let canvas = canvasRef.value
  ctx.value = canvas?.getContext("2d")

  sun.value = document.querySelector("#sun")
  earth.value = document.querySelector("#earth")
  moon.value = document.querySelector("#moon")
}

const drawContent = () => {
  ctx.value.clearRect(0, 0, 300, 300)
  ctx.value.save()

  let second = new Date().getSeconds()
  let milliseconds = new Date().getMilliseconds()

  // 1.绘制背景
  ctx.value.save()
  ctx.value.drawImage(sun.value, 0, 0)
  // 坐标系平移
  ctx.value.translate(150, 150)
  // 画轨道
  ctx.value.strokeStyle = "rgba(0,153,255,0.4)"
  ctx.value.beginPath()
  ctx.value.arc(0, 0, 105, 0, Math.PI * 2)
  ctx.value.stroke()
  ctx.value.restore()

  // 画地球
  ctx.value.save()
  ctx.value.translate(150, 150)

  // 地球旋转
  ctx.value.rotate(((Math.PI * 2) / 60) * second)

  ctx.value.translate(105, 0)
  ctx.value.drawImage(earth.value, -12, -12)

  // 画月球(复用坐标系)
  ctx.value.save()
  ctx.value.translate(0, 28)
  ctx.value.drawImage(moon.value, -3.5, -3.5)
  ctx.value.restore()

  requestAnimationFrame(drawPointByRequestAnimationFrame)
}

const drawPointByRequestAnimationFrame = () => {
  drawContent()
}

onMounted(() => {
  // 初始化canvas数据
  InitCanvas()
  // 采用requestAnimationFrame动画函数
  requestAnimationFrame(drawPointByRequestAnimationFrame)
})
</script>

<style scoped>
.galaxy {
  width: 100%;
  height: 100%;
  background-image: url(./images/grid.png);
}
</style>
