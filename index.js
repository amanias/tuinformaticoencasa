"use strict";

function iniciar() {

	function activarServiceWorker() {
		// Registro el ServiceWorker para hacer una Aplicación Web Progresiva si el navegador lo permite, claro.
		if ('serviceWorker' in navigator) {
			window.addEventListener('load', () => {
				navigator.serviceWorker.register('/service-worker.js')
					.then((registration) => {
						console.log('"Service Worker" registrado con éxito en el ámbito:', registration.scope);
					})
					.catch((error) => {
						console.log('Falló el registro del "Service Worker" por el error:', error)
					})
			})
		} else {
			console.log('Este navegador NO soporta la tecnología Service Worker y adiós a la Aplicación Web Progresiva.');
		}
		// Final del ServiceWorker
	}

	activarServiceWorker();

}

document.addEventListener("DOMContentLoaded", iniciar);