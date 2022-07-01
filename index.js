document.addEventListener('DOMContentLoaded', () => {
    etch('https://fakestoreapi.com/products?limit=8')
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

            const closeIcon = document.querySelector('#close')


            const cartcard = document.querySelector('#lg-bag');
            const cartSection = document.querySelector('#cartSection');

            cartcard.addEventListener('click', () => {
                closeIcon.style.display = 'block';
                cartSection.style.display = 'block';
                cartcard.style.display = 'none';
            })

            closeIcon.addEventListener('click', () => {
                closeIcon.style.display = 'none';
                cartSection.style.display = 'none';
                cartcard.style.display = 'block';
            })

            const buyCarts = {
                firstCart: document.querySelector('#firstCart'),
                price: document.querySelector('#price'),
                title: document.querySelector('#title'),
                image: document.querySelector('#cartImg'),
                secondCart: document.querySelector('#secondCart'),
                thirdCart: document.querySelector('#thirdCart'),
                fourthCart: document.querySelector('#fourthCart'),
                fifthCart: document.querySelector('#fifthCart'),
                sixthCart: document.querySelector('#sixthCart'),
                seventhCart: document.querySelector('#seventhCart'),
                eighthCart: document.querySelector('#eighthCart'),
            }


            buyCarts.firstCart.addEventListener('click', () => {
                alert('You have added Title Besties to your cart')
                buyCarts.price.textContent = `Price $15`
                buyCarts.title.textContent = `Title Besties Shirt`
                buyCarts.image.setAttribute(`src`, `images/goodshirt.jpeg`)
            })
            buyCarts.secondCart.addEventListener('click', () => {
                buyCarts.price.textContent = `Price $15`
                buyCarts.title.textContent = `Title GoodVibes Shirt`
                buyCarts.image.setAttribute(`src`, `images/goodshirt2.jpg`)
            })
            buyCarts.thirdCart.addEventListener('click', () => {
                buyCarts.price.textContent = `Price $15`
                buyCarts.title.textContent = `Title GoodVibes Shirt`
                buyCarts.image.setAttribute(`src`, `images/goodshirt3.jpeg`)
            })
            buyCarts.fourthCart.addEventListener('click', () => {
                buyCarts.price.textContent = `Price $15`
                buyCarts.title.textContent = `Title GoodVibes Shirt`
                buyCarts.image.setAttribute(`src`, `images/goodshirt4.jpeg`)
            })
            buyCarts.fifthCart.addEventListener('click', () => {
                buyCarts.price.textContent = `Price $15`
                buyCarts.title.textContent = `Title GoodVibes Shirt`
                buyCarts.image.setAttribute(`src`, `images/goodshirt5.jpeg`)
            })
            buyCarts.sixthCart.addEventListener('click', () => {
                buyCarts.price.textContent = `Price $15`
                buyCarts.title.textContent = `Title GoodVibes Shirt`
                buyCarts.image.setAttribute(`src`, `images/goodshirt6.jpeg`)
            })
            buyCarts.seventhCart.addEventListener('click', () => {
                buyCarts.price.textContent = `Price $15`
                buyCarts.title.textContent = `Title GoodVibes Shirt`
                buyCarts.image.setAttribute(`src`, `images/goodshirt7.png`)
            })
            buyCarts.eigthCart.addEventListener('click', () => {
                buyCarts.price.textContent = `Price $15`
                buyCarts.title.textContent = `Title GoodVibes Shirt`
                buyCarts.image.setAttribute(`src`, `images/goodshirt8.png`)
            })

            firstImage.title.textContent = data[0].title;
            firstImage.image.setAttribute('src', data[0].image);
            secondImage.title.textContent = data[1].title;
            secondImage.image.setAttribute('src', data[1].image);
            thirdImage.title.textContent = data[2].title;
            thirdImage.image.setAttribute('src', data[2].image);
        })


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