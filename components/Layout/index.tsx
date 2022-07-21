import { ReactNode } from 'react';
import Head from 'next/head'
import { VStack } from '@chakra-ui/react';

type Props = {
  children?: ReactNode,
  title?: string,
}

const Layout = ({ children, title }:Props) => {

  return (
      <VStack 
        w="100vw" h="100vh"
      >
        <Head>
          <title>{title}</title>
          <meta name="app" content="CASLounge Web" />
          <meta name="author" content="Sean Christian Lozana" />
          <meta name="about" content="A social and networking platform by and for CAS students 💖" />
          <link rel="icon" href="/icons/dark/logo/rounded.png" />
        </Head>
        {children}
      </VStack>
  )
}

export default Layout