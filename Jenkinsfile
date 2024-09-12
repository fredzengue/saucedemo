pipeline{
    agent any 
    stages{
        stage('verifier npx'){
            steps{
                sh 'npx -v'
            }
        }

         stage('npm install npx'){
             
            steps{
                
                sh 'npm  install npx'
                
             }

        }

        stage('execution des tests'){
             
            steps{
                
                sh 'npm install playwright '
                
             }

        }
      
        stage('execution des tests'){
             
            steps{
                
                sh 'npx playwright test'
                
             }

        }
    }
   
}