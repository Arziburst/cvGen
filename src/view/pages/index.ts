// Core
import { lazy } from 'react';

// Pages
export const Root = lazy(() => import(/* webpackChunkName: "Root" */ './Root'));
export const Cv = lazy(() => import(/* webpackChunkName: "Root" */ './Cv'));
