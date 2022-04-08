import Calendar from 'react-calendar'

const App = () => {
	const date = new Date()
	const locale = 'en-US'

	return (
		<Calendar
			value={date}
			locale={locale}
			minDate={date}
		/>
	);
  };
  export default App;