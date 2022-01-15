import React from 'react';
import DetailLinkButton from './DetailLinkButton';

const DetailContainer = ({
  children,
  title,
  showOpenToggle = true,
  isOpen,
  toggle,
  numberOfItems,
}) => {
  const hasItems = showOpenToggle && numberOfItems && numberOfItems !== 0;
  const numberOfItemsLabel = hasItems ? ` (${numberOfItems})` : '';
  const buttonLabel =
    showOpenToggle && isOpen
      ? `See less${numberOfItemsLabel}`
      : `See more${numberOfItemsLabel}`;
  return (
    <section>
      <div className="detail-header">
        <h2>{title}</h2>
        {(showOpenToggle && !numberOfItems) || hasItems ? (
          <DetailLinkButton onClick={toggle} label={buttonLabel} />
        ) : null}
      </div>
      {children}
      <style jsx>{`
        .detail-header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 100%;
          margin-bottom: 22px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.18);
        }
        h2 {
          margin: 0px;
        }
        section {
          margin-top: 50px;
        }
      `}</style>
    </section>
  );
};

export default DetailContainer;
