interface ProjDetails {img: string, desc:string, link1:string, link2:string}

export const projs: {[title:string]: ProjDetails} = { 
	'Awake': {
		img: require('./styles/images/awake.png'),
		desc: 'Daily journal entries, meditation timer, and visually aggregated data for greater self awareness.',
		link1: 'http://awake.us-east-2.elasticbeanstalk.com/',
		link2: 'https://github.com/vio1337/awake',
	},
	'Recovery Roots': {
		img: require('./styles/images/rr.png'),
		desc: 'Resource platform supporting woman wanting sustainable eating disorder recovery.',
		link1: 'http://edrecoveryroots.com/',
		link2: 'https://github.com/vio1337/recovery-roots',
	},
	'Personal Space': {
		img: require('./styles/images/space.png'),
		desc: 'Simulates a personal space voyage by excavating NASA archives to leave notes and save findings.',
		link1: 'https://www.youtube.com/watch?v=lRCB0W5v4FA',
		link2: 'https://github.com/vio1337/personal-space',
	},
	'Routes Template': {
		img: require('./styles/images/routes.png'),
		desc: 'Basic React Routes template designed to support a single-paged React portfolio.',
		link1: 'https://medium.com/@violetmoon/react-router-portfolio-template-3105d54f0525',
		link2: 'https://github.com/vio1337/routes-template',
	},
	'Extraterrestrial': {
		img: require('./styles/images/alien.png'),
		desc: 'Adopt an alien, explore home planets and manage a private account with your new pets.',
		link1: 'https://www.youtube.com/watch?v=ZXObId1wLkg',
		link2: 'https://github.com/vio1337/extraterrestrial',
	},
}

interface ArtDetails {link:string, img:string, cols:number}

export const articles: {[title:string]: ArtDetails} = {
	'React Router' : {
		img: 'https://cdn-images-1.medium.com/max/800/1*gwNAFGfrENqAY0pSixeN3Q.png',
		link: 'https://medium.com/@violetmoon/react-router-portfolio-template-3105d54f0525',
		cols: 2,
	},
	'I Don\'t Know' : {
		img: 'https://cdn-images-1.medium.com/max/800/1*k62gS8lLuZTtS4KvnoGVGg.jpeg',
		link: 'https://medium.com/@violetmoon/i-dont-know-e96e209fd4f9',
		cols: 2,
	},
	'JS Promises' : {
		img: 'https://cdn-images-1.medium.com/max/800/1*yUzdM0s16XMy37FpeuGRNw.jpeg',
		link: 'https://medium.com/@violetmoon/javascript-promises-f4c5625aea1a',
		cols: 1,
	},
	'ORM + ActiveRecord' : {
		img: 'https://cdn-images-1.medium.com/max/800/1*43TU7StyO3uZP2UFBPkRFQ.gif',
		link: 'https://medium.com/@violetmoon/understanding-orm-frameworks-with-ruby-and-activerecord-83a9e9d8490e',
		cols: 1,
	},
	'RESTful Ruby' : {
		img: 'https://cdn-images-1.medium.com/max/800/1*VYSaS5cCKDkMWyWGSZ4z7Q.jpeg',
		link: 'https://medium.com/@violetmoon/activerecord-rest-and-sinatra-frankenstein-ing-the-internet-3004f656717f',
		cols: 2,
	},
}