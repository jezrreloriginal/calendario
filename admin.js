document.addEventListener('DOMContentLoaded', () => {
    const adminForm = document.getElementById('adminForm');
    const scheduleList = document.getElementById('scheduleList');

    const loadSchedule = () => {
        const availableTimes = JSON.parse(localStorage.getItem('availableTimes')) || [];
        scheduleList.innerHTML = availableTimes.map((time, index) => `
            <li>${time} <button onclick="deleteTime(${index})">Remover</button></li>
        `).join('');
    };

    adminForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(adminForm);
        const time = `${formData.get('day')} - ${formData.get('time')}`;

        const availableTimes = JSON.parse(localStorage.getItem('availableTimes')) || [];
        availableTimes.push(time);
        localStorage.setItem('availableTimes', JSON.stringify(availableTimes));

        loadSchedule();
        adminForm.reset();
    });

    window.deleteTime = (index) => {
        const availableTimes = JSON.parse(localStorage.getItem('availableTimes')) || [];
        availableTimes.splice(index, 1);
        localStorage.setItem('availableTimes', JSON.stringify(availableTimes));
        loadSchedule();
    };

    loadSchedule();
});
