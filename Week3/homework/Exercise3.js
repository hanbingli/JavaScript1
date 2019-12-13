'use strict'

function tellFortune(whatever){
    const numChildren = [0, 1, 2, 3, 4];
    const parternerNames = ['Amy', 'Sheldon', 'Penny', 'Lenard', 'Howard'];
    const locations = ['America', 'Europe', 'Asia', 'Australia, Africa'];
    const jobs = ['engineer', 'biologist', 'physicist', 'salesrep', 'astronaut'];

    let job_title = jobs[Math.floor(Math.random() * jobs.length)];
    let where_about = locations[Math.floor(Math.random() * locations.length)];
    let partner_name = parternerNames[Math.floor(Math.random() * parternerNames.length)];
    let number_kid = numChildren[Math.floor(Math.random() * numChildren.length)];
  


    return `You will be a ${job_title} in ${where_about}, and married to ${partner_name} with ${number_kid} kids.`

}

tellFortune ('Ana')
console.log(tellFortune ('Ana'))
