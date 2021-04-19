export const validateValue = (value) => {
	if (!value || value === null || value === undefined) return " - ";
	else return value;
};
