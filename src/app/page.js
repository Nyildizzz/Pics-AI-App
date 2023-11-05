import styles from './page.module.css'
import HeroSection from '@/components/heroSection/HeroSection'
import Feature from '@/components/feature/Feature'
import AboutOneSection from '@/components/about/AboutSectionOne'
import AboutSectionTwo from '@/components/about/AboutSectionTwo'
import Comments from "@/components/comments/Comments"
export default function Home() {
  return (
    <main className={styles.content}>
      <HeroSection />
      <Feature />
      <AboutOneSection />
      <AboutSectionTwo />
      <Comments />
      
      
    </main>
  )
}
