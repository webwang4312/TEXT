import BasicLayout from '@/layouts/basic-layout';

const meta = {
    auth: true
};

const pre = 'basic-';

export default {
    path: '/basic',
    name: 'basic',
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
                title: '主界面',
                closable: false
            },
            component: () => import('@/pages/basic/student')
        },
        {
            path: 'teacher',
            name: `${pre}teacher`,
            meta: {
                ...meta,
                title: '老师管理',
                closable: false
            },
            component: () => import('@/pages/basic/teacher')
        },
        {
            path: 'zom',
            name: `${pre}zom`,
            meta: {
                ...meta,
                title: '学生管理',
                closable: false
            },
            component: () => import('@/pages/basic/zom')
        }
    ]
};
