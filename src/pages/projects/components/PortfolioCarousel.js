import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player/lazy';
import SadFace from '../../../static/SadFace.png';
import Consts from '../../../utility/constants/consts';

const PortfolioCarousel = ({ assets, key }) => {
  const containsOneAsset = assets && assets.length === 1;
  const formatAssetElement = (asset) => {
    const isImageAsset = asset.type === Consts.IMAGE_ASSET_TYPE;
    const isVideoAsset = asset.type === Consts.VIDEO_ASSET_TYPE;
    if (!asset || (asset && !asset.type) || (!isImageAsset && !isVideoAsset))
      return null;
    if (isImageAsset) return <img src={asset.path} alt={asset.alt} />;
    if (isVideoAsset)
      return (
        <ReactPlayer
          url={asset.path}
          playing={true}
          loop={true}
          width="100%"
          fallback={SadFace}
        />
      );
  };
  return (
    <>
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={!containsOneAsset}
        showStatus={!containsOneAsset}
        showArrows={!containsOneAsset}
      >
        {assets.map((asset) => {
          return <div key={asset.title}>{formatAssetElement(asset)}</div>;
        })}
      </Carousel>
      <style jsx>{`
        :global(.slide > div) {
          max-height: 400px;
        }
        :global(li) {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
        }
        :global(img) {
          height: 100%;
          max-width: 300px;
        }
      `}</style>
    </>
  );
};

export default PortfolioCarousel;
