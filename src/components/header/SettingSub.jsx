import './SubMenu.scss'
import { BsCheck2, BsArrowLeftShort } from 'react-icons/bs';

import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../../store/settingThemeSlice'
import { changeLang } from '../../store/settingLangSlice'
import { changeLimited } from '../../store/settingLimitSlice'


export default function SubMenu({ settingSubType, onClickBackward, setSettingSubType, isLimited }) {
  let title, desc, contents;
  let dispatch = useDispatch();
  let theme = useSelector(state => state.theme);
  let langs = useSelector(state => state.langs);
  let limit = useSelector(state => state.limit);
  
  if (settingSubType === 'theme') {
    title = theme.title;
    desc = theme.desc;
    contents = theme.contents.map(content => {
      return (
        <div className="content" key={content.id} onClick={() => {
          dispatch(changeTheme(content));
          setSettingSubType('');
        }}>
          <div className="icn">{content.theme === theme.selected && <BsCheck2 />}</div>
          <div className="type">{content.theme}</div>
        </div>
      )
    })
  }
  else if (settingSubType === 'langs') {
    title = langs.title;
    desc = '';
    contents = langs.contents.map(lang => {
      return (
        <div className="content" onClick={() => {
          dispatch(changeLang(lang));
          setSettingSubType('');
        }} key={lang.id}>
          <div className="icn">{langs.selected === lang.langs && <BsCheck2 />}</div>
          <div className="type">{lang.langs}</div>
        </div>
      )
    });
  } else if (settingSubType === 'limit') {
    title = '제한 모드';
    desc = '';
    contents = <div className="content limit">
      <p className="limit-desc1">이 모드를 사용하면 미성년자에게 부적합할 수 있는 동영상을 숨길 수 있습니다.
        단, 필터링이 완벽할 수는 없다는 점에 유의하세요.</p>
      <p className="limit-desc1">이 설정은 이 브라우저에만 적용됩니다.</p>
      <div className="limit-desc2">
        <div className="caption">제한 모드 활성화</div>
        <div className="toggleMode" onClick={() => {
          dispatch(changeLimited())
        }}>
          <div className="bar"></div>
          <div className={limit.isLimited ? 'btn active' : 'btn'}></div>
        </div>
        {limit.isLimit && <p>제한 모드 잠금을 사용하면 다른 사용자가 이 브라우저에서 제한 모드 설정을 변경할 수 없습니다.</p>}
        {limit.isLimit && <p>이 브라우저에서 제한모드 잠금</p>}
      </div>
    </div>
  }

  return (
    <div className="wrapper">
      <ul className={'sub-menu ' + settingSubType} style={settingSubType === 'langs' ? { top: 0 } : null}>
        <li className="title">
          <div className="icn--backward" onClick={() => {
            onClickBackward('settingMain')
          }}><BsArrowLeftShort /></div>
          <h5 className="text">{title}</h5>
        </li>
        <li className="contents">
          {desc && <p className="desc">{desc}</p>}
          {contents}
        </li>
      </ul>
    </div>
  )
}

