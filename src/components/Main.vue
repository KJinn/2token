<template>
    <div class="wrapper">

        <!--<div id="a">
            &lt;!&ndash;<Table :columns="columns1" :data="data1"></Table>&ndash;&gt;
            <template>
                <Menu active-name="1-2" :open-names="['1']">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-analytics" />
                            Navigation One
                        </template>
                        <MenuGroup title="Item 1">
                            <MenuItem name="1-1">Option 1</MenuItem>
                            <MenuItem name="1-2">Option 2</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="Item 2">
                            <MenuItem name="1-3">Option 3</MenuItem>
                            <MenuItem name="1-4">Option 4</MenuItem>
                        </MenuGroup>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-filing" />
                            Navigation Two
                        </template>
                        <MenuItem name="2-1">Option 5</MenuItem>
                        <MenuItem name="2-2">Option 6</MenuItem>
                        <Submenu name="3">
                            <template slot="title">Submenu</template>
                            <MenuItem name="3-1">Option 7</MenuItem>
                            <MenuItem name="3-2">Option 8</MenuItem>
                        </Submenu>
                    </Submenu>
                    <Submenu name="4">
                        <template slot="title">
                            <Icon type="ios-cog" />
                            Navigation Three
                        </template>
                        <MenuItem name="4-1">Option 9</MenuItem>
                        <MenuItem name="4-2">Option 10</MenuItem>
                        <MenuItem name="4-3">Option 11</MenuItem>
                        <MenuItem name="4-4">Option 12</MenuItem>
                    </Submenu>
                </Menu>
            </template>

        </div>-->
        <div id="b">
            <div id="chart"></div>

        </div>
        <div id="c">
            <!--<Table :columns="columns1" :data="data1"></Table>-->
            <!--<Doc></Doc>-->
        </div>
    </div>
</template>

<script>
    import HighCharts from 'highcharts';
    import SideNav from './Headers.vue'
    export default {
        name: 'Main',
        components: {
        },
        data() {
            return {
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
            this.showData();
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
                setTimeout(()=>{
                    this.chart = HighCharts.chart('chart', this.options);
                },0);
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
<style scoped lang="scss">
    .wrapper {
        display: flex;
        height:100%;

        #a,#c{
            width:300px;
        }
        #b{flex: 1;}

        .ivu-table-wrapper{
            height:100%;
        }
        /*.el-table td, .el-table th.is-leaf{
            border-bottom-color: transparent;
        }
        .el-table th:hover, .el-table tr:hover{
            background: rgba(33,40,65,.6)!important;

        }*/
    }
</style>
