import await { getNumber as getN } from "./wasm.wasm";

export function getNumber() {
	return getN();
}
