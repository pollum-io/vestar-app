import { DefaultTFuncReturn } from "i18next";

export interface IOpportunitiesCard {
  blocked?: boolean;
  time?: string;
  image?: string;
  name?: string;
  location?: string;
  type?: string;
  minimumInvest?: string;
  estimateFinish?: string;
  rentability?: string | DefaultTFuncReturn;
  finished?: boolean;
}
