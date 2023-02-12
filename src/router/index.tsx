
import Home from '../pages/home';
import Search from '../pages/search';
import ErrorPage from '../pages/error';

export default [
    {
        path:'/',
        components:<Home/>
    },
    {
        path:'search/:name',
        components:<Search/>
    },
    {
        path:'*',
        components:<ErrorPage/>
    }
]