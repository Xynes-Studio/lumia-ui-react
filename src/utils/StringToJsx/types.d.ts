/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Babel from '@types/babel__standalone';
import * as React from '@types/react';
import { TransformOptions } from "@babel/core";
import React, { FunctionComponent, FC, PropsWithChildren } from 'react';
import { TransformOptions } from "@babel/core";
export interface IStringToReactApi {
    updateTemplate: (template: string, babelOptions: TransformOptions) => IStringToReactApi;
    // eslint-disable-next-line @typescript-eslint/ban-types
    getComponent: () => FC<PropsWithChildren<{}>>;
    [x: string]: any;
}
export type TReact = typeof React;
export type TBabel = typeof Babel;
export interface StringToReactComponentProps {
    data?: object,
    babelOptions?: TransformOptions,
    children?: string,
}
