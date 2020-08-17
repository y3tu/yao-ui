const extraRouter=[
    {
        name: 'dynamicForm',
        path: '/dynamicFormContainer',
        component: () => import('@/components/DynamicForm/Container'),
        hidden: true
    },
];

export default extraRouter