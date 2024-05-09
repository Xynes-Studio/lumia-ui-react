"use client";
import React, { forwardRef } from "react";
import { cx } from "@utils/cx";
import StringToReactComponent from "@utils/StringToJsx";
import { MDXParseProps } from "./msxp.types";
import { Marked } from "@utils/MDXUtils";
import { Bold, H1, H2, H3, H4, H5, H6, I, Text } from "@texts/index";
import { Code, Link } from "..";
import { Image, Row } from "@app/View";
import { Flex } from "@app/View";
import ListView from "@app/View/ListView/listView";

const MDXPComponent: React.ForwardRefRenderFunction<
    HTMLDivElement,
    MDXParseProps
> = ({ markdown, ...props }, ref) => {
    const copyMarkdown = markdown.replace(/<!--[\s\S]*?-->/g, '');
    const content = Marked.parse(copyMarkdown);
    return (
        <div className={cx("MD2Lumia")} ref={ref} {...props}>
            <StringToReactComponent data={{ H1, H2, H3, H4, H5, H6, Bold, I, Code, Image, Flex, ListView, Row, Text, Link }} babelOptions={{
                retainLines: true,
                presets: [],
                compact:false
            }}>
                {`(props)=>{
         const { H1, H2, H3, H4, H5, H6, Bold, I, Code, Image, Flex, ListView, Row, Text, Link }=props;
         return (<Flex direction = "column">
           ${content}
           </Flex>);
       }`}
            </StringToReactComponent>

            {/* {content} */}
        </div>
    );
};

export const MDXParse = forwardRef(MDXPComponent);
