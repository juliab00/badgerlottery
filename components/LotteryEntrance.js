import { useMoralis, useWeb3Contract } from "react-moralis"
import abi from "../constants/abi.json"
import { useEffect, useState } from "react"

const CONTRACT_ADDRESS = "0x9cc2CD71877AEAC239B06F58F8E19FDb08454ca3"

export default function LotteryEntrance() {
    const { isWeb3Enabled } = useMoralis()
    const [recentWinner, setRecentWinner] = useState("0")
    const [numPlayer, setNumPlayers] = useState("0")

    // Enter lottery button
    const { runContractFunction: enterRaffle } = useWeb3Contract({
        abi: abi,
        contractAddress: CONTRACT_ADDRESS,
        functionName: "enterRaffle",
        msgValue: "10000000000000000", // 0.01 ETH
        params: {},
    })

    const { runContractFunction: getRecentWinner } = useWeb3Contract({
        abi: abi,
        contractAddress: CONTRACT_ADDRESS,
        functionName: "s_recentWinner",
        params: {},

    })

    useEffect(() => {
        async function updateUi() {
            const recentWinnerFromCall = await getRecentWinner()
            setRecentWinner(recentWinnerFromCall)
        }
        if (isWeb3Enabled) {
            updateUi()
        }
    }, [isWeb3Enabled])
    return (
        <div>
            <button
                className="rounded ml-auto font-bold bg-blue-400 h-10 w-40"
                onClick={async () => {
                    await enterRaffle()
                }}>Enter Lottery~
            </button>
            <div>The Recent Winner is: {recentWinner} </div>
        </div>
    )
}