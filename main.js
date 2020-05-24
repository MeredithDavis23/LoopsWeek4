//1

const thousand = () => {
    let number = 0;

    do {
        number += 1;
        console.log(number)
    } while (number < 1000)
}

thousand();


//2
person = [
 {firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female" }
]

//3
for(let key in person) {
    if (key === "birthDate") {
      let birthDate = person[key];
      let search = /\d\d\d\d/g 
      let year = birthDate.match(search)
    if(year % 2 != 0) {
      console.log(person)
    } else {
        console.log("even")
    }
  }
}

//4
const arrayOfPersons = [
  {firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
  },
{
  firstName: "Don",
  lastName: "Hon",
  birthDate: "Nov 16, 1965",
  gender: "male"
},
{
  firstName: "Mandy",
  lastName: "Moore",
  birthDate: "Sep 17, 1960",
  gender: "female"
},
{
  firstName: "Roger",
  lastName: "Rabbit",
  birthDate: "Mar 18, 1776",
  gender: "male"
}]


//5
const newArray = arrayOfPersons.map(elem=> elem.firstName)
console.log(newArray)


//6
const genderMale = arrayOfPersons.filter(boy => boy.gender === "male");
console.log(genderMale)

//7
const filteredBirthDate = arrayOfPersons.filter((person) => {
  let birthYear = '';
  for (let i = person.birthDate.length - 4; i < person.birthDate.length; i++) {
    birthYear += person.birthDate[i];
  }
  if (Number(birthYear) < 1990) {
    console.log(person);
  }
})

const newArrayBirth = arrayOfPersons.map(elem=> elem.birthDate)
console.log(newArrayBirth)