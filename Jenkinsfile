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
        stage{
            steps{
                script{
                    sh '''
                    npm i
                    npm build
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