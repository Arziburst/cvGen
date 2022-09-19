// Core
import { lazy } from 'react';

// Pages
export const Main = lazy(() => import(/* webpackChunkName: "Main" */ './Main'));
export const Constructor = lazy(() => import(/* webpackChunkName: "Constructor" */ './Constructor'));
export const Preview = lazy(() => import(/* webpackChunkName: "Preview" */ './Preview'));
