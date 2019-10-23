import React from 'react'
import './Header.modules.scss'
import ytIcon from '../../images/yt.png'
import profile from '../../images/profile.jpg'
import { Menu, Search, VideoCall, Apps, Notifications } from '@material-ui/icons'

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="left">
        <a className="toggleMenu" href="#">
          <div className="toggleButton">
            <Menu />
          </div>
        </a>
        <div className="ytIcon">
          <img src={ytIcon} alt="Youtube Icon" />
          <span className="countryCode">NL</span>
        </div>
      </div>

      <div className="center">
        <div className="searchInput">
          <div className="searchForm">
            <div className="searchBar">
              <input type="text" placeholder="Search" />
            </div>
            <button className="searchButton">
              <Search className="searchIcon" />
            </button>
          </div>
        </div>
      </div>

      <div className="right">
        <div className="buttons">
          <button>
            <VideoCall />
          </button>
          <button>
            <Apps />
          </button>
          <button>
            <Notifications />
          </button>
          <button className="profileButton">
            <div className="profileImage">
              <img src={profile} alt="Profile image" />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
