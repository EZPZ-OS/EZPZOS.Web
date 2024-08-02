pipeline{
    agent any
    stages{
        // stage('echo hello world'){
        //     steps{
        //         script{
        //             sh '''
        //                 echo hello world
                        
        //             '''
        //         }
        //     }
        // }
        stage("Build npm"){
            steps{
                script{
                    sh '''
                    npm i
                    npm run build
                    '''
                }
            }
        }
    }
    post{
        always{
            cleanWs()
            deleteDir()
        }
    }
}