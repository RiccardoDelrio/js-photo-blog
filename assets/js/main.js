const cardContainerEl = document.querySelector('.card_container');
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
        response.data.forEach(element => {
            const { date, title, url } = element;
            console.log(date, title, url);
            cardContainerEl.insertAdjacentHTML('beforeend',
                `<div class="col-12 col-md-6 col-lg-4 mt-4 ">
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
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
