import PropTypes from 'prop-types';
import {FaUserPlus} from "react-icons/fa";


const Button = ({label, onSubmit, invalid, withIcon}) => {
	return ( 
		<>
		{invalid ? <button className={`bg-sky-600 hover:bg-sky-500 rounded-md p-2 text-slate-400 disabled disabled:bg-slate-50 mb-2`} type="button" disabled>{label}</button> : <button className={`flex gap-1 justify-center items-center bg-sky-600 hover:bg-sky-500 rounded-md p-2 text-white ${invalid ? 'disabled disabled:bg-slate-50' : ''}`} type="button" onClick={onSubmit} >{withIcon && <FaUserPlus /> } {label}</button>}
		</>
	);
}

export default Button;

Button.propTypes = {
	label: PropTypes.string,
	onSubmit: PropTypes.func,
	invalid: PropTypes.bool,
	withIcon: PropTypes.bool
}