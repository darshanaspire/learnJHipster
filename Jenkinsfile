pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('JAVA Version Testing') {
            steps {
                echo 'Testing..'
                sh 'java -version'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
        stage("build & SonarQube analysis") {
            agent any
            steps {
                echo 'Sonar Analysing....'
                    sh 'sonar-scanner'
            }
        }
    }
}