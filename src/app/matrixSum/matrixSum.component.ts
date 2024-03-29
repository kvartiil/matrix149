import { Component } from '@angular/core'; 
import { environment } from '../../environments/environments';
import { HostListener } from '@angular/core';


@Component({ // Add the @Component decorator.
  selector: 'matrix-sum', 
  templateUrl: './matrixSum.component.html',
  styleUrls: ['./matrixSum.component.css']
})


export class SumComponent { 

  muutujaX = 1;
  muutujaY = 1;

  numberx = 0;
  numberxxx = 0;
  numberxxxx =0;
  hinnangusumma = 0;
  hinnangusumma2: any;

  numberstr = 0;
  numbermks = 0;
  numberrnt = 0;
  numberefk = 0;
  numberln = 0;
  numberstring = '';
  lisa ='px';
  koondstring ='';
  ringiraadius = 0;

  constructor() { //Siin toob sisse
  this.numberstr = environment.modelStruktuur;
  this.numbermks = environment.modelMaksevoime;
  this.numberrnt = environment.modelRent;
  this.numberefk = environment.modelEfekt;
  this.numberln = environment.modelLaen;
  this.numberxxx = this.numberln+this.numberefk;
  this.numberxxxx = this.numberxxx *100;
  //this.numberstring = this.numberxxxx.toString();  
  //this.koondstring = this.numberstring + this.lisa;

  this.hinnangusumma = this.numberstr + this.numbermks + this.numberrnt + this.numberefk + this.numberln;
  this.hinnangusumma2 = Math.round(this.hinnangusumma*100)/100
  this.ringiraadius = (this.hinnangusumma2 * 20) + 100;
  this.numberstring = this.ringiraadius.toString();
  this.koondstring = this.numberstring + this.lisa;
  localStorage.setItem("elujoud", this.hinnangusumma2);
}

//hinnangusumma2 vahemikus 0-5

varv = '';
 
// this.numberxxx = this.numberln+this.numberefk;
 
hovered: boolean;
setMyStyles() {

  if (this.hinnangusumma2 >= 4.8) {
    //this.muutujaX = 100;
    this.varv = 'rgb(13, 231, 16)';
  }
  else if (this.hinnangusumma2 < 4.8 && this.hinnangusumma2 >= 4.3 ) {
    this.varv = 'rgb(25, 208, 28)';
  }
  else if (this.hinnangusumma2 < 4.3 && this.hinnangusumma2 >= 4 ) {
    this.varv = 'rgb(44, 184, 46)';
  }
  else if (this.hinnangusumma2 < 4 && this.hinnangusumma2 >= 3.8 ) {
    this.varv = 'rgb(112, 184, 44)';
  }
  else if (this.hinnangusumma2 < 3.8 && this.hinnangusumma2 >= 3.3 ) {
    this.varv = 'rgb(182, 210, 55)';
  }
  else if (this.hinnangusumma2 < 3.3 && this.hinnangusumma2 >= 3 ) {
    this.varv = 'rgb(199, 231, 55)';
  }
  else if (this.hinnangusumma2 < 3 && this.hinnangusumma2 >= 2.8 ) {
    this.varv = 'rgb(231, 212, 55)';
  }
  else if (this.hinnangusumma2 < 2.8 && this.hinnangusumma2 >= 2.3 ) {
    this.varv = 'rgb(231, 169, 55)';
  }
  else if (this.hinnangusumma2 < 2.3 && this.hinnangusumma2 >= 2 ) {
    this.varv = 'rgb(231, 135, 55)';
  }
  else if (this.hinnangusumma2 < 2 && this.hinnangusumma2 >= 1.8 ) {
    this.varv = 'rgb(131, 97, 55)';
  }
  else if (this.hinnangusumma2 < 1.8 && this.hinnangusumma2 >= 1.3 ) {
    this.varv = 'rgb(241, 71, 16)';
  }
  else if (this.hinnangusumma2 < 1.3) {
    this.varv = 'rgb(255, 49, 49)'
  }

  let styles = {
    //'margin-left:': '40px',
    'background-color': this.hovered ? 'rgb(20, 52, 164)' : this.varv,
    'font-weight': this.hovered ? 'bold' : 'normal',
    'border-radius': '50%',
    'width': this.koondstring,
    'height': this.koondstring,
    'transform': this.hovered?'perspective(1000px) translateZ(10px)':'perspective(1000px) translateZ(0px)'
    //'transform':this.hovered? ' perspective(30px) ' +'scale3d(2, 0.7, 0.2)' + 'translateZ(100px)':''
   
  };
  return styles;
}

@HostListener('mouseover')
  public onChange(): any {
    this.hovered = !this.hovered;
  }



  flagstr = 1;

  koond = '';
  sissemksv = 'Ettevõtte bilansi struktuur';
  jareldusmksv = ' on normaalset äritegevust võimaldav.';
  jareldusmksv2 = ' on väga nõrgapoolne.';
  jareldusmksv2a = ' Mõistlik oleks midagi ette võtta selleks, et bilanss näeks parem välja.'
  jareldusmksv3 = ' Samas on lootust, et äritegevuse paranedes muutub ka bilansi struktuur paremaks. Kunstlikke muudatusi ise esile kutsuda vaja ei ole.'
  jareldusmksv4 = ' Bilansi struktuuri vaates olulisi muudatusi vaja sisse viia ei ole, neid ei ole vaja esile kutsuda.'

  strFunction(muutujaX: number){
    this.koond = this.sissemksv+this.jareldusmksv;
    muutujaX = this.numberx; //võttis omaks, saab aru
    //this.flagstr = 2;

    if (muutujaX <= 0.3) {
      //this.muutujaX = 100;
      this.koond = this.sissemksv+this.jareldusmksv2+this.jareldusmksv2a;
      this.flagstr = 2;
    }
    else if (0.3 <= muutujaX && muutujaX <= 0.7) {
      this.koond = this.sissemksv+this.jareldusmksv2+this.jareldusmksv3;
      this.flagstr = 3;
    }
    else if (0.7 < muutujaX) {
      this.koond = this.sissemksv+this.jareldusmksv+this.jareldusmksv4;
      this.flagstr = 4;
    }

    return this.koond;
  }

  



}