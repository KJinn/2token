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
            <Card>
                <p slot="title">选择展示的数据量（条）</p>
                <RadioGroup v-model="length" type="button" @on-change="getData(length)">
                    <Radio label="100"></Radio>
                    <Radio label="200"></Radio>
                    <Radio label="500"></Radio>
                    <Radio label="1000"></Radio>
                </RadioGroup>
            </Card>

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
    import Doc from './Doc.vue'

    export default {
        name: 'Main',
        components: {
            Doc
        },
        data() {
            return {
                data:[],
                chart:null,
                length:'100'
                /*options:{
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
                ]*/
            }
        },
        mounted:function () {
            this.getData();
            this.addPoint();
        },
        methods:{
            getData(name=this.length){

                this.axios.get('positions',{
                    params:{
                        name:'nx_macd',
                        account:'bitmex_acc_quantity',
                        size:name
                    }
                }).then((response) => {
                    this.data = response.data.data.data;

                    let d = [];
                    this.data.forEach((val,index)=>{
                        d.push([val.time*1000, val.vol]);
//                        d.push({y:val.vol,name:val.time});
                        if (index-0+1 === this.data.length) {
                            this.showData(d.reverse());
                        }
                    })
                });
            },
            showData(data){
                this.chart = HighCharts.chart('chart', {
                    rangeSelector: {
                        selected: 2
                    },
                    title: {
                        text: '数据'
                    },
                    plotOptions: {
                        series: {
                            showInLegend: true
                        }
                    },
                    tooltip: {
                        split: false,
                        shared: true,
                        dateTimeLabelFormats: {
                            millisecond: '%Y-%m-%d %H:%M:%S',
                            second: '%Y-%m-%d %H:%M:%S',
                            minute: '%Y-%m-%d %H:%M:%S',
                            hour: '%Y-%m-%d %H:%M:%S',
                            day: '%Y-%m-%d %H:%M:%S',
                            week: '%Y-%m-%d %H:%M:%S',
                            month: '%Y-%m-%d %H:%M:%S',
                            year: '%Y-%m-%d %H:%M:%S'
                        }
                    },
                    credits: {
                        enabled: false     //不显示版权信息
                    },
                    xAxis: {
                        crosshair: {
                            width: 1,
                            color: '#ccc',
                            dashStyle: 'Dash'
                        },
//                        endOnTick: true,//是否显示坐标轴最后一个刻度
                        tickAmount: 6,//刻度总数
                        type: 'datetime',
                        dateTimeLabelFormats: {
                            millisecond: '%Y-%m-%d %H:%M:%S',
                            second: '%Y-%m-%d %H:%M:%S',
                            minute: '%Y-%m-%d %H:%M:%S',
                            hour: '%Y-%m-%d %H:%M:%S',
                            day: '%Y-%m-%d %H:%M:%S',
                            week: '%Y-%m-%d %H:%M:%S',
                            month: '%Y-%m-%d %H:%M:%S',
                            year: '%Y-%m-%d %H:%M:%S'
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
                        name: '值',
                        data: data
                    }]
                });
            },
            addPoint(){
                setInterval(()=>{
                    this.getData(name=this.length);
                },1000 * 60 * 5)
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
