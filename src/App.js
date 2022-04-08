import Calendar from 'react-calendar'

const App = () => {
	const date = new Date()
	const locale = 'en-US'
	const dateFormat = 'mm-dd-yyyy'

	function handleClick(date) {
		console.log(dateFormatter(date, dateFormat))
	}

	function dateFormatter(inputDate, format) {
		//parse the input date
		const date = new Date(inputDate);
	
		//extract the parts of the date
		const day = date.getDate();
		const month = date.getMonth() + 1;
		const year = date.getFullYear();    
	
		//replace the month
		format = format.replace("mm", month.toString().padStart(2,"0"));        
	
		//replace the year
		if (format.indexOf("yyyy") > -1) {
			format = format.replace("yyyy", year.toString());
		} else if (format.indexOf("yy") > -1) {
			format = format.replace("yy", year.toString().substr(2,2));
		}
	
		//replace the day
		format = format.replace("dd", day.toString().padStart(2,"0"));
	
		return format;
	}

	return (
		<Calendar
			value={date}
			locale={locale}
			minDate={date}
			maxDetail="month"
			onClickDay={handleClick}
		/>
	);
  };
  export default App;