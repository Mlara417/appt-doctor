const { render } = wp.element; //we are using wp.element here!
import App from './App';
if (document.getElementById('react-calendar-wrapper')) { //check if element exists before rendering
  render(<App />, document.getElementById('react-calendar-wrapper'));
}