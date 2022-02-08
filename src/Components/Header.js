import React,{useState} from "react";
import "../Styles/Header.css"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';


function Header() {

        const [toggleMenu,setToggleMenu] = useState(false)

        const toggle = () =>{
            setToggleMenu(!toggleMenu)
        }

  return <div className="header-container">
               
                <div className="header-menus">
                        <section className="logo">
                            <img src="https://t3.ftcdn.net/jpg/03/17/01/20/360_F_317012026_GX2Idqlyg5CTn7yxwfdDoVOBlQtaqvax.jpg" alt="logo"/>
                        </section>
                        <section className="header-menu-icon">
                                {toggleMenu  ?   <CloseOutlinedIcon onClick={toggle}/>  : <MenuRoundedIcon onClick={toggle}/> }
                        </section>
                        <section className={toggleMenu? "header-menu-list active" : "header-menu-list"}>
                            <ul>
                                <li>About</li>
                                <li>Porfolio</li>
                                <li>Contact</li>
                            </ul>
                        </section>
                </div>

                <div className="header-icons">
                        <label>Darkmode</label>
                            <div>
                                    <DarkModeIcon/>
                            </div>
                       
                </div>

  </div>;
}

export default Header;
