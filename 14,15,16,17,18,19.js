//Q 14
// class Emp1{
//     name:string;
//     id:number;
//     salary:number;
//     address:string;
//     static Department:string;
//     constructor(name:string,id:number,salary:number,address:string){
//         this.name=name;
//         this.id=id;
//         this.salary=salary;
//         this.address=address;
//     }
//     display():void{
//         console.log(this.name+" "+this.id+" "+this.salary+" "+this.address)
//     }
//     static display(){
//         console.log(Emp1.Department)
//     }
//     }
//     const e= new Emp1("Ithachi",1,200000,"Leaf Village");
//     e.display();

// Q15
// class Emp{
//     name:string;
//     id:number;
//     salary:number;
//     address:string;
//     static department:string="Hokage";
//     constructor(name:string,id:number,salary:number,address:string){
//         this.name=name;
//         this.id=id;
//         this.salary=salary;
//         this.address=address;
       
//     }
//     display():void{
//         console.log(this.name+" "+this.id+" "+this.salary+" "+this.address)
//     }
//     static display1(){
//         console.log(Emp.department)
//     }
//     }
//     const e= new Emp("GARA",1,500000,"Sand Village");
//     e.display();
//     Emp.display1();

//Q17
// abstract class Student{
//     abstract meth():void;
// }

// class Principal extends Student{
//     meth ():void{
//         console.log("Gulzar Atangwadi hai")
//     }
// }
// const i=new Principal();
// i.meth();

//Q18
// interface Test{
//      meth1():void;
// }
// class Example implements Test{
//     meth1():void{
//         console.log("Gulzar ko jannat nashib ho")
//     }
// }
// const f =new Example();
// f.meth1();

// //Q 19
// function meth<T>(a:T):T{
//     return a;
// }
// const s = meth<number>(1000);
// console.log(s);

// const s1 =meth<string>("work hard in silent let the success make the noice in public");
// console.log(s1);