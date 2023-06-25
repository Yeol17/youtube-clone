import { useEffect } from 'react';
import './SubMenu.scss'

import { BsCheck2, BsArrowLeftShort } from 'react-icons/bs';

export default function SubMenu({ settingSubType, onClickBackward }) {
  let title, desc, contents;

  useEffect(() => {

  }, [])

  if (settingSubType === 'theme') {
    title = design.title;
    desc = design.desc;
    contents = design.contents.map(content => {
      return (
        <div className="content" key={content.id}>
          <div className="icn">{content.isSelected && <BsCheck2 />}</div>
          <div className="type">{content.type}</div>
        </div>
      )
    })
  } else if (settingSubType === 'langs') {
    title = '언어 선택';
    desc = '';
    contents = languages.map(lang => {
      return (
        <div className="content" key={lang.id}>
          <div className="icn">{lang.isSelected && <BsCheck2 />}</div>
          <div className="type">{lang.langs}</div>
        </div>
      )
    });
  }

  return (
    <div className="wrapper">
      <ul className="sub-menu" style={settingSubType === 'langs' ? { top: 0 } : null}>
        <li className="title">
          <div className="icn--backward" onClick={() => {
            onClickBackward('settingMain')
          }}><BsArrowLeftShort /></div>
          <h5 className="text">{title}</h5>
        </li>
        <li className="contents">
          {desc && <p>{desc}</p>}
          {contents}
        </li>
      </ul>
    </div>
  )
}

const design = {
  title: '디자인',
  theme: '기기 테마',
  desc: '이 브라우저에서만 설정이 적용됩니다.',
  contents: [
    { id: 0, type: '기기 테마', isSelected: true },
    { id: 1, type: '어두운 테마', isSelected: false },
    { id: 2, type: '밝은 테마', isSelected: false },
  ]
}

const languages = [

  { id: 0, langs: 'Afrikaans', isSelected: false },
  { id: 1, langs: 'Azərbaycan', isSelected: false },
  { id: 2, langs: 'Bahasa Indonesia', isSelected: false },
  { id: 3, langs: 'Bahasa Malaysia', isSelected: false },
  { id: 4, langs: 'Bosanski', isSelected: false },
  { id: 5, langs: 'Català', isSelected: false },
  { id: 6, langs: 'Čeština', isSelected: false },
  { id: 7, langs: 'Dansk', isSelected: false },
  { id: 8, langs: 'Deutsch', isSelected: false },
  { id: 9, langs: 'Eesti', isSelected: false },
  { id: 10, langs: 'English (India)', isSelected: false },
  { id: 11, langs: 'English (UK)', isSelected: false },
  { id: 12, langs: 'English (US)', isSelected: false },
  { id: 13, langs: 'Español (España)', isSelected: false },
  { id: 14, langs: 'Español (Latinoamérica)', isSelected: false },
  { id: 15, langs: 'Español (US)', isSelected: false },
  { id: 16, langs: 'Euskara', isSelected: false },
  { id: 17, langs: 'Filipino', isSelected: false },
  { id: 18, langs: 'Français', isSelected: false },
  { id: 19, langs: 'Français (Canada)', isSelected: false },
  { id: 20, langs: 'Galego', isSelected: false },
  { id: 21, langs: 'Hrvatski', isSelected: false },
  { id: 22, langs: 'IsiZulu', isSelected: false },
  { id: 23, langs: 'Íslenska', isSelected: false },
  { id: 24, langs: 'Italiano', isSelected: false },
  { id: 25, langs: 'Kiswahili', isSelected: false },
  { id: 26, langs: 'Latviešu valoda', isSelected: false },
  { id: 27, langs: 'Lietuvių', isSelected: false },
  { id: 28, langs: 'Magyar', isSelected: false },
  { id: 29, langs: 'Nederlands', isSelected: false },
  { id: 30, langs: 'Norsk', isSelected: false },
  { id: 31, langs: 'O‘zbek', isSelected: false },
  { id: 32, langs: 'Polski', isSelected: false },
  { id: 33, langs: 'Português', isSelected: false },
  { id: 34, langs: 'Português (Brasil)', isSelected: false },
  { id: 35, langs: 'Română', isSelected: false },
  { id: 36, langs: 'Shqip', isSelected: false },
  { id: 37, langs: 'Slovenčina', isSelected: false },
  { id: 38, langs: 'Slovenščina', isSelected: false },
  { id: 39, langs: 'Srpski', isSelected: false },
  { id: 40, langs: 'Suomi', isSelected: false },
  { id: 41, langs: 'Svenska', isSelected: false },
  { id: 42, langs: 'Tiếng Việt', isSelected: false },
  { id: 43, langs: 'Türkçe', isSelected: false },
  { id: 44, langs: 'Беларуская', isSelected: false },
  { id: 45, langs: 'Български', isSelected: false },
  { id: 46, langs: 'Кыргызча', isSelected: false },
  { id: 47, langs: 'Қазақ Тілі', isSelected: false },
  { id: 48, langs: 'Македонски', isSelected: false },
  { id: 49, langs: 'Монгол', isSelected: false },
  { id: 50, langs: 'Русский', isSelected: false },
  { id: 51, langs: 'Српски', isSelected: false },
  { id: 52, langs: 'Українська', isSelected: false },
  { id: 53, langs: 'Ελληνικά', isSelected: false },
  { id: 54, langs: 'Հայերեն', isSelected: false },
  { id: 55, langs: 'עברי ת', isSelected: false },
  { id: 56, langs: 'اردو', isSelected: false },
  { id: 57, langs: 'العربية', isSelected: false },
  { id: 58, langs: 'فارسی', isSelected: false },
  { id: 59, langs: 'नेपाली', isSelected: false },
  { id: 60, langs: 'मराठी', isSelected: false },
  { id: 61, langs: 'हिन्दी', isSelected: false },
  { id: 62, langs: 'অসমীয়া', isSelected: false },
  { id: 63, langs: 'বাংলা', isSelected: false },
  { id: 64, langs: 'ਪੰਜਾਬੀ', isSelected: false },
  { id: 65, langs: 'ગુજરાતી', isSelected: false },
  { id: 66, langs: 'ଓଡ଼ିଆ', isSelected: false },
  { id: 67, langs: 'தமிழ்', isSelected: false },
  { id: 68, langs: 'తెలుగు', isSelected: false },
  { id: 69, langs: 'ಕನ್ನಡ', isSelected: false },
  { id: 70, langs: 'മലയാളം', isSelected: false },
  { id: 71, langs: 'සිංහල', isSelected: false },
  { id: 72, langs: 'ภาษาไทย', isSelected: false },
  { id: 73, langs: 'ລາວ', isSelected: false },
  { id: 74, langs: 'ဗမာ', isSelected: false },
  { id: 75, langs: 'ქართული', isSelected: false },
  { id: 76, langs: 'አማርኛ', isSelected: false },
  { id: 77, langs: 'ខ្មែរ', isSelected: false },
  { id: 78, langs: '中文 (简体)', isSelected: false },
  { id: 79, langs: '中文 (繁體)', isSelected: false },
  { id: 80, langs: '中文 (香港)', isSelected: false },
  { id: 81, langs: '日本語', isSelected: false },
  { id: 82, langs: '한국어', isSelected: true },

]