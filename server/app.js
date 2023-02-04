const axios = require("axios");
const cheerio = require("cheerio");

const url = 'https://tickets.theburntcity.com/timeslot/the-burnt-city-day-tickets'

const fetchTitles = async () => {
	try {
		const response = await axios.get(url);
                const html = response.data;
		const $ = cheerio.load(html);
		const titles = [];
		$('li').each((_idx, el) => {
			console.log('hi')
			const title = $(el).text()
			// I think the calendar takes time to load so.. pupeeteeer. we need to wait
			// titles.push(title)
		});
		return titles;
	} catch (error) {
		throw error;
	}};

fetchTitles().then((titles) => console.log(titles));