import './LoginBtn.scss'
import { VscAccount } from "react-icons/vsc";

export default function LoginBtn() {
  return (
    <div className="login">
      <div className="icn">
        <VscAccount />
      </div>
      <div>로그인</div>
    </div>
  )
}

