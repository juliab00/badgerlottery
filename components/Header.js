import { ConnectButton } from "web3uikit";

export default function Header() {
    return (
        <nav className="p-5 border-b-2 flex flex-row">
            <div className="container" style={{ display: 'flex' }}>
                <div className="image">
                    <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/badger_1f9a1.png" width="75" height="50" />
                </div>
                <h1 className="px-3 py-8 font-bold text-3xl">
                    Welcome to BadgerLottery...
                </h1>

                <div className="ml-auto py-2 px-4">
                    <ConnectButton moralisAuth={false} />
                </div>
            </div>
        </nav>
    )
}