<template>
  <div>
    <pc-navHeader></pc-navHeader>
    <div class="main">
        <div class="main-banner">
            <banner-Picture></banner-Picture>
        </div>
        <section class="main-content">
            <div class="main-content-updateList">left
                <ul>
                    <li>xxxx</li>
                    <li>xxxx</li>
                    <li>xxxx</li>
                </ul>
            </div>
            <div class="main-content-rankList">right

                <ul>
                    <li>xxx</li>
                    <li>xxx</li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </section>
    </div>
    <pc-bottomFooter></pc-bottomFooter>
  </div>
</template>

<script>
/* eslint-disable */
import bannerPicture from '@/components/common/bannerPicture.vue'

export default {
    name : 'home',
    data () {
        return {

        }
    },
    components: {
        'banner-Picture': bannerPicture
    }
}
</script>

<style>
.main {
    display: flex;
    flex-direction: column;
    width: 100%;
}
.main-banner{
    background-color: blue;
}
.main-content {
    display: flex;
    flex-direction: row;

}
.main-content-updateList {
    width: 70%;
    background-color: red;
}
.main-content-rankList {
    width: 30%;
    background-color: green;
}
</style>