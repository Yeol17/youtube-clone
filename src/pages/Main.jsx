import './Main.scss';
import { useEffect, useRef, useState } from 'react';
import HThumb from '../components/thumbnail/HThumb';

export default function Contents({ navWidth }) {

  return (
    <div className="main" style={{marginLeft: navWidth}} >
      {/* <HThumb /> */}
      < div className="sorting-wrapper" >

        <div className="sorting">
          <div className="sort">전체</div>
          <div className="sort">조회수</div>
          <div className="sort">게임</div>
          <div className="sort">요리</div>
          <div className="sort">음악</div>
          <div className="sort">영화</div>
          <div className="sort">최근 업로드된 동영상</div>
        </div>

      </ div>
      <div className="contents-wrapper">

      </div>
    </div >
  )
}


// const tmp = document.addEventListener("DOMContentLoaded",
//   function () {
//     let lazyImages = [].slice
//       .call(document.querySelectorAll("img.lazy"));
//     let active = false;
//     const lazyLoad = function () {
//       if (active === false) {
//         active = true;
//         setTimeout(function () {
//           lazyImages.forEach(function (lazyImage) {
//             if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
//               lazyImage.src = lazyImage.dataset.src;
//               lazyImage.srcset = lazyImage.dataset.srcset;
//               lazyImage.classList.remove("lazy");
//               lazyImages = lazyImages.filter(function (image) {
//                 return image !== lazyImage;
//               });
//               if (lazyImages.length === 0) {
//                 document.removeEventListener("scroll", lazyLoad);
//                 window.removeEventListener("resize", lazyLoad);
//                 window.removeEventListener("orientationchange", lazyLoad);
//               }
//             }
//           });
//           active = false;
//         }, 200);
//       }
//     };
//     document.addEventListener("scroll", lazyLoad);
//     window.addEventListener("resize", lazyLoad);
//     window.addEventListener("orientationchange", lazyLoad);
//   });