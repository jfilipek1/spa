title = "dr";
name = "Mateusz";
surname = 'Kubicki';
street = 'Długa 15';
city = 'Kraków';
zip = '30-781';
country = 'Poland';

let c1 = title + " " + name + " " + surname + "\n" + street + "\n" + zip + " " + city + "\n" + country;
console.log(c1);

let c2 = `${title} ${name} ${surname} \n ${street} \n ${zip} ${city} \n ${country}`;
console.log(c2);

/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/
