import { Github, Phone } from 'lucide-react'
import Image from 'next/image'

const skills = [
	'HTML',
	'CSS',
	'SCSS',
	'TailwindCSS',
	'JavaScript',
	'TypeScript',
	'React',
	'Next.js',
	'Express',
	'Nest.js',
	'Fastify',
	'MongoDB',
	'Docker',
	'PostgreSQL',
	'Firebase',
	'Railway',
	'Git',
	'GitHub',
	'Webpack',
	'Vite',
	'Gulp',
]

export default function Resume() {
	return (
		<div className='max-w-4xl m-auto p-8 bg-white shadow-lg rounded-lg text-gray-600'>
			<header className='mb-8'>
				<h1 className='text-3xl  font-bold mb-2'>Дмитрий Искендеров</h1>
				<h2 className='text-xl  mb-4'>Full-Stack Разработчик</h2>
				<div className='flex space-x-4 flex-wrap'>
					<a href='https://github.com/Morqqulis' className='flex items-center  hover:text-gray-900'>
						<Github className='w-5 h-5 mr-2' />
						GitHub
					</a>
					<a
						href='https://www.upwork.com/freelancers/~01298f364dafdf2db5'
						className='flex items-center  hover:text-gray-900'>
						<Image src='/upwork.svg' width={40} height={40} alt='Upwork' className='mr-2' />
						Upwork
					</a>
					<a href='tel:+994516000000' className='flex items-center  hover:text-gray-900'>
						<Phone className='w-5 h-5 mr-2' />
						+994-55-829-58-85
					</a>
				</div>
			</header>

			<section className='mb-8'>
				<h3 className='text-2xl  font-semibold mb-4'>Обо мне</h3>
				<p className='text-gray-700'>
					Опытный Full-Stack разработчик с сильным фокусом на создании адаптивных, кроссбраузерных веб-приложений.
					Специализируюсь на разработке с использованием современных JavaScript фреймворков и библиотек. Уделяю
					особое внимание семантике и соблюдению стандартов W3C для обеспечения высокого качества кода и
					оптимизации производительности с учётом требований Google PageSpeed Insights.
				</p>
			</section>

			<section className='mb-8'>
				<h3 className='text-2xl  font-semibold mb-4'>Навыки</h3>
				<div className='flex flex-wrap gap-2'>
					{skills.map((skill, index) => (
						<span key={index} className='bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>
							{skill}
						</span>
					))}
				</div>
			</section>

			<section className='mb-8'>
				<h3 className='text-2xl  font-semibold mb-4'>Опыт работы</h3>
				<div className='mb-4'>
					<h4 className='text-xl font-medium '>Full-Stack Разработчик</h4>
					<p className=''>Freelance | 2023 - настоящее время</p>
					<ul className='list-disc list-inside mt-2 text-gray-700'>
						<li>Разработка полнофункциональных веб-приложений с использованием MERN стека</li>
						<li>Создание адаптивных и кроссбраузерных пользовательских интерфейсов</li>
						<li>Работа с различными API и интеграция сторонних сервисов</li>
						<li>Оптимизация производительности фронтенда и бэкенда</li>
					</ul>
				</div>
				<div>
					<h4 className='text-xl font-medium'>Front-End Разработчик | Ментор</h4>
					<p className=''>Eacamp School | 2022 - 2023</p>
					<ul className='list-disc list-inside mt-2 text-gray-700'>
						<li>Разработка отзывчивых веб-сайтов с использованием HTML, CSS и JavaScript</li>
						<li>Работа с современными фреймворками, такими как React</li>
						<li>Оптимизация веб-сайтов для улучшения скорости загрузки и SEO</li>
						<li>Менторство и обучение студентов</li>
						<li>Разработка и поддержка учебных материалов</li>
					</ul>
				</div>
			</section>

			<section>
				<h3 className='text-2xl  font-semibold mb-4'>Языки</h3>
				<p className='text-gray-700'>Русский, Английский, Азербайджанский, Турецкий</p>
			</section>
		</div>
	)
}
