const people = [{
    id: 1,
    firstName: "Loi",
    lastName: "Tran",
    age: 13,
    favoriteColors: ["red", "white", "blue"],
    favoriteSingers: ["Mariah Carey", "Justin Bieber", "Britney Spears"],
    nationality: "USA",
    gender: "m",
    zodiac: "Cancer",
    jobTitle: "Instructor",
    company: "CoderSchool",
    friendsCount: 5000,
    followers: 4000,
    height: "160mm",
    weight: "70kg"
  },
  {
    id: 2,
    firstName: "Quyen",
    lastName: "Thai",
    age: 23,
    favoriteColors: ["bronze", "white", "green"],
    favoriteSingers: ["Son Tung", "Minh", "Anh", "Taeyoung"],
    nationality: "VN",
    gender: "f",
    zodiac: "Taurus",
    jobTitle: "Student",
    company: "Grab",
    friendsCount: 1500,
    followers: 100,
    height: "160mm",
    weight: "50kg"
  },
  {
    id: 3,
    firstName: "Shawn",
    lastName: "Talvacchia",
    age: 32,
    favoriteColors: ["teal", "white", "torquise"],
    favoriteSingers: ["Romare", "Mount Kimbie", "Nicholas Jaar"],
    nationality: "USA",
    gender: "m",
    zodiac: "Cancer",
    jobTitle: "Student",
    company: "Facebook",
    friendsCount: 500,
    followers: 900,
    height: "180mm",
    weight: "70kg"
  },
  {
    id: 4,
    firstName: "Phuong",
    lastName: "Tran",
    age: 27,
    favoriteColors: ["blue", "pink", "green"],
    favoriteSingers: ["Chris Young", "Bruno Mars", "Taylor Swift"],
    nationality: "VN",
    gender: "f",
    zodiac: "Leo",
    jobTitle: "Student",
    company: "Google",
    friendsCount: 900,
    followers: 100,
    height: "155mm",
    weight: "65kg"
  },
  {
    id: 5,
    firstName: "Mai",
    lastName: "Hoang",
    age: 29,
    favoriteColors: ["red", "white", "black"],
    favoriteSingers: ["2pac", "Sia", "Johan Sebastian Von Bach"],
    nationality: "SE",
    gender: "f",
    zodiac: "Pisces",
    jobTitle: "Student",
    company: "Spotify",
    friendsCount: 1500,
    followers: 400,
    height: "140mm",
    weight: "87kg"
  },
  {
    id: 6,
    firstName: "Khuong",
    lastName: "Huynh",
    age: 18,
    favoriteColors: ["red", "green", "blue"],
    favoriteSingers: ["Adele", "Celine Dion", "Tuan Ngoc"],
    nationality: "vn",
    gender: "m",
    zodiac: "aries",
    jobTitle: "Student",
    company: "Amazon",
    friendsCount: 1505,
    followers: 10,
    height: "161mm",
    weight: "74kg"
  },
  {
    id: 7,
    firstName: "Thien",
    lastName: "Hoang",
    age: 28,
    favoriteColors: ["red", "white", "blue"],
    favoriteSingers: ["Adele", "Nat King Cole", "Westlife"],
    nationality: "VN",
    gender: "m",
    zodiac: "Aries",
    jobTitle: "Student",
    company: "Vingroup",
    friendsCount: 999,
    followers: 540,
    height: "148mm",
    weight: "54kg"
  },
  {
    id: 8,
    firstName: "Hang",
    lastName: "Tran",
    age: 29,
    favoriteColors: ["gray", "navy", "maroon"],
    favoriteSingers: ["Maroon5", "Linkin Park", "Eminem"],
    nationality: "vn",
    gender: "m",
    zodiac: "Sagittarius",
    jobTitle: "Student",
    company: "Go Viet",
    friendsCount: 500,
    followers: 300,
    height: "143mm",
    weight: "89kg"
  },
  {
    id: 9,
    firstName: "Parsa",
    lastName: "Taheri",
    age: 19,
    favoriteColors: ["Green", "Blue", "Yellow"],
    favoriteSingers: ["Shawn Mendes", "Lana Del Rey", "Eminem"],
    nationality: "UK",
    gender: "M",
    zodiac: "capricorn",
    jobTitle: "Student",
    company: "Vodafone",
    friendsCount: 2200,
    followers: 100,
    height: "173mm",
    weight: "62kg"
  },
  {
    id: 10,
    firstName: "Charles",
    lastName: "Lee",
    age: 26,
    favoriteColors: [
      "red",
      "white",
      "amber",
      "peach",
      "vanilla",
      "chocolate",
      "charcoal gray",
      "Big Apple Red",
      "Bubble Bath",
      "Kiss me on the Tulips"
    ],
    favoriteSingers: ["Kanye West"],
    nationality: "USA",
    gender: "m",
    zodiac: "Cancer",
    jobTitle: "Chief Executive Officer",
    company: "CoderSchool",
    friendsCount: 2121,
    followers: 212,
    height: "250mm",
    weight: "90kg"
  },
  {
    id: 10,
    firstName: "Phil",
    lastName: "Nguyen",
    age: 26,
    favoriteColors: ["red", "white", "blue"],
    favoriteSingers: ["Kanye West"],
    nationality: "USA",
    gender: "m",
    zodiac: "Cancer",
    jobTitle: "T.A.",
    company: "CoderSchool",
    friendsCount: 2121,
    followers: 212,
    height: "169mm",
    weight: "90kg"
  },
  {
    id: 11,
    firstName: "Duy Hung",
    lastName: "Nguyen",
    age: 13,
    favoriteColors: ["black", "yellow", "blue"],
    favoriteSingers: ["Bonnie Tyler"],
    nationality: "Vietnamese",
    gender: "m",
    zodiac: "Scorpio",
    jobTitle: "Student",
    company: "Company of Life",
    friendsCount: 500,
    followers: 300,
    height: "160mm",
    weight: "70kg"
  },
];

