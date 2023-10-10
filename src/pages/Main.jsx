import './Main.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';


export default function Main({ navWidth, vWidth, row }) {
  const [itemWidth, setItemWidth] = useState(0);
  const [clickedSort, setClickedSort] = useState(0);
  const [popularVideosData, setPopularVideosData] = useState([]);
  const [shuffledData, setShuffledData] = useState([]);
  const [channelId, setChannelId] = useState([]);

  let idx = 0;
  let cnt = new Array(Math.round(popularVideosData.length / row)).fill(1); // 66.6666... => 67

  const onClickSort = (id) => {
    setClickedSort(id)
  };

  const onLoadContents = (cor) => {
    setShuffledData(cor)
  }

  useEffect(() => {
    let tmp = [];
    let copy = [...popularVideosData]
    for (let i = 0; 0 < copy.length; i++) {
      tmp.push(copy.splice(0, row))
    }
    setShuffledData(tmp)

  }, [popularVideosData, row])


  useEffect(() => {
    let scroll = 16;
    let contentsPd = 32;
    let itmMg = 16;
    setItemWidth((vWidth - navWidth - scroll - contentsPd - itmMg * row) / row);
  }, [vWidth, navWidth, row])

  useEffect(() => {
    const apiReq = async () => {
      console.log('axios');
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDuoLXZTC533FJEOuj7LzacYC_OadzainQ&part=snippet,statistics,contentDetails&chart=mostPopular&regionCode=KR&maxResults=50&fields=items(id,statistics(viewCount),contentDetails(duration),snippet(publishedAt,channelId,title,thumbnails(standard(url)))),nextPageToken`)
      let nextPageToken = res.data.nextPageToken;
      const popularVideos = [...res.data.items];
      const searchIds = popularVideos.map(itm => itm.snippet.channelId);
      const channelReq = await axios.get(`https://www.googleapis.com/youtube/v3/channels?key=AIzaSyDuoLXZTC533FJEOuj7LzacYC_OadzainQ&part=snippet&id=${searchIds.toString()}&fields=items(id,snippet(title,thumbnails(default)))`)
      const channel = [...channelReq.data.items];

      for (let i = 0; i < 3; i++) {
        const nextRes = await axios.get(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDuoLXZTC533FJEOuj7LzacYC_OadzainQ&part=snippet,statistics,contentDetails&chart=mostPopular&regionCode=KR&maxResults=50&pageToken=${nextPageToken}&fields=items(id,statistics(viewCount),contentDetails(duration),snippet(publishedAt,channelId,title,thumbnails(standard(url)))),nextPageToken`)
        nextPageToken = nextRes.data.nextPageToken;
        popularVideos.push(...nextRes.data.items);
        const nextSearchIds = nextRes.data.items.map(itm => itm.snippet.channelId);
        const nextChannelReq = await axios.get(`https://www.googleapis.com/youtube/v3/channels?key=AIzaSyDuoLXZTC533FJEOuj7LzacYC_OadzainQ&part=snippet&id=${nextSearchIds.toString()}&fields=items(id,snippet(title,thumbnails(default)))`)
        channel.push(...nextChannelReq.data.items)
      }


      let data = [...popularVideos].sort(() => Math.random() - 0.5);
      setPopularVideosData(data);
      setChannelId(channel);
    };

    apiReq();
  }, [])

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
  //  
  // ]

  return (
    <div className="main" style={{ marginLeft: navWidth, width: vWidth - navWidth - 16 }} >
      {/* <HThumb /> */}
      <div className="sorting-wrapper" >
        <Sort
          clickedSort={clickedSort}
          onClickSort={onClickSort}
        />
      </div>
      <div className="contents-wrapper">
        {cnt.map((itm, i) => {
          return (
            <Contents
              key={idx++}
              row={row}
              channelId={channelId}
              itemWidth={itemWidth}
              shuffledData={shuffledData[i]}
              onLoadContents={onLoadContents}
            />
          )
        })}
      </div>
    </div >
  )
}
function Contents({
  shuffledData,
  row,
  channelId,
  itemWidth,
}) {
  let idx = 0;
  const [rowData, setRowData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
  })

  useEffect(() => {
    setRowData(shuffledData)
  }, [shuffledData])
  useEffect(() => {
    if (inView && !isVisible) {
      setIsVisible(true)
    }
  }, [isVisible, inView])
  return (

    <div className="contents" data-row={idx} key={idx++} ref={ref}>
      {
        isVisible
          ? <OnloadContents
            rowData={rowData}
            row={row}
            channelId={channelId}
            itemWidth={itemWidth}
          />
          : <Loading itemWidth={itemWidth} row={row} />
      }
    </div>
  )
}

