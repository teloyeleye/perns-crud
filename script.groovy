// this file would be stored as script.groovy

def buildApp () {
	echo "building the application"
}

def testApp () {
	echo "testing the application with groovy"
}

def deployApp () {
	echo "deploying the application..."
    echo "deploying version ${params.VERSION}"
}

return this
