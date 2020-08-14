const extraRouter=[
    {
        name: 'dynamicForm',
        path: '/dynamicForm',
        component: () => import('@/components/DynamicForm/Container'),
        hidden: true
    },
];

export default extraRouter