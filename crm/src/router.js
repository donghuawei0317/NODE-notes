const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        redirect:'/table',
        component: (resolve) => require(['./views/index.vue'], resolve),
        children: [
            {
                path:'/table',
                component: (res)=>require(['./views/table.vue'],res)
            },
            {
                path:'/info',
                component:(res)=>require(['./views/info.vue'],res)
            }
        ]
    }
];
export default routers;