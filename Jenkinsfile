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
                
                sh 'npx playwright install'
                
             }

        }
      
        stage('execution des tests'){
             
            steps{
                
                sh 'npx playwright test'
                
             }

        }
    }
   
}