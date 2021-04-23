pipeline {
  agent any
  stages {
    stage('deps') {
      steps {
        echo 'executing npm install'
        nodejs('Node-16.0') {
          sh 'npm install'
        }
      }
    }

    stage('build') {
      steps {
        echo 'executing building'
      }
    }

  }
}
