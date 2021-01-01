import React from 'react'
import './Story.styles.css';

import Yoko from '../img/nat-8.jpeg'
import MP4 from '../img/video.mp4'
import Webm from '../img/video.webm'
import mobileBackGround from '../img/video.jpg'

const Story = () => {
  return (
    <section className='section-stories'>
      <div className='bg-video'>
        <video
          className='bg-video__content'
          autoplay='true'
          muted='true'
          loop='true'
        >
          <source src={MP4} type='video/mp4' />
          <source src={Webm} type='video/webm' />
          Your browser is not supported!
        </video>
      </div>
      <div className='bg-mobile'>
        <div className='bg-mobile__content'>
          <img src={mobileBackGround} alt='Merry Christmas' />
        </div>
      </div>

      <div className='u-center-text u-margin-bottom-big' id='section-profile'>
        <h2 className='heading-secondary'>明けましておめでとうございます</h2>
      </div>

      <div className='row'>
        <div className='story'>
          <figure className='story__shape'>
            <img src={Yoko} alt='Person on a tour' className='story__img' />
            <figcaption className='story__caption'>how's doing?</figcaption>
          </figure>
          <div className='story__text'>
            <h3 className='heading-tertiary u-margin-bottom-small'>
              お元気ですか...
            </h3>
            <p style={{fontSize:'2rem'}}>
              2020年は大変な年でしたね。私はといえば、コロナ到来とともに失業し、世の中大変なうちは引きこもろうとMacBook Proを購入し、そのままプログラミング生活へと突入しました。そのうち仕事できないかな笑。まだお遊びです。ずっとお遊びか？笑2021年は、失われた2020年が取り戻せるような素敵な年になるといいですね！寒さが厳しくなりましたので、ご自愛ください。
              <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
