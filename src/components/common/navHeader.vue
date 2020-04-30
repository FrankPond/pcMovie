<template>
  <div>
      <div class="navHeader">
          <router-link to="/">
              <span>主页</span>
          </router-link>
          <router-link to="/movieList">
              <span >电影</span>
          </router-link>
          <span>header</span>
          <router-link to="/user">
              <span >admin</span>
          </router-link>
          <span>退出</span>
      </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
    name : 'navHeader',
    methods : {
        handleToMovieList() {
            this.$router.push({
                path: '/movieList'
            })
        }
    }
}
</script>

<style scoped>
.navHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    height: 30px;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;

    color: #000;
    background-color: #a5a5a5;
    border-bottom: 2px solid #000;
}
</style>