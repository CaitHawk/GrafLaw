import './styles.css';
import AboutImage from '../../../images/Rectangle 22.png';

const AboutBlurb = () => {
	return (
		<section className='aboutBlurb section'>
			<div className='aboutTextDiv'>
				<p>
					Andrea Graf was born and raised in Honolulu, Hawaii. She understands
					the culture that defines island life, island business, and island law
					and focuses on the areas individuals and businesses need to protect
					themselves from now and in the future.
				</p>

				<p>
					Established in 2003, the Law Offices of Andrea Graf has earned a
					reputation for providing quality legal services in a broad range of
					substantive areas. Andrea Graf is the founding attorney of the Law
					Office of Andrea Graf. With over 19 years of experience, Andrea is a
					highly skilled attorney who is dedicated to client satisfaction which
					distinguishes her from her peers in the legal community. She
					specializes in family law, bankruptcy law, and criminal law, and has a
					proven track record of success both in and out of the courtroom.
				</p>

				<p>
					Andrea is dedicated to providing personalized attention and support to
					each and every one of her clients. She understands that legal matters
					can be overwhelming and stressful, and takes the time to listen to her
					clients' concerns and provide guidance throughout the legal process.
					Andrea is passionate about helping her clients navigate the legal
					system and achieving the best possible outcome for their cases.
				</p>

				<p>
					In addition to her legal work, Andrea is actively involved in her
					community. She volunteers her time with local organizations and is
					dedicated to making a positive impact in the lives of those around
					her. Andrea is also a published author and presenter with the National
					Business Institute, sharing her knowledge and expertise in divorce
					law.
				</p>

				<p>
					Andrea received her law degree from Cleveland State University,
					Cleveland-Marshall College of Law and is licensed to practice law in
					the state of Hawaii. She is a member of the American Bar Association,
					and the Hawaii Bar Association.
				</p>
			</div>
			<div className='aboutPhotoDiv'>
				<img
					className='aboutImg'
					src={AboutImage}
					alt='Andrea Graf'
				/>
				<div className='aboutNameDiv'>
					<h2 className='aboutName'>Andrea Graf,</h2>
					<h2 className='aboutName'>Juris Doctorate</h2>
				</div>
			</div>
		</section>
	);
};

export default AboutBlurb;
