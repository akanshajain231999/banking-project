##banking-project
It is based on blockchain technology and using ethereum
On Ethereum, you can write code that controls digital value, runs exactly as programmed, and is accessible anywhere in the world.
It took me quite a long while, honestly, but I'm going to give a brief set of instructions on how to install Ethereum Wallet and the Blockchain.

These are two separate things. The Wallet allows you to interact with the database, that is the blockchain.

(1) For starters, go here:

https://www.ethereum.org/

And install the Wallet:

https://github.com/ethereum/mist/releases/download/v0.8.9/Ethereum-Wallet-win32-0-8-9.zip

Note : Look for updates

This is straight forward, but nonfunctional. Next, install the backbone, (2) Geth.

https://geth.ethereum.org/downloads/

(How you are supposed to know how and where to grab that ordinarily, I don't know).

Now Geth, or Go Ethereum, is a funny program. Do NOT open it. Do NOT run the program after install, simply install it, and let it be.

(3) Skip to step 4, or if you already opened Geth, do the following:

Navigate to : C:\Users\YOURNAME\AppData\Roaming\Ethereum

And delete Geth, but leave Keystore (this is the Wallet - make a copy of this if you even think you may accidentally delete it).

NOTE : This is how to transfer and safeguard your Ethereum Wallet.

(4) So rather than Open Geth via Icon, you must access it via command line to use it properly. On Windows 10, do the following:

windows + r -> type cmd -> enter -> type cd c:\pathtogeth\

OR type " CD C:\Program Files\Geth " - Enter

This is the command prompt area. If you type something funny, a list of commands pops up, or

" C:\Program Files\Geth>geth help ". If you type:

"geth --fast --cache=1024"

Then that will launch Geth in Fast Mode (Download and process after), and will utilize up to 1 Ram (default is 10% of 1 Ram - Alternatively you could say 2048 or something). Doing this will download like 2 million blocks an hour on fast comp with cable internet.

After a few hours, the bulk of the process should be complete, at which point you'll receive a block a minute.

More explanation regarding Step 3 and default settings:

If you run Geth 'as default'', then essentially it can never complete as it only allocates 10% of 1 Ram AND verifies each and every block on each download all the way through (so with Fast, you are only verifying the 'top half' of the block chain, while downloading it in total, BUT under the default setting you download and then reverify each block, then download another, then reverify each block, etc... ).

That's my understanding anyway.

Gaming comp takes 4 hours, minimum spec comp 4 days.

http://ethereum.stackexchange.com/questions/1161/what-is-geths-fast-sync-and-why-is-it-faster

https://www.reddit.com/r/ethereum/comments/5qmvz1/ok_im_an_idiot_how_do_i_specify_geth_cache_size/

https://etherchain.org/blocks

https://ethstats.net/

To begin mining, close Geth, return to the same command prompt and type:

"C:\Program Files\Geth>geth --mine" and you're set!

https://docs.google.com/presentation/d/1t9IhJx-FsYv6iCRTUL9tB1oPIX3QmYWtznWuN5-D4dU/edit#slide=id.g1383245197_0_4

https://blog.coinbase.com/a-beginners-guide-to-ethereum-46dd486ceecf#.hre1dtg8l

https://etherscan.io


