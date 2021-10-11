import { InputType } from "@storybook/csf";

export enum ArgCategory {
  VISUAL = "Visual",
  TECHNICAL = "Technical",
  BEHAVIOR = "Behavior",
  OTHER = "Other",
}
type ArgControlType =
  | "boolean"
  | "select"
  | "radio"
  | "range"
  | "number"
  | "text"
  | "date";

export type ArgConfig = {
  description: InputType["description"];
  defaultValue?: InputType["defaultValue"];
  category: ArgCategory;
  control: ArgControlType;
  options?: any; // TODO: do poprawienia
};
