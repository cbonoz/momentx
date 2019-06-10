from flask import Flask, abort, request
from bitcoinrpc.authproxy import AuthServiceProxy, JSONRPCException
import os
import json

app = Flask(__name__)

rpc_port = 18884
rpc_user = 'user1'
rpc_password = 'password1'

ISSUANCES_CMD = 'e1-cli listissuances'

def run_script(cmd):
    # Runs and returns the output of running the local bash command 'cmd'
    return os.popen(cmd).read()

@app.route('/')
def index():
    return 'MomentX Server running!'

# Return the balances of the provided RPC user.
@app.route("/balances", methods=['POST'])
def balances():
    body = request.json
    if not body:
        abort(400)

    # defaults
    usr = rpc_user
    pw = rpc_password

    if body['user']:
        usr = body['user']
    if body['pass']:
        pw = body['pass']
    
    try:
        rpc_connection = AuthServiceProxy("http://%s:%s@127.0.0.1:%s"%(usr, pw, rpc_port))
        result = rpc_connection.getwalletinfo()
    except JSONRPCException as json_exception:
        return "A JSON RPC Exception occured: " + str(json_exception)
    except Exception as general_exception:
        return "An Exception occured: " + str(general_exception)

    return json.dumps({'data': result['balance']})


# Create a new token
@app.route("/create", methods=['POST'])
def create():
    body = request.json
    if not body:
        abort(400)

    token_name = body['token_name']
    if not token_name:
        abort(400, {'message': 'token_name must be provided in body'})

    # create 100 of a new asset
    create_cmd = 'e1-cli issueasset 100 1'
    issue_res = run_script(create_cmd)
    issue_data = json.loads(issue_res)
    assign_cmd = 'e1-dae -assetdir=%s:%s' % (issue_data['asset'], token_name)
    res = run_script(ISSUANCES_CMD)
    return json.dumps({'data': res})


# Create a new token
@app.route("/create_rpc", methods=['POST'])
def create_rpc():
    body = request.json

    name = body['asset_name']
    post = float(body['asset_value'])
    asset_issuer_address = body['asset_issuer_address']
    asset_shares = float(body['asset_shares']) 
    try:
        rpc_connection = AuthServiceProxy("http://%s:%s@127.0.0.1:%s/wallet/"%(rpc_user, rpc_password, rpc_port))
        rst = rpc_connection.listunspent(1, 9999, [], False, {'asset': name})
        
        if len(rst) != 0:
            txid = rst[0]['txid']
            details = rpc_connection.gettransaction(txid)
            sent_asset_shares = float(details['details'][0]['amount'])
            if sent_asset_shares == asset_shares:
                result = "Your token is listed for trade"
                for p in get_posts():
                    if name == p[1]:
                        result = "Cannot recreate an existing token"
                        break
                else:
                    create_post(name, post, asset_issuer_address, sent_asset_shares)

    except JSONRPCException as json_exception:
        return "A JSON RPC Exception occured: " + str(json_exception)
    except Exception as general_exception:
        return "An Exception occured: " + str(general_exception)

    return json.dumps({'result': result})

@app.route('/buy_rpc', methods=['POST'])
def buy():
    body = request.json
    buyer_asset_name = body['buyer_asset_name']
    buyer_shares = float(body['buyer_shares'])
    buyer_recieve_address = body['buyer_recieve_address']

    try:
        rpc_connection = AuthServiceProxy("http://%s:%s@127.0.0.1:%s/wallet/"%(rpc_user, rpc_password, rpc_port))

        receiver = rpc_connection.getnewaddress()

        for p in get_posts():
            if p[1] == buyer_asset_name:
                global amt
                amt = float(p[2]) * buyer_shares

    except JSONRPCException as json_exception:
        return "A JSON RPC Exception occured: " + str(json_exception)
    except Exception as general_exception:
        return "An Exception occured: " + str(general_exception)
    
    return json.dumps({'receiver': receiver, 'amount': amt})


# Get issuances
@app.route("/issuances", methods=['GET'])
def issuances():
    res = run_script(ISSUANCES_CMD)
    return json.dumps({'data': res})

if __name__ == "__main__":
    app.run(debug=true)

