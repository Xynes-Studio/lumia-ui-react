import { FlexProps } from "@app/View/flex/flex.types";
import { RowProps } from "@app/View/row/row.types";
import { AlertProps } from "@components/Alert/alert.type";
import {
  BadgeProps,
  RoundBadgeProps,
  SquareBadgeProps,
} from "@components/Badge/badge.type";
import { ButtonProps } from "@components/Button/button.type";
import { CheckboxProps } from "@components/Checkbox/checkbox.type";
import { CodeProps } from "@components/Code/code.types";
import { AccordionProps } from "@components/Disclosuers/Accordion/accordion.type";
import { CardProps } from "@components/Disclosuers/Card/card.type";
import { TabsProps } from "@components/Disclosuers/Tabs/tabs.type";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Bold } from "@texts/index";

export interface BasicDraggableProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  drag_id?: string;
  style?: React.CSSProperties;
}

export interface DraggablePropsFlex extends BasicDraggableProps, FlexProps {
  Element: React.ForwardRefExoticComponent<
    FlexProps & React.RefAttributes<HTMLDivElement>
  >;
}

export interface DraggablePropsRow extends BasicDraggableProps, RowProps {
  Element: React.ForwardRefExoticComponent<
    RowProps & React.RefAttributes<HTMLDivElement>
  >;
}
export interface DraggablePropsAlert extends BasicDraggableProps, AlertProps {
  Element: React.ForwardRefExoticComponent<
    AlertProps & React.RefAttributes<HTMLDivElement>
  >;
}
export interface DraggablePropsButton extends BasicDraggableProps, ButtonProps {
  Element: React.ForwardRefExoticComponent<
    ButtonProps & React.RefAttributes<HTMLButtonElement>
  >;
}
export interface DraggablePropsBadgeRound
  extends BasicDraggableProps,
    RoundBadgeProps {
  Element: React.ForwardRefExoticComponent<
    BadgeProps & React.RefAttributes<HTMLDivElement>
  >;
}
export interface DraggablePropsBadgeSquare
  extends BasicDraggableProps,
    SquareBadgeProps {
  Element: React.ForwardRefExoticComponent<
    BadgeProps & React.RefAttributes<HTMLDivElement>
  >;
}
export interface DraggablePropsCheckbox
  extends BasicDraggableProps,
    CheckboxProps {
  Element: React.ForwardRefExoticComponent<
    CheckboxProps & React.RefAttributes<HTMLInputElement>
  >;
}

export interface DraggablePropsCode extends BasicDraggableProps, CodeProps {
  Element: React.ForwardRefExoticComponent<
    Omit<CodeProps, "ref"> & React.RefAttributes<HTMLDivElement>
  >;
}
export interface DraggablePropsAccordion
  extends BasicDraggableProps,
    AccordionProps {
  Element: React.ForwardRefExoticComponent<
    AccordionProps & React.RefAttributes<HTMLDivElement>
  >;
}

export interface DraggablePropsCard extends BasicDraggableProps, CardProps {
  Element: React.ForwardRefExoticComponent<
    CardProps & React.RefAttributes<HTMLDivElement>
  >;
}

export interface DraggablePropsTab extends BasicDraggableProps, TabsProps {
  Element: React.ForwardRefExoticComponent<
    TabsProps & React.RefAttributes<HTMLAnchorElement>
  >;
}
export type DraggableProps =
  | DraggablePropsFlex
  | DraggablePropsButton
  | DraggablePropsAlert
  | DraggablePropsRow
  | DraggablePropsBadgeRound
  | DraggablePropsBadgeSquare
  | DraggablePropsCheckbox
  | DraggablePropsCode
  | DraggablePropsAccordion
  | DraggablePropsCard
  | DraggablePropsTab;
export const isButton = (
  _props: DraggableProps
): _props is DraggablePropsButton => {
  return true;
};
const isFlex = (_props: DraggableProps): _props is DraggablePropsFlex => {
  return true;
};

