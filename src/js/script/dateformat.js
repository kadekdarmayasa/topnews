const formatDate = (date) => {
	const objDate = new Date(date);
	const year = objDate.getFullYear();
	const month = objDate.getMonth();
	const day = objDate.getDate();

	return `${day} - ${month} - ${year}`;
};

export default formatDate;
