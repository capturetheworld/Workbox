import { clsx } from 'clsx';

export const CN = (componentName: string): string => {
    return `DS${componentName}`;
};

export const EN = (cn: string, part: string ): string => {
    return `${cn}-${part}`;
};

// @ts-expect-error - clsx is not typed
export const CLSX = (...args): string => {
    return clsx(args);
};