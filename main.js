//declaring a variable and assign it with empty array that will store our developer later
let developersArray = [];
//getting element in HTML by Id
let elDeveloperList = document.getElementById('developer-list');
let elDeveloperForm = document.getElementById('new-developer');

//create a constructor for our developer
let Developers = function(name, codingSchool, programmingLanguage){

    this.name = name;
    this.codingSchool = codingSchool;
    this.programmingLanguage = programmingLanguage;
    
    }
//create if statement for checking local storage if exist use data from local storage if not instantiating new object    
if(localStorage.storageDeveloperArray){
let getData = localStorage.getItem('storageDeveloperArray');
developersArray = JSON.parse(getData);
}else{
//instantiating new object 
let Mandana = new Developers('Mandana', 'DAI', 'javaScript');
let Allan = new Developers('Allan', 'MomtgomeryCollege', 'javaScript');
let Jack = new Developers('Jack' , 'MerylandUniversity', 'HTML-CSS');
//push new object to our developerArray
developersArray.push(Mandana, Allan, Jack);
}
console.log(developersArray);
//create for loop for making our developer list
for(let i =0; i<developersArray.length; i++){
let elDeveloper = document.createElement('li');
elDeveloperList.appendChild(elDeveloper);
elDeveloper.innerHTML = developersArray[i].name;
}
//defining a function and passing event parameter for creating variables to store the value for our form and assign them to the value.
function submitHandler(event){
    event.preventDefault();
    let developerName = elDeveloperForm.developer;
    let developerSchool = elDeveloperForm.developer1;
    let developerLanguage = elDeveloperForm.developer2;
    let newDeveloper = new Developers(developerName.value, developerSchool.value,developerLanguage.value);
    developersArray.push(newDeveloper);
    let elNewDeveloper = document.createElement('li');
    elDeveloperList.appendChild(elNewDeveloper);
    elNewDeveloper.innerHTML = developerName.value;

    
    //create localStorage for presisting our data
    localStorage.setItem('storageDeveloperArray',JSON.stringify(developersArray));

}
//add event listener to our form 
elDeveloperForm.addEventListener('submit', submitHandler);




