# 常用 API

## \_.chunk 数组拆分

### 操作

对一个数组进行操作。每两个数据拼成一个数组，最终返回整个数组操作后的结果

```js
// _.chunk(数组，每个区块数组的长度)

const arr = [1, 2, 3, 4, 5, 6, 7]
const newArr = _.chunk(arr, 2)
console.log(newArr) // [[1,2],[3,4],[5,6],[7]]
console.log(arr) // [1, 2, 3, 4, 5, 6, 7]
```

## \_.compact 过滤'假'值

### 操作

返回一个新的数组，若元素包含 false,null,"",undefinde,NaN,都会被过滤,并且不会改变原数组

```js
const arr = [1, 2, false, undefined, '1', '', NaN, 3, null]
const newArr = _.compact(arr)
console.log(newArr) //[1, 2, "1", 3]
console.log(arr) //  [1, 2, false, undefined, "1", "", NaN, 3, null]
```

## \_.concat 数组连接

返回连接好的数组，与原声 array.concat 类似,但是，原生 concat 方法只支持两个或多个**数组**进行操作，但是 lodash 可以支持数组与数据

```js
const arr = [1]
const str = 2

const newArr = _.concat(arr, str, 3, [4])
console.log(newArr) // [1, 2, 3, 4]
```

可以看到，这里我在 concat 的时候，存放了一个数组进去，但是如果这里是一个多维数组的话，就没那么顶了

```js
const newArr = _.concat(arr, str, 3, [[4]])
console.log(newArr) // [1, 2, 3, [4]]  只能拍平一层
```

可以看到的结果，只能拍平一层数组，多维数组的话，就不适合这个 API 了

## \_.difference 排除 A 中存在的 B

### \_.difference(A, B)

### 使用场景

这个 API 的使用场景非常多，随便举个例子

🌰 现在 有一个树形控件，后端返回了之前用户勾选的节点，现在，后端希望用户取消了之前勾选的 API，然后你要把现在勾选的所有，和取消的所有一并返回给后端。

在树形控件中我们都知道，有一个属性为 **getCheckedNodes** 可以获取到所有的已经被勾选的节点，那谁取消勾选了我们不知道，但是我们知道接口返回了之前谁被勾选了，此时，这个 API 就可以派上用场了。

```js
const beforeCheck = [2, 4, 6]
const nowCheck = [1, 2, 3, 4]
_.difference(A, B)
const cancelCheck = _.difference(beforeCheck, nowCheck)
console.log(cancelCheck) // [6]
```

哦！原来节点 6 被取消了啊，那我知道了。这个 API 的使用场景各有不同，一个小案例，仅供参考
