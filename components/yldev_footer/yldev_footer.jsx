import Link from 'next/link'
import styles from './footer.module.css'

export default function YLDevFooter() {
  return (
		<div className={`${styles['footerSection']} flex w-full flex-row items-center justify-between`}>
            <div className="flex w-full items-baseline flex-wrap gap-14">
                <div>
                    <p className="text-sm">Mô'Omgaïa.fr est le jardin numérique dédié à Mô'Omgaïa, un décor de campagne pour D&D</p>
                    <p className="text-sm pb-2">YLDev © 2023-{new Date().getFullYear()}{' - Tous droits réservés.'} </p>
                    <p className="text-sm">Le site est construit avec <Link className={`${styles['footer__link']} text-sm text-primary-800`} href="https://react.dev" target="_blank"> React</Link>, <Link className={`${styles['footer__link']} text-sm text-primary-800`} href="https://nextjs.org" target="_blank"> Next.js</Link>, <Link className={`${styles['footer__link']} text-sm text-primary-800`}href="https://nextra.site" target="_blank"> Nextra</Link> et <Link className={`${styles['footer__link']} text-sm text-primary-800`} href="https://tailwindcss.com/" target="_blank"> tailwindcss</Link></p>
                    <p className="text-sm">Le site est déployé avec <Link className={`${styles['footer__link']} text-sm text-primary-800`} href="https://vercel.com" target="_blank">Vercel</Link> / <Link className={`${styles['footer__link']} text-sm text-primary-800`} href="https://github.com" target="_blank"> Github</Link></p>
                    <div className="flex gap-1.5 mt-2">
                        <p className="text-sm">Sauf mention contraire, tous les contenus de ce site sont sous <a className="text-primary-800" href="https://github.com/etalab/licence-ouverte/blob/master/LO.md" target="_blank" title="https://github.com/etalab/licence-ouverte/blob/master/LO.md (ouvrir dans une nouvelle fenêtre)" class="ext" data-extlink="" rel="noopener"> licence etalab-2.0</a></p>
                    </div>
                </div>
            </div>
             <a href="https://www.buymeacoffee.com/moomgaia" target="_blank" >
                <img src="\BuyMeACoffee.png" alt="Buy Me A Coffee" style={{height: "100px", width: "100px"}}/>
             </a>
        </div>
  )
}