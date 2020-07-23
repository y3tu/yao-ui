const bookRouter=[
    {
        path: '/book/home',
        name: 'bookHome',
        component: () => import('@/views/book/bookFront/home/Index')
    },
];

export default bookRouter