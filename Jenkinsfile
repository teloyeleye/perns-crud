pipeline {

  agent any
  parameters {
    choice(name: 'VERSION', choices: ['1.1.0', '1.2.0', '1.3.0'], description: 'The first version')
    booleanParam(name: 'executeTests', defaultValue: true, description: 'exectuting test')
  }
  stages {
    
    stage("init") {
      
      steps {
          script {
            gv = load "script.groovy"
          }
      }
    }

    stage("build") {
      
      steps {
          script {
            gv.buildApp()
          }
      }
    }
    
    stage("test") {
      when {
        expression {
          params.executeTests
        }
      }
      steps {
          script {
            gv.testApp()
          }
      }
    }
    
    stage("deploy") {
      
      steps {
          script {
            gv.deployApp()
          }
      }
    }
  }
}
