# MySql 表结构操作

## DDL

```sql

create table 表名称 (
    字段1 字段类型 [约束] comment "描述文字"
    ...
    字段1 字段类型 [约束] comment "描述文字"
) comment "表注释"

CREATE TABLE tb_user (
	id int PRIMARY KEY auto_increment COMMENT  "ID,唯一标识",
	username  VARCHAR(20) NOT NULL UNIQUE COMMENT "用户名称",
	name  VARCHAR(10) NOT NULL COMMENT "姓名",
	age int COMMENT "年龄",
	gender  CHAR(1) DEFAULT '男' COMMENT "性别"
) COMMENT "用户数据表";
```

| 约束     | 描述                                           | 关键字                       |
| -------- | ---------------------------------------------- | ---------------------------- |
| 非空约束 | 限制改字段不能为 null                          | NOT NULL                     |
| 唯一约束 | 保证字段的所有数据都是唯一的、不重复的         | UNIQUE                       |
| 主键约束 | 主键是一行数据的唯一标识富符、要求非空且唯一   | PRIMARY KEY (auto_interment) |
| 默认约束 | 保存数据时如果未指定，则采用默认数据           | DEFAULT                      |
| 外建约束 | 让两张表数据建立连接，保证数据的一致性和完整性 | foreign key                  |

### 常见的数据类习惯

主要为三种数据类型 数值类型、字符串类型、日期时间类型

### 基本语法

```sql
  -- 查看数据库表
  SHOW TABLES;
  -- 查看表结构
  DESC 表名称;
  -- 查看表创建语句
  SHOW CREATE TABLE 表名称;
  -- 添加字段
  ALTER TABLE 表名称 ADD 字段名称 字段类型 [约束] COMMENT "描述文字";
  -- 修改字段类型
  ALTER TABLE 表名称 MODIFY 字段名称 字段类型 [约束] COMMENT "描述文字"
  -- 修改字段名称
  ALTER TABLE 表名称 CHANGE 被修改的字段名称 修改为的名称 字段类型 [约束] COMMENT "描述文字"
  -- 删除字段
  ALTER TABLE 表名称 DROP COLUMN 字段名称;
  -- 修改表名称
  RENAME TABLE 被修改的表名称 to 表名称
  -- 删除表
  DROP TABLE IF EXISTS 表名称;
```

## DML

```sql
-- 插入数据

-- 单个插入
   -- 注意事项，插入的主键和值要一一对应
INSERT INTO 表名称 (字段1,字段2,字段3,...) VALUES (值1,值2,值3,...);
-- 多个插入
   -- 插入的字段要符合字段的长度和大小
INSERT INTO 表名称 VALUES (值1,值2,值3,...),(值1,值2,值3,...),(值1,值2,值3,...);


-- 修改数据
  -- 在更新数据时，若表中字段含有update_time字段，应该一同更新 update_time = now()
UPDATE 表名称 SET 字段1=值1,字段2=值2,... WHERE 条件;
  -- 更新表中字段所有数据 就不需要 WHERE 条件
UPDATE 表名称 SET 字段1=值1,字段2=值2,...;

-- 删除数据
DELETE FROM 表名称 WHERE 条件
  -- 删除表中所有数据 就不需要 WHERE 条件
DELETE FROM 表名称;
```

## DQL

### 基础查询

```sql
  -- 字段查询
  SELECT 字段1,字段2,... FROM 表名称
  -- 查询表中所有字段
  SELECT * FROM 表名称
  -- 设置别名
  SELECT 字段1 别名,字段2 别名,... FROM 表名称
  -- 去重查询
  SELECT DISTINCT 字段1,字段2,... FROM 表名称

```

### 条件查询

```sql
-- 条件查询语句
SELECT 字段名称 FROM 表名称 WHERE 条件语句
```

| 比较运算符          | 功能                                         |
| ------------------- | -------------------------------------------- |
| >                   | 大于                                         |
| >=                  | 大于等于                                     |
| <                   | 小于                                         |
| <=                  | 小于等于                                     |
| =                   | 等于                                         |
| <> 或 !=            | 不等于                                       |
| between ... and ... | 在某个范围之内（含最小，最大值）             |
| in(...)             | 在 in 之后的别表中的值，多选一               |
| like 占位符         | 模糊匹配（\_匹配单个字符，% 匹配任意个字符） |
| is null             | 是 null                                      |

### 逻辑运算符

| 逻辑运算符 | 功能 |
| ---------- | ---- |
| and 或 &&  | 与   |
| or 或 \|\| | 或   |
| not 或 !   | 非   |

