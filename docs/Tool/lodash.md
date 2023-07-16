# Lodash 一个前端开发不可或缺的 JS 库

## 是什么？能做什么？为什么选它？

Lodash 这个 JS 库，相信大家已经在平时的开发中使用过，或者多少听过，亦或者你已经在开发中离不开 lodash 了，那么对于前两者来说，相信这片文章一定会为你的开发节约非常多的时间以提高你的开发效率。而对于非常熟练的各位朋友，也希望你能纠正我在下面的编码和案例中找到问题，并及时纠正。

Lodash 是一个集成了在前端开发中对 Array，Number，Object，String 等数据类型操作难度的降低的一个库，它的一致性、模块化大大降低了代码量和可读性，那到底改怎么个一致性，怎么个模块化，下面一起来看看

## 安装 Lodash

安装 lodash 包

```shell
npm install lodash
```

在项目中使用

```js
import _ from 'lodash';
```

其实在开发过程中，是不必安装就可以直接使用的，这又是怎么回事呢？我们以 Element Plus 为例，在 Element Plus 这个 UI 组库中，Lodash 是作为一个依赖库存在的，我们一般把这样的依赖库叫做幽灵库，你可以直接从 Element Plus 中导出

```js
import _ from 'element-plus';
```

这样导入使用，其实完全没问题，当然，你如果不确定自己在使用库中是否有这个库的依赖，也可以在 node_modeles 中找找看，或者重新下载也没关系

话就说到这里，接下来一起使用起来看看吧

## 常用 API

## \_.chunk 数组拆分

### 操作

对一个数组进行操作。每两个数据拼成一个数组，最终返回整个数组操作后的结果

```js
// _.chunk(数组，每个区块数组的长度)

const arr = [1, 2, 3, 4, 5, 6, 7];
const newArr = _.chunk(arr, 2);
console.log(newArr); // [[1,2],[3,4],[5,6],[7]]
console.log(arr); // [1, 2, 3, 4, 5, 6, 7]
```

## \_.compact 过滤'假'值

### 操作

返回一个新的数组，若元素包含 false,null,"",undefinde,NaN,都会被过滤,并且不会改变原数组

```js
const arr = [1, 2, false, undefined, '1', '', NaN, 3, null];
const newArr = _.compact(arr);
console.log(newArr); //[1, 2, "1", 3]
console.log(arr); //  [1, 2, false, undefined, "1", "", NaN, 3, null]
```

## \_.concat 数组连接

返回连接好的数组，与原声 array.concat 类似,但是，原生 concat 方法只支持两个或多个**数组**进行操作，但是 lodash 可以支持数组与数据

```js
const arr = [1];
const str = 2;

const newArr = _.concat(arr, str, 3, [4]);
console.log(newArr); // [1, 2, 3, 4]
```

可以看到，这里我在 concat 的时候，存放了一个数组进去，但是如果这里是一个多维数组的话，就没那么顶了

```js
const newArr = _.concat(arr, str, 3, [[4]]);
console.log(newArr); // [1, 2, 3, [4]]  只能拍平一层
```

可以看到的结果，只能拍平一层数组，多维数组的话，就不适合这个 API 了

## \_.difference 排除 A 中存在的 B

### \_.difference(A, B)

### 使用场景

这个 API 的使用场景非常多，随便举个例子

🌰 现在 有一个树形控件，后端返回了之前用户勾选的节点，现在，后端希望用户取消了之前勾选的 API，然后你要把现在勾选的所有，和取消的所有一并返回给后端。

在树形控件中我们都知道，有一个属性为 **getCheckedNodes** 可以获取到所有的已经被勾选的节点，那谁取消勾选了我们不知道，但是我们知道接口返回了之前谁被勾选了，此时，这个 API 就可以派上用场了。

```js
const beforeCheck = [2, 4, 6];
const nowCheck = [1, 2, 3, 4];
_.difference(A, B);
const cancelCheck = _.difference(beforeCheck, nowCheck);
console.log(cancelCheck); // [6]
```

哦！原来节点 6 被取消了啊，那我知道了。这个 API 的使用场景各有不同，一个小案例，仅供参考

## \_.differenceWith A 中排除 B

方法接近 \_.difference 接受一个比较器

```js
const arr1 = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
];

const newArr = _.differenceWith(arr1, [{ x: 1, y: 2 }], _.isEqual);
console.log(newArr); // [x:2,y:1]
```

其实这个 API 在整体的体验下来感觉比较适合上面提到的树形请求参数的数据结构，这样的组件其实在 ElementPlus 中级联选择器里面有同样业务需求的时候可以使用

## \_.drop 去除前 n 个元素

会创建一个新的数组，传递两个参数

```js
/**
 * @param {Array} 需要操作的数组
 * @param {number} 默认为1
 */
_.drop(Array, number);

const arr = [1, 2, 3];

const newArr = _.drop(arr, 1);
console.log(newArr); // [2,3]
```

## \_.dropRight 去除尾部第 n 项

用法和 \_.drop 的区别不大，这里只不过是反着来的

```js
const arr = [1, 2, 3, 4, 5, 6];

const newArr = _.dropRight(arr, 2); // [1,2,3,4]
```

## \_.fill 数组填充

对需要操作的数据进行 替换，这个数组我觉得对于用户信息脱敏比较好用，不用再去写枯燥无味的正则表达式了

```js
/**
 * @param {Array} 参数 1、需要改变的数组
 * @param {value} 参数 2、需要填充的数据
 * @param {start} 参数 3、开始的位置
 * @param {end}   参数 4、结束的位置
 */

// 写到这我突然觉得不如正则，将就着看吧，我超！！

const id = '110011199010112212';
const newId = _.fill(id.split(''), '*', 6, 14);
console.log(newId.join('')); // 110011********2212
```

写到这里我不禁觉得有点麻烦，大概就这意思了

## \_.findIndex 找数组对象结构

这个方法只建议有数组对象的数据结构的时候在使用

```js
var users = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'pebbles', active: true },
];

// const a = _.findIndex([1, 2, 3], 2) 永远都找不到 -1

const n = _.findIndex(users, { user: 'fred', active: false });
console.log(a);
```

那如果非要找数组下的某一个值，我建议的是使用原生的 findIndex 方法

```js
const arr = [3, 4, 5, 6];
console.log(arr.findIndex((item) => item == 1)); // -1
console.log(arr.findIndex((item) => item == 3)); // 0
```

需要注意的是，原生方法是无法实现查找数组对象下某一项的存在的，只能通过寻找某一项下的某一个数据是否存在

```js
var users = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'pebbles', active: true },
];

console.log(
  users.findIndex((item) => item == { user: 'barney', active: false })
); // -1
console.log(
  users.findIndex((item) => item.user === 'barney') // 0
); // -1
```
