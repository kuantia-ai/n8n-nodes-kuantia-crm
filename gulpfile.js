const path = require('path');
const { task, src, dest } = require('gulp');

task('build:icons', copyIcons);

function copyIcons() {
	const nodeSource = path.resolve('nodes', '**', '*.{png,svg}');
	const nodeDestination = path.resolve('dist', 'nodes');

	src(nodeSource).pipe(dest(nodeDestination));

	const credSource = path.resolve('credentials', '**', '*.{png,svg}');
	const credDestination = path.resolve('dist', 'credentials');

	return src(credSource).pipe(dest(credDestination));
}

// Create a task to fetch the OpenAPI document from the API and save it to the dist folder, swagger json is located at https://api.kuantia.co/api/swagger-json
function fetchOpenApiDocument() {
	const openApiDocument = path.resolve('dist', 'openapi.json');
	const openApiDocumentDestination = path.resolve('dist', 'openapi.json');

	src(openApiDocument).pipe(dest(openApiDocumentDestination));
}
