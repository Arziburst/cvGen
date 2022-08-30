// Core
import { lazy } from 'react';

// Pages
export const Preview = lazy(() => import(/* webpackChunkName: "Root" */ './Preview'));
export const Cv = lazy(() => import(/* webpackChunkName: "Root" */ './Cv'));
