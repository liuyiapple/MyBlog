# 内置模块

## 1. fs 操作文件模块

```js
const fs = require('fs');
```

### 1. 异步读取文件

```js
const data = fs.readFile('./data', 'utf8', (err, data) => {
  if (err) return throw err.message;
  console.log(JSON.parse(data));
});
```

### 2. 同步读取文件

```js
const data = fs.readFileSync('./data.json', 'utf8');
console.log(JSON.parse(data));
```

### 3. 异步写入文件

```js
fs.writeFile('file.text', '写入的内容2323', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('file has been write');
});
```

### 4.复制文件

```js
fs.copyFile('file.md', 'file1.md', (err) => {
  if (err) throw err;
  console.log('file copy right');
});
```

### 5. 删除文件

```js
fs.unlink('file1.md', (err) => {
  if (err) throw err;
  console.log('unlink success');
});
```

### 6. 创建文件 或 文件夹

```js
fs.mkdir('component', (err) => {
  if (err) throw err;
  console.log('success');
});
```

### 7. 读取文件夹

```js
fs.readdir('component', (err, files) => {
  if (err) throw err;
  console.log(files); // 返回读取到文件夹名称会以数组的星星返回
});
```

### 8. 删除文件

```js
fs.rmdir('component', (err) => {
  if (err) throw err;
  console.log('file remove success');
});
```

## 2. path 模块

```js
const path = require('path');
```

### 1. 全路径

\_\_dirname 获取当前模块的目录路径

```js
console.log(__dirname);
// 拼接当前文件夹的完成路径
const fullPath = path.join(__dirname, 'dir', 'file.text');
console.log(fullPath);
```

### 2. 解析当前路径返回

```js
const parsePath = path.parse(
  '/Users/liu/Desktop/Node/express-demos/BuiltInModule/path/dir/file.text'
);
console.log(parsePath);
/**
 *  root: '/',
 *  dir: '/Users/liu/Desktop/Node/express-demos/BuiltInModule/path/dir',
 *  base: 'file.text',
 *  ext: '.text',
 *  name: 'file'
 */
```

### 3. 解析绝对路径

使用 path.resolve 可返回一个绝对路径

```js
const resolvePath = path.resolve(__dirname, './dist');

console.log(resolvePath); // Users/xxx/path/dist
```

### 4. 获取当前路径下的文件名称

```js
const filename = path.basename('/path/to/file.md');
console.log(filename); //file.md
```

### 5.获取问价拓展名

```js
const extendFileName = path.extname('/path/to/file.md');
console.log(extendFileName); //.md
```

### 6.获取父文件夹路径

```js
const FaPath = '/path/to/file.txt';
const parentPath = path.dirname(FaPath);
console.log(parentPath); // /path/to
```

### 7. 判断当前路径是否为绝对路径

```js
const isAbsoulte = path.isAbsolute('/path/to/file.txt');
console.log(isAbsoulte); //true
```

### 8. 格式化路径

```js
const formatPath = path.format({
  root: '/',
  dir: '/Users/liu/Desktop/Node/express-demos/BuiltInModule/path/dir',
  base: 'file.text',
  ext: '.text',
  name: 'file',
});
console.log(formatPath); ///Users/liu/Desktop/Node/express-demos/BuiltInModule/path/dir/file.text
```

## 3. os 模块

```js
const os = require('os');
// 获取操作平台
console.log(os.platform());

// 获取操作系统架构

console.log(os.arch());

// 获取主机名

console.log(os.hostname());

// 获取内存信息

console.log(os.totalmen());
console.log(os.freemem());

// 获取网络接口信息

console.log(os.networkInterfaces());
```

## 4. http 模块

这里大概了解一下就好，毕竟很多框架已经封装的很好了

```js
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method == 'GET' && req.url == '/') {
    res.statusCode = 200;
    res.setHeader('COntent-Type', 'text/plain');
    res.end('Hello world');
  } else {
    res.statusCode == 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('service running on  http://localhost:3000');
});
```
