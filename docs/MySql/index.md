# MySql

## DDL 表结构创建操作

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

## 常见的数据类习惯

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