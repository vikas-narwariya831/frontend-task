import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 1 },
};

const items = [
  <div className="bg-cover item" data-value="1">
    <img
    className="mx-auto"
      src="https://dynamic.brandcrowd.com/template/preview/design/bd726ff5-96a8-4ba1-8b9e-4e87faf6bc49?v=4&designTemplateVersion=1&size=design-preview-standalone-2x"
      alt=""
    />
  </div>,
  <div className="bg-cover item" data-value="1">
    <img
     className="mx-auto"
      src="https://dynamic.brandcrowd.com/template/preview/design/bd726ff5-96a8-4ba1-8b9e-4e87faf6bc49?v=4&designTemplateVersion=1&size=design-preview-standalone-2x"
      alt=""
    />
  </div>,
  <div className="bg-cover item" data-value="1">
    <img
     className="mx-auto"
      src="https://dynamic.brandcrowd.com/template/preview/design/bd726ff5-96a8-4ba1-8b9e-4e87faf6bc49?v=4&designTemplateVersion=1&size=design-preview-standalone-2x"
      alt=""
    />
  </div>,
  <div className="bg-cover item" data-value="1">
    <img
     className="mx-auto"
      src="https://dynamic.brandcrowd.com/template/preview/design/bd726ff5-96a8-4ba1-8b9e-4e87faf6bc49?v=4&designTemplateVersion=1&size=design-preview-standalone-2x"
      alt=""
    />
  </div>,
  <div className="bg-cover item" data-value="1">
    <img
     className="mx-auto"
      src="https://dynamic.brandcrowd.com/template/preview/design/bd726ff5-96a8-4ba1-8b9e-4e87faf6bc49?v=4&designTemplateVersion=1&size=design-preview-standalone-2x"
      alt=""
    />
  </div>,
];

const Carousel = () => (
  <AliceCarousel
    mouseTracking
    items={items}
    responsive={responsive}
    autoPlay
    autoPlayInterval={1000}
    disableButtonsControls
    infinite
    controlsStrategy="alternate"
  />
);

export default Carousel;
