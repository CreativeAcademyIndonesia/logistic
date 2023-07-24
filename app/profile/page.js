import About from '../component/About'
import VisiMisi from '../component/VisiMisi'
import NilaiPerusahaan from '../component/NilaiPerusahaan'

export default function Home() {
  return (
    <main className='pt-16'>
      <About />
      <VisiMisi />
      <NilaiPerusahaan/>
    </main>
  )
}
