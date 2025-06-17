import React from "react";
import { useConfig } from 'nextra-theme-docs'
import {useRouter} from "next/router";
import GiscusComments from "./components/giscus/giscus";
import BackToTop from "./components/backToTop/backToTop";
import Logo from './components/logo/logo.js'
import YLDevFooter from './components/yldev_footer/yldev_footer.jsx'


const docsThemeConfig = {
    project: {
        link: null //"https://github.com/MoOmgaia/MoOmgaia"
    },
    docsRepositoryBase: "https://github.com/MoOmgaia/MoOmgaia/tree/main/",
    primaryHue: { dark: 60, light: 220 },
    //color:{
     //     hue: 220,
     //     saturation: 100,
     //     lightness: {
     //       light: 16,
     //       dark: 70
     //     }
     //   },
    nextThemes: {
        defaultTheme: "light"
    },
    darkMode: false,
    editLink: {
        component: null
    },
    feedback: {
        content: null // disable because now using Giscus
    },
    useNextSeoProps() {
        const {asPath} = useRouter();
        return {titleTemplate: (asPath !== "/") ? "%s – MoOm" : "Moomgaia.fr"};
    },
    head: () => {
        const { frontMatter } = useConfig();
        return (
            <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content="Mô'Omgaïa" />
            <meta property="og:description" content={frontMatter.description || "A new D&D setting as a Mystara alternative"} />
            </>,
            <link rel="icon" type="image/x-icon" href="/logo.svg"/>
        )
    },
    logo: (<Logo />),
    search: {
        placeholder: "recherche d'un article..."
    },
    sidebar: {defaultMenuCollapseLevel: 1},
    toc: {
        title: "Sommaire"
    },
    main: ({children}) => {
        const { frontMatter } = useConfig();
        return (
            <>
                {children}
                <BackToTop/>
                {frontMatter.comment?<GiscusComments/>:''}
            </>
        );
    },
    footer: {
        content: () => <YLDevFooter/>
    }
} 

export default docsThemeConfig;
