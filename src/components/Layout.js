import React from 'react'
import Helmet from 'react-helmet'
import BigPic from './BigPic'
import Menu from './Menu'
import Copyright from './Copyright'
import SubInfo from './SubInfo'
import { navigate, globalHistory, Redirect } from '@reach/router'

import '../styles/Layout.scss'

export class Layout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      entered: false
    }
  }

  onComponentDidMount() {
    if (!this.state.entered) {
      this.setState({ entered: true })
    }
  }

  render() {
    const outsideHome = globalHistory.location.pathname !== '/'
    if (outsideHome && !this.state.entered) {
      return <Redirect to='/' />
    }
    return (
      <div>
        <Helmet
          title="Victor Feitosa Web Portfolio"
          meta={[
            {
              name: 'description',
              content: 'Victor Feitosa Portfolio Website',
            },
            {
              name: 'keywords',
              content:
                'victor, feitosa, victorfeitosa, porftolio, front, end, frontend, front-end, development, design, webdesign, web-design',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div className='main-layout'>
          {/* NOTE: Purple section containing profile */}
          <section
            onClick={() => {
              navigate('/')
            }}
            className={
              'profile-section' +
              (outsideHome ? ' profile-section--open' : '')
            }
          >
            <BigPic isSmall={outsideHome} src="" />

            <div className={'info-block' + (outsideHome ? ' info-block--small' : '')} >
              <SubInfo isSmall={outsideHome} />
            </div>
          </section>

          {/* NOTE: Page section where pages are loaded */}
          <section className={
            'content-section' +
            (outsideHome ? ' content-section--open' : '')
          }>
            {this.props.children}
          </section>

          {/* NOTE: Menu section */}
          <section className='menu-section'>
            <Menu />
            <Copyright />
          </section>
        </div>
      </div>
    )
  }
}

export default Layout
