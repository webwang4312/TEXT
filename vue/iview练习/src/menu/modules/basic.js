const pre = '/basic/';

export default {
    path: '/basic',
    title: 'basic',
    header: 'home',
    icon: 'md-speedometer',
    children: [
        {
            path: `${pre}student`,
            title: '主界面'
        },
        {
            path: `${pre}teacher`,
            title: '老师管理'
        },
        {
            path: `${pre}zom`,
            title: '学生管理'
        }]
}