/////////////////////////////////////////////////////////////////

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
  });

  return (
    <div className="sorting">
      {sort}
    </div>
  )
}

function OnloadContents({
  channelId,
  itemWidth,
  rowData
}) {

  const relativeDateFormat = (date) => {
    let unit;
    let t = (Number(new Date(date) - new Date()));

    if (t > -3600000) {
      unit = [60000, 'minute'];
    } else if (t > -90000000) {
      unit = [3600000, 'hour'];
    } else if (t > -691200000) {
      unit = [86400000, 'day'];
    } else if (t > -2629800000) {
      unit = [604800000, 'week'];
    } else if (t > -34187400000) {
      unit = [2628000000, 'month'];
    } else if (t < -34187400000) {
      unit = [31557600000, 'year'];
    }

    t = Math.trunc(t / unit[0]);

    return new Intl.RelativeTimeFormat('ko')
      .format(t, `${unit[1]}`)
  }

  const viewFormat = (cnt) => {
    return '조회수 ' + (new Intl.NumberFormat('ko-KR', {
      notation: 'compact',
      maximumFractionDigits: `${cnt.length < 6 ? 1 : 0}`,
    }).format(cnt)) + '회'
  }

  const durationFormat = (d) => {
    let time = d.split(/[A-Z]/d);
    time = time.filter(t => t !== '');
    let newTime = time.map(t => {
      if (t.length === 1) return '0' + t
      return t
    });

    return newTime.join(':');
  }
  const contents = rowData.map(video => {
    let channel = channelId.find(itm => video.snippet.channelId === itm.id);
    return (
      <div className="content" key={video.id} style={{ maxWidth: itemWidth }}>
        <Link to={`/watch?v=${video.id}`} className='item'>
          <div className="thumb-nail" style={{ minWidth: itemWidth, height: itemWidth * 0.55 }}>
            <img src={video.snippet.thumbnails.standard.url} alt="" />
            <div className="duration">{durationFormat(video.contentDetails.duration)}</div>
          </div>
          <div className="details">
            <div className="channel-avatar">
              <img src={channel.snippet.thumbnails.default.url} alt="" />
            </div>
            <div className="meta">
              <div className="video-title" style={{ maxWidth: itemWidth }}><span>{video.snippet.title}</span></div>
              <div className="channel-title">{channel.snippet.title}</div>
              <div className="meta-video">
                <span className="view-cnt">{video.statistics.viewCount ? viewFormat(video.statistics.viewCount) : ''}</span>
                <span className="seperator">·</span>
                <span className="upload-date">{relativeDateFormat(video.snippet.publishedAt)}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  })

  return (
    <>
      {contents}
    </>
  )
}

function Loading({
  itemWidth,
  row
}) {

  const contents = [];
  let idx = 0;
  for (let i = 0; i < row; i++) {
    contents.push(
      <div className="content" style={{ maxWidth: itemWidth }} key={idx++}>
        <Link className='item'>
          <div className="thumb-nail unload" style={{ minWidth: itemWidth, height: itemWidth * 0.55 }}>
          </div>
          <div className="details">
            <div className="channel-avatar unload">
            </div>
            <div className="meta">
              <div className="video-title unload" style={{ maxWidth: itemWidth }}></div>
              <div className="channel-title unload"></div>
              <div className="meta-video unload"></div>
            </div>
          </div>
        </Link>
      </div>
    )
  }
  return (
    <>
      {contents}
    </>
  )


}