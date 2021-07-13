import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            
          <link rel="icon" href="" />
          <link
            rel="shortcut icon"
            href="/imagens/logoLeoflin1.png"
            type="image/png"
          />

         
          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
