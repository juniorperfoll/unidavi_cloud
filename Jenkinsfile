pipeline {
  agent {
        docker {
            image 'node:20.14.0' // Use a Node.js image
            args '-u root:root'
        }
    }
  environment {
        CI = 'true'
    }
  stages {
    stage("build") {
       steps {
          echo 'Realizando build da aplicação...'
          sh 'npm install'
          sh 'npm run build --prod'
          echo 'Build realizado com sucesso!'
       }
    }
    stage("test") {
       steps {
          echo 'Realizando testes da aplicação...'
          sh 'npm test' 
          sh 'ng serve'
          echo 'Testes realizados com sucesso!'
       }
    }
    stage("NG Teste") {
       steps {
          echo 'Realizando testes da aplicação...'
          sh 'npm test' 
          echo 'Testes realizados com sucesso!'
       }
    }
  }
}
