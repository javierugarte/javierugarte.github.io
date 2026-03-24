document.addEventListener('DOMContentLoaded', () => {
	const translations = {
		es: {
			'page.title': 'Javier González Martín - Currículum Vitae',
			'page.description': 'Curriculum Vitae de Javier González',
			'hero.role': 'Mobile Lead Developer',
			'contact.links': 'Contacto y redes',
			'lang.selector': 'Selector de idioma',
			'print.contactTitle': 'Contacto',
			'section.profile.title': 'Perfil personal',
			'section.profile.content': 'Mobile Lead Developer con más de una década creando productos iOS y liderando equipos técnicos. Guío la visión y ejecución de la arquitectura móvil global en BBVA, conectando necesidades de negocio con soluciones escalables y fiables. Disfruto impulsando buenas prácticas, simplificando procesos complejos y construyendo experiencias de usuario.',
			'section.experience.title': 'Experiencia profesional',
			'experience.bbva.dates': '2022 - Actualidad',
			'experience.bbva.summary': 'Formo parte del equipo de <b>Arquitectura Móvil Global</b>, alineando estándares, componiendo hojas de ruta técnicas y acompañando a los países en cada despliegue crítico. Traduzco la estrategia del banco en decisiones tecnológicas tangibles y creo herramientas internas que aceleran la entrega de valor.',
			'experience.bbva.bullet1': 'Definición y gobernanza de la arquitectura común de apps móviles para todos los mercados.',
			'experience.bbva.bullet2': 'Mentorización y soporte a equipos locales para desbloquear incidentes complejos.',
			'experience.bbva.bullet3': 'Diseño de guías de calidad, seguridad y performance reutilizables.',
			'experience.bbva.bullet4': 'Automatización de flujos CI/CD y herramientas de diagnóstico para acelerar releases.',
			'experience.bbva.bullet5': 'Impulso de foros técnicos y comunidades internas para compartir conocimiento.',
			'experience.serquo.dates': '2020 - 2022',
			'experience.serquo.summary': 'Responsable del desarrollo de las apps <b><a href="https://apps.apple.com/es/app/bbva-espa%C3%B1a-banca-online/id325813155" target="_blank">BBVA España</a></b> y <b><a href="https://apps.apple.com/es/app/affinity-card/id1513316265" target="_blank">AffinityCard</a></b>, construyendo módulos críticos y elevando la experiencia digital de los clientes. Lideré iniciativas de modernización y mejoras de rendimiento trabajando mano a mano con UX y negocio.',
			'experience.serquo.bullet1': 'Implementación de arquitectura VIPER y modularización de componentes compartidos.',
			'experience.serquo.bullet2': 'Integraciones robustas con APIs internas, autenticación biométrica y servicios de terceros.',
			'experience.serquo.bullet3': 'Desarrollo de Widgets iOS, extensiones para Apple Watch y experiencias multi-dispositivo.',
			'experience.serquo.bullet4': 'Automatización de pipelines con Fastlane y configuración avanzada de CocoaPods.',
			'experience.serquo.bullet5': 'Coordinación Agile con squads multidisciplinares para lanzar nuevas funcionalidades.',
			'experience.bitban.dates': '2014 - 2020',
			'experience.bitban.summary': 'Construí más de una docena de apps para medios como Vocento, Atresmedia o Mediaset, abarcando iOS y Android. Desde la ideación hasta la publicación, acompañé al cliente en todo el ciclo aportando visión de producto y foco en métricas.',
			'experience.bitban.bullet1': 'Desarrollo nativo en Swift, Objective-C, Kotlin y Java con despliegues frecuentes.',
			'experience.bitban.bullet2': 'Diseño de arquitecturas MVP/MVVM y adopción de patrones reutilizables.',
			'experience.bitban.bullet3': 'Integraciones en tiempo real con APIs propias, analítica y servicios de notificaciones.',
			'experience.bitban.bullet4': 'Automatización de builds con Fastlane y flujos git-flow coordinados con el cliente.',
			'experience.bitban.bullet5': 'Participación activa en workshops con diseño y negocio para priorizar roadmap.',
			'section.projects.title': 'Proyectos personales',
			'projects.github.title': 'GitHub · Código abierto',
			'projects.github.description': 'Cuenta donde publico y mantengo proyectos de software libre, librerías internas y experimentos de arquitectura móvil. Contribuyo de forma continua documentando aprendizajes y compartiendo herramientas reutilizables para la comunidad.',
			'projects.towatchtv.description': 'App para seguimiento de series y acceso a las plataformas de streaming con soporte iPhone, iPad, Apple Watch y Apple TV.',
			'projects.athletic.description': 'Calendario inteligente de partidos con recordatorios y exportación a Google Calendar.',
			'projects.gourmet.description': 'Gestor de saldo y alertas instantáneas para la tarjeta Gourmet.',
			'section.education.title': 'Formación académica',
			'education.master.title': 'Máster en Desarrollo de Aplicaciones Móviles',
			'education.master.details': '2012 - 2013 · Deusto Formación',
			'education.cfgs.title': 'CFGS Desarrollo de Aplicaciones Multimedia',
			'education.cfgs.details': '2010 - 2012 · I.E.S. Ribera del Tajo (Toledo)'
		},
		en: {
			'page.title': 'Javier Gonzalez Martin - Resume',
			'page.description': 'Resume of Javier Gonzalez Martin',
			'hero.role': 'Mobile Lead Developer',
			'contact.links': 'Contact and networks',
			'lang.selector': 'Language selector',
			'print.contactTitle': 'Contact',
			'section.profile.title': 'Personal profile',
			'section.profile.content': 'Mobile Lead Developer with more than a decade building iOS products and leading technical teams. I steer the vision and execution of BBVA\’s global mobile architecture, connecting business needs with scalable, reliable solutions. I enjoy driving best practices, simplifying complex processes, and crafting user experiences that stand the test of time.',
			'section.experience.title': 'Professional experience',
			'experience.bbva.dates': '2022 - Present',
			'experience.bbva.summary': 'I am part of the <b>Global Mobile Architecture</b> team, aligning standards, shaping technical roadmaps, and supporting each country through critical launches. I translate the bank\’s strategy into tangible technology decisions and build internal tools that accelerate value delivery.',
			'experience.bbva.bullet1': 'Defined and governed the shared mobile app architecture for every BBVA market.',
			'experience.bbva.bullet2': 'Mentored and supported local teams to unblock complex incidents.',
			'experience.bbva.bullet3': 'Created reusable playbooks covering quality, security, and performance.',
			'experience.bbva.bullet4': 'Automated CI/CD flows and diagnostics to speed up releases.',
			'experience.bbva.bullet5': 'Facilitated technical forums and internal communities to spread knowledge.',
			'experience.serquo.dates': '2020 - 2022',
			'experience.serquo.summary': 'Owned the development of the <b><a href="https://apps.apple.com/es/app/bbva-espa%C3%B1a-banca-online/id325813155" target="_blank">BBVA España</a></b> and <b><a href="https://apps.apple.com/es/app/affinity-card/id1513316265" target="_blank">AffinityCard</a></b> apps, crafting critical modules and elevating the digital customer experience. Partnered closely with UX and business stakeholders to modernize the codebase and boost performance.',
			'experience.serquo.bullet1': 'Implemented VIPER architecture and modularized shared components.',
			'experience.serquo.bullet2': 'Built resilient integrations with internal APIs, biometric auth, and third-party services.',
			'experience.serquo.bullet3': 'Developed iOS Widgets, Apple Watch extensions, and multi-device experiences.',
			'experience.serquo.bullet4': 'Automated pipelines with Fastlane and advanced CocoaPods setups.',
			'experience.serquo.bullet5': 'Coordinated Agile squads to deliver new customer-facing features.',
			'experience.bitban.dates': '2014 - 2020',
			'experience.bitban.summary': 'Built more than a dozen apps for media groups like Vocento, Atresmedia, and Mediaset across iOS and Android. Partnered with clients from ideation to launch, adding product insights and a strong metrics mindset.',
			'experience.bitban.bullet1': 'Shipped native Swift, Objective-C, Kotlin, and Java apps with frequent releases.',
			'experience.bitban.bullet2': 'Designed MVP/MVVM architectures and reusable patterns.',
			'experience.bitban.bullet3': 'Integrated proprietary APIs, analytics, and real-time notification services.',
			'experience.bitban.bullet4': 'Automated builds with Fastlane and managed git-flow with clients.',
			'experience.bitban.bullet5': 'Led workshops with design and business to prioritize the roadmap.',
			'section.projects.title': 'Personal projects',
			'projects.github.title': 'GitHub · Open source',
			'projects.github.description': 'Public profile where I publish and maintain open-source projects, internal libraries, and mobile architecture experiments. I document learnings continuously and share reusable tools with the community.',
			'projects.towatchtv.description': 'Series tracker with streaming shortcuts for iPhone, iPad, Apple Watch, and Apple TV.',
			'projects.athletic.description': 'Smart match calendar with reminders and Google Calendar export.',
			'projects.gourmet.description': 'Balance tracker with instant alerts for the Gourmet meal card.',
			'section.education.title': 'Education',
			'education.master.title': "Master's Degree in Mobile App Development",
			'education.master.details': '2012 - 2013 · Deusto Formación',
			'education.cfgs.title': 'Higher National Diploma in Multimedia App Development',
			'education.cfgs.details': '2010 - 2012 · I.E.S. Ribera del Tajo (Toledo)'
		}
	};

	const monthLabels = {
		es: {
			zero: '0 meses',
			year: 'año',
			years: 'años',
			month: 'mes',
			months: 'meses',
			connector: 'y'
		},
		en: {
			zero: '0 months',
			year: 'year',
			years: 'years',
			month: 'month',
			months: 'months',
			connector: 'and'
		}
	};

	const langButtons = document.querySelectorAll('.lang-btn');

	const normalizeDate = (value) => {
		if (!value) return null;
		if (value instanceof Date) return value;
		if (value.toLowerCase && value.toLowerCase() === 'today') return new Date();
		if (typeof value === 'string') {
			const parts = value.split('/').map(Number);
			if (parts.length === 3) {
				const [day, month, year] = parts;
				return new Date(year, month - 1, day);
			}
		}
		return null;
	};

	const getMonthsBetween = (start, end) => {
		const startDate = normalizeDate(start);
		const endDate = normalizeDate(end);
		if (!startDate || !endDate || endDate < startDate) return 0;
		let months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
		if (endDate.getDate() < startDate.getDate()) months -= 1;
		return months;
	};

	const formatElapsed = (lang, start, end) => {
		const diff = getMonthsBetween(start, end);
		const labels = monthLabels[lang] || monthLabels.es;
		if (!diff) return labels.zero;
		const years = Math.floor(diff / 12);
		const months = diff % 12;
		const parts = [];
		if (years) parts.push(`${years} ${years === 1 ? labels.year : labels.years}`);
		if (months) parts.push(`${months} ${months === 1 ? labels.month : labels.months}`);
		return parts.join(` ${labels.connector} `);
	};

	const updateElapsedLabels = (lang) => {
		document.querySelectorAll('.months-elapsed').forEach((el) => {
			const { monthsStart, monthsEnd } = el.dataset;
			if (!monthsStart || !monthsEnd) return;
			el.textContent = formatElapsed(lang, monthsStart, monthsEnd);
		});
	};

	const applyLanguage = (lang) => {
		const language = translations[lang] ? lang : 'es';
		document.documentElement.setAttribute('lang', language);
		document.body.dataset.lang = language;

		document.querySelectorAll('[data-i18n]').forEach((el) => {
			const key = el.dataset.i18n;
			const translation = translations[language][key];
			if (!translation) return;
			const targetAttr = el.dataset.i18nAttr;
			if (targetAttr) {
				if (targetAttr === 'text') {
					el.textContent = translation;
				} else {
					el.setAttribute(targetAttr, translation);
				}
				if (el.tagName === 'TITLE') {
					document.title = translation;
				}
			} else {
				el.innerHTML = translation;
			}
		});

		langButtons.forEach((btn) => {
			const isActive = btn.dataset.lang === language;
			btn.classList.toggle('active', isActive);
			btn.setAttribute('aria-pressed', String(isActive));
		});

		localStorage.setItem('preferredLang', language);
		updateElapsedLabels(language);
	};

	langButtons.forEach((btn) => {
		btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
	});

	const storedLang = localStorage.getItem('preferredLang');
	const browserLang = (navigator.language || 'es').startsWith('en') ? 'en' : 'es';
	applyLanguage(storedLang || browserLang);
});
