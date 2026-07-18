pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'echo "pretending to compile/package here"'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'exit 1'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying (mock)...'
                sh 'echo "pretending to deploy here"'
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
