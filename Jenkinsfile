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

        stage('install playwright'){
             
            steps{
                
                sh 'npm install playwright '
                
             }

        }
      
        stage('execution des tests'){
             
            steps{
                
                sh 'npx playwright test end_to_end '
                
             }

        }
    }

     post{
        always{
            sh 'echo "affichage du rapport"'
            junit "target/surefire-reports/**/*.xml"
        }
        
    }
   
}