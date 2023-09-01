import Banner from './components/Banner/index';
import Companies from './components/Companies/Companies';
import Courses from './components/Courses/index';
import Mentor from './components/Mentor/index';
import Testimonials from './components/Testimonials/index';
import ContacUs from './components/ContacUs/ContacUs';
import NextEnroll from './components/NextEnroll/NextEnroll';


export default function Home() {
  return (
    <main>
      <Banner />
      <NextEnroll/>
      <Companies />
      <Courses />
      <Mentor />
      <Testimonials />
      <ContacUs />
    </main>
  )
}
