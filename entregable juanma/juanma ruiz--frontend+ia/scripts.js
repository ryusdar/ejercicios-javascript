
document.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('form-contacto');
	if (form) {
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			alert('¡Gracias por tu consulta! Nos pondremos en contacto pronto.');
			form.reset();
		});
	}
});
