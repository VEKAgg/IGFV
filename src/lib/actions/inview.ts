export function inview(node: HTMLElement, params: { delay?: number } = {}) {
	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				node.style.transitionDelay = `${params.delay || 0}ms`;
				node.classList.add('inview-visible');
				observer.unobserve(node);
			}
		},
		{ threshold: 0.1 }
	);
	observer.observe(node);
	return {
		destroy() {
			observer.disconnect();
		}
	};
}
