    // My Basic Varibles and declare my varible
    var myName = document.getElementById('nameP');
    var mySurname = document.getElementById('surNameK')
    var myEmail = document.getElementById('emailG')
    var myPassword = document.getElementById('passwordF')
    var 

    var leaerner = {
        firstName : "",
        lastName : "",
        myEmail : "",
        myPass : ""
    }

    var leaerners = [];

    function addLearner() {
        if (myName && mySurname && myEmail && myPassword) {
            // place leaner obect here
            learner = {
                firstName: nameP.value,
                lastName: surNameK.value,
                myEmail: emailG.value,
                myPass: passwordF.value
            }

        // reset section clear my form
        firstName.value = "";
        lastName.value = "";
        myEmail.value = "";
        myPass.value = "";

        learners.push(learners);
        };     
    }

    function storeLearners(){
        if (learners.lenght) {
            localStorage.setItem('learners', JSON .stringify(leaerners));
        }
        else{
            alert("There are no Student to in my Data");
        }
    }


    var learn = JSON.parse(localStorage.getItem('learner'));

console.log('addLearner')
    addLearner()  