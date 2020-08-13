const extraRouter=[
    {
        name: 'Designer',
        path: '/datav/Designer',
        component: () => import('@/views/model/support/datav/Designer'),
        hidden: true
    },
    {
        name: 'dynamicForm',
        path: '/dynamicForm',
        component: () => import('@/components/DynamicForm/Home'),
        hidden: true
    },
];

export default extraRouter