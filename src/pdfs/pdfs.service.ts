import { Injectable } from '@nestjs/common';
import { join } from 'path';

const PdfkitConstruct = require('pdfkit-construct');
// Read HTML Template

var pdf = require("pdf-creator-node");
var fs = require("fs");


@Injectable()
export class PdfsService {
  async getPdf() {

    // Read HTML Template
    var html = fs.readFileSync("C:/Users/joser/Documents/price-maker_Project/create-pdf/src/pdfs/template.html", "utf8");

    var options = {
      format: "A3",
      orientation: "portrait",
      border: "10mm",
      header: {
        height: "45mm",
        //contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
        contents: '<img src="file:///Users/joser/Documents/price-maker_Project/create-pdf/src/pdfs/encabezado-portobello.jpg">'
      },
      footer: {
        height: "28mm",
        contents: {
          first: 'Cover page',
          2: 'Second page', // Any page number is working. 1-based index
          default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
          last: 'Last Page'
        }
      }
    };

    var users = [
      {
        name: "Shyam",
        age: "26",
      },
      {
        name: "Navjot",
        age: "26",
      },
      {
        name: "Vitthal",
        age: "26",
      },
    ];
    var document = {
      html: html,
      data: {
        users: users,
      },
      path: "./output.pdf",
      type: "",
    };

    pdf
      .create(document, options)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });

  }


}
