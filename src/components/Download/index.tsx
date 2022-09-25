import '../../sass/download.scss';

const Download = () => {
  return (
    <div className='download'>
      <h2 className='download-title'>Download the app now.</h2>
      <p className='download-desc__desktop'>Available on your favorite store. Start your premium experience now</p>
      <p className='download-desc__mobile'>Most calendars are designed for teams. </p>
      <div className='download-wrapper' data-aos="fade-up" data-aos-duration="700">
        <button className='download-btn'>Playstore</button>
        <button className='download-btn'>App store</button>
      </div>
    </div>
  )
}

export default Download
