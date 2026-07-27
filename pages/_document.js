// pages/_document.js

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="The First Quran Given to Elijah Muhammad - Scholarly Digital Edition" />
        <meta property="og:title" content="Elijah's Foundation - The First Quran" />
        <meta property="og:description" content="Study the manuscript that established Islam among Black people in North America" />
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
