import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Motora-Calc</title>

          <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Questrial&display=swap" rel="stylesheet"/> 
            
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
