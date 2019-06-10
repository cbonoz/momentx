MomentX
---

Turn any sports moment in human history into a collectible coin for fans.

### Inspiration
Olympic season may be over - we cheered for Sean White when he got the gold medal, but we want a piece of action too.

### What it does
Athletes win medals, games, touchdowns, and fans can get crypto collectibles that are backed by those medals, games, touchdowns. MomentX enables users to create and trade collectible tokens that celebrate these events.

Beyond bitcoin_rpc, we use the elements framework to issue and manage new collectible assets.

### How we built it
We enable our users to create custom assets for events. Share them, and celebrate their collection on the MomentX platform.

*`server/`
<pre>
    pip install -r requirements.txt
</pre>

#### DEMO: 
For the demo 

* Follow the guide here, and make the following elements commands available to the server:
https://elementsproject.org/elements-code-tutorial/working-environment
<pre>
    alias e1-dae="$HOME/elements/src/elementsd -datadir=$HOME/elementsdir1"
    alias e1-cli="$HOME/elements/src/elements-cli -datadir=$HOME/elementsdir1"
    alias e2-dae="$HOME/elements/src/elementsd -datadir=$HOME/elementsdir2"
    alias e2-cli="$HOME/elements/src/elements-cli -datadir=$HOME/elementsdir2"
    alias e1-qt="$HOME/elements/src/qt/elements-qt -datadir=$HOME/elementsdir1"
    alias e2-qt="$HOME/elements/src/qt/elements-qt -datadir=$HOME/elementsdir2"
</pre>

For testing, requires running a local bitcoin node locally via `./bitcoind -regtest -daemon`, where the backend server should be running on the same instance. 

The server works by running commands via the blockstream elements CLI against the local bitcoin daemon - creating new tokens, querying balances, and allowing users to trade as desired.

#### Main Endpoints:
<ol>
    <li>Create collectible token (/create): Create a new collectible/asset using the liquid network</li>
    <li>Get balances (/balances): Get Assets balances for the posted RPC end user</li>
    <li>Trade collectible token (/trade): Trade a collectible asset between two addresses</li>
</ol>

### Challenges we ran into
* Learning and applying all the bitcoin RPC calls through the back end.
* Connecting a flask server instance to a bitcoin node.

### Accomplishments that we're proud of
We were able to build our first Liquid app.

### What we learned
BitcoinRPC
Runnning a local bitcoin node.

### What's next for MomentX
We are gonna go approach all the major league such as NBA, NFL, MLB, NHL and European soccer leagues to build out MomentX for everyone. We'd love for the opportunity to go out and win the Bitcoin Games by making collectibles shareable by everyone.


