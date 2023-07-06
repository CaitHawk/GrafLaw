import divorceImage from '../../../images/divorceImage.jpg';
import bankruptcyImage from '../../../images/bankruptcyImage.jpg';
import familyLawImage from '../../../images/familyLawImage.jpg';
import criminalLawImage from '../../../images/criminalLawImage.jpg';

const serviceData = [
	{
		header: 'Criminal Law',
		copy: [
			"At the Law Office of Andrea Graf, our team of experienced attorneys is highly knowledgeable in all aspects of criminal law. We understand that the criminal justice system can be a daunting and complex process, and we are dedicated to providing our clients with the guidance and support they need to navigate it with confidence. Our attorneys have extensive experience representing clients in a wide range of criminal charges, from DUI defense to drug crimes and more. We have a deep understanding of the nuances of the legal system and work tirelessly to protect our clients' legal interests.",
			'In addition to our legal expertise, we pride ourselves on our commitment to personalized service. We take the time to get to know our clients and understand their unique situations, so we can develop a customized legal strategy that meets their specific needs.',
			"At the Law Office of Andrea Graf, we believe that everyone deserves access to quality legal representation. That's why we offer flexible payment options and work diligently with our client’s on their cases. If you're facing criminal charges, don't hesitate to contact us today to schedule a consultation.",
		],
		image: criminalLawImage,
		color: '#B8EEAA',
		reversed: false,
		id: 'criminal',
	},
	{
		header: 'Divorce Law',
		copy: [
			'Divorce law is a complex area of family law that deals with the legal process of ending a marriage. It can be a difficult and emotionally charged time for all parties involved. The process of ending a marriage can encompass a wide range of issues, such as property division, alimony, child custody, and support. At the Law Office of Andrea Graf, our experienced attorneys understand the complexities of divorce law and are dedicated to helping our clients navigate the divorce process with compassion and professionalism.',
			'Our team of attorneys is committed to providing personalized attention and support to each and every one of our clients. We take the time to listen to their concerns and provide guidance throughout the legal process to ensure that they feel comfortable and confident with the decisions being made on their behalf. Our goal is to help our clients achieve the best possible outcome for their case, while protecting their rights and interests.',
			"We understand that divorce can be a stressful and overwhelming experience. That's why we work tirelessly to ensure that our clients are informed of their legal rights and options, and that they have the support they need throughout the process. Our attorneys are skilled negotiators and litigators, and will work diligently to achieve a favorable outcome for our clients, whether through mediation or litigation.",
			"If you're facing a divorce, it's important to have experienced legal counsel on your side. Our team of attorneys is here to help you navigate the complexities of divorce law and ensure that your legal interests are protected. Contact us today to schedule a consultation and learn how we can help you with your divorce case.",
		],
		image: divorceImage,
		color: '#aeccea',
		reversed: true,
		id: 'divorce',
	},
	{
		header: 'Bankruptcy law',
		copy: [
			'Bankruptcy law is a complex area of law that deals with the legal process of a person or business declaring bankruptcy. At the Law Office of Andrea Graf, our attorneys have extensive experience in bankruptcy matters, including Chapter 7 and Chapter 13 bankruptcies. We understand that filing for bankruptcy can be a difficult and emotional decision, and we work tirelessly to protect your interests and ensure that your bankruptcy proceedings are handled smoothly.',
			"Chapter 7 bankruptcy is a form of bankruptcy that allows individuals to discharge their debts and start fresh. In a Chapter 7 bankruptcy, the individual's assets are liquidated to pay off creditors, and any remaining debts are discharged. Chapter 13 bankruptcy, on the other hand, allows individuals to reorganize their debts and create a payment plan to pay off creditors over a period of time. Our attorneys are highly knowledgeable in both Chapter 7 and Chapter 13 bankruptcies, and can help you determine which option is best for your unique situation.",
			"If you're facing overwhelming debt and are considering filing for bankruptcy, it's important to have experienced legal counsel on your side. Our attorneys are here to help you navigate the complexities of bankruptcy law and ensure that your legal interests are protected. Contact us today to schedule a consultation and learn how we can help you with your bankruptcy case.",
		],
		image: bankruptcyImage,
		color: '#B2E6D8',
		reversed: false,
		id: 'bankruptcy',
	},
	{
		header: 'Family Law',
		copy: [
			'Family law is a broad area of legal practice that encompasses a wide range of issues related to family relationships. At the Law Office of Andrea Graf, our team of experienced attorneys is well-versed in all aspects of family law, including divorce, child custody, and child support.',
			'Divorce is one of the most common family law issues. Our attorneys understand that divorce can be a difficult and emotional time for all parties involved. We work tirelessly to ensure that our clients receive the best possible outcome for their case, while protecting their legal rights and interests. We have extensive experience in negotiating and litigating divorce settlements, and can help guide you through the process with compassion and professionalism.',
			"In addition to divorce, we also handle a wide range of child custody and child support issues. Our attorneys are dedicated to helping our clients navigate the complexities of these issues and ensuring that their children's best interests are protected. We work closely with our clients to develop customized legal strategies that meet their specific needs, while keeping the child's best interests at the forefront of our minds.",
			"If you're facing a family law issue, it's important to have experienced legal counsel on your side. Our team of attorneys is here to help you navigate the complexities of family law and ensure that your legal interests are protected. Contact us today to schedule a consultation and learn how we can help you with your family law case.",
		],
		image: familyLawImage,
		color: '#FE9A9A',
		reversed: true,
		id: 'familyLaw',
	},
];

const firstTwo = serviceData.slice(0, 2);
const lastTwo = serviceData.slice(2);

export { serviceData, firstTwo, lastTwo };
