import './Modal.scss'
import  Shortcut from'./Shortcut'
import { useDispatch } from 'react-redux'
import { shortcutChange } from '../../store/popUpStateSlice'

export default function Modal() {

  const dispatch = useDispatch();

  return (
    <div className="modal-wrapper isShortcut" onClick={() =>{
      dispatch(shortcutChange());
    }}>
      <Shortcut shortcutChange={shortcutChange}/>
    </div>
  )
}