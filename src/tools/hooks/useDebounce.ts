// Core
import { debounce } from 'lodash';

// Constant
import { WAIT_TIME } from '../../init';

// eslint-disable-next-line
export const useDebounce = () => <T extends (...args: any[]) => any> (callback: T, wait = WAIT_TIME) => debounce(callback, wait);
