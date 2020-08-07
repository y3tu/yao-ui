const extraRouter=[
    {
        name: 'Designer',
        path: '/datav/Designer',
        component: () => import('@/views/model/support/datav/Designer'),
        hidden: true
    },
];

export default extraRouter