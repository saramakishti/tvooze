export const validateValue = (value) => {
	if (!value || value === null || value === undefined) return " - ";
	else return value;
};

export const capitalize = (string) => {
	if (typeof string !== "string") return "";
	return string.charAt(0).toUpperCase() + string.slice(1);
};
