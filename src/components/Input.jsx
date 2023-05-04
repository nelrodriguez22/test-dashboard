import PropTypes from 'prop-types';
const Input = ({text}) => {
	return ( 
	<input className="border rounded-md p-2 ml-2 mr-2 focus:border-sky-500 focus:outline-none text-slate-700" type={text ? "text" : "password"}  />		
	);
}

export default Input;

Input.propTypes = {
	text: PropTypes.bool
}