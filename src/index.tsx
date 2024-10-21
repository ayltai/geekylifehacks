import { App as ThemedApp, ConfigProvider, } from 'antd';
import { StrictMode, } from 'react';
import { createRoot, } from 'react-dom/client';

import { apply, } from './i18n';
import en from './i18n/en.json';
import { App, } from './App';

apply({
    language           : navigator.language.substring(0, 2),
    supportedLanguages : [
        'en',
    ],
    fallbackLanguage   : 'en',
    resources          : {
        en : {
            translation : en,
        },
    },
}).then(() => createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ConfigProvider theme={{
            token : {
                colorPrimary : '#722ed1',
            },
        }}>
            <ThemedApp>
                <App />
            </ThemedApp>
        </ConfigProvider>
    </StrictMode>
)).catch(console.error);
