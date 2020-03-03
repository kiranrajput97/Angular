import { Pipe, PipeTransform, OnInit } from '@angular/core';

@Pipe({
    name: 'fileSize'
})

export class CustompipeComponent implements OnInit {

  private units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];

  transform(bytes: number = 0, precision: number = 2): string 
  {
      // tslint:disable-next-line:curly
      if (isNaN(parseFloat(String(bytes))) || !isFinite(bytes)) return '?';
      let unit = 0;
      while (bytes >= 1024) 
      {
          bytes /= 1024;
          unit++;
      }
      return bytes.toFixed(+precision) + ' ' + this.units[unit];
  }
  constructor() { }
  ngOnInit(): void {
  }

}
