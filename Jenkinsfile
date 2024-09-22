pipeline {
    agent any
    environment {
        AWS_ACCOUNT_ID = '975049907995'
        AWS_REGION = 'ap-southeast-2'
        S3_BUCKET = 'ezpz-web-chris'
    }
   stages{
        stage('Git clone from EZPZOS'){
            steps{
                script{
                
                    // clone core repo
                    // sh ' git clone https://github.com/EZPZ-OS/EZPZOS.Core.git'
                    withCredentials([string(credentialsId: 'git_credential', variable: 'git_credential')]){
                        sh'''
                        git clone https://$git_credential@github.com/EZPZ-OS/EZPZOS.Core.git ../EZPZOS.Core
                        '''
                    }
                }
            }
        }
        stage('Run Core/'){
            steps{
                script{
                    withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'aws_credentials']]){
                        dir('../EZPZOS.Core'){
                            sh '''
                            pwd
                            rm .env
                            aws s3api get-object --bucket ezpzos-env-file --key core-env

                            npm i
                            npm run build
                            '''
                        }
                    }
                }
            }
        }
        stage('Build EZPZOS.Web'){
            steps{
                script{
                    withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'aws_credentials']]){
                    
                        dir('EZPZOS.Web'){
                            sh '''
                            rm .env
                            aws s3 cp https://ezpzos-env-file.s3.ap-southeast-2.amazonaws.com/ .env
                            npm i
                            npm run build
                            '''
                        }
                    }
                }
            }
        }
        stage('Upload EZPZOS.Web to S3 Bucket '){
            steps{
                script{
                    dir('EZPZOS.Web'){
                        sh '''
                        aws s3 sync dist/ s3://${S3_BUCKET}
                        '''
                    }
                }
            }
        }
   }
    post{
        always{
            cleanWs()
            deleteDir()
            script{
                sh '''
                rm -rf ../EZPZOS.Core
                '''
            }
         }
    }
}