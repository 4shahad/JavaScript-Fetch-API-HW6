const cat=document.getElementById('cat');
const btcat=document.getElementById('btcat');
btcat.addEventListener('click',getRandomCat);
function getRandomCat(){
    fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(data => {
cat.innerHTML = `<img src="${data.url}"/>`

    })
}
