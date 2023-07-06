import {
	mdiCashMultiple,
	mdiHandcuffs,
	mdiHeartBroken,
	mdiHumanMaleFemaleChild,
} from '@mdi/js';

const titleData = {
	subtitle: 'Practice Areas',
	title: 'Areas of Practice',
	color: '#022378',
	background: '#ececec',
};

const serviceCardParagraph1 =
	'Our law firm offers a range of legal services to help you navigate your legal needs. We specialize in various practice areas, including family law, bankruptcy law, and criminal law.';

const serviceCardParagraph2 =
	"Our family law prectice encompasses issues such as divorce, child custody, and child support to ensure that your family's best interests are protected. Our bankruptcy law practice helps you navigate the complexitites of bankruptcy filings and proceeding. Our criminal law practice assists with DUI defense, drug crimes, and other criminal charges, so that you can focus on you defense while we take care of the legal details. Contact us today to schedule a consultation and learn how we can help you with you legal needs.";
const cardData = [
	{
		icon: mdiHandcuffs,
		header: 'Criminal Law',
		copy: 'Read articals about family law and divorce issues',
		link: '#criminal',
	},
	{
		icon: mdiHeartBroken,
		header: 'Divorce Law',
		copy: 'Read articals about family law and divorce issues',
		link: '#divorce',
	},
	{
		icon: mdiHumanMaleFemaleChild,
		header: 'Family Law',
		copy: 'Read articals about family law and divorce issues',
		link: '#familyLaw',
	},
	{
		icon: mdiCashMultiple,
		header: 'Bankruptcy Law',
		copy: 'Read articals about family law and divorce issues',
		link: '#bankruptcy',
	},
];

export { titleData, cardData, serviceCardParagraph1, serviceCardParagraph2 };
