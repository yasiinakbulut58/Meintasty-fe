'use client';
import { Gallery, Item } from 'react-photoswipe-gallery';
import Img from '@/utils/BackgroundImageRatio';
import { FC } from 'react';

const Gallerys: FC<any> = ({ galleryData }) => {
  return (
    <div className="menu-part tab-pane" id="gallery">
      <div className="container-fluid ratio3_2 p-0">
        <div className="row zoom-gallery">
          <Gallery>
            {galleryData.map((data: any, index: number) => {
              return (
                <Item original={data.img} width="1024" height="768" key={index}>
                  {({ ref, open }) => (
                    <div className="col-lg-4 col-sm-6" onClick={open}>
                      <div
                        className="overlay"
                        ref={ref as React.MutableRefObject<HTMLImageElement>}
                      >
                        <div className="overlay-background">
                          <i className="fa fa-plus" aria-hidden="true"></i>
                        </div>
                        <Img
                          src={data.img}
                          alt=""
                          className="img-fluid bg-img"
                        />
                      </div>
                    </div>
                  )}
                </Item>
              );
            })}
          </Gallery>
        </div>
      </div>
    </div>
  );
};

export default Gallerys;
