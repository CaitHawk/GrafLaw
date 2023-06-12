import './styles.css';
import Button from '../../Atoms/Button';

const Header = () => {
    const links = ['about', 'services', 'contact', 'resources']
    return (
        <div className='headerDiv'>
            <nav className='headerNav'>
                {links.map(link => (
                    <a href={`/${link}`} className='headerLink'>{link}</a>
                ))}
            </nav>
            <Button copy='Free Consultation' color='orange' withArrow={true} />
        </div>
    )
};

export default Header;