import { createHashRouter, } from 'react-router';
import { RouterProvider, } from 'react-router/dom';

import { AgreementPage, HomePage, SecureZone, } from './pages';

const router = createHashRouter([
    {
        path      : '/',
        Component : HomePage,
    },
    {
        path      : '/products/securezone',
        Component : SecureZone,
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
