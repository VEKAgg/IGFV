export interface InviewOptions {
	delay?: number;
	threshold?: number;
	once?: boolean;
}

export function inview(node: HTMLElement, options: InviewOptions = {}) {
	let delay = options.delay ?? 0;
	let threshold = options.threshold ?? 0.1;
	let once = options.once ?? true;

	let observer: IntersectionObserver;

	function createObserver() {
		if (observer) observer.disconnect();

		observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					node.style.transitionDelay = `${delay}ms`;
					node.classList.add('inview-visible');
					if (once) {
						observer.unobserve(node);
					}
				} else {
					if (!once) {
						node.classList.remove('inview-visible');
					}
				}
			},
			{ threshold }
		);

		observer.observe(node);
	}

	createObserver();

	return {
		update(newOptions: InviewOptions) {
			delay = newOptions.delay ?? 0;
			threshold = newOptions.threshold ?? 0.1;
			once = newOptions.once ?? true;
			createObserver();
		},
		destroy() {
			if (observer) observer.disconnect();
		}
	};
}

