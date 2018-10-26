<template>
    <div id="app">
        <!--<div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        -->
        <Headers></Headers>
        <router-view/>
    </div>
</template>

<script>
    import Headers from './components/Headers.vue'
//    import Doc from './components/Doc.vue'
    import HighCharts from 'highcharts'

    export default {
        components: {
            HighCharts,
            Headers,
//            Doc
        },
        data() {
            return {
                theme1: 'light',
                chart:null,
                options:{
                    rangeSelector: {
                        selected: 2
                    },
                    title: {
                        text: '交易所数据'
                    },
                    plotOptions: {
                        series: {
                            showInLegend: true
                        }
                    },
                    tooltip: {
                        split: false,
                        shared: true
                    },
                    credits: {
                        enabled: false     //不显示版权信息
                    },
                    xAxis: {
                        crosshair: {
                            width: 1,
                            color: '#ccc',
                            dashStyle: 'Dash'
                        }
                    },
                    yAxis: {
                        crosshair: {
                            width: 1,
                            color: '#ccc',
                            dashStyle: 'Dash'
                        },
                        title: {
                            text: null
                        }
                    },
                    series: [{
                        // type: 'line',
                        id: '000001',
                        name: '火币',
                        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                    }]
                },
                columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        },
        mounted:function () {
            this.getData();
            this.chart = HighCharts.chart('chart', this.options);
//            this.showData();
            this.addPoint();
        },
        methods:{
            getData(){
                const _this = this;
                this.axios.get('https://data.jianshukeji.com/stock/history/000001').then((response) => {//表格数据
                    response.data.data.forEach(function (value,index) {
//                        console.log(value[0]);
//                        console.log(value[5]);
//                        _this.data_.push([value[5],value[0]]);
//                        lineCharts.pushSeries([value[5],value[0]]);
//                        lineCharts.series[0].setData(_this.data);
                    })
                });
            },
            showData(){
//                let chart = HighCharts.chart('chart', this.options);
            },
            addPoint(){
//                let i = 0;
                setInterval(()=>{
                    this.chart.series[0].addPoint(Math.ceil(Math.random()*250),true,true);
//                    i += 1;
                },1000)
            }
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
        background: #000;
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

</style>
