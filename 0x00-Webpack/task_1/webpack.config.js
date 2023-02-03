import { resolve } from "path";

export const mode = 'production';
export const entry = {
    main: resolve(__dirname, './js/dashboard_main.js'),
};
export const output = {
    path: resolve(__dirname, 'public'),
    filename: 'bundle.js',
};
