import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const sidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/login',
        icon: <IoIcons.IoIosLogIn/>,
        cName: 'nav-text'
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Upload track',
        path: '/upload',
        icon: <IoIcons.IoIosCloudUpload />,
        cName: 'nav-text'
    },
];