// generates the markdown

function generateHtml(data) {
  let teamCards = "";
  for (let index = 0; index < data.length; index++) {
    const teamMember = data[index];

    teamCards = teamCards + teamMember.toString();
  }
  return `<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
      <title>Generic Creations</title>
  </head>
  <body>
      <header class="container-fluid p-5 bg-info text-center text-white"><h1>My Team</h1></header>
      <div class="row text-center d-flex align-items-center justify-content-center p-5">
          ${teamCards}
  </div>
      <div class="engineer"></div>
      <div class="intern"></div>
  </body>
  </html>`;
}

module.exports = generateHtml;
