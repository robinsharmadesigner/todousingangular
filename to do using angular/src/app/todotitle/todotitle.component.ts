import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { DataService} from '../data.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-todotitle',
  templateUrl: './todotitle.component.html',
  styleUrls: ['./todotitle.component.scss']
})
export class TodotitleComponent implements OnInit, AfterViewChecked {
  // todo$: Object=null;
  todo$: any = null;
  public id=0;
  public todotitle = "";
  
  check:boolean = false;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getData().subscribe(
      data => this.todo$ = data
    )

  }

  ngAfterViewChecked(){
    if(this.todo$!== null && this.check==false){
      this.mergingLists();
      this.check = true;
    }
  }

  newtodocreate(event){
    if (this.todotitle==""){
      alert("Please add a title.")
      return;
    }
    this.id++;
    let todocard = {
      id:0,
      todoid:0,
      title:"",
      author:"",
      date:"",
      list:[]

    }

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();

    todocard.id=this.id;
    todocard.todoid = 0;
    todocard.title = this.todotitle;
    todocard.author = "Byte Me";
    todocard.date = day+"/"+month+"/"+year;
    
    this.data.addtodo(todocard);
    event.target.parentElement.firstChild.value="";
    this.todotitle="";

  }

  mergingLists(){
    for( let item of this.todo$){
      this.id++;
      let todocard = {
        id:0,
        todoid:0,
        title:"",
        author:"",
        date:"",
        list:[]
      }

      todocard.id = this.id;
      todocard.title=item.title;
      todocard.author = item.author;
      todocard.date = item.date;
      
      let count=0;
      for(let elem of item.todoitem){
        let task = {
          id:0,
          title:""
        }
        count++;
        task.id=count;
        task.title=elem;
        todocard.list.push(task);
      }

      todocard.todoid=count;
      this.data.addtodo(todocard);
    }
  }

}
