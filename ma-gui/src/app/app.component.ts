import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Match Up';

  marginValue = 0;
  listOfUsers = [{'name': 'Maria Augusta', 'age': 26, 'userImgURL': 'https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg'},
  {'name': 'Laura Piett', 'age': 15, 'userImgURL': 'https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg'},
  {'name': 'Joana Augusta', 'age': 26, 'userImgURL': 'https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg'},
  {'name': 'Maria Oliveira', 'age': 22, 'userImgURL': 'https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg'},
  {'name': 'Paula Brandão', 'age': 21, 'userImgURL': 'https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg'},
  {'name': 'Maria Leila', 'age': 24, 'userImgURL': 'https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg'}
  ]
  rightSlide(){
    // if(this.marginValue>=250)
      this.marginValue-=250;
  }
  leftSlide(){
    if(this.marginValue<=-250)
     this.marginValue+=250;
  }
}
