module.exports = {
  title: "Home",
  dest: "build",
  host: "localhost",
  themeConfig: {
    displayAllHeaders: true,
    sidebar: [
      {
        title: 'Diagrams',  
        children: [
          '/Diagrams'
        ]
      },
      {
        title: 'Companies',  
        children: [
          {
            title: 'myCompany',  
            children: [          
              '/Companies/myCompany/Report1',
              '/Companies/myCompany/Report2'
            ]
          },
        ]
      }
    ],
    nav: [
      {
        text: 'Companies',
        items: [
          { 
            text: 'myCompany', items: [
              { text: 'Report1', link: '/Companies/myCompany/Report1' },
              { text: 'Report2', link: '/Companies/myCompany/Report2' }
            ]
          }
        ]
      }
    ]
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-sub'))
      md.use(require('markdown-it-sup'))
      md.use(require('markdown-it-footnote'))
      md.use(require('markdown-it-abbr'))
      //md.use(require('markdown-it-plantuml'))
      md.use(require('markdown-it-textual-uml'))
    }
  }
}
