pipeline {
  agent { docker 'node:lts-alpine3.13' }
  stages {
    stage('deps') {
      steps {
        sh 'npm install'
      }
    }

    stage('build') {
      steps {
        sh 'npm run build'
      }
    }

  }
}
