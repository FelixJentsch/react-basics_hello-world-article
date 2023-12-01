import React from "react";
import "./styles.css";

export default function App() {
  return HelloWorldArticle();
}
function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World!</h1>
      <p>This is an article component containing a heading and a paragraph.</p>
      <p>
        You can add more content to this article, such as images, lists, or code
        snippets.
      </p>
      <img
        src="https://s3.amazonaws.com/colorslive/jpg_512x512/312008-8lOV-hXS7HdRYlhV.jpg"
        alt="Image"
      />

      {/* <pre>```javascript console.log(&quot;Hello, World!&quot;); ```</pre> */}
    </article>
  );
}
