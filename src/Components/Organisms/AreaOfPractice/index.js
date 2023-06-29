import './styles.css';
import Button from '../../Atoms/Button';
// import AreasOfPracticeImg from '../../../images/areasOfPractice.image.webp';

const AreaOfPractice = () => {
	return (
		<section className='areasOfPracticeSection'>
			<div>
				<div className='areasOfPracticeImg'>
					<div className='overlayDiv'>
						<div className='practiceAreasTextDiv'>
							<div className='line'></div>
							<p className='practiceAreasSubtitle'>Practice Areas</p>
							<h2 className='practiceAreasTitle'>Areas of Practice</h2>
							<p className='practiceAreasP1'>
								Our law firm offers a range of legal services to help you
								navigate your legal needs. We specialize in various practice
								areas, including family law, bankruptcy law, and criminal law.
							</p>

							<p className='practiceAreasP2'>
								Our family law practice encompasses issues such as divorce,
								child custody, and child support to ensure that your family's
								best interests are protected. Our bankruptcy law practice helps
								you navigate the complexities of bankruptcy filings and
								proceedings. Our criminal law practice assists with DUI defense,
								drug crimes, and other criminal charges, so that you can focus
								on your defense while we take care of the legal details.
							</p>

							<p
								className='practiceAreasP3'
								style={{ marginBottom: '80px' }}
							>
								Call us at{' '}
								<a
									href='tel:+18086206392'
									className='phoneLink'
								>
									{'(808) 620-6392'}
								</a>{' '}
								today to schedule a consultation and learn how we can help you
								with your legal needs.
							</p>
							<Button
								color='orange'
								copy='Free Consultation'
								className='practiceAreasButton'
							/>
						</div>{' '}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AreaOfPractice;
