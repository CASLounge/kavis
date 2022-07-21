import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Homepage from '../components/Pages/Home'

const Home: NextPage = () => {
  return (
    <Layout title="CASLounge">
      <Homepage />
    </Layout>
  )
}

export default Home
