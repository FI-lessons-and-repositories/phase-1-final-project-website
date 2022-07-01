// document.addEventListener('DOMContentLoaded', () => {


// })

fetch('https://fakestoreapi.com/products?limit=8')
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        const firstImage = {
            title: document.querySelector('#Fjallraven'),
            image: document.querySelector('#firstImage'),
        }
        const secondImage = {
            title: document.querySelector('#secondTitle'),
            image: document.querySelector('#secondImage'),
        }

        const thirdImage = {
            title: document.querySelector('#thirdTitle'),
            image: document.querySelector('#thirdImage'),
        }




        const cartcard = document.querySelector('#lg-bag');
        const cartSection = document.querySelector('#cartSection');

        cartcard.addEventListener('click', () => {
            cartSection.style.display = 'block';
        })
        console.log(cartSection)

        const buyCarts = {
            firstCart: document.querySelector('#firstCart'),
            price: document.querySelector('#price'),
            title: document.querySelector('#title'),
            image: document.querySelector('#cartImg'),
        }

        buyCarts.firstCart.addEventListener('click', () => {
            buyCarts.price.textContent = `Price $15`
            buyCarts.title.textContent = `Title Besties Shirt`
            buyCarts.image.setAttribute(`src`, `images/goodshirt.jpeg`)
        })

        firstImage.title.textContent = data[0].title;
        firstImage.image.setAttribute('src', data[0].image);
        secondImage.title.textContent = data[1].title;
        secondImage.image.setAttribute('src', data[1].image);
        thirdImage.title.textContent = data[2].title;
        thirdImage.image.setAttribute('src', data[2].image);
    })









// const bar = document.getElementById('bar');
// const close = document.getElementById('close');
// const nav = document.getElementById('navbar');

// if (bar) {
//     bar.addEventListener('click', () => {
//         nav.classList.add('active');
//     })
// }
// if (close) {
//     close.addEventListener('click', () => {
//         nav.classList.remove('active');
//     })
// }

//var MainImg = document.getElementById("MainImg");
//var smallimg = document.getElementsByClassName("small-img");

//smallimg[0].onclick = function() {
//  MainImg.src = smallimg[0].src;
//}
//smallimg[1].onclick = function() {
//  MainImg.src = smallimg[1].src;
//}
//smallimg[2].onclick = function() {
//  MainImg.src = smallimg[2].src;
//}
//smallimg[3].onclick = function() {
//  MainImg.src = smallimg[3].src;
//         }        secondImage.title.textContent = data[1].title;