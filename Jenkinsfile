pipeline {
  agent {
        docker {
            image 'node:20.14.0' // Use a Node.js image
            args '-p 4200:4200' // Map the app's port to host
        }
    }
  stages {
    stage("build") {
       steps {
          echo 'Realizando build da aplicação...'
          sh 'npm install'
          sh 'npm install -g @angular/cli'
          sh 'ng serve'
          echo 'Build realizado com sucesso!'
       }
    }
    stage("test") {
       steps {
          echo 'Realizando testes da aplicação...'
          sh 'npm test' 
          echo 'Testes realizados com sucesso!'
       }
    }
    stage("deploy") {
       steps {
          echo 'Realizando deploy da aplicação...'
           script {
                      docker.withRegistry('https://hub.docker.com/repositories/juniorbsn', 'juniorbsn') {
                          docker.image("unidavi_cloud:${env.BUILD_NUMBER}").push()
                      }
                  }
         }
         echo 'Deploy da aplicação concluída...'
    }
  }
}
