import nextra from 'nextra';

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
    staticImage: true,
    latex: true,
    //flexsearch: {
    //    codeblocks: false
    //},
    defaultShowCopyCode: true,
    mdxOptions: {
        remarkPlugins: []
    }
});

export default withNextra({
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
    distDir: './.next',
    sassOptions: {
        silenceDeprecations: ['legacy-js-api'], // 👈 HERE
    }
});
