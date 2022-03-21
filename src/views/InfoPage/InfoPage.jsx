import React from 'react';
import commonClasses from '../common.scss';
import classes from './InfoPage.module.scss';

const InfoPage = () => {
  return (
    <main className={`${commonClasses.page} ${classes.infoPage}`}>
      <h2 className={classes.infoPage__header}>About us</h2>
      <p>
        We are minimalistic weather forecast provider for cities all over the world. Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Minus accusamus hic vel vitae enim explicabo.
        Veritatis quasi quo est maxime consequuntur eos asperiores nobis nam. Recusandae sequi ex
        soluta voluptates explicabo libero minus dolor eos, architecto corrupti? Asperiores dolores
        aspernatur beatae atque consequuntur accusantium obcaecati, adipisci laboriosam temporibus?
        Fuga temporibus ab officiis consequatur sunt, impedit incidunt quos ex, corrupti
        necessitatibus dolor quae dolorem expedita. Quaerat sequi minus ullam culpa doloremque iure
        fuga at deleniti accusantium sint consequatur aspernatur repellendus, excepturi inventore
        architecto expedita rerum quibusdam eum porro doloribus. Quod voluptatum ducimus error
        voluptate omnis distinctio. Voluptate nostrum sed id vel molestias ratione corporis
        recusandae modi libero dolorem, doloribus error accusantium dolor quasi magnam laborum
        dignissimos aspernatur obcaecati adipisci, dolorum illum ullam voluptates eum tempore. Unde
        nobis laborum expedita vitae molestias? Nisi, soluta quidem veritatis voluptate velit cumque
        eius debitis harum, enim quod asperiores totam saepe facere iste, maxime commodi sunt.
      </p>
      <p>
        For cooperation, please contact by e-mail:
        <a className={classes.contactLink} href="mailto:wearehere@minweather.com">
          wearehere@minweather.com
        </a>
      </p>
      <p>
        For advertising inquiries, please email:
        <a className={classes.contactLink} href="mailto:advertising@minweather.com">
          advertising@minweather.com
        </a>
      </p>
    </main>
  );
};

export default InfoPage;
