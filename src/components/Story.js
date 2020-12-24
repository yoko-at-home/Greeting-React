import React from 'react'
import './Story.styles.min.css';

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
        <h2 className='heading-secondary'>🎄 Merry Christmas!!🎄</h2>
      </div>

      <div className='row'>
        <div className='story'>
          <figure className='story__shape'>
            <img src={Yoko} alt='Person on a tour' className='story__img' />
            <figcaption className='story__caption'>how's doing?</figcaption>
          </figure>
          <div className='story__text'>
            <h3 className='heading-tertiary u-margin-bottom-small'>
              2020 was Covid Job Loss in short...
            </h3>
            <p>
              2020年は一言で言えばコロナ失業！3月末で派遣契約がきれ、そのまま緊急事態宣言へと突入していった5月。外出も憚られるような気がしてそのままお家に留まることになりました。
              でも給付金も出るし、ソフトウェア開発の現場でWeb周りのこともたくさん学んだし、もっと使いこなせるようになりたい！とMacBook
              Proを購入し、そのままプログラミング（ひきこもり）生活へと突入したのでありました。まだお遊びですが。みなさま、楽しいクリスマスを！
              <br />
              <b>
                Covid covid covid...upon arrival of covid, I lost my job and a
                new era started with Macbook Pro, which I bought using benefit
                paid by government. For the first time in my life, I have TIME
                for myself and started learning programming. This is a fun thing
                to do within 1m x 1m space I'm allowed lol! <br />
                Please do not forget to click the black button at the right top
                corner!
              </b>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
