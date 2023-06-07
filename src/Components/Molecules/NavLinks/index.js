import './styles.css';

const NavLinks = () => {
    const linksList = ['about', 'services', 'contact', 'resources'];
    return (
        <ol className='linksOl'>
            { linksList.map( link => (
                <li key={`${link}link`}>
                    <a href={`/${link}`} className='link'>{link}</a>
                </li>
            ))}
        </ol>
    )
};

export default NavLinks;