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
                sh 'pm2 start main.js'
                sh 'pm2 save'
            }
        }
    }
}