pipeline {
  agent any
  stages {
    stage("run frontend") {
      steps {
          echo "exectuting node app"
          nodejs('NodeJS') {
            sh 'npm install'
          }
       }
     }
   }
}
