import Image from 'next/image'
import { Catalog } from './components/Catalog'
import { Fashion } from './components/Fashion'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Magazine } from './components/Magazine'

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Magazine />
        <Fashion />
        <Catalog />
      </main>
      <Footer />
    </div>
  )
}
