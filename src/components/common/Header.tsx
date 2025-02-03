import { useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {logo} from '../../assets/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBarsStaggered, faX} from '@fortawesome/free-solid-svg-icons';
import {Menu} from '../../types/Common'

const Header = () => {
  const menuItems = useSelector((state: {Menu:Menu[]}) => state.Menu);
  const [menuOnItem, setMenuOnItem] = useState<Menu | null>(null);
  const [hoveredSubMenu, setHoveredSubMenu] = useState<number | null>(null);
  const menuOnHandel = (id: number)=>{
    const selectedItem = menuItems.find((item)=>item.id === id)
    setMenuOnItem(selectedItem || null);
    setHoveredSubMenu(null);
    
  }
  return (
    <header className='fixed w-full z-[9999]'>
      <div className='max-w-[1400px] flex mx-auto flex-row justify-between border-b border-1 border-[#000] box-border h-[80px] relative'>
        <h1 className='text-lg font-[ShillaCultureB]'>
          <Link to='/home' className='flex h-[80px] w-[185px]'>
            <img src={logo}alt='대중교회' className='w-[18px] mr-[6px]'/>
            <span className='self-center text-[12px] leading-[12px]'>
              <p>대한예수교</p>
              <p className='tracking-[10px]'>장로회</p>
            </span>
            <span className='leading-[80px] text-[26px]'>대중교회</span>
          </Link>
        </h1>
        <nav className='w-[600px] relative'>
          <ul className='flex leading-[80px] justify-between'>
            {
              menuItems.map((item)=>(
                <li key={item.id} className='mx-[15px] '>
                  <button 
                    className='h-[79px] relative'
                    onClick={()=>{menuOnHandel(item.id)}}
                  >
                    <span 
                      className={`absolute bg-[#5cb531] h-[4px] bottom-0 left-1/2 transition-all duration-300 ease-in-out transform ${menuOnItem?.id === item.id ? 'w-full -translate-x-1/2' : 'w-0 -translate-x-1/2'}`}
                    ></span>
                    {item.name}
                  </button>
                </li>
              ))
            }
          </ul>
          <div className={`absolute left-0 top-[80px] w-[995px] flex justify-between  ${!menuOnItem ? 'hidden' : ''}`}>
            <div className='order-last'>
              <button className='text-xl leading-[80px] w-[80px]' onClick={()=>(setMenuOnItem(null))}><FontAwesomeIcon icon={faX} /></button>
            </div>
            <ul className='w-[600px] relative'>
              {
              menuOnItem?.subMenu?.map((subItem)=>(
                <li 
                  key={subItem.id}
                  className='w-[50%] hover:bg-[#efefef]'
                  onMouseEnter={() => setHoveredSubMenu(subItem.id)}
                  onMouseLeave={() => setHoveredSubMenu(null)}
                >
                  <Link to={subItem.addr} className='p-[15px] block `a'>{subItem.name}</Link>
                  {subItem.subMenu && subItem.subMenu.length > 0 && (
                    <ul
                      className={`min-h-full border border-1 border-[red] absolute left-[50%] w-[50%] top-0 transition-opacity ${
                        hoveredSubMenu === subItem.id ? 'opacity-100 visible' : 'opacity-0 invisible'
                      }`}
                    >
                      {subItem.subMenu.map((nestedSubItem) => (
                        <li key={nestedSubItem.id}>
                          <Link to={nestedSubItem.addr} className='block p-[15px]'>{nestedSubItem.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}


                </li>
              ))
              }
            </ul>
          </div>  
        </nav>
        <div className='leading-[80px] flex justify-end w-[175px]'>
          <span className='cursor-pointer leading-[80px] text-center'><FontAwesomeIcon icon={faBarsStaggered} /></span>
        </div>
        <nav className={`absolute left-[50%] top-[80px] w-[clac()] flex border  ${!menuOnItem ? 'hidden' : ''}`}>
          
          {/* <ul>
            <li>
              <Link to="/worship">실시간 예배</Link>
              <ul>
                <li><Link to='/worship/live'>실시간 온라인예배</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/worship/sunservice">예배</Link>
              <ul>
                <li><Link to='/worship/sunservice'>주일오전예배</Link></li>
                <li><Link to='/worship/praiseservice'>주일오후찬양예배</Link></li>
                <li><Link to='/worship/webservice'>수요예배</Link></li>
                <li><Link to='/worship/morningservice'>새벽예배</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/sermon">설교</Link>
              <ul>
                <li><Link to='/sermon/hallelujah'>할렐루야 찬양대</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/praise">찬양</Link>
              <ul>
                <li><Link to='/praise/Hallelujah'>할렐루야 찬양대</Link></li>
                <li><Link to='/praise/jslove'>JESUS LOVE</Link></li>
                <li><Link to='/praise/special'>특별찬양</Link></li>
              </ul>
            </li>
          </ul> */}
        </nav>
      </div>
      <div 
        className={`bg-white min-h-[400px] w-full absolute top-[0] z-[-1] transition-all duration-300 ease-in-out ${menuOnItem ? 'translate-y-0 opacity-100' :'-translate-y-full opacity-0'} `}
      />

    </header>
  );
}

export default Header;
 