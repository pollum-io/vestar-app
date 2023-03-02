import { DefaultTFuncReturn } from "i18next";

export interface IDefaultInput {
  title?: string | DefaultTFuncReturn;
  inputSize?: string;
  placeholder?: string | DefaultTFuncReturn;
  type?: string;
}
