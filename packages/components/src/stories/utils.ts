import { ArgConfig } from "./types";

export const createArg = (argConfig: ArgConfig) => ({
  description: argConfig.description,
  defaultValue: argConfig.defaultValue,
  options: argConfig.options,
  control: {
    type: argConfig.control,
  },
  table: {
    category: argConfig.category,
  },
});
