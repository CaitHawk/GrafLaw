import './styles.css';

const ServiceExplaination = ({ header, copy, image, color, reversed, id }) => {
	return (
		<section
			id={id}
			className='serviceExplainationSection'
			style={{ flexDirection: `${reversed ? 'row-reverse' : 'row'}` }}
		>
			<div className='serviceExplainationImageDiv'>
				<img
					src={image}
					alt='scenic hawaii'
					className='serviceExplainationImage'
					style={{
						boxShadow: `${reversed ? '40px -40px' : '-40px 40px'} 0 0 ${color}`,
					}}
				/>
			</div>
			<div
				className='serviceExplainationTextDiv'
				style={{ padding: `${reversed ? '0 40px 0 0' : '0 0 0 40px'}` }}
			>
				<h2 className='serviceExplainationHeader'>{header}</h2>
				<div className='serviceExplainationParagraphDiv'>
					{copy.map(paragraph => (
						<p className='serviceExplainationCopy'>{paragraph}</p>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServiceExplaination;
