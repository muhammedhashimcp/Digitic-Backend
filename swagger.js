const  port  = 6000

const swaggerAutogen = require('swagger-autogen')();

const doc = {
	info: {
		title: 'Digitic Api',
		description: 'API Endpoints for Digitic-Ecommerce',
	},
	host: `localhost:${port}`,
	schemes: ['http'],
};

const outputFile = './swagger_output.json';
// const endpointsFiles = ['./routes/admin.js', './routes/index.js', './routes/users.js']
const endpointsFiles = ['index.js'];

// swaggerAutogen(outputFile, endpointsFiles, doc);
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
	require('./index.js'); // Your project's root file
});