// ----------------------------------------------------------------------------------------------------------------------------------------
// -----> Examples
// ----------------------------------------------------------------------------------------------------------------------------------------
// 1. Define a function getAmericans() which takes the people array as an argument
// and returns an array of people who are Americans.
// It should look like this[{ firstName: 'Loi', ...}, { firstName: 'Charles', ...}]

const getAmericans = persons => {
  document.getElementById("getAmericans").innerHTML = persons
    .filter(({
      nationality
    }) => nationality === "USA")
    .map(person => person.firstName)
    .join(" ");
};

function onGetAmericans() {
  getAmericans(people);
}

// 2. Define a function getCoderSchoolStaff() which takes the people array as an argument
// and returns an array of people who work at 'CoderSchool'.
// We would want it to look something like this [{ firstName: 'Loi', ...}, { firstName: 'Charles', ...}]

const getCoderSchoolStaff = persons => {
  document.getElementById("getCoderSchoolStaff").innerHTML = persons
    .filter(person => person.company === "CoderSchool")
    .map(staff => `<li>${staff.firstName}</li>`)
    .join(" ");
};

function onGetCoderSchoolStaff() {
  getCoderSchoolStaff(people);
}

// 3. Define a function getMostPopularPerson() which takes the people array as an argument
// and returns an object. The object will have two keys. A person key will have the person as it's value.
// The total key will have the total of followers & friends of the most popular person. The person with the most followers & friends
// is the most popular.
// It should look like this { person: { firstName: 'Loi' }, total: 9000 }

const getMostPopularPerson = persons => {
  let mostPopulerInfo = {
    person: {},
    totalPopularity: 0
  };

  persons.map(person => {
    const totalPopularity = person.friendsCount + person.followers;
    if (totalPopularity > mostPopulerInfo.totalPopularity) {
      const newMostPopular = {
        totalPopularity,
        person
      };
      mostPopulerInfo = newMostPopular;
    }
  });
  document.getElementById("getMostPopularPerson").innerHTML = `${
    mostPopulerInfo.person.firstName
  } is the most popular with a score of ${mostPopulerInfo.totalPopularity}`;
};

function onGetMostPopularPerson() {
  getMostPopularPerson(people);
}

// ----------------------------------------------------------------------------------------------------------------------------------------
// -----> Assignment
// ----------------------------------------------------------------------------------------------------------------------------------------

// 4. Define a function findVietnamese() which will take the people array as an argument and
// return an array. The array will contain persons who have nationality as VN for Vietnamese.
// Make sure the function will account for 'VN' and 'vn'
// It should look like this [{}, {}, {}, ...]
function findVietnamese() {
  let result = people.filter((item) => item.nationality == 'vn' || item.nationality == "VN" || item.nationality == 'Vietnamese');
  document.getElementById('findVietnamese').innerHTML = result.map(staff => `<li>${staff.firstName}</li>`).join(" ");
}

// 5. Define a function countGenders() which will take the people array as an argument and
// return a string.
// It should look like this "There are 7 males and 3 males"
function countGenders() {
  let males = 0,
    females = 0,
    result;
  people.forEach(element => {
    if (element.gender == 'm' || element.gender == 'M') {
      males++;
    } else {
      females++;
    }
  });
  document.getElementById('countGenders').innerHTML = `There ${males} males and ${females} females.`
}

