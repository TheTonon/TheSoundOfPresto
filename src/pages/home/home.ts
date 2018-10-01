import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

      console.log('AMENO')

  }

    playStream(streamName):void {
        var audio : HTMLMediaElement = <HTMLAudioElement> document.getElementById(streamName)
        console.log(audio)
        console.log('slk')
        audio.play();
    }
}
