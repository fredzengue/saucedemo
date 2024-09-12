pipeline{
    agent any 
    stages{
        stage('verifier npx'){
            steps{
                sh 'npx -v'
            }
        }
      
        stage('execution des tests'){
             
            steps{
                
                sh 'npx test end_to_end'
                
             }

        }
    }
   
}