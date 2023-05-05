import { defineConfig } from "vitepress";

export default defineConfig({
    base: "/docs-cs/",
    title: "计算机系统 CS",
    description: "Cognitive Computer System",
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            {
                text: "项目支持",
                items: [
                    {
                        text: "vitepress 官网",
                        link: "https://github.com/vuejs/vitepress",
                    },
                    {
                        text: "katex：在 web 端显示数学公式",
                        link: "https://www.npmjs.com/package/katex",
                    },
                    {
                        text: "markdown 数组公式",
                        link: "http://home.ustc.edu.cn/~zzx2002/new/2021/08/04/mathjax/",
                    },
                ],
            },
        ],

        sidebar: [
            {
                text: "话题",
                items: [
                    {
                        text: "硬件相关",
                        items: [
                            {
                                text: "数字电路",
                                items: [
                                    {
                                        text: "布尔逻辑 Boolean Logic",
                                        link: "/src/boolean-logic",
                                    },
                                ],
                            },
                            {
                                text: "硬件结构描述语言 HDL",
                                link: "/src/hardware-description-language.md",
                            },
                        ],
                    },
                ],
            },
            {
                text: "附录: 实验项目",
                items: [
                    {
                        text: "芯片设计",
                        link: "/practice/chip/",
                    },
                ],
            },
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/Da222Da/docs-cs" },
        ],
    },
    markdown: {
        config: md => {
            md.use(require('markdown-it-katex'), {
                katex: require('katex'),
                delimiters: 'dollars',
                throwOnError: false
            })
        }
    }
});
