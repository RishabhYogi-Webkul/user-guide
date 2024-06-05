module.exports = {
    base: '/',
    port: '8080',
    cache: false,
    title: 'Krayin Documentation',
    description: 'Krayin Developer Portal',
    head: [
        ['link', { rel: "icon", type: "image/png", href: "/favicon.ico" }]
    ],
    themeConfig: {
        smoothScroll: true,
        lastUpdated: 'Last Updated',
        repo: 'krayin/laravel-crm',
        repoLabel: 'Contribute to Krayin',
        docsRepo: 'krayin/laravel-crm-docs',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Help us improve this page on Github.',

        logo: '/logo.png',
        nav: [
            { text: 'Home', link: '/' },
        
        ],
        sidebar: {
            '/2.0/': require('./version-configs/2.0')
        }
    },
    markdown: {
        lineNumbers: false
    },
    plugins: ['@vuepress/pwa', 'copy-code', '@vuepress/back-to-top']
};
