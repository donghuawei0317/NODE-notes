<template>
    <Table width="800" height="400" border :columns="columns2" :data="data4"></Table>
</template>
<script>
import axios from 'axios'
    export default {
        data () {
            return {
                columns2: [
                    {
                        title: '姓名',
                        key: 'name',
                        width: 200,
                        fixed: 'left'
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        width: 200
                    },
                    // {
                    //     title: '省',
                    //     key: 'province',
                    //     width: 100
                    // },
                    // {
                    //     title: '市',
                    //     key: 'city',
                    //     width: 100
                    // },
                    {
                        title: '地址',
                        key: 'address',
                        width: 300
                    },
                    // {
                    //     title: '邮编',
                    //     key: 'zip',
                    //     width: 100
                    // },
                    {
                        title: '操作',
                        key: 'action',
                        fixed: 'right',
                        width: 150,
                        className:"ddddd",
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style:{
                                        marginRight:'4px'
                                    },
                                    on:{
                                        click: (...arg)=>{
                                            console.log(params);
                                            this.jump(params);
                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on:{
                                        click: (...arg)=>{
                                            console.log(params);
                                            this.remove(params)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                data4: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    }
                ]
            }
        },
        created(){
            //发送Ajax请求
            axios.get('/list?a=1').then((data)=>{
                console.log(data);
                if(data.data.errorCode != 0)return;
                this.data4=data.data.data.reverse();
            })
        },
        methods:{
            remove(obj){
                //前端先发起删除请求，给后台一个 id ，让后台删除该项；
                //后台删除成功后，再告诉前端删除成功
                //前端再去删除当前项
                axios.get('/remove',{params:{id:obj.row.id}}).then(data=>{
                    if(data.data.errorCode == 0){
                        //代表后台删除成功
                        this.data4.splice(obj.index,1);
                    }
                })
                //this.data4.splice(obj.index,1);
            },
            jump(obj){
                //实现带参数跳转
                console.log(obj);
                this.$router.push(`/info?id=${obj.row.id}`);
                //this.router.push({path:'/info',query:{id:obj.rpw.id});
            }
        }
    }
</script>
