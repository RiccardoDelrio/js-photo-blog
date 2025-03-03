const cardContainerEl = document.querySelector('.card_container');
const mainEl = document.querySelector(".over")
const card_selectorEl = document.querySelectorAll(".card_selector")
const card_popEl = document.querySelector(".card_pop")
const pop_upEl = document.querySelector(".pop_up")
// fetch('https://lanciweb.github.io/demo/api/pictures/')
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(element => {
//             const { date, title, url } = element;
//             console.log(date, title, url); 
//             cardContainerEl.insertAdjacentHTML('beforeend', 
//                 `<div class="col-12 col-md-6 col-lg-4 mt-4 ">
//                     <div class="card">
//                         <img src="./assets/img/pin.svg" alt="" class="pin">
//                         <img src="${url}" class="card-img-top img_p p-3" alt="...">
//                         <div class="card-body">
//                             <p class="card-text date">${date}</p>
//                             <p class="card-text photo_title">${title}</p>
//                         </div>
//                     </div>
//                 </div>`
//             );

//         });
//     })
axios.get('https://lanciweb.github.io/demo/api/pictures/')
    .then(response => {
        response.data.forEach((element, index) => {
            const { date, title, url } = element;
            console.log(element);

            // console.log(date, title, url);
            cardContainerEl.insertAdjacentHTML('beforeend',
                `<div class="col-12 col-md-6 col-lg-4 mt-4 card_selector ">
                    <div class="card">
                        <img src="./assets/img/pin.svg" alt="" class="pin">
                        <img src="${url}" class="card-img-top img_p p-3" alt="...">
                        <div class="card-body">
                            <p class="card-text date">${date}</p>
                            <p class="card-text photo_title">${title}</p>
                        </div>
                    </div>
                </div>`
            );
        });
        const card_selectorEl = document.querySelectorAll(".card_selector")
        console.log(card_selectorEl);

        card_selectorEl.forEach((element, index) => {
            console.log(element);

            element.addEventListener("click", () => {
                const imgEl = element.querySelector('.card-img-top');
                const linkSrc = imgEl.getAttribute("src")
                console.log(linkSrc);
                card_popEl.classList.remove("d-none");
                pop_upEl.innerHTML = `
                <img src="${linkSrc}" alt="...">
            `;
            })


        });
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });

