import React from 'react'
import Authenticate from '../../pages/Authenticate/Authenticate'
import GithubCallback from '../../pages/GithubCallback/GithubCallback'
import Home from '../../pages/Home/Home'

export const routes = [
  {
    name: 'Authenticate',
    path: '/',
    private: false,
    element: <Authenticate />,
  },
  {
    name: 'GithubCallback',
    path: '/callback',
    private: false,
    element: <GithubCallback />,
  },
  {
    name: 'Home',
    path: '/home',
    private: true,
    element: <Home/>,
  },
]