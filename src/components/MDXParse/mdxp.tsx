"use client";
import React, { forwardRef } from "react";
import { cx } from "@utils/cx";
import StringToReactComponent from 'string-to-react-component';
import { MDXParseProps } from "./msxp.types";
import { rules } from "@utils/MDXParseRule";

const MDXPComponent: React.ForwardRefRenderFunction<
    HTMLDivElement,
    MDXParseProps
> = ({ markdown, ...props }, ref) => {
    
    let content=markdown;
    rules.forEach(([rule, template]) => {
        if (typeof template === 'string'){
            content= content.replace(rule, template)
        }
        
    })
    return (
        <div className={cx("MD2Lumia")} ref={ref} {...props}>
            <StringToReactComponent>
      {`(props)=>{
         const {useState}=React;
         const [counter,setCounter]=useState(0);
         const increase=()=>{
           setCounter(counter+1);
         };
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
