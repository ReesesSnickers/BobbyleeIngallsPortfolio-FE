import React from 'react';
import Navbar from '../components/Navbar';

const NewApp = () => {
  return (
    <div className='pw'>
      <Navbar />
      <div className='page'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae
          justo justo. Praesent cursus quis mauris a tincidunt. Praesent
          tincidunt lobortis turpis, ut lacinia purus interdum non. Pellentesque
          tincidunt ultrices ante, at posuere nunc. Phasellus eu nisi sed nunc
          sagittis vehicula. Integer sed placerat dolor. Nunc blandit in ex eget
          egestas. Sed pretium ligula metus. Mauris feugiat fermentum quam, et
          elementum quam auctor elementum. Mauris ante quam, rutrum fermentum
          lorem id, mattis tincidunt velit. Vestibulum ultrices felis elit.
          Mauris diam nisl, auctor sit amet semper non, interdum vitae eros.
          Curabitur at suscipit mi.
        </p>

        <p>
          Vestibulum diam mi, consequat at ligula scelerisque, tempor volutpat
          mauris. Proin ac lacus imperdiet, lacinia nisl quis, consequat dui.
          Donec eget interdum lacus. Proin in malesuada metus. In suscipit nunc
          nec nulla iaculis volutpat. Cras cursus velit quis turpis sollicitudin
          vulputate. Fusce massa est, aliquam ut velit quis, ullamcorper
          placerat eros. Morbi eu est in diam porta pulvinar. Duis eu justo non
          nibh condimentum viverra vitae vitae leo. Sed sed ante ipsum. Mauris
          id ultrices neque. Nullam id massa laoreet, feugiat nunc a, posuere
          nulla. Donec eget nibh turpis.
        </p>

        <p>
          In dapibus nisi in nibh viverra pellentesque. Duis in velit finibus,
          volutpat nulla ut, dapibus libero. Duis ac porta neque. Cras lacinia
          tristique tincidunt. Suspendisse vulputate feugiat vulputate. Fusce
          eget tortor sed sapien venenatis aliquet eget id felis. Curabitur
          pharetra urna eu eros molestie mollis. Sed vitae placerat urna. Sed
          luctus volutpat erat varius hendrerit. Nulla id bibendum lectus. Cras
          sed neque magna. Vestibulum ullamcorper id mauris vel egestas. Etiam
          rutrum diam massa. Nulla placerat, ex vitae auctor ultrices, velit
          turpis cursus quam, ut sodales nisl metus sed neque. In mollis maximus
          nunc luctus rutrum.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          accumsan erat ut commodo cursus. Vivamus ac rhoncus libero, vel
          vulputate justo. Mauris pretium lacus at volutpat venenatis. Nullam
          sit amet ultricies elit. Cras vulputate sodales arcu, ut tincidunt
          nisi bibendum quis. Proin mollis, augue eu sodales pulvinar, ex nunc
          ultricies dolor, ac aliquam ex sem sit amet felis. Vestibulum eu
          pretium felis, non commodo orci. Nunc porta lorem sit amet justo
          tempus suscipit a sed nisi. Integer nec aliquet est. Aenean pharetra a
          lorem eu scelerisque. Duis lorem ligula, mollis ac nibh lobortis,
          feugiat pretium magna. Pellentesque cursus tincidunt nisi, at varius
          lectus varius at. Duis sed venenatis massa. Etiam id est sed arcu
          tincidunt vehicula. Donec ultrices odio ac fermentum ullamcorper.
        </p>

        <p>
          Pellentesque id volutpat diam. Integer sagittis, leo sed pretium
          convallis, felis tortor euismod ipsum, non blandit magna urna in
          nulla. Pellentesque ut egestas dui. Sed interdum quam id dui varius
          ultricies. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Suspendisse sit amet vestibulum mauris, id bibendum dui.
          Etiam at elementum velit. Nam feugiat viverra elit, eget fringilla
          urna ultrices in. Quisque quam diam, mattis suscipit diam quis,
          pretium mollis urna. Quisque ut sagittis urna, eget bibendum eros. Sed
          ultrices pulvinar massa, in commodo elit aliquam ac. Ut at pulvinar
          lorem.
        </p>
      </div>
      <style jsx>{`
        div.pw {
          color: #ffffff;
          min-height: 100vh;
          background-color: black;
        }

        .page {
          padding: 72px 30px 50px 30px;
        }
      `}</style>
    </div>
  );
};

export default NewApp;
