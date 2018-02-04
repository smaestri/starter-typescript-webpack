import { tt } from './toto';

interface Application{
  name: string;
}

class App implements Application {

  constructor(public name: string){
    tt();
  }

}
new App('toto');
