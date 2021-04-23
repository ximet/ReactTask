pipeline {
  agent {
    node {
      label 'test'
    }

  }
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