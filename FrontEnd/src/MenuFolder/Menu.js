import React, {useState} from 'react';
import  {Link} from 'react-router-dom';
import styled from 'styled-components';
import * as Icon from 'react-icons/ri';
import {MenuData} from './MenuData'
import Submenu from "./SubMenu";
import {IconContext} from "react-icons";

const Nav = styled.div`
  background: #1C2833;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;

const IconLink = styled(Link)` //link bo klikamy w to
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const MenuText = styled.div`
  margin-right: 5rem;
  font-size: 3rem;
  color: indianred;
`

const SideMenuBar = styled.nav`
  background: #1C2833;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({sidebar}) => (sidebar ? '0' : '-100%')};
  transition:1000ms;
  //transition-duration: 1000ms;
  z-index: 10;
`

const Wrap = styled.nav`
  width: 100%;
`

const Menu = () =>{
    const [MenuBar, MenuSet] = useState(false)       //hook
    const showMenu = () => MenuSet(!MenuBar)
    return (
        <>
            <IconContext.Provider value={{ color: '#a11d4d' }}>
                <Nav>
                    <IconLink to="#">
                        <Icon.RiMenuLine onClick={showMenu}/>
                    </IconLink>
                    <MenuText>
                        Kuba
                    </MenuText>
                </Nav>

                <SideMenuBar sidebar={MenuBar}>
                    <Wrap>
                        <IconLink to="#">
                            <Icon.RiCloseLine onClick={showMenu} />
                        </IconLink>

                        {MenuData.map((item, index) => {

                         return <Submenu item = {item} key={index}/>
                        })}
                    </Wrap>
                </SideMenuBar>
            </IconContext.Provider>
        </>
    )
}
export  default Menu;