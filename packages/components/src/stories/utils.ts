import { ArgConfig } from './types';

export const createArg = (argConfig: ArgConfig) => ({
   control: {
      type: argConfig.control,
   },
   defaultValue: argConfig.defaultValue,
   description: argConfig.description,
   options: argConfig.options,
   table: {
      category: argConfig.category,
   },
});
