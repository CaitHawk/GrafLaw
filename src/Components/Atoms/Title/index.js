import './styles.css';

const Title = ({ subtitle, color, title, background }) => {
    return (
        <div className='titleDiv' style={{ color: `${ color }`, backgroundColor: `${ background}`}}>
            <div className='line' style={{ borderTop: `solid 1px ${ color }`}}></div>
            <p className='subtitle'>{ subtitle }</p>
            <h3 className='title'>{ title }</h3>
        </div>
    )
};

export default Title;