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
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
        stage("build & SonarQube analysis") {
            agent any
            steps {
                withSonarQubeEnv('My SonarQube Server') {
                    sh 'mvn clean package sonar:sonar'
            }
        }
    }
}