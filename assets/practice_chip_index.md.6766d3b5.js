import{_ as s}from"./chunks/and-gate.drawio.2a25a1e6.js";import{_ as a,c as n,o as l,O as p}from"./chunks/framework.c601997b.js";const t="/docs-cs/assets/not-gate.drawio.052e6049.svg",e="/docs-cs/assets/or-gate.drawio.4dcbbe3b.svg",o="/docs-cs/assets/xor-gate.drawio.e918cf7a.svg",m=JSON.parse('{"title":"芯片设计","description":"","frontmatter":{},"headers":[],"relativePath":"practice/chip/index.md","filePath":"practice/chip/index.md"}'),c={name:"practice/chip/index.md"},i=p('<h1 id="芯片设计" tabindex="-1">芯片设计 <a class="header-anchor" href="#芯片设计" aria-label="Permalink to &quot;芯片设计&quot;">​</a></h1><h2 id="前言-仿真器、以及-not-芯片开发流程" tabindex="-1">前言：仿真器、以及 Not 芯片开发流程 <a class="header-anchor" href="#前言-仿真器、以及-not-芯片开发流程" aria-label="Permalink to &quot;前言：仿真器、以及 Not 芯片开发流程&quot;">​</a></h2><p>在芯片设计过程中，仿真是一个非常重要的环节，通过仿真，可以提前检测和排除设计中可能存在的错误和缺陷，避免在实际制造和应用中出现问题。此外，仿真还可以帮助设计者评估和优化电路的性能，提高电路的效率、可靠性和可维护性。从而，大大缩短设计周期和降低设计成本。</p><p>在这里，我们使用 nand2tetris 给我们提供的<a href="https://www.nand2tetris.org/software" target="_blank" rel="noreferrer">仿真软件</a>、以及<a href="https://www.nand2tetris.org/_files/ugd/44046b_bfd91435260748439493a60a8044ade6.pdf" target="_blank" rel="noreferrer">使用说明</a>。</p><p>接下来，我们借助仿真工具中的内置芯片 Nand 来开发 Not 芯片。以此，捋清楚芯片仿真开发的大致流程：</p><ol><li><strong>芯片 API 描述</strong></li></ol><p><img src="'+t+`" alt="not gate"></p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">芯片名称：Not</span></span>
<span class="line"><span style="color:#A6ACCD;">输入：in</span></span>
<span class="line"><span style="color:#A6ACCD;">输出：out</span></span>
<span class="line"><span style="color:#A6ACCD;">功能：if in=0 then out=1 else out=0.</span></span>
<span class="line"><span style="color:#A6ACCD;">描述：输入 0 则输出 1;输入 1 则输出 0。</span></span></code></pre></div><ol><li><p><strong>根据 API 描述信息编写 Not.hdl</strong></p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">CHIP Not {</span></span>
<span class="line"><span style="color:#A6ACCD;">    IN a;</span></span>
<span class="line"><span style="color:#A6ACCD;">    OUT out;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    PARTS:</span></span>
<span class="line"><span style="color:#A6ACCD;">    Nand(a = a, b = a, out = out);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></li><li><p><strong>编写 Not.cmp 预测 Not.hdl 的运行结果</strong></p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">| a |out|</span></span>
<span class="line"><span style="color:#A6ACCD;">| 0 | 1 |</span></span>
<span class="line"><span style="color:#A6ACCD;">| 1 | 0 |</span></span></code></pre></div></li><li><p><strong>编写 Not.tst 测试文件，对比 Not.hdl 实际运行结果与 Not.cmp 预期结果</strong></p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;">* Not.tst: testing Not.hdl</span></span>
<span class="line"><span style="color:#A6ACCD;">*/</span></span>
<span class="line"><span style="color:#A6ACCD;">load Not.hdl,</span></span>
<span class="line"><span style="color:#A6ACCD;">output-file Not.out,</span></span>
<span class="line"><span style="color:#A6ACCD;">compare-to Not.cmp,</span></span>
<span class="line"><span style="color:#A6ACCD;">output-list a%B1.1.1 out%B1.1.1;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">set a 0, eval, output;</span></span>
<span class="line"><span style="color:#A6ACCD;">set a 1, eval, output;</span></span></code></pre></div></li></ol><div class="warning custom-block"><p class="custom-block-title">特别说明：为什么使用 Nand 门作为基本单位？</p><p>NAND 门是一个数字电路逻辑门，它是由两个输入引脚和一个输出引脚组成的。它的输出根据其两个输入引脚的状态进行逻辑运算，如果两个输入都为高电平，则输出低电平，否则输出高电平，它的逻辑功能等价于“非与门”（NAND）。NAND 门是数字电路中最基本和最常见的逻辑门之一，可以用于构建其他类型的逻辑门和数字电路，是数字电路设计中非常重要的一部分。下面是 NAND 门的真值表：</p><table><thead><tr><th>a</th><th>b</th><th style="text-align:center;">Nand(a, b)</th></tr></thead><tbody><tr><td>0</td><td>0</td><td style="text-align:center;">1</td></tr><tr><td>0</td><td>1</td><td style="text-align:center;">1</td></tr><tr><td>1</td><td>0</td><td style="text-align:center;">1</td></tr><tr><td>1</td><td>1</td><td style="text-align:center;">0</td></tr></tbody></table><p>其中，a 和 b 为 NAND 门的两个输入，Nand(a, b)为输出。当 a 和 b 都是高电平（1）时，输出为低电平（0）；而当任意一个或两个输入为低电平（0）时，输出都为高电平（1）。</p><p>综上所述，在 HDL（硬件描述语言）中，使用 NAND 门作为基本单位的主要原因是因为它是一种逻辑门，可以用于构建所有其他类型的逻辑门，包括与门、或门、非门等。此外，NAND 门具有完备的逻辑功能，能够进行所有逻辑操作，因此使用它可以减少设计和实现的复杂性，提高电路的可靠性和可维护性。</p></div><h2 id="_1-实现一个-and-门逻辑的芯片" tabindex="-1">1. 实现一个 And 门逻辑的芯片？ <a class="header-anchor" href="#_1-实现一个-and-门逻辑的芯片" aria-label="Permalink to &quot;1. 实现一个 And 门逻辑的芯片？&quot;">​</a></h2><p><img src="`+s+`" alt="and gate"></p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-Sak2J" id="tab-hSuWdT9" checked="checked"><label for="tab-hSuWdT9">API 文档</label><input type="radio" name="group-Sak2J" id="tab-xbJXTL0"><label for="tab-xbJXTL0">芯片描述文件 .hdl</label><input type="radio" name="group-Sak2J" id="tab-DLhbH_U"><label for="tab-DLhbH_U">芯片测试文件 .tst</label><input type="radio" name="group-Sak2J" id="tab-VA5FiUJ"><label for="tab-VA5FiUJ">芯片测试数据 .cmp</label></div><div class="blocks"><div class="language-md active"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> 芯片名：and</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> 输入：a, b</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> 输出：out</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> 功能： if a=b=1 then out=1 else out=0</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> 表达式：And(a, b) = Nand(Nand(a,b), Nand(a,b))</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> 描述：只有当输入值都是 1 的时候，And 函数的输出值才为 1，否则输出为 0。</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;">* And gate</span></span>
<span class="line"><span style="color:#A6ACCD;">* out = if (a == 1 and b == 1) then 1 else 0</span></span>
<span class="line"><span style="color:#A6ACCD;">* And = Nand(Nand(a, b), Nand(a, b))</span></span>
<span class="line"><span style="color:#A6ACCD;">*/</span></span>
<span class="line"><span style="color:#A6ACCD;">CHIP And {</span></span>
<span class="line"><span style="color:#A6ACCD;">    IN a, b;</span></span>
<span class="line"><span style="color:#A6ACCD;">    OUT out;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    PARTS:</span></span>
<span class="line"><span style="color:#A6ACCD;">    Nand(a = a, b = b, out = o1);</span></span>
<span class="line"><span style="color:#A6ACCD;">    Nand(a = a, b = b, out = o2);</span></span>
<span class="line"><span style="color:#A6ACCD;">    Nand(a = o1, b = o2, out = out);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;">* And.tst: testing And.hdl </span></span>
<span class="line"><span style="color:#A6ACCD;">*/</span></span>
<span class="line"><span style="color:#A6ACCD;">load And.hdl,</span></span>
<span class="line"><span style="color:#A6ACCD;">output-file And.out,</span></span>
<span class="line"><span style="color:#A6ACCD;">compare-to And.cmp,  </span></span>
<span class="line"><span style="color:#A6ACCD;">output-list a%B1.1.1 b%B1.1.1 out%B1.1.1;</span></span>
<span class="line"><span style="color:#A6ACCD;">set a 0, set b 0, eval, output;</span></span>
<span class="line"><span style="color:#A6ACCD;">set a 0, set b 1, eval, output;</span></span>
<span class="line"><span style="color:#A6ACCD;">set a 1, set b 0, eval, output;</span></span>
<span class="line"><span style="color:#A6ACCD;">set a 1, set b 1, eval, output;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">| a | b |out|</span></span>
<span class="line"><span style="color:#A6ACCD;">| 0 | 0 | 0 |</span></span>
<span class="line"><span style="color:#A6ACCD;">| 0 | 1 | 0 |</span></span>
<span class="line"><span style="color:#A6ACCD;">| 1 | 0 | 0 |</span></span>
<span class="line"><span style="color:#A6ACCD;">| 1 | 1 | 1 |</span></span></code></pre></div></div></div><h2 id="_2-实现一个-or-门逻辑的芯片" tabindex="-1">2. 实现一个 Or 门逻辑的芯片？ <a class="header-anchor" href="#_2-实现一个-or-门逻辑的芯片" aria-label="Permalink to &quot;2. 实现一个 Or 门逻辑的芯片？&quot;">​</a></h2><p><img src="`+e+`" alt="or gate"></p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-iwS7w" id="tab-x1kO8UD" checked="checked"><label for="tab-x1kO8UD">API 文档</label><input type="radio" name="group-iwS7w" id="tab-nBQVfkE"><label for="tab-nBQVfkE">芯片描述文件 .hdl</label><input type="radio" name="group-iwS7w" id="tab-Ri37ZyP"><label for="tab-Ri37ZyP">芯片测试文件 .tst</label><input type="radio" name="group-iwS7w" id="tab-L7Ej9zN"><label for="tab-L7Ej9zN">芯片测试数据 .cmp</label></div><div class="blocks"><div class="language-md active"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> 芯片名：or</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> 输入：a, b</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> 输出：out</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> 功能：if (a == 1 or b == 1) then out = 1 else out = 0</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> 描述：只有当输入值都是 0 的时候，or 函数的输出值才为 0，否则输出为 1。</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> 思路：Or = Nand(Not(a), Not(b))</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;">* Or gate</span></span>
<span class="line"><span style="color:#A6ACCD;">* 思路： or = Nand(Not(a), Not(b))</span></span>
<span class="line"><span style="color:#A6ACCD;">*/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">CHIP Or {</span></span>
<span class="line"><span style="color:#A6ACCD;">	IN a, b;</span></span>
<span class="line"><span style="color:#A6ACCD;">	OUT out;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	PARTS:</span></span>
<span class="line"><span style="color:#A6ACCD;">	Not(in = a, out = o1);</span></span>
<span class="line"><span style="color:#A6ACCD;">	Not(in = b, out = o2);</span></span>
<span class="line"><span style="color:#A6ACCD;">	Nand(a = o1, b = o2, out = out);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;">* Or.tst: testing Or.hdl</span></span>
<span class="line"><span style="color:#A6ACCD;">*/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">load Or.hdl,</span></span>
<span class="line"><span style="color:#A6ACCD;">output-file Or.out,</span></span>
<span class="line"><span style="color:#A6ACCD;">compare-to Or.cmp,</span></span>
<span class="line"><span style="color:#A6ACCD;">output-list a%B1.1.1 b%B1.1.1 out%B1.1.1;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">set a 0, set b 0, eval, output;</span></span>
<span class="line"><span style="color:#A6ACCD;">set a 0, set b 1, eval, output;</span></span>
<span class="line"><span style="color:#A6ACCD;">set a 1, set b 0, eval, output;</span></span>
<span class="line"><span style="color:#A6ACCD;">set a 1, set b 1, eval, output;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">| a | b |out|</span></span>
<span class="line"><span style="color:#A6ACCD;">| 0 | 0 | 0 |</span></span>
<span class="line"><span style="color:#A6ACCD;">| 0 | 1 | 1 |</span></span>
<span class="line"><span style="color:#A6ACCD;">| 1 | 0 | 1 |</span></span>
<span class="line"><span style="color:#A6ACCD;">| 1 | 1 | 1 |</span></span></code></pre></div></div></div><h2 id="_3-实现一个-xor-门逻辑的芯片" tabindex="-1">3. 实现一个 Xor 门逻辑的芯片？ <a class="header-anchor" href="#_3-实现一个-xor-门逻辑的芯片" aria-label="Permalink to &quot;3. 实现一个 Xor 门逻辑的芯片？&quot;">​</a></h2><p><img src="`+o+`" alt="xor gate"></p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-jkN_F" id="tab-kmBwWbV" checked="checked"><label for="tab-kmBwWbV">API 文档</label><input type="radio" name="group-jkN_F" id="tab-wvRXbKY"><label for="tab-wvRXbKY">芯片描述文件 .hdl</label><input type="radio" name="group-jkN_F" id="tab-mIDRvXd"><label for="tab-mIDRvXd">芯片测试文件 .tst</label><input type="radio" name="group-jkN_F" id="tab-JxvGWfC"><label for="tab-JxvGWfC">芯片测试数据 .cmp</label></div><div class="blocks"><div class="language-md active"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> 芯片名：Xor</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> 输入：a, b</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> 输出：out</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> 功能：out = not (a == b)</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> 描述：Xor，异或，当两个输入值相反的时候输出为 1，否则返回 0。</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> 思路：Xor = Or(And(a, Not(b)), And(Not(a), b))</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;">* @name: Xor.hdl</span></span>
<span class="line"><span style="color:#A6ACCD;">* @expression: out = not (a == b)</span></span>
<span class="line"><span style="color:#A6ACCD;">* @parts: Xor = Or(And(a, Not(b)), And(Not(a), b))</span></span>
<span class="line"><span style="color:#A6ACCD;">*/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">CHIP Xor {</span></span>
<span class="line"><span style="color:#A6ACCD;">	IN a, b;</span></span>
<span class="line"><span style="color:#A6ACCD;">	OUT out;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	PARTS:</span></span>
<span class="line"><span style="color:#A6ACCD;">	Not(in = b, out = n0);</span></span>
<span class="line"><span style="color:#A6ACCD;">	And(a = a, b = n0, out = a0);</span></span>
<span class="line"><span style="color:#A6ACCD;">	Not(in = a, out = n1);</span></span>
<span class="line"><span style="color:#A6ACCD;">	And(a = n1, b = b, out = a1);</span></span>
<span class="line"><span style="color:#A6ACCD;">	Or(a = a0, b = a1, out = out);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;">* Xor.tst: testing Xor.hdl</span></span>
<span class="line"><span style="color:#A6ACCD;">*/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">load Xor.hdl,</span></span>
<span class="line"><span style="color:#A6ACCD;">output-file Xor.out,</span></span>
<span class="line"><span style="color:#A6ACCD;">compare-to Xor.cmp,</span></span>
<span class="line"><span style="color:#A6ACCD;">output-list a%B1.1.1 b%B1.1.1 out%B1.1.1;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">set a 0,set b 0, eval, output;</span></span>
<span class="line"><span style="color:#A6ACCD;">set a 0,set b 1, eval, output;</span></span>
<span class="line"><span style="color:#A6ACCD;">set a 1,set b 0, eval, output;</span></span>
<span class="line"><span style="color:#A6ACCD;">set a 1,set b 1, eval, output;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">| a | b |out|</span></span>
<span class="line"><span style="color:#A6ACCD;">| 0 | 0 | 0 |</span></span>
<span class="line"><span style="color:#A6ACCD;">| 0 | 1 | 1 |</span></span>
<span class="line"><span style="color:#A6ACCD;">| 1 | 0 | 1 |</span></span>
<span class="line"><span style="color:#A6ACCD;">| 1 | 1 | 0 |</span></span></code></pre></div></div></div>`,19),r=[i];function C(A,d,y,D,u,b){return l(),n("div",null,r)}const v=a(c,[["render",C]]);export{m as __pageData,v as default};
