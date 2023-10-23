import Image from 'next/image'
import { CoursesCard, CoursesCardList, CoursesFrame, Header, Hero } from './components'

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <CoursesFrame />
    </main>
  )
}
