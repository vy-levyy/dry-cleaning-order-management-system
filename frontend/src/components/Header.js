import React from 'react'
import { Link } from 'gatsby'
import { withTranslation } from 'react-i18next'

import Footer from './Footer'

import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
  render() {
    const { t } = this.props

    return (
      <header id="header">
        <div className="inner">
          <Link to="/" className="image avatar">
            <img src={avatar} loading="auto" alt="avatar" />
          </Link>
          <h1>
            <strong>{t('header.title')}</strong>
            <br />
            <p>{t('header.titleDescription')}</p>
            <span>{t('header.titleDescriptionFooter')}</span>
            <br />
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default withTranslation()(Header)
