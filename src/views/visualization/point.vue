<template>
  <div class="point">
    <canvas ref="canvasRef" width="300" height="300"></canvas>
  </div>
</template>

<script setup lang="ts" name="point">
// canvas类型断言
const canvasRef = ref<HTMLCanvasElement | null>(null)
let ctx = ref()
let count = ref(0)
// const canvasEl = ref(null)
//1.采用setInterval(不准确，宏任务中有微任务会导致执行延迟)
const setIntervalAnimation = () => ({})

const InitCanvas = () => {
  let canvas = canvasRef.value
  ctx.value = canvas?.getContext("2d")
}

const drawContent = (num: number, type: string) => {
  ctx.value.clearRect(0, 0, 300, 300)
  ctx.value.save()

  // 1.开始绘图，平移坐标点
  ctx.value.translate(150, 150)

  ctx.value.rotate(((Math.PI * 2) / 60) * num)
  ctx.value.strokeStyle = "red"

  ctx.value.lineWidth = 6
  ctx.value.lineCap = "round"

  ctx.value.beginPath()
  ctx.value.moveTo(0, 0)
  ctx.value.lineTo(0, -80)
  ctx.value.stroke()

  ctx.value.restore()
  if (type === "requestAnimationFrame") {
    requestAnimationFrame(drawPointByRequestAnimationFrame)
  }
}

const drawPointBySetinterval = () => {
  count.value++
  count.value++
  if (count.value >= 60) {
    count.value = 0
  }
  drawContent(count.value, "Setinterval")
}

const drawPointByRequestAnimationFrame = () => {
  let second = new Date().getSeconds()
  drawContent(second, "requestAnimationFrame")
}

onMounted(() => {
  // 初始化canvas数据
  InitCanvas()
  // 采用定时器(不准确，宏任务中有微任务会导致执行延迟)
  // setInterval(()=>{
  //     drawPointBySetinterval()
  // },1000)
  // 采用requestAnimationFrame动画函数
  requestAnimationFrame(drawPointByRequestAnimationFrame)
})
</script>

<style scoped>
.point {
  width: 100%;
  height: 100%;
  background-image: url(./images/grid.png);
}
</style>
