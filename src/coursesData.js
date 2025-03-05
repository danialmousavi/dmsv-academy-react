// let CourseData = [
//     {
//         id: 1,
//         title: 'React js',
//         img: 'https://sabzlearn.ir/wp-content/uploads/2024/01/REACTjs.webp',
//         body: 'learning react is essential for every front end developer',
//         desc: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded. However, fetching data is only the beginning of what happens on a web page, which is why complex React applications usually require the use of additional libraries for state management, routing, and interaction with an API. React allows developers to create large web applications that can update and render efficiently in response to data changes. The main goal of React is to be fast, scalable, and simple. It works only on user interfaces in the application, which corresponds to the view in the MVC template. It can be used with a combination of other JavaScript libraries or frameworks, such as Angular JS in MVC.',
//         price: 2000,
//         progress: 75,
//         type: 'Frontend',
//         support: 'Email',
//         prerequisite: 'Yes',
//         level: 'Intermediate',
//         satisfaction: 4.5,
//         students: 1200,
//         baseurl:'/courses'
//     },
//     {
//         id: 2,
//         title: 'Python',
//         img: 'https://sabzlearn.ir/wp-content/uploads/2023/12/ezgif.com-jpg-to-webp-converted-6-1-768x432.webp',
//         body: 'Python is a programming language that lets you work quickly and integrate systems more effectively',
//         desc: 'Python is an interpreted, high-level and general-purpose programming language. Python\'s design philosophy emphasizes code readability with its notable use of significant indentation. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects. Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly, procedural), object-oriented, and functional programming. Python is often described as a "batteries included" language due to its comprehensive standard library. Python was created in the late 1980s as a successor to the ABC language. Python 2.0, released in 2000, introduced features like list comprehensions and a garbage collection system capable of collecting reference cycles. Python 3.0, released in 2008, was a major revision of the language that is not completely backward-compatible, and much Python 2 code does not run unmodified on Python 3.',
//         price: 2500,
//         progress: 60,
//         type: 'Backend',
//         support: 'Chat',
//         prerequisite: 'No',
//         level: 'Beginner',
//         satisfaction: 4.7,
//         students: 1500,
//         baseurl:'/courses'
//     },
//     {
//         id: 3,
//         title: 'PHP',
//         img: 'https://sabzlearn.ir/wp-content/uploads/2024/10/php-ex-768x432.webp',
//         body: 'PHP is a popular general-purpose scripting language that is especially suited to web development.',
//         desc: 'PHP is a popular general-purpose scripting language that is especially suited to web development. Fast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world. PHP code is usually processed on a web server by a PHP interpreter implemented as a module, a daemon, or as a Common Gateway Interface (CGI) executable. On a web server, the result of the interpreted and executed PHP code – which may be any type of data, such as generated HTML or binary image data – would form the whole or part of an HTTP response. Various web template systems, web content management systems, and web frameworks exist which can be employed to orchestrate or facilitate the generation of that response. Additionally, PHP can be used for many programming tasks outside of the web context, such as standalone graphical applications and robotic drone control. PHP code can also be directly executed from the command line.',
//         price: 3000,
//         progress: 80,
//         type: 'Backend',
//         support: 'Email',
//         prerequisite: 'Yes',
//         level: 'Intermediate',
//         satisfaction: 4.3,
//         students: 900,
//         baseurl:'/courses'
//     },
//     {
//         id: 4,
//         title: 'GitHub',
//         img: 'https://sabzlearn.ir/wp-content/uploads/2023/12/ezgif.com-jpg-to-webp-converted-25-1-768x432.webp',
//         body: 'GitHub is a code hosting platform for version control and collaboration.',
//         desc: 'GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere. GitHub provides a Web-based graphical interface. It also provides access control and several collaboration features, such as bug tracking, feature requests, task management, and wikis for every project. GitHub offers plans for both private repositories and free accounts which are commonly used to host open-source software projects. As of January 2019, GitHub offers unlimited private repositories to all plans, including free accounts. As of April 2020, GitHub reports having over 40 million users and more than 190 million repositories (including at least 28 million public repositories), making it the largest host of source code in the world. GitHub is commonly used to host open-source projects. As of 2017, GitHub was estimated to be used by 87% of developers worldwide.',
//         price: 2000,
//         progress: 50,
//         type: 'Version Control',
//         support: 'Forum',
//         prerequisite: 'No',
//         level: 'Beginner',
//         satisfaction: 4.8,
//         students: 2000,
//         baseurl:'/courses'
//     },
//     {
//         id: 5,
//         title: 'Redis',
//         img: 'https://sabzlearn.ir/wp-content/uploads/2024/06/IMAGE-1403-03-22-16-52-10-1-768x432.webp',
//         body: 'Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache, and message broker.',
//         desc: 'Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache, and message broker. It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, geospatial indexes with radius queries and streams. Redis has built-in replication, Lua scripting, LRU eviction, transactions and different levels of on-disk persistence, and provides high availability via Redis Sentinel and automatic partitioning with Redis Cluster. Redis is written in ANSI C and works in most POSIX systems like Linux, *BSD, and OS X without external dependencies. Redis is a single-threaded, event-driven server. It is designed to be fast, with an in-memory dataset that can be persisted on disk. Redis is often used as a cache to speed up applications by storing frequently accessed data in memory, reducing the need to query a slower database.',
//         price: 3000,
//         progress: 70,
//         type: 'Database',
//         support: 'Email',
//         prerequisite: 'Yes',
//         level: 'Advanced',
//         satisfaction: 4.6,
//         students: 1100,
//         baseurl:'/courses'
//     },
//     {
//         id: 6,
//         title: 'Three.js',
//         img: 'https://sabzlearn.ir/wp-content/uploads/2024/11/Three_1-1-768x432.webp',
//         body: 'Three.js is a cross-browser JavaScript library and application programming interface',
//         desc: 'Three.js is a cross-browser JavaScript library and application programming interface used to create and display animated 3D computer graphics in a web browser. Three.js uses WebGL. The library\'s code is hosted in a repository on GitHub. Three.js allows the creation of GPU-accelerated 3D animations using the JavaScript language as part of a website without relying on proprietary browser plugins. This is possible thanks to the advent of WebGL. Three.js provides the ability to create scenes, cameras, and renderers, and to add objects, lights, and materials to the scene. It also includes features for creating and manipulating geometry, textures, and shaders. Three.js is widely used in the web development community for creating interactive 3D graphics, games, and data visualizations. It is known for its ease of use and flexibility, making it a popular choice for developers looking to add 3D graphics to their web projects.',
//         price: 4000,
//         progress: 65,
//         type: '3D Graphics',
//         support: 'Forum',
//         prerequisite: 'No',
//         level: 'Intermediate',
//         satisfaction: 4.4,
//         students: 800,
//         baseurl:'/courses'
//     },
//     {
//         id: 7,
//         title: 'Fastify',
//         img: 'https://sabzlearn.ir/wp-content/uploads/2024/04/IMAGE-1403-02-20-17_14_44_11zon-768x432.webp',
//         body: 'Fastify is a web framework highly focused on providing the best developer experience with the least overhead and a powerful plugin architecture.',
//         desc: 'Fastify is a web framework highly focused on providing the best developer experience with the least overhead and a powerful plugin architecture. It is inspired by Hapi and Express and as far as we know, it is one of the fastest web frameworks in town. Fastify is designed to be as fast as possible, with a low overhead and a powerful plugin architecture that allows developers to extend its functionality easily. It supports both HTTP and HTTP/2 protocols and provides a rich set of features, including schema-based validation, logging, and error handling. Fastify is built with a focus on performance and developer experience, making it a great choice for building high-performance web applications and APIs. It is also highly extensible, with a wide range of plugins available to add additional functionality. Fastify is used by many companies and developers around the world to build fast, scalable, and reliable web applications.',
//         price: 4500,
//         progress: 85,
//         type: 'Backend',
//         support: 'Chat',
//         prerequisite: 'Yes',
//         level: 'Advanced',
//         satisfaction: 4.9,
//         students: 1300,
//         baseurl:'/courses'
//     },
//     {
//         id: 8,
//         title: 'Build Game with JS',
//         img: 'https://sabzlearn.ir/wp-content/uploads/2024/11/game-js-1-768x432.webp',
//         body: 'JavaScript is the most popular language to build games in the browser.',
//         desc: 'JavaScript is the most popular language to build games in the browser. It is a powerful language that is easy to learn and fun to work with. It is also a very flexible language that can be used to build all kinds of games. JavaScript is widely supported by all modern web browsers, making it an ideal choice for building games that can be played on any device with a web browser. There are many libraries and frameworks available for building games with JavaScript, such as Phaser, Three.js, and Babylon.js. These libraries provide a wide range of features and tools to help developers create high-quality games quickly and easily. JavaScript is also used in combination with HTML5 and CSS3 to create rich, interactive game experiences. With the advent of WebGL, JavaScript can now be used to create 3D games that run directly in the browser, without the need for plugins. JavaScript is a versatile language that is well-suited for game development, and its popularity continues to grow.',
//         price: 5000,
//         progress: 90,
//         type: 'Game Development',
//         support: 'Forum',
//         prerequisite: 'No',
//         level: 'Advanced',
//         satisfaction: 4.7,
//         students: 1400,
//         baseurl:'/courses'
//     },
//     {
//         id: 9,
//         title: 'Tailwind',
//         img: 'https://sabzlearn.ir/wp-content/uploads/2023/12/ezgif.com-jpg-to-webp-converted-30-1-768x432.webp',
//         body: 'Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.',
//         desc: 'Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override. It is a utility-first CSS framework that is easy to learn and fun to work with. Tailwind CSS provides a set of utility classes that can be composed to build any design, directly in your markup. This approach allows for rapid development and iteration, as you can see the results of your changes immediately. Tailwind CSS is highly customizable, with a configuration file that allows you to define your own design system, including colors, spacing, typography, and more. It also includes a set of responsive design utilities, making it easy to build responsive layouts. Tailwind CSS is designed to be highly performant, with a small file size and minimal runtime overhead. It is used by many developers and companies to build modern, responsive web applications and websites.',
//         price: 5500,
//         progress: 95,
//         type: 'CSS Framework',
//         support: 'Chat',
//         prerequisite: 'No',
//         level: 'Intermediate',
//         satisfaction: 4.6,
//         students: 1600,
//         baseurl:'/courses'
//     }
// ]

// export default CourseData;
// const fetchCourseData = async () => {
//     const response = await fetch('https://academy-d62cf-default-rtdb.firebaseio.com/CourseData.json');
//     const data = await response.json();
//     console.log(data);  
//     return data;
// };

// const CourseData = await fetchCourseData();

// export default CourseData;