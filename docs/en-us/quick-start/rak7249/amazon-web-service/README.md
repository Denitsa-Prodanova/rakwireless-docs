---
next: aws-install-chirpstack
---

# Amazon Web Service

This section walks through the details on the steps on how to configure the free cloud services of **[Amazon](http://aws.amazon.com/)**. Follow each and every step discussed in this document to have a fully functional system. If you encounter errors, kindly contact us through the email provided in the Product Overview.

## Amazon Web Service Configurations 

### Creating an Account

1. For you to enjoy the free cloud services of Amazon, kindly make an account through their [Amazon Web Service](http://aws.amazon.com/) page.

    * Considerations:
        * Limited to 750 hours per month for a period of 12 months
        * A debit card must be linked to verify your identity in order to use the service.

### Configuring the Instance

1. After you have logged into your account, you need to select what instance you are going to be running.

:::tip 📝 NOTE
 For the purpose of this tutorial we are going to be using "**EC2**". Select it in the **AWS Management Console**.
:::

<rk-img
  src="/assets/images/quick-start-guide/rak7249/8.aws-ec2-chirpstack-rak7249/aws-console.jpg"
  width="100%"
  figure-number="1"
  caption="AWS Management Console"
/>

2. In the following screen you can see your running instances, key pairs, security groups, etc. Press the blue “**Launch instance**” button.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/8.aws-ec2-chirpstack-rak7249/launch-instance.jpg"
  width="100%"
  figure-number="2"
  caption="Launching an Instance"
/>

3. The is a ton of choices for the operating system, however we will be using **Ubuntu**. Scroll down and choose **Ubuntu Server 18.04 LTS** (latest at the time of this document). Click the “**Select**” button.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/8.aws-ec2-chirpstack-rak7249/selecting-os.jpg"
  width="100%"
  figure-number="3"
  caption="Selecting the Operating System"
/>

4. In the next window, you can configure your Instance. However, we will leave it as it is. Just select the _**t2.Micro**_ for the **instance type** as in figure shown below and click “**Review and Launch**”.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/8.aws-ec2-chirpstack-rak7249/select-instance-type.jpg"
  width="100%"
  figure-number="4"
  caption="Selecting the Instance Type"
/>

5. Confirm your choice and Launch. Security groups will be edited in the next section so you can go ahead and confirm your choice by pressing the “**Launch**” button as shown in the image below:

<rk-img
  src="/assets/images/quick-start-guide/rak7249/8.aws-ec2-chirpstack-rak7249/launch-instance-f.jpg"
  width="100%"
  figure-number="5"
  caption="Launching the Instance"
/>

### Accessing Instance via SSH

In order to have an SSH session to the Instance, we need to create the appropriate access keys. Thus, after Launching you will see the window in the image below:

<rk-img
  src="/assets/images/quick-start-guide/rak7249/8.aws-ec2-chirpstack-rak7249/key-pair.jpg"
  width="75%"
  figure-number="6"
  caption="Key pair creation"
/>

1. We will choose to "**Create a new key pair**" from the drop-down menu and give it an appropriate name. Finally, click the “**Download Key Pair**” button shown in the image below.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/8.aws-ec2-chirpstack-rak7249/new-key-pair.jpg"
  width="75%"
  figure-number="7"
  caption="Creating a new key pair"
/>

2. After saving the Keys to your chosen location, you can Launch the instance via the blue button "**Launch Instances**".

3. In the image below, you can see the parameters of your instance. Note the fields in the highlighted with the red rectangle. These are you real **URL** and **IP Address** for accessing this instance.

:::tip 📝 NOTE
 The URL and IP Address shown in the image below are just examples. You will have a different set of information on your setup.
:::

<rk-img
  src="/assets/images/quick-start-guide/rak7249/8.aws-ec2-chirpstack-rak7249/instance-param.jpg"
  width="100%"
  figure-number="8"
  caption="Instance Parameters"
/>

4. In order to have SSH access to the Instance we will use [**PuTTY**](https://www.putty.org/). Download and install it.

5. In the **AWS Instance** page, mark your instance and click “**Connect**”. This will bring the instructions page out. We will follow the procedure as well.

:::tip 📝 NOTE
 We first need to convert the keys from `.pem` format to `.ppk` format as this is what PuTTY is used for. This is done with PuTTYgen, which comes standard with the PuTTY package.
:::

6. Run **PuTTYgen** (if you are using Windows, just type it in the start menu after installing PuTTY and you will find it).

7. In the main window, select the **Type of key to generate** as **RSA** (should be the default choice). In older versions, it is named **SSH-2 RSA**.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/8.aws-ec2-chirpstack-rak7249/puttygen.jpg"
  width="75%"
  figure-number="9"
  caption="PuTTYgen main window"
/>

8. Press “**Load**” in order to select the key files generated by AWS (make sure to select **All Files (_._)** from the drop down menu as by default only **.ppk** files are shown

9. After successfully loading the keys, you can save them in **.ppk** with the “**Save private key**” button. Use the same name as the original **.pem** file. The **ppk** extension will be added automatically. PuTTYgen displays a warning about saving the keys without a passphrase. Ignore it an choose **Yes.**

:::tip 📝 NOTE
 A passphrase on a private key is an extra layer of protection. Even if your private key is discovered, it cannot be used without the passphrase. The downside to using a passphrase is that it makes automation harder because human intervention is needed to log on to an instance, or to copy files to an instance.
:::

<rk-img
  src="/assets/images/quick-start-guide/rak7249/8.aws-ec2-chirpstack-rak7249/puttygen-public-key.jpg"
  width="75%"
  figure-number="10"
  caption="PuTTYgen Saving the public key"
/>

10. As your Private Key is now in the correct format, now you can create an SSH session with PuTTY. Open the client and select SSH

<rk-img
  src="/assets/images/quick-start-guide/rak7249/8.aws-ec2-chirpstack-rak7249/putty-main.png"
  width="75%"
  figure-number="11"
  caption="PuTTY main window"
/>

11. You need the correct **Host Name**. Take note of the Host  Name syntax provided below together with an example for a better understanding:

```
user_name@public_dns_name
```

* **Example**: 
    * **user_name**: ubuntu
    * **public_dns_name**: ec2-3-120-237-38.eu-central-1.compute.amazonaws.com
    * **Host name**: [ubuntu@ec2-3-120-237-38.eu-central-1.compute.amazonaws.com](mailto:ubuntu@ec2-3-120-237-38.eu-central-1.compute.amazonaws.com)

<rk-img
  src="/assets/images/quick-start-guide/rak7249/8.aws-ec2-chirpstack-rak7249/putty-hostname.png"
  width="75%"
  figure-number="12"
  caption="PuTTY main window with Host Name"
/>

12. Now we need to tell PuTTY to use our keys. In the **Category panel** expand **Connections>SSH>Auth**. Click the “**Browse**” button and look for you **.ppk** file

:::tip 📝 NOTE
 If you want to save this configuration for future use go back to the **Session** tab and enter a name in the **Saved Session** text box and click **Save**.
:::

<rk-img
  src="/assets/images/quick-start-guide/rak7249/8.aws-ec2-chirpstack-rak7249/putty-ssh-auth.png"
  width="75%"
  figure-number="13"
  caption="PuTTY SSH Authentication"
/>

13. Click the “**Open**” button to initiate the session. If this is your first time connecting, PuTTY will ask for confirmation (click **Yes**). You should see the command line window to your instance now.

<rk-img
  src="/assets/images/quick-start-guide/rak7249/8.aws-ec2-chirpstack-rak7249/putty-ssh-command.jpg"
  width="75%"
  figure-number="14"
  caption="PuTTY SSH Command line"
/>

