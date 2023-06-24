import MenuList from './MenuList'
import './MainMenu.scss'

export default function MainMenu({ settings }) {
  return (
    <ul className="main-menu">
      {
        settings.map((section, i) => {
          return (
            <li className={'section' + ++i} key={i}>
              <ul>
                {section.map(itm => {
                  return (
                    <MenuList text={itm.title} more={itm.more} key={itm.id} icn={itm.icn}>
                    </MenuList>
                  )
                })}
              </ul>
            </li>
          )
        })
      }
    </ul>
  )
}