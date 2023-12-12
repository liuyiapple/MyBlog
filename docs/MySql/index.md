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
