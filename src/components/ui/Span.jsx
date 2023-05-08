import PropTypes from 'prop-types';

const Span = ({label, bold, big}) => {
	return ( 
		<span className={`ml-3  ${bold ? 'font-semibold' : 'font-medium'} ${big ? 'text-lg' : ''}`}>{label}</span>
	);
}

export default Span;

Span.propTypes = {
	label: PropTypes.string,
	bold: PropTypes.bool,
	big: PropTypes.bool
}