const isRow = (_props: DraggableProps): _props is DraggablePropsRow => {
  return true;
};
const isAlert = (_props: DraggableProps): _props is DraggablePropsAlert => {
  return true;
};
const isBadgeRound = (
  _props: DraggableProps
): _props is DraggablePropsBadgeRound => {
  return true;
};
const isBadgeSquare = (
  _props: DraggableProps
): _props is DraggablePropsBadgeSquare => {
  return true;
};
const isCheckbox = (
  _props: DraggableProps
): _props is DraggablePropsCheckbox => {
  return true;
};
const isCode = (_props: DraggableProps): _props is DraggablePropsCode => {
  return true;
};
const isAccordion = (
  _props: DraggableProps
): _props is DraggablePropsAccordion => {
  return true;
};

const isCard = (_props: DraggableProps): _props is DraggablePropsCard => {
  return true;
};
const isTab = (_props: DraggableProps): _props is DraggablePropsTab => {
  return true;
};
export function DraggableLumiaComponent(allProps: DraggableProps) {
  const { drag_id = "default", style, ...props } = allProps;
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: drag_id,
      data: { ...allProps },
    });
  const dragabbleStyle = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : 1,
    ...style,
  };
  if (isFlex(props)) {
    const { Element, children, ...rest } = props;
    return (
      <Element
        ref={setNodeRef}
        style={dragabbleStyle}
        {...listeners}
        {...attributes}
        {...rest}
      >
        {children}
      </Element>
    );
  } else if (isButton(props)) {
    const { Element, ...rest } = props;
    return (
      <Element
        ref={setNodeRef}
        style={dragabbleStyle}
        {...listeners}
        {...attributes}
        {...rest}
      />
    );
  } else if (isAlert(props)) {
    const { Element, children, ...rest } = props;
    return (
      <Element
        ref={setNodeRef}
        style={dragabbleStyle}
        {...listeners}
        {...attributes}
        {...rest}
      >
        {children}
      </Element>
    );
  } else if (isRow(props)) {
    const { Element, children, ...rest } = props;
    return (
      <Element
        ref={setNodeRef}
        style={dragabbleStyle}
        {...listeners}
        {...attributes}
        {...rest}
      >
        {children}
      </Element>
    );
  } else if (isBadgeRound(props)) {
    const { Element, ...rest } = props;
    return (
      <Element
        ref={setNodeRef}
        style={dragabbleStyle}
        {...listeners}
        {...attributes}
        {...rest}
      />
    );
  } else if (isBadgeSquare(props)) {
    const { Element, ...rest } = props;
    return (
      <Element
        ref={setNodeRef}
        style={dragabbleStyle}
        {...listeners}
        {...attributes}
        {...rest}
      />
    );
  } else if (isCheckbox(props)) {
    const { Element, ...rest } = props;
    return (
      <Element
        ref={setNodeRef}
        style={dragabbleStyle}
        {...listeners}
        {...attributes}
        {...rest}
      />
    );
  } else if (isCard(props)) {
    const { Element, ...rest } = props;
    return (
      <Element
        ref={setNodeRef}
        style={dragabbleStyle}
        {...listeners}
        {...attributes}
        {...rest}
      />
    );
  } else if (isTab(props)) {
    const { Element, ...rest } = props;
    return (
      <Element
        ref={setNodeRef}
        style={dragabbleStyle}
        {...listeners}
        {...attributes}
        {...rest}
      />
    );
  } else if (isAccordion(props)) {
    const { Element, children, ...rest } = props;
    return (
      <Element
        ref={setNodeRef}
        style={dragabbleStyle}
        {...listeners}
        {...attributes}
        {...rest}
      >
        {children}
      </Element>
    );
  } else if (isCode(props)) {
    //const { Element, ...rest } = props;
    return (
      // <Element
      //   //ref={setNodeRef}
      //   style={dragabbleStyle}
      //   {...listeners}
      //   {...attributes}
      //   {...rest}
      // />
      <Bold>Code Not Implemented for drag</Bold>
    );
  } else {
    const { children } = props;

    return (
      <div>
        <Bold>Please Pass an Element prop</Bold>
        {children}
      </div>
    );
  }
}