```sql

select * from tb_emp where username='张三二';

select * from tb_emp where id<5;

select * from tb_emp where job is null;

select * from tb_emp where password != 123456 || password is null;

select * from tb_emp where job is not null;

select * from tb_emp where job =1 || job =2;

select  * from tb_emp where job in (2,3);

select * from tb_emp where username like '___';

select * from tb_emp where username like '张%'
```

### DQL-分组查询

聚合函数 null 值不参与运算

| 函数  | 功能 |
| ----- | ---- |
| max   | 最大 |
| min   | 最小 |
| sum   | 求和 |
| avg   | 平均 |
| count | 计数 |

```sql
SELECT 字段列表 FROM 表名称 GROUP BY 分组字段

SELECT 字段列表 FROM 表名称[WHERE 条件] GROUP BY 分组字段 HAVING 分组条件
```

WHERE 和 HAVING 的区别

1. 执行的时机不同，where 在分组之前进行过滤，不满足 where 条件，不参与分组，而 having 是在分组之后对结果进行过滤

2. 判断条件不同，where 不能对聚合函数进行判断，而 having 可以对聚合函数进行判断

### DQL-排序查询

```sql
SELECT 字段列表 FROM 表名称 [WHERE 条件列表][GROUP BY 分组字段] ORDER BY 字段1 [ASC|DESC],字段2 [ASC|DESC],...
```

ASC 升序 DESC 降序

### DQL-分页查询

```sql

SELECT 字段名 FROM 表名称 LIMIT 开始位置,查询条数

-- 注意事项
  -- 起始索引从0开始，起始索引 = （查询页码 - 1） * 每页显示条数
  -- 分页查询事数据库的方言，不同的数据库有不同的实现，MYSQL中事LIMIT
  -- 如果查询的事第一页的数据，起始索引可以省略。直接简化为limit 10

```

```sql

-- 函数

  - if(表达式,tvalue,fvalue) 表达式为true 取tvalue，否则取fvalue
  - case 表达式
    when value1 then result1
    when value2 then result2
    ...
    else result
    end

 -- 案例
select if(gender= 1,'男性','女性')  性别,count(*) from tb_emp group by gender;

select case job
    when 1 then '班主任'
    when 2 then '讲师'
    when 3 then '学生主管'
    when 4 then '校验主管'
    else '未分配' end as 身份, count(*)
from tb_emp
group by job;
```

## 表结构设计

```sql
 create table 表名称 (
  字段名 数据类型,
  [constraint 约束名称] foreign key (字段名) references 主表名称(主表字段名)
 )


 -- 表完成后
 alter table 表名称 add constraint 约束名称 foreign key （字段名） references 主比奥名称


 alter table tp_emp add constraint tp_emp___fk_dept_id foreign key (dept_id) references dept (id);

```

物理外健

### 一对多

- 概念 使用 foreign key 定于物理外键关联另外一张表
- 缺点
  1. 影响增删查的效率
  2. 仅用与单节点数据库，不适合分布式集群长江
  3. 容易引发数据库死锁，消耗性能

逻辑外键

- 概念 在业务逻辑上解决外建关联
- 通过逻辑外建 就可以很方便的解决上述问题

### 一对一

- 案例 ： 用户 与 身份证信息的 关系。

- 关系 ：一对一的关系，用于单表拆分将一个表的基础字段放在一张表里，娶她字段放在另外一张表中，以提升操作效率

```sql
create table tb_user (
    id int unsigned unique primary key auto_increment comment "ID",
    name varchar(10) not null comment "姓名",
    gender tinyint unsigned not null comment "1 男 2 女",
    phone char(11) comment "手机号",
    degree varchar(10) comment "学历"
) comment "用户信息";

insert into tb_user (id, name, gender, phone, degree)
values (1, '张三', 1, 13222222222, '代转'),
       (2, '张四', 1, 13222222222, '代转'),
       (3, '张五', 1, 13222222222, '代转'),
       (4, '张六', 1, 13222222222, '代转');

create table tb_user_card (
    id int unsigned  primary key auto_increment comment "ID",
    nationality varchar(10) not null comment "民族",
    id_card char(18) not null comment "身份证号码",
    issued varchar(20) not null  comment "签发机关",
    user_id  int unsigned  not null unique comment "ID",
    constraint fk_user_id foreign key (user_id) references tb_user(id)
) comment "身份信息";

insert into tb_user_card
values
    (1,'汉','123456789123456701','西安',1),
    (2,'汉','123456789123456702','西安',2),
    (3,'汉','123456789123456703','西安',3),
    (4,'汉','123456789123456704','西安',4);


```

### 多对多

