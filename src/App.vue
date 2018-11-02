<template>
    <div id="app">
        <!--<div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        -->
        <Headers></Headers>
        <div class="sideNav"><Side-nav></Side-nav></div>
        <div class="cont"><router-view/></div>

    </div>
</template>

<script>
    import Headers from './components/Headers.vue'
//    import Doc from './components/Doc.vue'
    import HighCharts from 'highcharts'
    import SideNav from './components/SideNav.vue'

    export default {
        components: {
            HighCharts,
            Headers,
            SideNav
//            Doc
        },
        data() {
            return {

            }
        },
        mounted:function () {

        },
        methods:{

        }
    }
</script>

<style lang="scss">
    *{
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        list-style: none;
        box-sizing: border-box;
    }
    html,body{
        height:100%;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #c7cce6;
        height:100%;
    }
    .sideNav{
        width: 300px;
        float: left;
        height:100%;
    }
    .cont{
        width: calc(100% - 300px);
        float: right;
        height:100%;
    }
</style>
