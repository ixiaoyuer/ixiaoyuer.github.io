var posts=["2023/02/14/ChatGPT教程/","2023/01/28/Docker学习/","2023/01/15/Git工具常用命令/","2022/11/11/Java项目常用工具类/","2023/02/02/IDEA好用插件/","2023/01/07/Linux操作系统学习/","2023/01/01/常用的一些外挂标签/","2022/08/14/我的第一篇博客/","2023/02/08/Vue2的学习笔记/","2022/12/12/springboot项目依赖/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};