class ToDo {
    constructor(id, name){
        this.id=id;
        this.name=name
    }
     create(){
        console.log(`The list <${this.name}> with id ${this.id} has been created successfully`)
    }
}

class Activity extends ToDo{
    constructor(id,name,created_on,schedule){
        super(id,name);
        this.created_on=created_on;
        this.schedule=schedule
    }
    getTime(){
        console.log(`   It has been created on ${this.created_on}`)
    }
    get displaySchedule(){
        return  this.schedule;
    }

    set displaySchedule(schedule){
        this.schedule = schedule;
    }
}


const newlist1= new Activity(1,'Shopping', '19/03/2019')
newlist1.create()
newlist1.getTime()
newlist1.displaySchedule="7:00 - 10:00"
console.log(`   The time schedule is ${newlist1.displaySchedule}`)

const newlist2= new Activity(2,'Andela bootcamp','19/03/2019');
newlist2.create()
newlist2.getTime()
newlist2.displaySchedule="04:00 - 05:00"
console.log(`   The time schedule is ${newlist2.displaySchedule}`)
