function setDates() {
    if (localStorage.getItem('dates')) {
        let settedDates = JSON.parse(localStorage.getItem('dates'));
        let dateBtns = [document.getElementsByClassName('date')][0];
        for (let k = 0; k < settedDates.length; k++) {
            dateBtns[k].addEventListener('click', () => {
                dateBtns[k].style.display = 'none';
                const dateInput = document.createElement('input');
                dateInput.setAttribute('type', 'date');
                dateInput.classList.add('dateInput');
                document.getElementsByClassName('addedTask')[k].appendChild(dateInput);
                dateInput.addEventListener('change', () => {
                    settedDates[k] = dateInput.value;
                    dateBtns[k].textContent = dateInput.value;
                    dateInput.style.display = 'none';
                    dateBtns[k].style.display = 'block';
                    localStorage.setItem('dates', JSON.stringify(settedDates));
                })
            })
        }

    }
}
export default setDates;