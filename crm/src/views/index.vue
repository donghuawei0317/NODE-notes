<template>
<div>
    <Menu mode="horizontal" :theme="theme1" :active-name="actName" @on-select='tab'>
        <MenuItem name="1">
            <router-link to='/table' tag='div'>
                <Icon type="android-list"></Icon>
                人物列表
            </router-link>
        </MenuItem>
        <MenuItem name="2">
            <router-link to='info' tag='div'>
                <Icon type="ios-people"></Icon>
                人物管理
            </router-link>
        </MenuItem>
    </Menu>
    <br>
    <p>Change theme</p>
    <RadioGroup v-model="theme1">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
        <Radio label="primary"></Radio>
    </RadioGroup>
    
    <router-view></router-view>
</div>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'light',
                //actName:1
            }
        },
        mounted(){
            console.log(this.$route.path)
        },
        computed:{
            actName(){
                if(this.$route.path=='/table'){
                    return '1'
                }else{
                    return '2'
                }
            }
        },
        methods:{
            //路由的切换
            //1、直接把router-link加载到组件中
            //2、利用编程式导航
            tab(name){
                if(name==1){
                    this.$router.push('./table');
                }else{
                    this.$router.push('./info')
                }
                
                
            }
        }
    }
</script>
