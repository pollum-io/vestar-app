import { DefaultTFuncReturn } from "i18next";

export interface IDefaultInput {
	title?: string | DefaultTFuncReturn;
	color?: string;
	placeholderColor?: string;
	bgColor?: string;
	inputSize?: string;
	placeholder?: string | DefaultTFuncReturn;
	type?: string;
	border?: string;
	inputColor?: string;
}
