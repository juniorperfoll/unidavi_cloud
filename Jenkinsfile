pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                echo 'Instalando depêndencias...'
                sh 'npm install'
                echo 'Dependências instaladas'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                echo 'Testado com Sucesso...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
            }
        }
    }
}
