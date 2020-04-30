<template>
  <div>
      movieList
      <ul>
          <li style="--line-index: 0"></li>
          <li style="--line-index: 1"></li>
          <li style="--line-index: 2"></li>
          <li style="--line-index: 3"></li>
          <li style="--line-index: 4"></li>
          <li style="--line-index: 5"></li>
      </ul>
  </div>
</template>

<script>
export default {
    name : 'movieList'
}
</script>

<style scoped>
ul,li {
     list-style: none;
}
ul{
  position: relative;
  box-sizing: border-box;
  padding-top: 225px;
  font-size: 0;
}
li{
  width: 38px;
  position: absolute;
  bottom: -6px;
  animation: height 0.4s ease-out;
  box-shadow: 1px 0 2px rgba(0, 0, 0, 0.15);
  text-align: center;
  background: linear-gradient(to bottom, #7abcff 0%, #00BCD4 44%, #2196F3 100%);
  box-shadow: 0 14px 28px rgba(33, 150, 243, 0), 0 10px 10px rgba(9, 188, 215, 0.08);
  --height: calc((var(--line-index) + 1) * 30px);
  --time: calc(var(--line-index) * 300ms);
  height: var(--height);
  animation: animate-height 0.4s ease-out var(--time);
  visibility: hidden;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode:forwards; 
}
@keyframes animate-height {
  0%{
    height: 0;
  }
  100% {
    visibility: visible;
  }
}
li:nth-child(1){
  left: 26px;
}
 li:nth-child(2){
  left: 100px;
}
 li:nth-child(3){
  left: 175px;
}
 li:nth-child(4){
  left: 251px;
}
 li:nth-child(5){
  left: 325px;
}
 li:nth-child(6){
  left: 400px;
}
</style>