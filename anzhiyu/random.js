var posts=["2023/11/02/hello-world/","2022/08/14/我的第一篇博客/","2023/11/02/Java 学习路线/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};