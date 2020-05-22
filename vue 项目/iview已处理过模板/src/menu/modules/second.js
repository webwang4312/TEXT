const pre = '/second/';

export default {
    path: '/second',
    title: 'second',
    header: 'home',
    icon: 'md-speedometer',
    children: [
        {
            path: `${pre}student`,
            title: 'student'
        },
        {
            path: `${pre}lunbotu`,
            title: 'lunbotu'
        },
        {
            path: `${pre}zom`,
            title: 'zom'
        }]
}
