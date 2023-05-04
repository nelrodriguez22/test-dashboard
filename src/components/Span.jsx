import PropTypes from 'prop-types';

const Span = ({label}) => {
	return ( 
		<span className="ml-3 font-medium">{label}</span>
	);
}

export default Span;

Span.propTypes = {
	label: PropTypes.string
}