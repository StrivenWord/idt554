import '../scss/styles.scss'

// Import all Boostrap
import * as bootstrap from 'bootstrap'

// Tooltips powered by Popper.js for the tooltips on the homepage

document.addEventListener('DOMContentLoaded', () => {
	// Find the pop icons
	const expandIcons = document.querySelectorAll('.bi-chevron-expand');
	expandIcons.forEach(icon => {
		// Find the closest card body
		const cardBody = icon.closest('.card-body') || icon.closest('.card');
		// Find the tooltip in the element <p class="small">
		const smallText = cardBody.querySelector('.small');
		if (smallText) {
			// Set data attributes for the tooltip
			icon.setAttribute('data-bs-toggle', 'tooltip');
			icon.setAttribute('data-bs-placement', 'right');
			icon.setAttribute('data-bs-title', smallText.textContent);
			icon.style.cursor = 'pointer';
			// Hide the original small text
			smallText.style.display = 'none';
		}
	});
	const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
	const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
});
