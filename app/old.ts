import { tt } from './toto1';

interface Application{
  name: string;
}

class App implements Application {

  constructor(public name: string){
   // alert(this.name);
    tt();
  }

}
new App('toto');
