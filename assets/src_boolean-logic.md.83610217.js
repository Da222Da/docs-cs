import{_ as m}from"./chunks/and-gate.drawio.2a25a1e6.js";import{_,c as f,z as l,E as s,B as e,a as t,O as o,G as c,o as y}from"./chunks/framework.c601997b.js";const F=JSON.parse('{"title":"布尔逻辑 Boolean Logic","description":"","frontmatter":{},"headers":[],"relativePath":"src/boolean-logic.md","filePath":"src/boolean-logic.md"}'),h={name:"src/boolean-logic.md"},g=o('<h1 id="布尔逻辑-boolean-logic" tabindex="-1">布尔逻辑 Boolean Logic <a class="header-anchor" href="#布尔逻辑-boolean-logic" aria-label="Permalink to &quot;布尔逻辑 Boolean Logic&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>目标：搞清楚布尔逻辑 Boolean Logic</li><li>参考文献： <ol><li><a href="https://drive.google.com/file/d/1MY1buFHo_Wx5DPrKhCNSA2cm5ltwFJzM/view" target="_blank" rel="noreferrer">Nand2Tetris: boolean logic lecture</a></li><li><a href="https://www.nand2tetris.org/_files/ugd/44046b_f2c9e41f0b204a34ab78be0ae4953128.pdf" target="_blank" rel="noreferrer">Nand2Tetris: boolean logic book</a></li></ol></li></ul></div><h2 id="_1-什么是布尔值-boolean-value" tabindex="-1">1. 什么是布尔值（Boolean Value）？ <a class="header-anchor" href="#_1-什么是布尔值-boolean-value" aria-label="Permalink to &quot;1. 什么是布尔值（Boolean Value）？&quot;">​</a></h2><p>布尔值，又称二进制值，这种数值只有两种状态，例如<code>0/1、true/false</code>。</p><h2 id="_2-什么是布尔函数-boolean-function" tabindex="-1">2. 什么是布尔函数（Boolean Function）？ <a class="header-anchor" href="#_2-什么是布尔函数-boolean-function" aria-label="Permalink to &quot;2. 什么是布尔函数（Boolean Function）？&quot;">​</a></h2><p>布尔函数，是指输入、输出均是布尔型数值的函数。</p><p>布尔函数的作用，在于正确地表示和处理布尔值。那我们又该如何正确地描述布尔函数呢？</p><p>在这里，我们介绍两种描述布尔函数的方式：1. 真值表表示法、2. 布尔表达式<code>公式</code></p><ol><li>真值表表示法：就是把所有可能出现的情况全部列举出来，如下表所示：</li></ol><table><thead><tr><th style="text-align:center;">x</th><th style="text-align:center;">y</th><th style="text-align:center;">z</th><th style="text-align:center;">f(x,y,z)</th></tr></thead><tbody><tr><td style="text-align:center;">0</td><td style="text-align:center;">0</td><td style="text-align:center;">0</td><td style="text-align:center;">0</td></tr><tr><td style="text-align:center;">0</td><td style="text-align:center;">0</td><td style="text-align:center;">1</td><td style="text-align:center;">0</td></tr><tr><td style="text-align:center;">0</td><td style="text-align:center;">1</td><td style="text-align:center;">0</td><td style="text-align:center;">1</td></tr><tr><td style="text-align:center;">0</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">0</td></tr><tr><td style="text-align:center;">1</td><td style="text-align:center;">0</td><td style="text-align:center;">0</td><td style="text-align:center;">1</td></tr><tr><td style="text-align:center;">1</td><td style="text-align:center;">0</td><td style="text-align:center;">1</td><td style="text-align:center;">0</td></tr><tr><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">0</td><td style="text-align:center;">1</td></tr><tr><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">0</td></tr></tbody></table><ol><li>布尔表达式：就是使用三个布尔算子 And、Or、Not 来表示布尔函数。</li></ol>',11),x={class:"katex"},z={class:"katex-mathml"},b=o('<span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.75em;"></span><span class="strut bottom" style="height:1em;vertical-align:-0.25em;"></span><span class="base textstyle uncramped"><span class="mord mathit" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathit">x</span><span class="mpunct">,</span><span class="mord mathit" style="margin-right:0.03588em;">y</span><span class="mpunct">,</span><span class="mord mathit" style="margin-right:0.04398em;">z</span><span class="mclose">)</span><span class="mrel">=</span><span class="mopen">(</span><span class="mord accent"><span class="vlist"><span style="top:0em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="mord textstyle cramped"><span class="mord mathit">x</span></span></span><span style="top:-0.35em;margin-left:0.05556em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="accent-body"><span>~</span></span></span><span class="baseline-fix"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span>​</span></span></span><span class="mbin">⋅</span><span class="mord mathit" style="margin-right:0.03588em;">y</span><span class="mbin">⋅</span><span class="mord accent"><span class="vlist"><span style="top:0em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="mord textstyle cramped"><span class="mord mathit" style="margin-right:0.04398em;">z</span></span></span><span style="top:-0.35em;margin-left:0.11112em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="accent-body"><span>~</span></span></span><span class="baseline-fix"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span>​</span></span></span><span class="mclose">)</span><span class="mbin">+</span><span class="mopen">(</span><span class="mord mathit">x</span><span class="mbin">⋅</span><span class="mord accent"><span class="vlist"><span style="top:0em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="mord textstyle cramped"><span class="mord mathit" style="margin-right:0.03588em;">y</span></span></span><span style="top:-0.35em;margin-left:0.11112em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="accent-body"><span>~</span></span></span><span class="baseline-fix"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span>​</span></span></span><span class="mbin">⋅</span><span class="mord accent"><span class="vlist"><span style="top:0em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="mord textstyle cramped"><span class="mord mathit" style="margin-right:0.04398em;">z</span></span></span><span style="top:-0.35em;margin-left:0.11112em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="accent-body"><span>~</span></span></span><span class="baseline-fix"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span>​</span></span></span><span class="mclose">)</span><span class="mbin">+</span><span class="mopen">(</span><span class="mord mathit">x</span><span class="mbin">⋅</span><span class="mord mathit" style="margin-right:0.03588em;">y</span><span class="mbin">⋅</span><span class="mord accent"><span class="vlist"><span style="top:0em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="mord textstyle cramped"><span class="mord mathit" style="margin-right:0.04398em;">z</span></span></span><span style="top:-0.35em;margin-left:0.11112em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="accent-body"><span>~</span></span></span><span class="baseline-fix"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span>​</span></span></span><span class="mclose">)</span></span></span>',1),T={class:"danger custom-block"},k=l("p",{class:"custom-block-title"},"结论：每个布尔函数，无论多复杂，都可以只用 And、Or、Not 这三个布尔算子来完全表示。",-1),A={class:"katex"},v={class:"katex-mathml"},P=o('<span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.44445em;"></span><span class="strut bottom" style="height:0.63889em;vertical-align:-0.19444em;"></span><span class="base textstyle uncramped"><span class="mord mathit">x</span><span class="mbin">⋅</span><span class="mord mathit" style="margin-right:0.03588em;">y</span></span></span>',1),S=l("li",null,"Or: 在 x、y 有一个为 1 的时候，x Or y 的值等于1，简写 x + y",-1),N={class:"katex"},C={class:"katex-mathml"},V=o('<span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.6678599999999999em;"></span><span class="strut bottom" style="height:0.6678599999999999em;vertical-align:0em;"></span><span class="base textstyle uncramped"><span class="mord accent"><span class="vlist"><span style="top:0em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="mord textstyle cramped"><span class="mord mathit">x</span></span></span><span style="top:-0.35em;margin-left:0.05556em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="accent-body"><span>~</span></span></span><span class="baseline-fix"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span>​</span></span></span></span></span>',1),B=o('<h2 id="_3-什么是门逻辑-gate-logic" tabindex="-1">3.什么是门逻辑(Gate Logic)？ <a class="header-anchor" href="#_3-什么是门逻辑-gate-logic" aria-label="Permalink to &quot;3.什么是门逻辑(Gate Logic)？&quot;">​</a></h2><p>当今计算机大多数都是使用电学来表述二进制数据的转换（switching）和传导（conducting）。也就是说，二进制数据通过电流进行传导，通过门电路进行数据信息转换之后再传导。</p><p>在数据电路当中，门电路是指电信号传导和转换的技术<code>Logic Gate = Binary Data Conducting And Switching Technology</code>，也称为门逻辑，是数字电路中的基本组成部分。数字电路中的逻辑门由晶体管等电子器件构成，它们用于实现基本的逻辑运算，以及将二进制数据传输到下一个电路。</p><p>那门逻辑又是如何精准地控制电信号转换的呢？借助布尔函数的逻辑运算能力，让电信号的转化符合我们想要的预期。<strong>所以说，门逻辑是实现布尔函数的物理设备<code>即芯片 chip。</code></strong></p><p>下图以与门<code>And Gate Logic</code>为例：</p><p><img src="'+m+'" alt="And Gate Logic"></p><h2 id="_4-什么是芯片-chip" tabindex="-1">4. 什么是芯片（chip）? <a class="header-anchor" href="#_4-什么是芯片-chip" aria-label="Permalink to &quot;4. 什么是芯片（chip）?&quot;">​</a></h2><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>芯片 = n 个门逻辑的组合。</p></div><p>芯片（Chip）指的是由半导体材料制成的电子集成电路（Integrated Circuit，IC），它是微型电子元件之一，通常包括晶体管、电容、电阻等电子元件，能够在微小的物理空间内完成复杂的电路功能。芯片可以集成大量的电路和功能，如处理器、存储器、传感器、通信模块等，并且有着高可靠性、高性能、低功耗等优点，被广泛应用于计算机、通信、消费电子等领域。芯片的产生极大地推动了电子技术、计算机技术和信息技术的发展。</p>',9);function I(q,w,L,D,E,G){const n=c("mi"),a=c("mo"),p=c("mrow"),i=c("mover"),r=c("annotation"),d=c("semantics"),u=c("math");return y(),f("div",null,[g,l("p",null,[l("span",x,[l("span",z,[s(u,null,{default:e(()=>[s(d,null,{default:e(()=>[s(p,null,{default:e(()=>[s(n,null,{default:e(()=>[t("f")]),_:1}),s(a,null,{default:e(()=>[t("(")]),_:1}),s(n,null,{default:e(()=>[t("x")]),_:1}),s(a,{separator:"true"},{default:e(()=>[t(",")]),_:1}),s(n,null,{default:e(()=>[t("y")]),_:1}),s(a,{separator:"true"},{default:e(()=>[t(",")]),_:1}),s(n,null,{default:e(()=>[t("z")]),_:1}),s(a,null,{default:e(()=>[t(")")]),_:1}),s(a,null,{default:e(()=>[t("=")]),_:1}),s(a,null,{default:e(()=>[t("(")]),_:1}),s(i,{accent:"true"},{default:e(()=>[s(p,null,{default:e(()=>[s(n,null,{default:e(()=>[t("x")]),_:1})]),_:1}),s(a,null,{default:e(()=>[t("~")]),_:1})]),_:1}),s(a,null,{default:e(()=>[t("⋅")]),_:1}),s(n,null,{default:e(()=>[t("y")]),_:1}),s(a,null,{default:e(()=>[t("⋅")]),_:1}),s(i,{accent:"true"},{default:e(()=>[s(p,null,{default:e(()=>[s(n,null,{default:e(()=>[t("z")]),_:1})]),_:1}),s(a,null,{default:e(()=>[t("~")]),_:1})]),_:1}),s(a,null,{default:e(()=>[t(")")]),_:1}),s(a,null,{default:e(()=>[t("+")]),_:1}),s(a,null,{default:e(()=>[t("(")]),_:1}),s(n,null,{default:e(()=>[t("x")]),_:1}),s(a,null,{default:e(()=>[t("⋅")]),_:1}),s(i,{accent:"true"},{default:e(()=>[s(p,null,{default:e(()=>[s(n,null,{default:e(()=>[t("y")]),_:1})]),_:1}),s(a,null,{default:e(()=>[t("~")]),_:1})]),_:1}),s(a,null,{default:e(()=>[t("⋅")]),_:1}),s(i,{accent:"true"},{default:e(()=>[s(p,null,{default:e(()=>[s(n,null,{default:e(()=>[t("z")]),_:1})]),_:1}),s(a,null,{default:e(()=>[t("~")]),_:1})]),_:1}),s(a,null,{default:e(()=>[t(")")]),_:1}),s(a,null,{default:e(()=>[t("+")]),_:1}),s(a,null,{default:e(()=>[t("(")]),_:1}),s(n,null,{default:e(()=>[t("x")]),_:1}),s(a,null,{default:e(()=>[t("⋅")]),_:1}),s(n,null,{default:e(()=>[t("y")]),_:1}),s(a,null,{default:e(()=>[t("⋅")]),_:1}),s(i,{accent:"true"},{default:e(()=>[s(p,null,{default:e(()=>[s(n,null,{default:e(()=>[t("z")]),_:1})]),_:1}),s(a,null,{default:e(()=>[t("~")]),_:1})]),_:1}),s(a,null,{default:e(()=>[t(")")]),_:1})]),_:1}),s(r,{encoding:"application/x-tex"},{default:e(()=>[t("f(x,y,z) = (\\tilde{x} \\cdot y \\cdot \\tilde{z}) + (x \\cdot \\tilde{y} \\cdot \\tilde{z}) + (x \\cdot y \\cdot \\tilde{z})")]),_:1})]),_:1})]),_:1})]),b])]),l("div",T,[k,l("ol",null,[l("li",null,[t("And: 只有在 x、y 都为 1 的时候，x And y 的值等于1，简写 "),l("span",A,[l("span",v,[s(u,null,{default:e(()=>[s(d,null,{default:e(()=>[s(p,null,{default:e(()=>[s(n,null,{default:e(()=>[t("x")]),_:1}),s(a,null,{default:e(()=>[t("⋅")]),_:1}),s(n,null,{default:e(()=>[t("y")]),_:1})]),_:1}),s(r,{encoding:"application/x-tex"},{default:e(()=>[t("x \\cdot y")]),_:1})]),_:1})]),_:1})]),P])]),S,l("li",null,[t("Not: x 为 0 时，Not x 为 1，简写 "),l("span",N,[l("span",C,[s(u,null,{default:e(()=>[s(d,null,{default:e(()=>[s(p,null,{default:e(()=>[s(i,{accent:"true"},{default:e(()=>[s(p,null,{default:e(()=>[s(n,null,{default:e(()=>[t("x")]),_:1})]),_:1}),s(a,null,{default:e(()=>[t("~")]),_:1})]),_:1})]),_:1}),s(r,{encoding:"application/x-tex"},{default:e(()=>[t("\\tilde{x}")]),_:1})]),_:1})]),_:1})]),V])])])]),B])}const $=_(h,[["render",I]]);export{F as __pageData,$ as default};