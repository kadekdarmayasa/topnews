const formatDate = (date) => {
	const objDate = new Date(date);
	return `${objDate.getDate()} - ${objDate.getMonth()} - ${objDate.getFullYear()}`;
};

export default formatDate;
