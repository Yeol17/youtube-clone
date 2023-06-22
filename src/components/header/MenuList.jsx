import { SlArrowRight } from "react-icons/sl";

export default function MenuList({ icn, text, more }) {
  console.log(icn);
  return (
    <li className="itm">
      <div className="icn">{ icn }</div>
      <div className="text">{text}</div>
      {more ? <div className="more"><SlArrowRight /></div> : null}
    </li>
  )
}