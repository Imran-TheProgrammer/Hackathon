import Hero from '@/components/section/hero'
import ProductSlider from '@/components/section/product_slider'
import Promotions from '@/components/section/promotions'
import Image from 'next/image'
import Navbar from '@/components/section/navbar'

export default function Home() {
  return (
    <>
    
      <div className='flex flex-col h-full gap-y-36'>
        <div className=''><Hero/></div>
        <div><Promotions/></div>
        <div><ProductSlider/></div>
      </div>
    </>
  )
}
