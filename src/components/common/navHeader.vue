<template>
  <div>
      <div class="navHeader">
            <span>主页</span>
            <span @click="handleToMovieList">电影</span>
            <span>header</span>
            <span @click="handleToMovieList">admin</span>
            <span>退出</span>
      </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
    name : 'Header',
    methods : {
        handleToMovieList() {
            this.$router.push({
                path: '/movieList'
            })
        }
    }
}
</script>

<style>
.navHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
</style>