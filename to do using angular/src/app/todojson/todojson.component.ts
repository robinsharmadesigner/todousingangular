import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todojson',
  templateUrl: './todojson.component.html',
  styleUrls: ['./todojson.component.scss']
})
export class TodojsonComponent implements OnInit {

  jsondata$: Object;
  todocards$: Array<any>=[];


  constructor(private data: DataService) { }
  ngOnInit() {
    this.data.getData().subscribe(
      data => this.jsondata$ = data 
    );

    this.data.newtodo.subscribe(
      data => this.todocards$.push(data)
    )

  }

  addTask(event){
    
    let task = {
      id:0,
      title:""
    }

    for (let todo of this.todocards$){
      
      if(todo.id == event.target.parentElement.id){
        //  alert(event.target.parentElement);
        let todotask = event.target.parentElement.getElementsByClassName("taskin");
        let taskvalue=todotask[0].value;
        // alert(todotask);
        if(taskvalue==""){
          alert("Please add a task");
        }
        else{
        task.title = taskvalue;
        task.id = ++todo.todoid;
        todo.list.push(task);
      }
      }
    }

    //resetting text inputs
    event.target.parentElement.children[1].value = "";
  }

  removeTitle(event){
    for( let card of this.todocards$){
      if(card.id == event.target.parentElement.id){
        event.target.parentElement.style.display = "none";
      }
    }
  }

  removeTask(event){
    for(let card of this.todocards$){
      if(card.id == event.target.parentElement.parentElement.parentElement.id){
        for( let each of card.list){
          if(each.id == event.target.parentElement.id){
            event.target.parentElement.style.display = "none";
          }
        }
      }
    }
  }

  strike(event){
    for(let card of this.todocards$){
      if(card.id == event.target.parentElement.parentElement.id){
        for( let each of card.list){
          if(each.id == event.target.id){
            
            // event.target.style.textDecoration = "line-through";
            event.target.classList.toggle("checked");
          }
        }
      }
    }

  }

  

}
