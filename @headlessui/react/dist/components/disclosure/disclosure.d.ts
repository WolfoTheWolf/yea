import React, { MutableRefObject, Ref } from 'react';
import { Props } from '../../types';
import { PropsForFeatures } from '../../utils/render';
interface DisclosureRenderPropArg {
    open: boolean;
    close(focusableElement?: HTMLElement | MutableRefObject<HTMLElement | null>): void;
}
interface ButtonRenderPropArg {
    open: boolean;
}
declare type ButtonPropsWeControl = 'id' | 'type' | 'aria-expanded' | 'aria-controls' | 'onKeyDown' | 'onClick';
interface PanelRenderPropArg {
    open: boolean;
    close: (focusableElement?: HTMLElement | MutableRefObject<HTMLElement | null>) => void;
}
declare type PanelPropsWeControl = 'id';
declare let PanelRenderFeatures: number;
export declare let Disclosure: (<TTag extends React.ElementType<any> = React.ExoticComponent<{
    children?: React.ReactNode;
}>>(props: Omit<import("../../types").PropsOf<TTag>, "as" | "children" | "refName" | "className"> & {
    as?: TTag | undefined;
    children?: React.ReactNode | ((bag: DisclosureRenderPropArg) => React.ReactElement<any, string | React.JSXElementConstructor<any>>);
    refName?: string | undefined;
} & (import("../../types").PropsOf<TTag> extends {
    className?: any;
} ? {
    className?: string | ((bag: DisclosureRenderPropArg) => string) | undefined;
} : {}) & {
    defaultOpen?: boolean | undefined;
}, ref: React.Ref<TTag>) => JSX.Element) & {
    displayName: string;
} & {
    Button: (<TTag_1 extends React.ElementType<any> = "button">(props: Props<TTag_1, ButtonRenderPropArg, ButtonPropsWeControl>, ref: Ref<HTMLButtonElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
        displayName: string;
    };
    Panel: (<TTag_2 extends React.ElementType<any> = "div">(props: Omit<import("../../types").PropsOf<TTag_2>, ("as" | "children" | "refName" | "className") | "id"> & {
        as?: TTag_2 | undefined;
        children?: React.ReactNode | ((bag: PanelRenderPropArg) => React.ReactElement<any, string | React.JSXElementConstructor<any>>);
        refName?: string | undefined;
    } & (import("../../types").PropsOf<TTag_2> extends {
        className?: any;
    } ? {
        className?: string | ((bag: PanelRenderPropArg) => string) | undefined;
    } : {}) & (({
        static?: undefined;
    } & {
        unmount?: boolean | undefined;
    }) | ({
        unmount?: undefined;
    } & {
        static?: boolean | undefined;
    })), ref: Ref<HTMLDivElement>) => JSX.Element) & {
        displayName: string;
    };
};
export {};
