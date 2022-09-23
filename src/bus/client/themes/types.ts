// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { defaultTheme } from '../../../assets';

// State
export type Theme = typeof defaultTheme;

// Contracts
export type BaseContact<T = any> = CaseReducer<Theme, PayloadAction<T>>
