import { DefaultTFuncReturn } from "i18next";

export interface IRegisterSteps {
  step?: number | JSX.Element;
  title?: string | DefaultTFuncReturn;
  barPercentage?: number;
}
