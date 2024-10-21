import { createBrowserRouter, RouterProvider, } from 'react-router-dom';

import { AgreementPage, HomePage, } from './pages';

const router = createBrowserRouter([
    {
        path      : '/',
        Component : HomePage,
    },
    {
        path     : '/agreements',
        children : [
            {
                path      : '/agreements/:page',
                Component : AgreementPage,
            },
        ],
    },
]);
export const App = () => <RouterProvider router={router} />;
