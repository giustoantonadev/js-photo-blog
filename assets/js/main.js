console.log('it works');


const endpoint = 'https://lanciweb.github.io/demo/api/pictures/'

const rowEl = document.querySelector('.row')

console.log(endpoint, rowEl);

fetch(endpoint)
    .then(res => res.json())
    .then(data => {
        data.forEach(items => {
            console.log(items);
            const { title, date, url } = items
            const markup = `<div class="col-12 col-md-6 col-lg-4 p-3">
                        <div class="card">
                            <div class="card-header border-0">
                                <img src="./assets/img/pin.svg" alt="red pin" id="redpin" class="position-absolute top-10 start-50 translate-middle">
                            </div>
                            <div class="card-body p-2">
                                <div>
                                    <img  src="${url}" class="img-fluid" alt="img">
                                </div>

                                <div class="card-footer p-1">
                                <div class="card-footer-title">${title}</div>
                                    ${date}
                                </div>
                            </div>
                        </div>
                    </div>`
            console.log(markup);
            rowEl.insertAdjacentHTML("beforeend", markup);
        });


        //overlay js code
        const overlayEl = document.getElementById('overlay');
        const overlayImgEl = document.getElementById('overlay-img');
        const closeButtonEl = document.getElementById('close-btn');
        const cardsImgEl = document.querySelectorAll('.img-fluid');

        cardsImgEl.forEach(img => {
            img.addEventListener('click', (e) => {
                overlayImgEl.src = img.src;
                overlayEl.classList.remove('d-none');
            });
        });

        closeButtonEl.addEventListener('click', (e) => {
            overlayEl.classList.add('d-none');
        });

    })



