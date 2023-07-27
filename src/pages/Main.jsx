import './Main.scss';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Main({ navWidth, vWidth, row }) {

  const contentsWrapper = useRef();

  let [itemWidth, setitemWidth] = useState(0);
  let [clickedSort, setClickedSort] = useState(0);
  let [popularVideosData, setPopularVideosData] = useState([]);
  let [channelId, setChannelId] = useState([]);
  let [contents, setContents] = useState([]);

  const onClickSort = (id) => {
    setClickedSort(id)
  };

  useEffect(() => {
    let scroll = 16;
    let contentsPd = 32;
    let itmMg = 16;
    setitemWidth((vWidth - navWidth - scroll - contentsPd - itmMg * row) / row);
  }, [vWidth, navWidth, row])

  useEffect(() => {
    axios.get('https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDuoLXZTC533FJEOuj7LzacYC_OadzainQ&chart=mostPopular&part=snippet,statistics,contentDetails&regionCode=KR&maxResults=7&fields=items(id,statistics(viewCount),contentDetails(duration),snippet(publishedAt,channelId,title,thumbnails(standard(url))))')
      .then(res => {
        setPopularVideosData([...res.data.items]);
      }).catch(err => console.log(err))
  }, []);

  useEffect(() => {
    if (popularVideosData.length < 1) return
    let channelIds = popularVideosData.map(itm => itm.snippet.channelId);
    axios.get(`https://www.googleapis.com/youtube/v3/channels?key=AIzaSyDuoLXZTC533FJEOuj7LzacYC_OadzainQ&part=snippet&id=${channelIds}&fields=items(id,snippet(title,thumbnails(default)))`)
      .then(res => {
        setChannelId(res.data.items);
      })
  }, [popularVideosData])

  // popularVideosDatas = [
  //   {
  //     "id": "AkeeabfJjd8",
  //     "snippet": {
  //       "publishedAt": "2023-07-21T10:58:01Z",
  //       "channelId": "UChdqwmHLPoL3UJmm9Fw-LsA",
  //       "title": "[SUB] 어느날 우리집 현관으로 박보영이 들어왔다..😮💥   [차린건 쥐뿔도 없지만] EP.24 #이영지 #박보영  (ENG/JPN/SPA)",
  //       "thumbnails": {
  //         "standard": {
  //           "url": "https://i.ytimg.com/vi/AkeeabfJjd8/sddefault.jpg"
  //         }
  //       }
  //     },
  //     "contentDetails": {
  //       "duration": "PT44M12S"
  //     },
  //     "statistics": {
  //       "viewCount": "6662898"
  //     }
  //   },
  //   .........
  // ]
  useEffect(() => {
    if (channelId.length < 1) return
    let contents = popularVideosData.map(video => {
      let channel = channelId.find(itm => video.snippet.channelId === itm.id); return (
        <div className="content" key={video.id} style={{maxWidth: itemWidth}}>

          <Link to={`/watch?v=${video.id}`} className='item'>
            <div className="thumb-nail" style={{minWidth: itemWidth, height: itemWidth * 0.55}}>
              <img src={video.snippet.thumbnails.standard.url} alt="" />
            </div>
            <div className="details">
              <div className="channel-avatar">
                <img src={channel.snippet.thumbnails.default.url} alt="" />
              </div>
              <div className="meta">
                <div className="video-title">{video.snippet.title}</div>
                <div className="channel-title">{channel.snippet.title}</div>
                <div className="meta-video">
                  <span className="view-cnt">{video.statistics.viewCount}</span>
                  <span className="seperator">·</span>
                  <span className="upload-date">{video.snippet.publishedAt}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )
    })
    setContents(contents);
  }, [channelId, itemWidth])
  return (
    <div className="main" style={{ marginLeft: navWidth, width: vWidth - navWidth - 16 }} >
      {/* <HThumb /> */}
      < div className="sorting-wrapper" >

        <Sort
          clickedSort={clickedSort}
          onClickSort={onClickSort}
        />

      </ div>
      <div className="contents-wrapper" ref={contentsWrapper}>
        {contents}
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