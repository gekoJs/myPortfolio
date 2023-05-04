export default function contactForm(name, email, message) {
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style type="text/css">
          @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body,
          h1,
          p {
            font-family: "Poppins", "Google sans";
            color: #804674;
          }
          body {
            padding: 12px;
          }
          h1 {
            font-size: 28px;
          }
          h2 {
            font-size: 18px;
            font-weight: 400;
            color: #1f1f1fde;
            margin: 12px 0;
          }
          p {
            font-size: 16px;
            color: #1f1f1fde;
          }
        </style>
      </head>
      <body>
        <div>
          <h1>${name}</h1>
          <h2>correo de usuario: ${email}</h2>
          <p>${message}</p>
        </div>
      </body>
    </html>`;
  }