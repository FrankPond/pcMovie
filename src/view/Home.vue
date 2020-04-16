<template>
  <div>
    <pc-navHeader></pc-navHeader>
    <div class="main">
        <div>banner</div>
        <section class="main-content">
            <div>left</div>
            <div>right</div>
        </section>
    </div>
    
    <pc-bottomFooter></pc-bottomFooter>
  </div>
</template>

<script>
/* eslint-disable */

export default {
    name : 'home',
    data () {
        return {

        }
    },
}
</script>

<style>
.main {
    display: flex;
    flex-direction: column;
    width: 100%;
}
.main-content {
    display: flex;
    flex-direction: row;

}
</style>