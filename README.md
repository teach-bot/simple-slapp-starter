Simple [Slapp](https://github.com/BeepBoopHQ/slapp) Starter
===

Getting started with Slapp (a Slack App framework) or slack apps in general can be difficult but hopefully these instructions will make it easier. 

## Setup

### Step 0 | Clone this repository & run npm install

Clone this repo to your computer and run these commands

```bash
git clone git@github.com:teach-bot/simple-slapp-starter.git
cd simple-slapp-starter
npm install

# Install other things we need 
brew cask install ngrok
```

Open a _new_ terminal window and run

```bash
ngrok http 3000
```

In the original terminal window run 

```bash
npm start
```

### Step 1 | Create a Slack App & Configure Permissions

Visit [https://api.slack.com/apps](https://api.slack.com/apps) and click "Create New App" 

![Step 1 A](docs/img/step-1-a.png)

Fill out the form as shown below 👇

![Step 1 B](docs/img/step-1-b.png)

Click "Bot Users"

![Step 1 C](docs/img/step-1-c.png)


Click "Add a Bot User"


![Step 1 D](docs/img/step-1-d.png)

Fill out the form as shown below 👇


![Step 1 E](docs/img/step-1-e.png)

Click Event Subscriptions and then the toggle

![Step 1 H](docs/img/step-1-h.png)

Follow these steps to add the ngrok url 👇

![Step 1 I](docs/img/step-1-i.png)

Scroll down and add the `message.im` bot permission. **Be sure to press "Save Changes" when you're done.

![Step 1 J](docs/img/step-1-j.png)

Click "Install App" on the left & then "Install App to Workspace" then click Authorize on the following screen 

![Step 1 F](docs/img/step-1-f.png)

Copy the values for the Installed App Settings page to your ".env" file

![Step 1 G](docs/img/step-1-g.png)

Copy the value of your verification token to you ".env" file.

![Step 1 K](docs/img/step-1-k.png)


### Step 2 | Test your setup in slack

Open the Slack Team that has your bot installed, go to the direct message and try typing `echo ` followed by anything you want. 

![Step 2 A](docs/img/step-2-a.png)

