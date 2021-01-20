# Discord Rich Presence
A Custom Discord Rich Presence with your very own customizable buttons, images and text!

## Pre-Setup
Step 1: Make sure node and Visual Studio Code are installed on your computer. If not, [click here](https://nodejs.org/en/download/) to download node and [click here](https://code.visualstudio.com/download) to download Visual Studio Code.

Step 2: Once you're done, go to the [Discord Developer Portal](https://discord.com/developers/applications).
Click **New Application** in the top right of the screen. 

![New App](https://cdn.discordapp.com/attachments/668909298432213002/801422609728143380/unknown.png)

Give your Application a name. **Note: The Name of your Application is going to be the name of your RPC**

After you created a new Application, go to the left where it says **Rich Presence** and click **Art Assets**

![Art Assets](https://media.discordapp.net/attachments/668909298432213002/801423632907108362/unknown.png)

In this section, scroll down a bit and click **Add Image(s)** 

![Add Images](https://media.discordapp.net/attachments/668909298432213002/801424050365792296/unknown.png)

Select an Image and upload it

**Note: The Image you're going to upload is going to be the image that will be displayed in your RPC**

Remember how you called the Image because you'll need the name later.

## Doing the actual RPC
Now that you're done with the Pre-Setup, we're going to start with the actual RPC.

Donwload this repository as a zip, unzip it, then right click inside the folder and press **Open with Visual Studio Code**

After you opened it, open a new terminal in VSC (Visual Studio Code) at the top of the screen.

![Terminal](https://cdn.discordapp.com/attachments/668909298432213002/801428522211999759/unknown.png)

Now type into the terminal
```ssh
npm i
```

Next configure your RPC

In order to do that, open the **config.json**

Type in the things you need, in my case it looks like this:

![config](https://cdn.discordapp.com/attachments/668909298432213002/801429210564001822/unknown.png)

**Note: the "large_image" is where the name of the recently uploaded Image goes, also the "clientId" is where the id of your application goes. You can copy it here:**

![copy id](https://cdn.discordapp.com/attachments/668909298432213002/801430861315702794/test.PNG)

Now once you're done, close VSC and go back into the folder. In the folder, open the **startRPC.bat**

After that the RPC should be displaying in Discord and should look something like this:

![example](https://cdn.discordapp.com/attachments/668909298432213002/801433789305323550/unknown.png)

### I hope this helped you out and have a great day!
