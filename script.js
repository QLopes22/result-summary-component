// fetch("data.json")
// .then(res => {
//     return res.json();
// })
// .then(data => {
//     console.log(data);
// })
// .then(data => {
//     data.forEach(grades => {
//         const tr = document.tr;
//         const td = document.createElement("td");
//         td.innerText = "hello niggro";

        
//         tr.append(markup);
//     });
// })
// .catch(error => console.log("error, check your code"));

const grades = [
    {
    "category": "Reaction",
    "score": 80,
    "icon": "images/icon-reaction.svg"
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": "images/icon-memory.svg"
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": "images/icon-verbal.svg"
  },
  {
    "category": "Visual",
    "score": 72,
    "icon": "images/icon-visual.svg"
  }
];

  console.log(grades);

const reaction = document.getElementsByClassName('reaction')[0];
console.log(reaction);

grades.forEach((grades, index) => {
    let reactionChunk = document.createElement('td');
    let reactionChunkText = document.createTextNode(`${grades.icon} ${grades.category} ${grades.score} / 100 `);
    reactionChunk.append(reactionChunkText)
    reaction.append(reactionChunk);
})
