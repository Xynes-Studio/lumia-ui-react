export interface PinInputProps {
  fillType?: "fill" | "transparent" | "outlined" | "bottom";
  numberOfFields?: 4 | 5 | 6;
  onValueChange: (pinValue: string) => void;
  value: string;
  label?: string;
  labelPosition?: 'center' | 'start' | 'end';
  validations?:((...args: unknown[])=>void)[];
  secret?:boolean;
}
