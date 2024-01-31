// Backend Implementation in Express.js
// Referrer-Policy
// This policy controls the referrer information sent to other domains, protecting sensitive data in the URL.

<>这里设置的值是 "origin-when-cross-origin"，它表示在同一站点的导航中会发送完整的 Referer 头，而在跨站点导航时只会发送来源的信息而不包括路径和参数。</>
{/* <> 通过这样的设置，可以有助于保护用户的隐私，限制敏感信息在不同网站之间的传递 </> */}
app.use((req, res, next) => {
    res.setHeader("Referrer-Policy", "origin-when-cross-origin");
    next();
  });


//   Frontend Implementation(实现) in React.js/Next.js
// React with react-helmet
// 和上面的 作用类似 
{/* <Helmet> 是 React Helmet 库提供的组件，它允许在 React 应用中动态更改页面头部信息。
    在这个例子中，通过 <meta name="referrer" content="origin-when-cross-origin" /> 的设置，
    将 Referrer-Policy 设置为 "origin-when-cross-origin" */}
<Helmet>
  <meta name="referrer" content="origin-when-cross-origin" />
</Helmet>

// Next.js in _document.js
<Head>
  <meta name="referrer" content="origin-when-cross-origin" />
</Head>
