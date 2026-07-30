// pages/_document.js

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A digital archive of an illuminated Surah Yāzdah manuscript, Lahore, early 20th century." />
        <meta property="og:title" content="Surah Yāzdah — A Digital Manuscript Archive" />
        <meta property="og:description" content="An illuminated manuscript of eleven surahs with Urdu interlinear translation. Open for community scholarship." />
        <meta property="og:type" content="website" />

        <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          :root {
            --primary: #8b7355;
            --gold: #d4a574;
            --dark: #1a1a1a;
            --light: #f5f5f5;
            --border: #e0e0e0;
            --success: #4caf50;
            --error: #f44336;
          }

          html, body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            color: var(--dark);
            background: white;
            line-height: 1.6;
          }

          a {
            color: var(--primary);
            text-decoration: none;
          }

          a:hover {
            text-decoration: underline;
          }

          button {
            font-family: inherit;
            cursor: pointer;
          }

          input, textarea, select {
            font-family: inherit;
          }

          img {
            max-width: 100%;
            height: auto;
          }
        `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
