import { Component, OnInit } from '@angular/core';

import { Parser } from 'cxml';

import { document  } from '../../../../xmlns/www.de.sick/plantManifest/XMLSchema';

import { plant } from '../../../../files/plant';
// import { document  } from '../../../../xmlns/dir-example';
// import { example } from '../../../../files/example';

@Component({
  selector: 'app-cxml',
  templateUrl: './cxml.component.html',
  styleUrls: ['./cxml.component.scss']
})
export class CxmlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const parser = new Parser();

    
    const result = parser.parse(plant, document);

    // const parser = new Parser();

    // debugger
    // const result = parser.parse(example, document);

    debugger
    console.log(result);


  }

}
