# 布尔逻辑 Boolean Logic

::: tip

-   目标：搞清楚布尔逻辑 Boolean Logic
-   参考文献：
    1. [Nand2Tetris: boolean logic lecture](https://drive.google.com/file/d/1MY1buFHo_Wx5DPrKhCNSA2cm5ltwFJzM/view)
    2. [Nand2Tetris: boolean logic book](https://www.nand2tetris.org/_files/ugd/44046b_f2c9e41f0b204a34ab78be0ae4953128.pdf)

:::

## 1. 什么是布尔值（Boolean Value）？

布尔值，又称二进制值，这种数值只有两种状态，例如`0/1、true/false`。

## 2. 什么是布尔函数（Boolean Function）？

布尔函数，是指输入、输出均是布尔型数值的函数。

布尔函数的作用，在于正确地表示和处理布尔值。那我们又该如何正确地描述布尔函数呢？

在这里，我们介绍两种描述布尔函数的方式：1. 真值表表示法、2. 布尔表达式`公式`

1. 真值表表示法：就是把所有可能出现的情况全部列举出来，如下表所示：

|   x   |   y   |   z   | f(x,y,z) |
| :---: | :---: | :---: | :------: |
|   0   |   0   |   0   |    0     |
|   0   |   0   |   1   |    0     |
|   0   |   1   |   0   |    1     |
|   0   |   1   |   1   |    0     |
|   1   |   0   |   0   |    1     |
|   1   |   0   |   1   |    0     |
|   1   |   1   |   0   |    1     |
|   1   |   1   |   1   |    0     |

1. 布尔表达式：就是使用三个布尔算子 And、Or、Not 来表示布尔函数。

$f(x,y,z) = (\tilde{x} \cdot y \cdot \tilde{z}) + (x \cdot \tilde{y} \cdot \tilde{z}) + (x \cdot y \cdot \tilde{z})$

::: danger 结论：每个布尔函数，无论多复杂，都可以只用 And、Or、Not 这三个布尔算子来完全表示。

1. And: 只有在 x、y 都为 1 的时候，x And y 的值等于1，简写 $x \cdot y$
2. Or: 在 x、y 有一个为 1 的时候，x Or y 的值等于1，简写 x + y
3. Not: x 为 0 时，Not x 为 1，简写 $\tilde{x}$
   
:::

## 3.什么是门逻辑(Gate Logic)？

当今计算机大多数都是使用电学来表述二进制数据的转换（switching）和传导（conducting）。也就是说，二进制数据通过电流进行传导，通过门电路进行数据信息转换之后再传导。

在数据电路当中，门电路是指电信号传导和转换的技术`Logic Gate = Binary Data Conducting And Switching Technology`，也称为门逻辑，是数字电路中的基本组成部分。数字电路中的逻辑门由晶体管等电子器件构成，它们用于实现基本的逻辑运算，以及将二进制数据传输到下一个电路。

那门逻辑又是如何精准地控制电信号转换的呢？借助布尔函数的逻辑运算能力，让电信号的转化符合我们想要的预期。**所以说，门逻辑是实现布尔函数的物理设备`即芯片 chip。`**

下图以与门`And Gate Logic`为例：

![And Gate Logic](./../assets/imgs/and-gate.drawio.svg)

## 4. 什么是芯片（chip）?

::: danger

芯片 = n 个门逻辑的组合。

:::

芯片（Chip）指的是由半导体材料制成的电子集成电路（Integrated Circuit，IC），它是微型电子元件之一，通常包括晶体管、电容、电阻等电子元件，能够在微小的物理空间内完成复杂的电路功能。芯片可以集成大量的电路和功能，如处理器、存储器、传感器、通信模块等，并且有着高可靠性、高性能、低功耗等优点，被广泛应用于计算机、通信、消费电子等领域。芯片的产生极大地推动了电子技术、计算机技术和信息技术的发展。


