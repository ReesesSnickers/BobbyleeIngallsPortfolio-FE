import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player/lazy';
import SadFace from '../../../static/SadFace.png';
import Consts from '../../../utility/constants/consts';

const PortfolioCarousel = ({ assets, key }) => {
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
      <Carousel infiniteLoop={true} showThumbs={false}>
        {assets.map((asset) => {
          return <div key={asset.title}>{formatAssetElement(asset)}</div>;
        })}
      </Carousel>
      <style jsx>{`
        :global(.carousel .slide img) {
          height: 400px;
        }
      `}</style>
    </>
  );
};

export default PortfolioCarousel;
