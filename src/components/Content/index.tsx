import '../../sass/content.scss';
import { dataHomeContent } from './data';

const Content = () => {
  return (
    <div className='content'>
      <h2 className='content-title'>How the app works</h2>
      <div className='content-line'></div>
      {dataHomeContent.map((item, index) => {
        return (
          <div
            className={`content-main ${
              index % 2 !== 0 ? 'content-main-reverse' : ''
            }`}
            key={index}
          >
            <img src={item.src} alt={item.alt} className='main-img' />
            <div className='main-des'>
              <h3 className='des-title'>{item.title}</h3>
              <h2 className='des-subtitle'>{item.subTitle}</h2>
              <p className='des-p'>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