- 案例 ： 学生与课程的关系
- 关系 ： 一个学生 可以选修多个课程，一个课程可以被多个学生选修
- 实现 ： 建立第三张表中间表，中间表至少包含两个外建，分别关联两张表的主键

### 总结

- 一对多 在多的一方添加外建，关联另外一方的主键
- 一对一 在任意一方，关联另外一方的主键
- 多对多 通过中间表的两个外建，分别关联另外两张表的主键

## 多表查询

- 链接查询
- 内连接，相当于查询 A，B 交集的部门数据

```sql
-- 隐式内链接
SELECT 字段列表 FROM 表1 别名1,表2 别名2 WHERE 连接条件

select dept.name,tp_emp.name from tp_emp,dept where  tp_emp.dept_id = dept.id;

-- 显示内链接
SELECT 字段列表 FROM 表1 别名1 INNER JOIN 表2 别名2 ON 连接条件

select tp_emp.name,dept.name from tp_emp inner join dept on tp_emp.dept_id = dept.id

select e.name,d.name from tp_emp e,dept d join d.dept_id = e.id
```

- 外连接
- 左外连接：查询 左表所有数据（包括两张表交集部分数据）
- 右外连接：查询 右表所有数据（包括两张表交集部分数据）

```sql

左 select 字段列表 from 表1 left [outer] join 表2 on 连接条件;

select e.name,d.name from tp_emp e left join dept d on e.dept_id = d.id;

右 select 字段列表 from 表1 right [outer] join 表2 on 连接条件;

select e.name,d.name from tp_emp e right join dept d on d.id = e.dept_id

```

## 子查询

- sql 语句中嵌套 select 语句，成为嵌套查询，又称子查询

- 形式

```sql
select * from t1 where column1 = (select colum1 from t2)
```

- 子查询外语的语句可以是 insert / update / delete / select 的任何一个，最常见的是 select

- 分类

1.  标量子查询 ：子查询返回的结果为单个值

- 子查询返回的结果是单个值（数字，字符串，日期等），最简单的形式
- 常用的操作符 =、 <>、 > 、>=、 < 、<=

```sql
select * from tp_emp where dept_id = (select id from dept where name='咨询部');
```

2.  列子查询 ： 子查询返回的结果是一列

- 子查询返回的结果是一列
- 常用的操作符 in 、not in 等

```sql
select * from tp_emp where dept_id in ( select id from dept where name = '教研部' or name = '咨询部')
```

3.  行子查询 ：子查询返回的结果为多行多咧

- 子查询返回的结果是一行
- 常用的操作符： = 、<> 、in、 not in

```sql
select * from tp_emp where (entry_date, job) = (select entry_date, job from tp_emp where name = '小红');

```

4. 表子查询

- 子查询返回的结果是多行多列、常作为临时表
- 常用的操作符：in

```sql
select e.*,d.name from (select * from tp_emp where entry_date > '2020-01-01') e,dept d where e.dept_id = d.id
```

## 事务

**_事务_**是一组操作的集合，它是一个不可分割的工作单位，事务会把所有的操作作为一个整体一起向系统提交操作请求，即使是这些操作**_要么同时成功，要么同时失败_**

- 场景
  删除 部门 以及部门下的员工

```sql
delete from dept where id=2;
delete from tp_emp where dept_id = 2;
```

事务控制

```sql
-- 开启事务
start transaction;/ begin;

-- 提交事务
commit;

-- 回滚事务
rollback;
```

### 事务四大特性

- 原子性
  事务是不可分割的最小单元，要么全部成功，要么全部失败
- 一致性
  事务完成时，必须使所有的数据都保持一致的状态
- 隔离性
  数据库系统提供的隔离机制，保证事务在不受外部并发操作影响的独立环境下运行
- 持久性
  事务一旦提交或回滚，他对数据库中的数据的改变就是永久的

## 索引

- 索引 是帮助数据库 **_高效获取数据_**的数据结构
- 创建索引

```sql
create index 索引名 on 表名（字段名）
```

- 查看索引

```sql
  show index from 表名称
```

- 删除索引

```sql
drop index 索引名 from 表名
```

```sql
create index idx_emp_name on tp_emp(name);
show index from tp_emp;
drop index idx_emp_name on tp_emp

```

- 优点

  1. 提高数据查询的效率，降低数据库的 IO 成本
  2. 通过索引列对数据进行排序，降低数据排序的成本，降低 CPU 消耗

- 缺点
  1. 索引会占用存储空间
  2. 索引大大提高了查询效率。同时也降低了 insert、 update、 delete 的效率

### 注意事项

- 主键字段，在建表时，会自动创建主键索引
- 添加唯一约束时，数据库实际上会添加唯一索引
