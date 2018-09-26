import React from 'react'
import Header from './header'
import {Container} from 'semantic-ui-react'

import Head from 'next/head' //Head means it will be moved to the head of the html document

export default props => {
  return(
    <Container>
      <Head>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
      </Head>
      <Header />
      {props.children /* Everything inside the Layout tag will be passed as children */}
      <footer><p>I'm the footer</p></footer>
    </Container>
  )
}
