import { Component } from '@angular/core';
import { HeroService } from './heroes/hero.service';
import { Hero } from './hero';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  title = 'Angular9Project';


  msg: string;
  constructor(hero:HeroService)
  {
    this.msg=hero.getmsg();
  }

  
 imageSrc = '';
 messageText = '';
 imageButtons = [ {src:'/assets/image/1.jpg', name: 'image-1'}, 
 {src:'/assets/image/3.JPG', name: 'image-2'}, 
 {src:'/assets/image/2.JPG', name: 'image-3'}]
 /*
 constructor() { }
 ngOnInit() { }
 onClick(imageNameObject) 
 {
   this.imageSrc = imageNameObject.src;
   this.messageText = imageNameObject.name;
 }

*/
animal={
  name:'image',
  image:'/assets/image/n.jpg'
}
onSave(){
  console.log("save button clicked!");
}
onSave1($event){
  console.log("save button is clicked!", $event);
}
onPressEnter($event){
  if($event.keyCode==13){
    console.log("enter text:",$event.target.value);
  }
}

}

