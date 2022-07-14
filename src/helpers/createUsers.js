export const createUsers = (arr, count) => {
	for ( let i=1; i <= count; i++ ) {
		arr.push(`https://picsum.photos/200/300?random=${i}`)
	}
}