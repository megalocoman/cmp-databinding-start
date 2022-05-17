import { Component, ContentChild, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
  // None, Native, Emulated
})
export class ServerElementComponent implements OnInit  {


  @ViewChild('heading',{static:true}) header: ElementRef;
  @ContentChild('contentParagraph',{static:true}) paragraph : ElementRef;
  @Input('srvElement') element:{type: string, name: string, content: string};

  constructor() { }

  ngOnInit(): void {
    console.log('text content: '+this.header.nativeElement.textContent);
    console.log('text content of paragraph: '+this.paragraph.nativeElement.textContent);


  }

  ngAfterViewInit(){

    console.log('ngAfterViewInit called');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called');
    console.log('text content of paragraph: '+this.paragraph.nativeElement.textContent);
  }

}
