# 账号密码

下面分别就数据库和操作系统的账号密码进行说明：

## 数据库

### 数据库密码

分别就Linux系统和Windows系统来说明数据库密码获取方法：

#### Linux系统

对于Linux系统来说，数据库密码存储在您的服务器指定文件中：*`/credentials/password.txt`*。建议通过云控制台直接连接服务器，进入命令终端，运行cat命令获取数据库密码：

![运行cat命令](https://libs.websoft9.com/Websoft9/DocsPicture/zh/common/catdbpassword-websoft9.png)

#### Windows系统

对于Windows系统来说，数据库密码存储在您的服务器指定文件中：*`c:/credentials/password.txt`*

服务器的桌面上会有打开数据库密码文件的快捷方式

### 数据库账号和管理

不同的数据库有一定的差异，参考下表：

| 名称                    | 用户名     | 可视化管理地址           |
| ----------------------- | ---------- | ------------------------ |
| MySQL/Mariadb PHP环境中 | root       | http://公网IP/phpmyadmin |
| MySQL/Mariadb 其他      | root       | http://公网IP:9090       |
| PostgreSQL              | postgres   | http://公网IP:9090       |
| Mongodb                 | adminmongo | http://公网IP:9091       |
| Oracle                  | system     | 暂无                     |
| SQLServer               | sa         | 使用客户端管理           |



## 操作系统

AWS在创建EC2的时候，只能选择采用秘钥对作为验证方式

![秘钥对设置](http://libs-websoft9-com.oss-cn-qingdao.aliyuncs.com/Websoft9/DocsPicture/en/aws/aws-ec2createpw-2-websoft9.png)

另外，针对于不同的操作系统（甚至发行版）其用户名是不一样的：

### Linux

- 对于 Amazon Linux 2 或 Amazon Linux AMI，用户名称是 ec2-user。
- 对于 CentOS AMI，用户名称是 centos。
- 对于 Debian AMI，用户名称是 admin 或 root。
- 对于 Fedora AMI，用户名为 ec2-user 或 fedora。
- 对于 RHEL AMI，用户名称是 ec2-user 或 root。
- 对于 SUSE AMI，用户名称是 ec2-user 或 root。
- 对于 Ubuntu AMI，用户名称是 ubuntu。

如果 ec2-user 和 root 无法使用，请与 AMI 供应商核实。

以上信息来源于 AWS官方说明，了解[详情](https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/connection-prereqs.html)。

### Windows

用户名是 `Administrator`