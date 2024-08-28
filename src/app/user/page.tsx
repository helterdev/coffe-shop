const getdata = async () => {
	const response = await fetch('/api/user', {
		method: 'GET',
	})
	const data = await response.json()
	console.log(data)
}

export default function User() {
	getdata()
	return <div>User</div>
}
