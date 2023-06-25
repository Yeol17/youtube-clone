import { SlArrowRight } from "react-icons/sl";

export default function MenuItem({ itm, onClickMenu }) {
  return (
    <li className="itm" onClick={(e) =>{
      if(itm.more) {
        onClickMenu(itm.type);
      }
    }}>
      <div className="icn">{itm.icn}</div>
      <div className="text">{itm.title}</div>
      {itm.more && <div className="more"><SlArrowRight /></div>}
    </li>
  )
}