import './bootstrap';
import '../css/app.css';
import 'flowbite';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import {initFlowbite} from "flowbite";
import { Flowbite } from 'flowbite-react';

const customTheme = {
    button: {
        color: {
            primary: 'bg-primary-700',
        },
    },
};

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';


createInertiaApp({
    title: (title) => `${appName}`,
    resolve: (name) => {
        initFlowbite();
        return resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx'))
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <Flowbite theme={customTheme}>
                <App {...props} />
            </Flowbite>
        );
    },
    progress: {
        color: '#4B5563',
        delay: 0
    },
});
