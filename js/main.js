const query = document.querySelector('#gifToSearch')
const nbr = document.querySelector('select')
const wrapper = document.querySelector('.wrapper')
const button = document.querySelector('#button')

function generate() {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=GEmjEES5bxqnnyJA6fETMXMRRlq8ssOX&q=${query.value}&lang=fr&limit=${nbr.value}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        wrapper.innerHTML= "";
        data.data.forEach(function(oneImage){
            wrapper.innerHTML += `<div class="image"><img src="${oneImage.images.downsized.url}" alt="gif de ouf"></div>`
        })
      })
      .catch(error => {console.log("Erreur lors de la récup des données :", error);
    })
}

button.addEventListener('click', function(){
    generate()
})

nbr.addEventListener('change', function(){
    generate()
})