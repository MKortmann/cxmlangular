import { Component, OnInit } from '@angular/core';

import { Parser } from 'cxml';

import { document as Document, PlantType,  specimenType  } from '../../../../xmlns/www.de.sick/plantManifest/XMLSchema';

import { demo } from '../../../../files/plant';

@Component({
  selector: 'app-cxml',
  templateUrl: './cxml.component.html',
  styleUrls: ['./cxml.component.scss']
})
export class CxmlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const parser = new Parser();

    debugger
    const result = parser.parse(demo, Document);

    debugger
    console.log(result);


  }

}
