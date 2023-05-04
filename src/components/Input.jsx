import PropTypes from 'prop-types';
const Input = ({text, onChange, invalid, value}) => {
	return ( 
	<>
		{ invalid ? <input value={value} disabled className='rounded-md p-2 ml-2 mr-2 ' type={text ? "text" : "password"} />  :  <input value={value} className={`border rounded-md p-2 ml-2 mr-2 focus:border-sky-500 focus:outline-none text-slate-700 `} type={text ? "text" : "password"}  onChange={onChange}/>}
	</>
	);
}

export default Input;

Input.propTypes = {
	text: PropTypes.bool,
	invalid: PropTypes.bool,
	value: PropTypes.string,
	onChange: PropTypes.func
}