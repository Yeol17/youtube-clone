import MenuItem from './MenuItem'
import './MainMenu.scss'

export default function MainMenu({ settings, onClickMenu }) {
  let lists = settings.map((section, i) => {
    return (
      <li className={'section' + ++i} key={i}>
        <ul>
          {section.map(itm => {
            return itm.link ?
              <a href={itm.link} key={itm.id}>
                <MenuItem  itm={itm} onClickMenu={onClickMenu}/>
              </a> :
              <MenuItem key={itm.id} itm={itm} onClickMenu={onClickMenu} />
          })}
        </ul>
      </li>
    )
  })
  return (
    <ul className="main-menu">
      {lists}
    </ul>
  )
}