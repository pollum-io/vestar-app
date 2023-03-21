import moment from "moment";

export const formatDate = (value: number | undefined | string) => {
	const valor = moment(value).add(1, "days").format('ll');

	return valor
}

export const formatDateBirthday = (value: number | undefined | string) => {
	const valor = moment(value).format('DD/MMM/YYYY');

	return valor
}
