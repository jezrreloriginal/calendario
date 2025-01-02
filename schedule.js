document.addEventListener('DOMContentLoaded', () => {
    const appointmentList = document.getElementById('appointmentList');

    const loadAppointments = () => {
        const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
        appointmentList.innerHTML = appointments.map((appointment, index) => `
            <tr>
                <td>${appointment.appointmentDate}</td>
                <td>${appointment.appointmentTime}</td>
                <td>${appointment.name}</td>
                <td>${appointment.phone}</td>
                <td>
                    <button onclick="editAppointment(${index})">Editar</button>
                    <button onclick="deleteAppointment(${index})">Excluir</button>
                </td>
            </tr>
        `).join('');
    };

    window.deleteAppointment = (index) => {
        const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
        appointments.splice(index, 1);
        localStorage.setItem('appointments', JSON.stringify(appointments));
        loadAppointments();
    };

    window.editAppointment = (index) => {
        const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
        const appointment = appointments[index];
        const newDate = prompt('Nova data (yyyy-mm-dd):', appointment.appointmentDate);
        const newTime = prompt('Novo horário (HH:mm):', appointment.appointmentTime);

        if (newDate && newTime) {
            appointments[index] = { ...appointment, appointmentDate: newDate, appointmentTime: newTime };
            localStorage.setItem('appointments', JSON.stringify(appointments));
            loadAppointments();
        }
    };

    loadAppointments();
});
