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
                    // git url: 'https://github.com/EZPZ-OS/EZPZOS.Core.git', branch: 'Devops'
                    
                    dir('EZPZOS.Core'){
                        git url: 'https://github.com/EZPZ-OS/EZPZOS.Core.git', branch: 'Devops'
                    }
                }
            }
        }
        stage('Run Core/'){
            steps{
                script{
                    withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'aws_credentials']]){
                        dir('EZPZOS.Core'){
                            sh '''
                            rm .env
                            aws s3 cp https://ezpzos-env-file.s3.ap-southeast-2.amazonaws.com/core-env .env
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
                            aws s3 cp https://ezpzos-env-file.s3.ap-southeast-2.amazonaws.com/web-env .env
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
                        aws s3 cp dist/* http://ezpz-web-chris.s3-website-ap-southeast-2.amazonaws.com
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
         }
    }
}