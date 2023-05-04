import PropTypes from 'prop-types';

const Button = ({label, onSubmit, invalid}) => {
	return ( 
		<>
		{invalid ? <button className={`bg-sky-600 hover:bg-sky-500 rounded-md p-2 text-slate-400 disabled disabled:bg-slate-50`} type="button" disabled>{label}</button> : <button className={`bg-sky-600 hover:bg-sky-500 rounded-md p-2 text-white ${invalid ? 'disabled disabled:bg-slate-50' : ''}`} type="button" onClick={onSubmit} >{label}</button>}
		</>
		
	);
}

export default Button;

Button.propTypes = {
	label: PropTypes.string,
	onSubmit: PropTypes.func,
	invalid: PropTypes.bool
}