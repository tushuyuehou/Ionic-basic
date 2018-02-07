
### Ionic 简介
#### WEBAPP = WEB（基本的前端技术） + APP（移动端应用程序）
#### 移动端应用程序的开发技术：
- Native 原生开发
    - Android：Java/Kotlin
    - iOS: Objective C/Swift
    - Others: 0.02%
- WEB 应用：基本的前端技术，浏览器访问
- React Native：Facebook
- Ionic 离子
#### Ionic 官网

> Build amazing apps in one codebase, for any platform, with the web.

> 一次编写，到处运行

#### Ionic 使用的技术
- HTML
- CSS（SCSS）
- JavaScript
- Angular
- Cordova
#### 开源，免费：FOSS = Free OpenSource Software
#### 样式风格贴近于原生应用
#### 社区活跃
#### CLI 强大
#### 创建一个 Ionic 的 Hello World 程序
#### 执行命令行命令：
- 命令的作用
- 命令的位置
- 命令的输出
- 命令的结果
#### 基于 Node.js 安装 Ionic：npm install -g ionic
#### 安装 Cordova：npm install -g cordova
	官网：https://cordova.apache.org
#### 解压缩 node_modules.zip
- 把 ionic 和 cordova 目录放到 node 的全局模块目录下
- `C:\Users\web-01\AppData\Roaming\npm\node_modules`
- **其中 AppData 是隐藏目录**
- 查看版本
    - ionic -v 3.19.1
    - cordova -v 8.0.0
#### 在 Webstorm 中创建一个项目 ionic-1709N
#### Github客户端
    - Android：octoDroid.apk
    - iOS:codePan
#### 在项目根目录 app 下执行 Ionic CLI 命令 `ionic start app blank`
- 目录下，按 Shift + 鼠标右键 - 打开命令行
- Webstorm: Alt + F12 打开命令行
- 命令的作用：使用 blank 空项目模板创建一个 ionic 的项目，名字为 app
- 创建完成后，Ctrl + C 终止后续操作
- 在 app 下执行命令：npm install，根据 package.json 配置文件自动下载项目（开发）依赖
#### 无网络：解压缩 app-blank.zip 为 app 目录，放到项目目录下 ionic-1709N/app
#### 运行 app 项目：app 下执行命令: `ionic serve -l`
#### ionic -v 提示错误：
    
> 'ionic' 不是内部或外部命令，也不是可运行的程序或批处理文件。
    
- 解决：解压缩 npm.zip，把 ionic 和 ionic.cmd 两个文件放到
  `C:\Users\web-01\AppData\Roaming\npm\` 目录下
#### Ionic DevApp.apk 保证手机和电脑在同一个无线网下，看到项目在手机中的实际效果（准确的）
#### 运行后，项目的改变会实时更新（不稳定，关闭之前的服务：Ctrl + C，再次启动ionic serve -l）

### Ionic 基本组件
#### button
- 基本按钮
- 外边框按钮
- 无边框按钮
- 圆角按钮
- 圆角块级按钮
- 非圆角块级按钮
#### Ionic 创建页面
	在 Ionic-1709N/app 下执行命令
	ionic generate page button
#### Ionic 页面跳转
- 修改文件 src/app/app.module.ts
    - 引入新创建的页面文件
    -      import {ButtonPage} from '../pages/button/button';
    - 在 declarations 数组中，添加 ButtonPage
    - 在 entryComponents 数组中，添加 ButtonPage
- 修改 pages/home/home.ts 文件
    - 引入 ButtonPage
    -      import {ButtonPage} from '../button/button';
    - 在 HomePage 类中声明属性 buttonPage
    - 在 HomePage 类的构造器中初始化 buttonPage
					this.buttonPage = ButtonPage;
- 修改 pages/home/home.html 文件
    - 添加一个按钮 `<button ion-button>按钮示例</button>`
    - 为 button 添加属性 `[navPush]="buttonPage"`
#### List 组件
- 创建新页面 list: ionic g page list
- 从 HomePage 点击按钮跳向 ListPage
#### List
- 基本列表
- 按钮作为列表项
- 列表边距
- 无分隔线列表
- 列表分隔项
- 列表头部
- 图标列表项