// 6. Define a function findTallest() which will take the people array as an argument and
// return an string.
// The string should look like "Charles was the tallest at 250mm"
function findTallest() {
  let result = people.sort((a, b) => (a.height > b.height) ? -1 : 1);
  document.getElementById('findTallest').innerHTML = `${result[0].firstName} was the tallest at ${result[0].height}`;
}

// 7. Define a function findAverageHeight() which will take the people array as an argument and
// return an string.
// The string should look like "The average height of our people is 168mm."
function findAverageHeight() {
  let result = people.reduce((sum, item) => sum += parseInt(item.height.replace('mm', '')), 0)
  document.getElementById('findAverageHeight').innerHTML = `The average height of our people is ${Math.floor(result/people.length)}mm.`;
}

// 8. Define a function findZodiacs() which will take the people array as an argument and
// return an string. The string should say the users were from these signs
// The string should look like "We have Cancers, Tauruss, ... among our people"
function findZodiacs() {
  let result = ['Cancer'];
  people.forEach(element => {
    let current = result.find((item) => item.toLowerCase() == element.zodiac.toLowerCase());
    if (!current) {
      result.push(element.zodiac);
    }
  });
  document.getElementById('findZodiacs').innerHTML = `We have ${result.map(item => item).join(', ')} among our people`;
}

// 9. Define a function findAverageAge() which will take the people array as an argument and
// return an string. The string will have the average age of the people
// The string should look like "The average age of the people is 21"
function findAverageAge() {
  let result = people.reduce((sum, item) => sum += item.age, 0)
  document.getElementById('findAverageAge').innerHTML = `The average age of the people is ${Math.floor(result/people.length)}.`;
}

// 10. Define a function findStudents() which will take the people array as an argument and
// return an array. The array will contain persons who have jobTitle listed as 'Student'.
// It should look like this [{}, {}, {}]
function findStudents() {
  let result = people.filter((item) => item.jobTitle.toLowerCase() == 'student');
  document.getElementById('findStudents').innerHTML = result.map(staff => `<li>${staff.firstName}</li>`).join(" ");
}

// 11. Define a function findNguyens() which will take the people array as an argument and
// return an array. The array will contain persons whose last names are Nguyen.
// It should look like this [{}, {}]
function findNguyens() {
  let result = people.filter((item) => item.lastName == 'Nguyen');
  document.getElementById('findNguyens').innerHTML = result.map(staff => `<li>${staff.firstName} ${staff.lastName}</li>`).join(" ");
}

// 12. Define a function findAdults() which will take the people array as an argument and
// return an array. The array will contain all people who's age is above 18 and above
// It should look like this [{}, {}, {}, ...]
function findAdults() {
  let result = people.filter((item) => item.age >= 18);
  document.getElementById('findAdults').innerHTML = result.map(staff => `<li>${staff.firstName} ${staff.lastName}</li>`).join(" ");
}

// 13. Define a function findFavoriteColors() which will take the people array as an argument and
// return an array. The array will contain UNIQUE colors collected from all persons.
// It should look like this ['red', 'black', 'pink', ...]
function findFavoriteColors() {
  let result = [];
  people.forEach(i => {
    i.favoriteColors.forEach(j => {
      let current = result.find((item) => item.toLowerCase() == j.toLowerCase());
      if (!current) {
        result.push(j);
      }
    })
  });
  document.getElementById('findFavoriteColors').innerHTML = `${result.map(item => item).join(', ')}`;
}

// 14. Define a function findJobTitles() which will take the people array as an argument and
// return an array. The array will contain UNIQUE jobTitles.
// It should look like this ['CEO', 'Instructor', 'Student']
function findJobTitles() {
  let result = [];
  people.forEach(element => {
    let current = result.find((item) => item.toLowerCase() == element.jobTitle.toLowerCase());
    if (!current) {
      result.push(element.jobTitle);
    }
  });
  document.getElementById('findJobTitles').innerHTML = `${result.map(item => item).join(', ')}`;
}

// 15. Define a function findBirthYears() which will take the people array as an argument and
// return an array. The array will contain all years which the people were born in.
// It should look like this ['1997', '1990', '1987', ...]
function findBirthYears() {
  let currentYear = new Date().getFullYear();
  document.getElementById('findBirthYears').innerHTML = people.map(staff => `<li>${staff.firstName} ${staff.lastName}: ${currentYear - staff.age}</li>`).join(" ");
}

