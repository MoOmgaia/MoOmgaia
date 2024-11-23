import createWithNextra from 'nextra';

const withNextra = createWithNextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
    staticImage: true,
    latex: true,
    flexsearch: {
        codeblocks: false
    },
    defaultShowCopyCode: true,
    mdxOptions: {
        remarkPlugins: []
    }
});

export default withNextra();
