import { ToastyContext } from "../contexts/toast";
import { useContext } from "react";

export function useRegister() {
	return useContext(ToastyContext);
}
