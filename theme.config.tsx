import React from "react";
import {DocsThemeConfig} from "nextra-theme-docs";
import {useRouter} from "next/router";
import GiscusComments from "./components/giscus/giscus";
import BackToTop from "./components/backToTop/backToTop";


const config: DocsThemeConfig = {
        project: {
            link: "https://github.com/MoOmgaia/MoOmgaia"
        },
        docsRepositoryBase: "https://github.com/MoOmgaia/MoOmgaia/tree/main/",
        primaryHue: 180,
        nextThemes: {
            defaultTheme: "dark"
        },
        editLink: {
            text: "Edit this page on GitHub →"
        },
        feedback: {
            content: null // disable because now using Giscus
        },
        useNextSeoProps() {
            const {asPath} = useRouter();
            return {titleTemplate: (asPath !== "/") ? "%s – GR" : "georgerowlands.ch"};
        },
        head: <link rel="icon" type="image/x-icon" href="logo.svg"/>,
        logo: (<>
              <img src="/logo.svg" width="64" height="48" alt="" />
              <span className="ml-4 font-bold">Mô'Omgaïa</span>
              </>),
        search: {
            // TODO I can replace the component that is shown for when nothing was found with an image of a dead tree
            placeholder: "recherche d'un article..."
        },
        sidebar: {defaultMenuCollapseLevel: 1},
        toc: {
            title: "Table of contents"
        },
        main: ({children}) => {
            return (
                <>
                    {children}
                    <BackToTop/>
                    <GiscusComments/>
                </>
            );
        },
        footer: {
            text: () =>
                <div className="flex w-full flex-row items-center justify-between">
                    <ul>
                        <li><p className="font-bold">Socials</p></li>
                        <li><a href="https://github.com/MoOmgaia" className="text-sm">GitHub↗</a></li>
                    </ul>
                    <a

                        href="https://www.buymeacoffee.com/MoOmgaia" target="_blank"
                    >
                        <img
                            src="buyMeACoffeePurple.png"
                            alt="Buy Me A Coffee"
                            style={{height: "41px", width: "174px"}}
                        />
                    </a>
                </div>
        }
    }
;

export default config;
