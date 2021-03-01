import App from '../App';
import NotFound from '../pages/NotFound';
import Child from '../pages/Child';

const router = [
	{
		path: '/home',
		exact: false,
		component: App
	},
	{
		path: '/test',
		exact: false,
		component: Child
	},
	{
		path:'/404',
		exact: false,
		component: NotFound
	}
]

export default router