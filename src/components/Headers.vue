<template>
    <div class="head">
        <Menu mode="horizontal" active-name="1">
            <MenuItem name="1" to="/">
                <Icon type="ios-paper" />
                首页
            </MenuItem>
            <MenuItem name="Doc" to="Doc">
                <Icon type="ios-people" />
                文档
            </MenuItem>
            <MenuItem name="Testchart" to="testchart">
                <Icon type="ios-paper"/>
                测试
            </MenuItem>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-stats" />
                    统计分析
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="3-1">新增和启动</MenuItem>
                    <MenuItem name="3-2">活跃分析</MenuItem>
                    <MenuItem name="3-3">时段分析</MenuItem>
                </MenuGroup>
                <MenuGroup title="留存">
                    <MenuItem name="3-4">用户留存</MenuItem>
                    <MenuItem name="3-5">流失用户</MenuItem>
                </MenuGroup>
            </Submenu>
            <MenuItem name="4">
                <Icon type="ios-construct" />
                综合设置
            </MenuItem>
        </Menu>
    </div>
</template>

<script>
    export default {
        name: 'Headers',
        components: {},
        watch: {
            '$route' (to, from) {
                /*if (to === '/') {
                    alert(1)
                }*/
            }
        }
    }
</script>
<style scoped lang="scss">

</style>
