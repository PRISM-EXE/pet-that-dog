const button = document.querySelector('button');
const imgContainer = document.querySelector('.img-container');
const dogImage = document.querySelector('.dog-image');
const audio = document.querySelector('audio');

const generateDogImage = function() {
    let odds = Math.random();

    if (odds < 0.5) {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                dogImage.src = data.message;
                mgContainer.append(dogImage);
        })
    } else {
        let width = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
        let height = Math.floor(Math.random() * (300 - 100)) + 100;
        dogImage.src = `https://placebear.com/${width}/${height}`;
        audio.play();
        button.classList.add('hidden');
        setTimeout(() => {
            button.classList.remove('hidden');
        }, 1000*10);
    }
}


button.addEventListener('click', generateDogImage);