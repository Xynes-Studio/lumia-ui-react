/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { forwardRef } from "react";
import { cx } from "@utils/cx";
import StringToReactComponent from 'string-to-react-component';
import { MDXParseProps } from "./msxp.types";
import { Marked } from "@utils/MDXUtils";
import { Bold, H1, H2, H3, H4, H5, H6, I } from "@texts/index";
import { Code } from "..";
import { Image } from "@app/View";


const MDXPComponent: React.ForwardRefRenderFunction<
    HTMLDivElement,
    MDXParseProps
> = ({ markdown, ...props }, ref) => {
    const copyMarkdown = markdown;
    const content = Marked.parse(copyMarkdown);

    return (
        <div className={cx("MD2Lumia")} ref={ref} {...props}>
            <StringToReactComponent data={{ H1, H2, H3, H4, H5, H6, Bold, I, Code, Image }}>
                {`(props)=>{
         const { H1, H2, H3, H4, H5, H6, Bold, I, Code, Image }=props;
         return (<>
           ${content}
           </>);
       }`}
            </StringToReactComponent>

            {/* {content} */}
        </div>
    );
};

export const MDXParse = forwardRef(MDXPComponent);
