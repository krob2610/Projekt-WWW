import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const SidebarLink = styled(Link)`
  display: flex;
  color: darkorange;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  height:  60px;
  text-decoration: none;
  font-size: 30px;
  
  &:hover{
    background: #708090;
    border-left: 4px solid purple;
    cursor: pointer;  
    transition: 500ms;
    
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px
  
`;


const DropdownLink = styled(Link)`
  background: #374a5c;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: darkorange;
  font-size: 25px;
  transition: 500ms;
  &:hover{
    background: #708090;
    cursor: pointer;
  } 
`
const Submenu = ({item}) => {
    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)
    return (

    <>
        <SidebarLink to={item.path} onClick ={item.subNav && showSubnav}>

            <div>
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
            </div>

            <div>
                {item.subNav && subnav
                    ? item.iconOpened : item.subNav
                    ? item.iconClosed: null}
            </div>
        </SidebarLink>
        {subnav && item.subNav.map((item, index) =>{

            return(
                <DropdownLink to={item.path} key={index}>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </DropdownLink>
            )
        })}
    </>
    )
}

export default Submenu