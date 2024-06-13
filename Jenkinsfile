pipeline {
  agent any
  environment {
        CI = 'true'
        DOCKERHUB_CREDENTIALS = credentials('docker-hub') // Configurar no Jenkins as credenciais
        DOCKER_IMAGE = 'juniorbsn/unidavi_cloud:latest'
    }
  stages {
    stage("build") {
       steps {
          script {
            echo 'Realizando build da aplicação...'
            docker.build("${env.DOCKER_IMAGE}")
            echo 'Build realizado com sucesso!'
          }
       }
    }
    stage('Push') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', env.DOCKERHUB_CREDENTIALS) {
                        docker.image("${env.DOCKER_IMAGE}").push()
                    }
                }
            }
        }
    }
}
