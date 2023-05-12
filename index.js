// app.js
const tableBody = document.getElementById('table-body');
const refreshButton = document.getElementById('refresh-button');

function getTipoCambio() {
  fetch('http://localhost:3000/tipocambio/dolar')
    .then(response => response.json())
    .then(data => {
      tableBody.innerHTML = `
        <tr>
          <td>${data.fecha}</td>
          <td>Q ${data.referencia}</td>
        </tr>
      `;
      Swal.fire({
        icon: 'success',
        title: 'Precio actualizado en tiempo real',
        showConfirmButton: false,
        timer: 1000
      })
    })
    .catch(error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡Algo salió mal! Contactate con soporte o actualiza la pagina',
      })
      tableBody.innerHTML = `
        <tr>
          <td colspan="2" class="text-center">Ha ocurrido un error al cargar los datos.</td>
        </tr>
      `;     
    });
}
getTipoCambio(); // Llamar la función al cargar la página
refreshButton.addEventListener('click', getTipoCambio); // Agregar evento al botón de actualizar