import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentArr:any[] = [];
  studentId:number=0;
  student: any ={
    fullName: '',
    email: '',
    mobile:'',
    address:'',
  };
  isSelectAll:boolean = false;
  constructor() { }

  ngOnInit(): void {
    const localData = localStorage.getItem('studentList');
    if(localData!=null)
    {
      this.studentArr=JSON.parse(localData);
    }
  }
  // onCheckAll()
  // {
  //   for(let i=0;i<this.studentArr.length;i++)
  //   {
  //     this.studentArr[i].isChecked = this.isSelectAll;
  //   }
  // }
  onAddStudent(){
    const notNull=document.getElementById('studentModel');
    if(notNull!=null)
    {
      notNull.style.display='block';
    }
    this.student ={
      studentId : 0,
      fullName: '',
      email: '',
      mobile:'',
      address:'',
    };
  }

    onCloseModal (){
    const notNull=document.getElementById('studentModel');
    if(notNull!=null)
    {
      notNull.style.display='none';
    }
  }
  onDelete(id:number)
  {
    for (let i = 0 ; i < this.studentArr.length;i++){
      // debugger
      if(this.studentArr[i].studentId == id){
        this.studentArr.splice(i,1);
      }
    }
    localStorage.setItem('studentList',JSON.stringify(this.studentArr));
  }
  onEdit(stud:any)
  {
    // debugger
    this.onAddStudent();
    this.student=stud;
  }

  saveStudent(data:any)
  {
    debugger
    this.student.studentId=this.studentArr.length+1;
    this.studentArr.push(this.student);
    this.onCloseModal();
    localStorage.setItem('studentList',JSON.stringify(this.studentArr))
    this.student ={
      studentId : 0,
      fullName: '',
      email: '',
      mobile:'',
      address:'',
    };



  }
  onUpdate()
  {
      const record= this.studentArr.find(m => m.studentId == this.student.studentId);
      record.fullName=this.student.fullName;
      localStorage.setItem('studentList',JSON.stringify(this.studentArr))
      this.onCloseModal();
    }

}
