pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'make' // ou qualquer comando de build
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'make test' // ou qualquer comando de teste
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                sh 'make deploy' // ou qualquer comando de deploy
            }
        }
    }
}
