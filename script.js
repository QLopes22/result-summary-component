fetch("data.json")
.then(response => response.json())
// .then(data => showInfo(data))
.then(data => {
    data.forEach(postInfo => {
        const post = `<p>${data.grades}</p>`;
    
        document.querySelector('.grades-container').innerHTML(data.grades);
    })
})
.catch(error => console.log(error));

function showInfo(data) {
    console.log(data.grades);
}
