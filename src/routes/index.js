// Pages
import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profile';
//Layout
import { OnlyHeaderLayout } from '~/Component/Layout';
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/profile',
        component: Profile,
        layout: OnlyHeaderLayout,
    },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
