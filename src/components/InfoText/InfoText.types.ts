import type { ReactNode, } from 'react';

export interface InfoTextProps {
    title?           : string,
    children?        : ReactNode,
    [ key : string ] : any,
}
