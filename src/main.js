import component from './decorators'
import Service from './service';

var service = new Service();

var data = service.getData("data/tasks.json");

@component
export class Component {

  // template
  static template = `
    <div>
      <input v-model="msg">
      <p>msg: {{msg}}</p>
      <p>computed msg: {{computedMsg}}</p>
      <button v-on="click:greet">Greet</button>
    </div>
  `

  // data
  msg = 'hello'

  // computed
  get computedMsg() {
    return 'computed ' + this.msg
  }

  // method
  greet() {
    //alert('greeting: ' + this.msg)
  }

  // lifecycle hook
  ready() {
    this.greet()
  }
}

// mount
new Component({
  el: '#el'
})
