# Backups

We know that no one (organization) can guarantee that the EC2 will always be up and running. If EC2 fails to start or fails to connect, what would happen without backups? Is it worthwhile to try?

If there is a backup, it can be restored, which greatly reduce the loss.

For AWS, to create backup for EC2 is based on automatic snapshot for the volume of EC2.

There are two entries to create backups on AWS console:

## Snapshot Backup

### Automatic Backup

1. Log in AWS console.  

2. Open：EC2->ELASTIC BLOCK STORE->Lifecycle Manager to create Snapshot lifecycle policy.
    ![Snapshot lifecycle policy](http://libs-websoft9-com.oss-cn-qingdao.aliyuncs.com/Websoft9/DocsPicture/en/aws/aws-snapshotauto-websoft9.png)  

3. Follow the prompts to complete the settings.

### Manual Snapshot 

Steps for manual snapshot on demand are as follows:

1. Log in AWS console and open EC2 Dashboard.  

2. Open ELASTIC BLOCK STORE->Volumes and choose volume to create Snapshot.
   ![img](https://libs.websoft9.com/Websoft9/DocsPicture/en/aws/aws-createsnapshot-websoft9.png)  

3. Name the snapshot before creating.

## AWS Backup

AWS Backup is the specific backup service for AWS resources.

1. Log in AWS console, open Services->Resource Groups->AWS Backup->Backup plans.
   ![AWS Backup service](https://libs.websoft9.com/Websoft9/DocsPicture/en/aws/aws-backupservices-websoft9.png)
2. Choose to start from an existing plan and begin to create on-demand backup, that is, to choose the protected resources as you need.
   ![AWS Backup service](https://libs.websoft9.com/Websoft9/DocsPicture/en/aws/aws-backupres-websoft9.png) 

3. Choose EBS (disk) as the resource type and choose the volume ID.
   ![AWS Backup service](https://libs.websoft9.com/Websoft9/DocsPicture/en/aws/aws-backupres2-websoft9.png) 
   
4. Complete the settings.