// 16. Define a function sortOldToYoung() which will take the people array as an argument and
// return an array. The array will contain all persons sorted from oldest to youngest
// It should look like this [{}, {}, {}, ...]
function sortOldToYoung() {
  let result = people.sort((a, b) => b.age - a.age);
  document.getElementById('findBirthYears').innerHTML = result.map(staff => `<li>${staff.firstName} ${staff.lastName}: ${staff.age}</li>`).join(" ");
}

// 17. Define a function splitIntoMinorsAndAdults() which will take the people array as an argument and
// return three arrays. The first array will have two arrays within it.
// The two nested arrays will contain persons. The 0 index nested array will have minors and the 1 index will have adults.
// It should look like this [[{}, {}, {}, ...], [{}, {}, {}, ...]]
function splitIntoMinorsAndAdults() {
  let minors = [],
    adults = [];
  people.forEach(element => {
    if (element.age >= 18) {
      adults.push(element);
    } else {
      minors.push(element);
    }
  });
  document.getElementById('splitIntoMinorsAndAdults').innerHTML = `Minors: ${minors.map(staff => staff.firstName + ' ' + staff.lastName).join(', ')}\nAdults: ${adults.map(staff => staff.firstName + ' ' + staff.lastName).join(', ')}`;
}

// 18. Define a function addFavoriteHerosToPeople() which will take the people array as an argument and
// return an array. The array will contain all persons in the original array where each person has
// a new key(favoriteSuperHeros) with the value of an empty array [].
// It should look like this [{firstName: 'Loi', favoriteSuperHeros: [], ...}]
function addFavoriteHerosToPeople() {
  let hero = ['One-Above-All', 'Beyonder', 'Living Tribunal', 'Eternity', 'Franklin Richards', 'Phoenix Force', 'Cyttorak', 'Mikaboshi', 'Magus', 'Galactus', 'Grandmaster', 'Hercules'];
  people.forEach(element => {
    element.favoriteSuperHeros = [hero[Math.floor(Math.random() * hero.length)]];
  });
  document.getElementById('addFavoriteHerosToPeople').innerHTML = people.map(staff => `<li>${staff.firstName} ${staff.lastName}: ${staff.favoriteSuperHeros.map(hero => hero)}</li>`).join(" ");
}

// 19. Define a function addBirthPlacesToPeople() which will take the people array as an argument and
// return an array. The array will contain all the original persons in the array with an additional
// key(birthPlace) with the value of a new object {}.
// It should look like this [{firstName: 'Loi', birthPlace: {}, ...}]
function addBirthPlacesToPeople() {
  let city = ['Central', 'Metro City', 'Tonsberg', 'Nine Realms', 'Titan', 'Wakanda', 'Asgard', 'Vomir', 'Atlantis', 'Amazon']
  people.forEach(element => {
    element.birthPlace = {
      city: city[Math.floor(Math.random() * city.length)]
    }
  });
  document.getElementById('addBirthPlacesToPeople').innerHTML = people.map(staff => `<li>${staff.firstName} ${staff.lastName}: ${staff.birthPlace.city}</li>`).join(" ");
}

// 20. Define a function findMostFavoritedColor() which will take the people array as an argument and
// return an string. The string will be the color which has the most people that have it in their favoriteColors.
// In the event there are two colors with equal numbers. Return a string that says 'x and y were really popular!'
// It should look like this 'black' or 'black and red were really popular!'
function findMostFavoritedColor() {
  let result = [];
  people.forEach(i => {
    i.favoriteColors.forEach(j => {
      let current = result.find((item) => item.color.toLowerCase() == j.toLowerCase());
      if (!current) {
        result.push({color: j, choosed: 1});
      }
      else if(current) {
        result.forEach(element => {
          if(current.color.toLowerCase() == element.color.toLowerCase()) {
            element.choosed++;
          }
        });
      }
    })
  });
  let favorite = result.sort((a, b) => b.choosed - a.choosed);
  document.getElementById('findMostFavoritedColor').innerHTML = `${favorite[0].color}, ${favorite[1].color} and ${favorite[2].color} were really popular!`;
}

// ----------------------------------------------------------------------------------------------------------------------------------------
// -----> LOOKING AHEAD
// ----------------------------------------------------------------------------------------------------------------------------------------
// 1. This is how we could implement getAmericans() on one line. 'Descruturing' is important for how this function behaves.
// const getAmericans = persons =>
//   persons.filter(({ nationality }) => nationality === "USA");

// 2. Arguments/Parameters dictate how our function will behave. This is an example of how we could
// use an additional parameter and make our function more flexible.
const getNationality = (persons, soughtNationality) =>
  persons.filter(
    ({
      nationality: userNationality
    }) => soughtNationality === userNationality
  );