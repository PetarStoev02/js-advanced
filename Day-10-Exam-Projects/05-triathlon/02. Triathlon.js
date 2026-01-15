
class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
      }

      


      addParticipant (participantName, participantGender){

        if(this.participants['key']!== undefined){

            return `${participantName} has already been added to the list`
        }else{
            this.participants.participantNam = participantGender

            return `A new participant has been added - ${participantName}`
        }

      }

      completeness (participantName, condition){


        if(this.participants['key']== undefined){

            throw `${participantName} is not in the current participants list`
        }

        if(condition < 30){
            throw `${participantName} is not well prepared and cannot finish any discipline`
        }
        
        if(condition/30<=2){
            return `${participantName} could only complete ${completedCount} of the disciplines`
        }else{
            this.listOfFinalists.push({ participantName, participantGender })
            return `Congratulations, ${participantName} finished the whole competition`
        }

      }

      rewarding (participantName){

        if(this.listOfFinalists.includes(participantName)){
            return `${participantName} was rewarded with a trophy for his performance`
        } else{
            return `${participantName} is not in the current finalists list`
        }
      }


      showRecord (criteria){

        if(this.listOfFinalists.length==0){
            return `There are no finalists in this competition`
        }

        if(this.listOfFinalists.includes(criteria)==false){
            return `There are no ${participantGender}'s that finished the competition`
        }else{
            `${participantName} is the first ${criteria} that finished the ${competitionName} triathlon`
        }

        if(criteria==="all"){
            return `List of all ${competitionName} finalists: \n ${participantName} `
        }

      }
    }

    