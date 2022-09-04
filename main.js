// ⌚️ object


const user = {
name: 'ed',
nickname:'schell',
idade: 47,
address: {
street: 'rua text',
number: 234,
},
};

// desextruturação

//Rest operator



function mostraIdade({idade}) {
return idade;
}

//operador de resto

//const { name, idade, ...rest } = user;



const arrays = [1,2,3,4,5,6,7,8,9,10]

const[first, second, ...rest] = arrays;


document.body.innerText =JSON.stringify({first,second, rest})

