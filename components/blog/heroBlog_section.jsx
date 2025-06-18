import Image from 'next/image'

export function HeroBlock() {
  return (
    <div className='flex flex-col gap-x-5 items-center justify-center md:mt-2 md:mb-24 mt-24 mb-16'>
      <Image src='/logo.svg#center' alt='logo' width={120} height={120} className='h-fit' />
      <h1 className='text-4xl font-bold mb-10'>Bienvenu sur le blog de Mô&#39;Omgaïa !</h1>
      <span className='text-base md:text-xl lg:text-2xl font-bold dark:text-white text-black text-center'>
        On parlera ici de nos reflexions sur le monde de Mô&#39;Omgaïa, de la comparaison avec le monde de Mystara et sur les coulisses de création du <a href="https://mo-omgaia.vercel.app/">site</a> et des articles.
      </span>
    </div>
  )
}