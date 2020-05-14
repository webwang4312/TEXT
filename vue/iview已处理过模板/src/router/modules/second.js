import BasicLayout from '@/layouts/basic-layout';

const meta = {
    auth: true
};

const pre = 'second-';

export default {
    path: '/second',
    name: 'second',
    redirect: {
        name: `${pre}console`
    },
    meta,
    component: BasicLayout,
    children: [
        {
            path: 'student',
            name: `${pre}student`,
            meta: {
                ...meta,
                title: 'student',
                closable: false
            },
            component: () => import('@/pages/second/student')
        },
        {
            path: 'teacher',
            name: `${pre}teacher`,
            meta: {
                ...meta,
                title: 'teacher',
                closable: false
            },
            component: () => import('@/pages/second/teacher')
        },
        {
            path: 'zom',
            name: `${pre}zom`,
            meta: {
                ...meta,
                title: 'zom',
                closable: false
            },
            component: () => import('@/pages/second/zom')
        }
    ]
};
