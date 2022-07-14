const randomInt = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const strPad = str => {
	return '000'.slice(str.toString().length) + str
}


const firstFolder = '0'
const secondFolder = randomInt(0, 9)
let randomFile = strPad(randomInt(0, 999))
const filename = `00${secondFolder}${randomFile}`

const reqPhoto = () => {
	fetch(`https://ozgrozer.github.io/100k-faces/${firstFolder}/${secondFolder}/${filename}.jpg`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log(data);
		});
}
reqPhoto();

export const createUsers = (arr, count) => {
	for ( let i=1; i <= count; i++ ) {
		arr.push(`https://ozgrozer.github.io/100k-faces/${firstFolder}/${secondFolder}/${filename}.jpg`)
	}
}