export const serializeNonPOJOs = (obj: Record<string, unknown> | null) => {
	return JSON.parse(JSON.stringify(obj));
};
