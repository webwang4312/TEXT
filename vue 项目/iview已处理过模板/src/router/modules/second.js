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
            path: 'lunbotu',
            name: `${pre}lunbotu`,
            meta: {
                ...meta,
                title: 'lunbotu',
                closable: false
            },
            component: () => import('@/pages/second/lunbotu')
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
