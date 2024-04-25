//Question 1
class Car{
    constructor(make,model,Year,isAvailabe){
        this.make = make;
        this.model = model;
        this.year = Year;
        this.isAvailabe = isAvailabe
    }
    toogleAvailability(){
        this.isAvailabe = !this.isAvailabe;
    }
}



class Rent{
    constructor(car,reterName,rentalStartDate,rentalEndDate){
        this.car = car;
        this.reterName = reterName;
        this.rentalStartDate = rentalStartDate;
        this.rentalEndDate = rentalEndDate;
    }
    calculateRentalTime(){
        const Time = this.rentalEndDate - this.rentalStartDate;

    }
}
const car = new Car("Toyota","Camry",2020,true)
const rent = newRent("BMW","Debs",newDate("2023-4-24"), newDate("2024-4-30"))

class Question {
constructor(text,option,answer){
    this.text = text;
    this.option = option;
    this.answer = answer;
}
checkAnswer(useAnswe){
    return useAnswe === this.correctAnswer;
}
}

class Quiz{
    constructor(){
        this.question = []
        this.currentquestionIndex = 0;
        this.score = 0;
        }
        addquestion(question){
            this.question.push(question);
        }
      Question(){
        this.currentquestionIndex++;


        }
     Answer(useAnswe){
        const currentQuestion = this.question[this.currentquestionIndex];
        if(currentQuestion.checkAnswer(useAnswe)){
            this.score++;

        }
        this.Question();

        }
}




