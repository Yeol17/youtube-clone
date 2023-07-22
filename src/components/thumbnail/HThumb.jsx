import { Link } from "react-router-dom";

export default function HThumb({
  id,
  snippet
}) {

  // 채널 아이콘, 채널 이름, 
  // 썸네일, 플레이 타임,
  // 영상 제목, 조회수, 올라온 시간

  // statistics.viewCount = 동영상이 조회된 횟수

  return (
    <div className="content">
      <Link to={`/watch?v=`}>
        <div className="thum-nail">
          <img src="" alt="" />
        </div>
        <div className="details">
          <div className="channel-avatar"></div>
          <div className="meta">
            <div className="viedo-title"></div>
            <div className="channel-title"></div>
            <div className="meta-video">
              <div className="view-cnt"></div>
              <div className="upload-date"></div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}