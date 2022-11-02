// create jenkins job to run node app
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Deploy') {
            steps {
                sh 'sudo pm2 restart main.js || sudo pm2 start main.js'
                sh 'sudo pm2 save'
            }
        }
    }
}