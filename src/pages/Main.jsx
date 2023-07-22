import './Main.scss';
import { useEffect, useRef, useState } from 'react';
import HThumb from '../components/thumbnail/HThumb';

export default function Main({ navWidth }) {

  // 정렬 버튼
  let [clickedSort, setClickedSort] = useState(0);

  const onClickSort = (id) => {
    setClickedSort(id)
  }

  return (
    <div className="main" style={{ marginLeft: navWidth }} >
      {/* <HThumb /> */}
      < div className="sorting-wrapper" >

        <div className="sorting">
          <Sort
            clickedSort={clickedSort}
            onClickSort={onClickSort}
          />
        </div>

      </ div>
      <div className="contents-wrapper">

      </div>
    </div >
  )
}

function Sort({ clickedSort, onClickSort }) {

  const sortLists = [
    { id: 0, title: '전체' },
    { id: 1, title: '조회수' },
    { id: 2, title: '게임' },
    { id: 3, title: '요리' },
    { id: 4, title: '음악' },
    { id: 5, title: '영화' },
    { id: 6, title: '최근 업로드된 동영상' },
  ];

  const sort = sortLists.map(item => {
    return (
      <div key={item.id} onClick={() => { onClickSort(item.id) }}
        className={clickedSort === item.id ? 'sort selected' : 'sort'}>
        {item.title}
      </div>
    )
  })

  return (
    <div className="sorting">
      {sort}
    </div>
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