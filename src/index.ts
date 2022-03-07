import Express from 'express'

const app = Express();

const PORT = 3000;

app.get('/', (req, res) =>{
	res.send('Hello David')
})

app.listen(PORT, () => {
	console.log("Listening")
})
