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
    stage("test") {
       steps {
          echo 'Realizando testes da aplicação...'
       }
    }
    stage("deploy") {
       steps {
          echo 'Realizando deploy da aplicação...'
       }
    }
  }
}
