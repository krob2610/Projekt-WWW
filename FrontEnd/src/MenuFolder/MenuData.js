import React from 'react'
import * as Icon from 'react-icons/ri'
import * as FAIcon from 'react-icons/fa'
export const MenuData = [

    {
        title: 'About Me',
        //path: `/${document.referrer}`,
        path: '/aboutme',
        icon: <Icon.RiUser3Line />,
        iconClosed: <Icon.RiArrowDownSLine/>,
        iconOpened: <Icon.RiArrowUpSLine/>,
        subNav: [
            {
                title: 'Skills',
                path: '/aboutme/skills',
                icon: <Icon.RiLightbulbFlashLine/>
            },
            {
                title: 'Education',
                path: '/aboutme/education',
                icon: <FAIcon.FaGraduationCap/>
            },

            {
                title: 'Experience',
                path: '/aboutme/experience',
                icon: <Icon.RiBriefcaseLine/>
            },
        ]
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <Icon.RiFileListLine />,
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <Icon.RiMailLine />,
    },

]