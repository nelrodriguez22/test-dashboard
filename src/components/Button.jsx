import PropTypes from 'prop-types';

const Button = ({label}) => {
	return ( 
		<button className="bg-sky-600 hover:bg-sky-500 rounded-md p-2 text-white" type="button">{label}</button>
	);
}

export default Button;

Button.propTypes = {
	label: PropTypes.string
}