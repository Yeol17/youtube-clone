import { SlArrowRight } from "react-icons/sl";

export default function MenuItem({ itmVal, itm, onClickMenu }) {
  return (
    <div className="itm" onClick={() => {
      if(itm.more) onClickMenu(itm.more);
    }}>
      <div className="icn">{itm.icn}</div>
      <div className="text">{itm.title}{itmVal && ' '+itmVal}</div>
      {itm.more && <div className="more"><SlArrowRight /></div>}
    </div>
  )
}