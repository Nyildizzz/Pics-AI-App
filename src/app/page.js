import styles from './page.module.css'
import HeroSection from '@/components/heroSection/HeroSection'
import Feature from '@/components/feature/Feature'
import AboutOneSection from '@/components/about/AboutSectionOne'
import AboutSectionTwo from '@/components/about/AboutSectionTwo'
import Comments from "@/components/comments/Comments"
import Pricing from '@/components/pricing/Pricing'
import Contact from '@/components/contact/Contact'
import Footer from '@/components/footer/Footer'
import MiniFooter from '@/components/footer/miniFooter'
export default function Home() {
  return (
    <main className={styles.content}>
      <HeroSection />
      <Feature />
      <AboutOneSection />
      <AboutSectionTwo />
      <Comments /> 
      <Pricing /> 
      <Contact /> 
      <Footer />   
      <MiniFooter />
      
    </main>
  )
}
