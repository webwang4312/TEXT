<template>
    <div>
   <Button @click="value2 = true" type="primary">Open</Button>
    <Drawer title="Basic Drawer" placement="right" :closable="false" v-model="value2">
        <p>列表1</p>
        <p>列表2</p>
        <p>列表3</p>
    </Drawer>
    <a href="http://www.baidu.com">链接</a>
    </div>
</template>

<style lang="less" scoped>

</style>
<script>
    export default {
        name: 'zom',
         components: {},
         data () {
            return {
                value2: false
            }
        },
        methods:{
            show(){
                alert('s')
            }
        }
    }
</script>
