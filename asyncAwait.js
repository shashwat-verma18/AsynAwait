console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async() => {
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() =>  resolve('ticket'), 3000);
    });

    const getPopcorn =  new Promise((resolve, reject) => resolve(`popcorn`));

    const getButter = new Promise((resolve, reject) => resolve(`butter`));

    let ticket = await promiseWifeBringingTicks;

    console.log('wife: i have the tickets');
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');

    let popcorn = await getPopcorn;

    console.log('husband: i got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');
    
    let butter = await getButter;


    return ticket;
}

preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person5: shows ticket'); 
console.log('person4: shows ticket');