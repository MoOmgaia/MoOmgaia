import Image from "next/image";
import ServiceGrid from '../services/ServiceGrid.jsx';

export default function HeroSection() {
    return (
        <section>
            <div id="hero_back" className="absolute top-16 left-0 -z-10 h-60 w-full opacity-80 bg-primary-200 dark:filter-none">
                <Image alt="Bandeau" src="/bandeau3.png" width={1600} height={215} className="shadow-lg rounded-b-lg w-full h-96"/>
            </div>

            <h1 className="leading-[4.5rem] mt-28 font-bold text-current dark:text-primary-700 text-6xl break-words">Mô&#39;Omgaïa</h1>

            <h2 className="break-words text-3xl font-bold text-secondary-100">Une alternative à Mystara</h2>

            <h2 className="mb-4 text-3xl font-bold text-current dark:text-primary-700">Un décor de campagne pour D&D</h2>

            <ServiceGrid resources={[
                {
                name: "Histoire & Civilisations",
                description: "Mô'Omgaïa a une histoire trés longue, de la naissance des grands anciens jusqu'à aujourd'hui plus de 1 400 000 années se sont écoulées parsemées de guerre, d'émmergence de peuples et de nations.",
                link: "/articles/histoire",
                imgSrc: "/hex-histoire.svg",
                imgAlt: "Découvrez des civilisations inconnues !",
                newTab: false,
                buttons: [
                    {
                    text: "Découvrez de nouveaux territoires →",
                    link: "/articles/histoire",
                    color: "view",
                    newTab: false,
                    }
                ],
                },
                {
                name: "Cartographie",
                description: "De la carte de base de Mô'Omgaïa aux cartes dérivées et à façon, l'une de nos objectifs ici est d'établir les fonds cartographiques des territoires, pour répondre aux besoins des scénarios et des lecteurs de ce site.",
                link: "/Cartographie",
                imgSrc: "/hex-cartographie.svg",
                imgAlt: "Les cartes qu'ils vous manquent !",
                newTab: false,
                buttons: [
                    {
                    text: "Trouver votre chemin →",
                    link: "/articles/carto",
                    color: "view",
                    newTab: false,
                    }
                ],
                },
                {
                name: "Scénarii",
                description: "Nous regroupons ici les aventures qui parsèment les lieux les plus divers de Mô'Omgaïa. Complots d'envergure ou simples pistes, caprice des Immortels ou vol à la tir, les scénarii sauront faire vivre vos tables de jeu.",
                link: "/articles/scenar",
                imgSrc: "/hex-scénarii.svg",
                imgAlt: "L'aventure vous attend !",
                newTab: false,
                buttons: [
                    {
                    text: "L'aventure vous attend →",
                    link: "/articles/scenar",
                    color: "view",
                    newTab: false,
                    }
                ],
                },
                {
                name: "Ressources diverses",
                description: "Venez trouver l'inspiration auprès de personnages prétérirés, de backround originaux, d'objets magiques extraordinaires, de pièges ingénieux et une myriade de liens vers des ressources pour Donjons & Dragons.",
                link: "https://eepurl.com/hQoT1z",
                imgSrc: "/hex-ressources.svg",
                imgAlt: "Le plein de ressources",
                newTab: false,
                buttons: [
                    {
                    text: "Faites le plein de ressources →",
                    link: "/articles/ressources",
                    color: "view",
                    newTab: false,
                    }
                ],
                },
            ]}/>
            <div className="w-full h-32 flex justify-center opacity-80">
                <Image alt="Header" src="/diablo2.png" width={428/2} height={310/2}/>
            </div>
        </section>
    )
}