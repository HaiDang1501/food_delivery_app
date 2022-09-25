import '../../sass/intro.scss';
import smartPhone1 from '../../assets/smartphone1.png';
import smartPhone2 from '../../assets/smartphone2.png';
const Intro = () => {
  return (
    <div>
      <div className='intro'>
        <h2 className='intro-h2'>Food app</h2>
        <h1 className='intro-h1'>
          Why stay hungry when <br></br> you can order form Bella Onojie
        </h1>
        <h2 className='intro-h2__sub'>
          Download the bella onoje’s food app now on
        </h2>
        <div className='btn-wrapper' data-aos='fade-up' data-aos-duration='700'>
          <button className='btn-intro'>Playstore</button>
          <button className='btn-intro'>App store</button>
        </div>
      </div>
      <div className='intro-phone'>
        <img
          src={smartPhone1}
          alt={smartPhone1}
          className='intro-phone__item'
          data-aos='fade-right'
          data-aos-duration='700'
        />
        <img
          src={smartPhone2}
          alt={smartPhone2}
          className='intro-phone__item'
          data-aos='fade-left'
          data-aos-duration='700'
        />
      </div>
      <div className='intro-line'></div>
    </div>
  );
};

export default Intro;
