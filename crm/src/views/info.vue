<template>
    <div class='info_box'>
        <Form :model="formLeft" label-position="left" :label-width="100">
            <FormItem label="姓名">
                <Input v-model="formLeft.name"></Input>
            </FormItem>
            <FormItem label="年龄">
                <Input v-model="formLeft.age"></Input>
            </FormItem>
            <FormItem label="地址">
                <Input v-model="formLeft.address"></Input>
            </FormItem>
        </Form>
        <Button type="success" long @click='submit'>提交</Button>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data () {
            return {
                formLeft: {
                    name: '',
                    age: '',
                    address: ''
                },
                formLeft1: {
                    name: '',
                    age: '',
                    address: ''
                }
            }
        },
        created(){
            //通过query获取id
            if(this.$route.query.id !== undefined){
                //有 id 的时候才去发送 Ajax 请求
                this.getData();
            }
        },
        methods:{
            getData(){
                 axios.get(`/info?id=${this.$route.query.id}`).then((data)=>{
                    console.log(data);
                    //从后台获取数据之后，把数据赋给 formLeft 即可
                    if(data.data.errorCode == 0){
                        this.formLeft = data.data.data;
                    }
                })
            },
            add(){
                axios.post('/add',this.formLeft).then((data)=>{
                    if(data.data.errorCode == 0){
                        this.formLeft = JSON.parse(JSON.stringify(this.formLeft1));
                    }
                })
            },
            submit(){
                //没有 di 就是新增，有 id 就是编辑
                if(this.$route.query.id != undefined){
                    this.edit();
                }else{
                    this.add();
                };
                console.log("提交")
            },
            edit(){
                //把修改后的信息发给后台
                this.formLeft.id=this.$route.query.id;
                axios.post('/edit',this.formLeft).then((data)=>{
                    if(data.data.errorCode == 0){
                        // this.formLeft.name = '';
                        // this.formLeft.age = '';
                        // this.firmLeft.address = '';
                        this.formLeft = JSON.parse(JSON.stringify(this.formLeft1));//深拷贝 利用 JSON 的方法产生一个新对象
                        //this.$router.push('/info');
                        this.$router.replace('/info');
                    }
                })
            }
        }
    }
</script>
<style scoped>
.info_box{
    width:600px;
    margin:auto;
}
</style>
